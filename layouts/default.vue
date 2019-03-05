<template>
  <!-- Main -->
  <main>
    <!-- Navbar -->
    <navbar
      :title="$store.site.title"
      :logo="$store.site.logo"
      :toggleMenuOn="true"
      :searchEnabled="true"
      :socialEnabled="true" 
      @action="action"/>

    <!-- Menu -->
    <navmenu 
      v-if="$store.menu.show"
      :title="$store.site.title"
      :logo="$store.site.logo"
      :toggleMenuOn="true"      
      @action="action"/>

    <!-- Overlay -->
    <overlay/>

    <!-- Content -->
    <nuxt/>

    <!-- Footer -->
    <footer :class="[display, offset]">
      Handcrafted with <i class="footer-icon fa fa-heart"></i> in Miami. By <a class="footer-link" href="http://jonmalave.com" target="_blank">Jon Malave</a>
    </footer>   
  </main>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Navmenu from '~/components/Navmenu.vue';
import Overlay from '~/components/Overlay.vue';

export default {
  components: {
    Navbar,
    Navmenu,
    Overlay
  },
  data() {
    return {
      $store: this.$store
    };
  },
  computed: {
    display() {
      return (this.$store.route.path === '/chat' || this.$store.route.path === '/chat/') ? 'footer--display' : '';
    },       
    offset() {
      return (this.$store.route.path !== '/game' && this.$store.menu.show) ? 'footer--offset' : '';
    } 
  },
  methods: {
    search(payload) {
      if (!payload.clear) {
        this.$set(this.$store.search, 'results', this.$store.search.data.filter((game) => {
          const gameCategory = game.category.toLowerCase();
          const gameName = game.name.toLowerCase();

          return gameCategory.includes(payload.keyword.toLowerCase()) || gameName.includes(payload.keyword.toLowerCase());
        }));
      } else {
        this.$set(this.$store.search, 'results', [])
      }
    },
    action(payload) {
      switch(payload.type) {
        case 'route':
          this.search({ keyword: '', clear: true });
          $nuxt._router.push(payload.value);
          break;
        case 'search':
          this.search({ keyword: payload.value, clear: payload.clear });
          $nuxt._router.push('/search');  
          break;
        case 'login':
          this.$fireAuth.signInWithRedirect(this.$googleAuth);         
          break;
        case 'logout':
          this.$fireAuth.signOut().then(() => {
            this.$store.user = {};
            this.$store.games.favorites = [];
            this.$xStorage.delete();
            console.log('Sign-out successful.');
          }).catch(error => {
            console.log(error);
          });
          break;          
        default:
      }
    }
  },
  mounted() {
    // init xStorage
    const session = this.$xStorage.init('xStorage');
    if (session !== null) {
      if (session.user !== undefined) {
        this.$store.user = session.user;
        this.$store.games.favorites = session.favorites;
      }     
      console.log('xStorage initialized');
    }

    // get auth results
    this.$fireAuth.getRedirectResult().then(result => {
      if (result.credential) {
        this.$store.user = result.user;
        this.$xStorage.update({ 
          key: 'xStorage', 
          value: { 
            user: this.$store.user,
            favorites: this.$store.games.favorites 
          }
        });            
        console.log('Sign-in successful.');   
      }
    }).catch(error => {
      console.log(error);
    });

    // listen for chat updates
    this.$fireStore.collection('chat').orderBy('date')
    .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          this.$store.chat.messages.push(change.doc.data());
        }
        if (change.type === 'modified') {
        }
        if (change.type === 'removed') {
          this.$store.chat.messages = [];
        }
      });
    });      

    // track route path
    this.$store.route.path = this.$route.path;   
  },
  watch: {
    $route(newVal, oldVal) {
      if (newVal && window.innerWidth < 1280) {
        this.$store.menu.show = false;
      }
    }
  }
};
</script>

<style>
/* Block Elements */
* {
  text-decoration: none;
  box-sizing: border-box;
  margin: 0;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #494b4b;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;  
  user-select: none;
}
hr {
  border-width: 0.5px;
  border-color: #e0e0e0;
  margin: 16px 0 8px 0;      
}
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 72px 8px 8px 8px;
}
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  height: 56px;
  width: 100%;
  margin-top: 16px;
  z-index: 3;
}
.footer-icon {
  margin: 0 4px;
}
.footer-link {
  margin: 0 4px;
  color: #494b4b;
  text-decoration: underline;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
}
.content__section {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.content__section-grid {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.content__section-article {
  font-size: 14px;
  width: 100%;
  padding: 0 16px;
}
.content__section-article-title {
  font-size: 22px;
  font-weight: bold;
  padding: 8px 0;  
}
.content__section-article-details {
  font-weight: normal;
}
.content__section-article-notice {
  display: initial;
}

/* Modifiers */
.content__section--margin {
  margin-top: 32px;
}
.footer--display {
  display: none;
}

/* Media Queries */
@media only screen and (min-width: 512px) {  
  .footer--offset {
    margin-left: 240px;
  }  
  .content {
    width: 492px;
  }
  .content--offset {
    margin-left: 256px;    
  }  
}
@media only screen and (min-width: 1024px) {
  .content {
    width: 800px;
  }
}
@media only screen and (min-width: 1104px) {
  .content {
    width: 1056px;
  }
}
@media only screen and (min-width: 1280px) {
  .content {
    width: 1256px;
  }
  .content--offset {
    width: 1056px !important;
    margin-left: 256px;
  }        
}
</style>
