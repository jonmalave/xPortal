<template>
  <!-- Content -->
  <div class="content content__game-content">
    <section class="content__game-section">
      <!-- Game -->
      <iframe :src="game.url" class="content__game"/>

      <!-- Loader -->
      <div v-if="loading" class="content__game-loader">
        <i class="content__game-loader-icon fa fa-spinner"></i> LOADING...
      </div>

      <!-- Notice -->
      <article class="content__game-notice">
        Game requires 1024x768 screen resolution or higher to play!
      </article>

      <!-- About -->
      <article class="content__game-about">
        <hr>
        <p class="content__game-about-title">
          About {{ game.name }}
        </p>
        <p class="content__game-about-details">
          {{ game.description }}
        </p>
      </article>
    </section>

    <!-- Aside -->
    <aside class="content__game-aside">
      <card
        v-for="(card, index) in $store.games.more"
        :index="index"
        :header="{ text: 'More Games', icon: 'fa fa-chevron-circle-down'}"
        :key="index"
        :name="card.name"
        :id="card.id"           
        :thumbnail="card.thumbnail"
        :category="card.category"/>
    </aside>
  </div>
</template>

<script>
import Card from '~/components/Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      $store: this.$store,
      loading: true,
      game: {}
    };
  },
  computed: {
  },
  methods: {
    loadGame() {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    shuffleGames(games) {
      games.sort(() => { 
        return 0.5 - Math.random() 
      });

      return games;
    }    
  },
  mounted() {
    const gameId = window.location.pathname.split('/');
    const gameData = this.$store.search.data.find(game => {
      return game.id === gameId[1];
    });

    this.$store.menu.show = false;
    this.game = gameData;   
    this.loadGame();
    this.$set(this.$store.games, 'more', this.shuffleGames(this.$store.games.more));    

    // track route path
    this.$store.route.path = '/game';    
  }
};
</script>

<style>
/* Block Elements */
.content__game-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
}
.content__game-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.content__game {
  display: none;
  height: 600px;
  width: 1024px;  
  border: 0;
  overflow: hidden;  
}
.content__game-loader {
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 8px;
  color: white;
  background-color: #494b4b;
  height: 600px;
  width: 1024px;
  position: absolute;
  top: 72px;  
  border: 0;
  overflow: hidden;
}
.content__game-loader-icon {
  letter-spacing: 0; 
  margin:0 16px;
  animation:spin 2s linear infinite;
}
@keyframes spin { 
  100% { 
    transform:rotate(360deg); 
  }
}
.content__game-about {
  font-size: 14px;
  width: 100%;
  padding: 0 16px;
}
.content__game-about-title {
  font-size: 22px;
  font-weight: bold;
  padding: 8px 0;  
}
.content__game-about-details {
  font-weight: normal;
}
.content__game-notice {
  font-size: 22px;
  font-weight: bold;
  width: 100%;
  padding: 0 16px;
}
.content__game-aside {
  display: none;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 692px;
  width: auto;
  padding-top: 14px;
  box-sizing: border-box;
  overflow: hidden;
}

/* Media Queries */
@media only screen and (min-width: 1104px) {
  .content__game-content {
    width: 1256px !important; 
  }
  .content__game {
    display: initial;
  } 
  .content__game-loader {
    display: flex;    
  }  
  .content__game-about {
    font-size: 13px;
    width: 1024px;
    padding: 0;   
  }  
  .content__game-notice {
    display: none;
  }
  .content__game-aside {
    display: flex;
  }        
}
</style>
