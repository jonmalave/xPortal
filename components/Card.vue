<template>
  <!-- Card -->
  <div class="card-container">
    <nuxt-link :to="`/${id}`">
      <div class="card" :class="display">
        <!-- Header -->
        <div 
          v-show="index === 0"
          class="card__header">
          {{ header.text }} <i :class="header.icon"/>
        </div> 
        
        <!-- Thumbnail -->
        <img
          :src="thumbnail"
          class="card__thumbnail">

        <!-- Footer -->
        <div class="card__footer">
          {{ name.toUpperCase() }}
        </div>
      </div>
    </nuxt-link> 

    <!-- Favorite --> 
    <div class="card__favorite" @click="favor()">
      <i :class="isFavorite"></i>
    </div>      
  </div> 
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
      required: false
    },
    header: {
      type: Object,
      default() {
        return {
          text: '',
          icon: ''
        };
      },
      required: false
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    id: {
      type: String,
      default: '',
      required: true
    },
    thumbnail: {
      type: String,
      default: '',
      required: true
    },
    category: {
      type: String,
      default: '',
      required: true
    }    
  },
  data() {
    return {
      $store: this.$store
    };
  },  
  computed: {
    isFavorite() {
      const favoriteGame = this.$store.games.favorites.find(game => {
        return game.id === this.id;
      });
      
      return favoriteGame ? 'fas fa-star' : 'far fa-star';
    },
    display() {
      if (this.$store.menu.show)
        return  (this.index === 5 || this.index === 10 || this.index === 15) ? 'card--display-none' : '';
      else 
        return (this.index === 5 || this.index === 10 || this.index === 15) ? 'card--display' : '';
    }
  },
  methods: {
    favor() {
      const favoriteGame = this.$store.search.data.find(game => {
        return game.id === this.id;
      }); 
      const isFavorite = this.$store.games.favorites.find(game => {
        return game.id === this.id;
      });      

      if (!isFavorite) {
        this.$store.games.favorites.push(favoriteGame);
      } else {
        this.$store.games.favorites = this.$store.games.favorites.filter(game => {
          return game.id !== this.id;
        });        
      }

      this.$xStorage.update({ 
        key: 'xStorage', 
        value: { 
          user: this.$store.user,
          favorites: this.$store.games.favorites 
        }
      });  
    }
  }
};
</script>

<style>
/* Block Elements */
.card {
  display: flex;
  flex-direction: column;
  height: 113px;
  width: 162px;  
  margin: 0 4px 24px 4px;
  position: relative;
  border-radius: 4px;
  box-shadow: 2px 2px 8px #e0e0e0;
  cursor: pointer;
  z-index: 2;
}
.card-container {
  position: relative;
  z-index: 2;
}
.card__favorite {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  background: rgba(255,255,255,1);  
  border-radius: 0 4px 0 4px;
  position: absolute;
  top: 0;
  right: 4px;
  z-index: 3;
  cursor: pointer;
}
.card__header {
  color: #494b4b;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;  
  position: absolute;
  top: -32px;
}
.card__thumbnail {
  height: auto;
  width: 100%;
  border-radius: 4px 4px 0 0;
}
.card__footer {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #494b4b;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  height: 100%;
  width: 100%;
  background: #ffffff;
  border-radius: 0 0 4px 4px;
}

/* Modifiers */
.card:hover {
  box-shadow: 2px 2px 8px #494b4b;   
}
.card--display {
  display: flex;
}  
.card--display-none {
  display: flex;
}  

/* Media Queries */
@media only screen and (min-width: 512px) {
  .card {
    height: 104px;
    width: 148px;   
  } 
}
@media only screen and (min-width: 1024px) {
  .card {
    height: 104px;
    width: 148px;   
  } 
  .card--display,
  .card--display-none {
    display: none;
  }  
}
@media only screen and (min-width: 1104px) {
  .card {
    height: 138px;
    width: 198px;
  }
  .card--display,
  .card--display-none {
    display: none;
  }  
}
@media only screen and (min-width: 1280px) {
  .card--display {
    display: flex;
  }   
}
</style>
