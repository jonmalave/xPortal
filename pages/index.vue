<template>
  <!-- Content -->
  <div class="content" :class="scaleContent">
    <!-- Recommended -->
    <section class="content__section content__section--margin">
      <div class="content__section-grid">
        <card
          v-for="(card, index) in $store.games.recommended"
          :index="index"
          :header="{ text: 'Recommended', icon: 'far fa-thumbs-up'}"
          :key="index"
          :name="card.name"
          :id="card.id"           
          :thumbnail="card.thumbnail"
          :category="card.category"/>
      </div>
    </section>  

    <!-- New Releases -->
    <section class="content__section content__section--margin">
      <div class="content__section-grid">
        <card
          v-for="(card, index) in $store.games.new"
          :index="index"
          :header="{ text: 'New Releases', icon: 'fas fa-bolt'}"
          :key="index"
          :name="card.name"
          :id="card.id"            
          :thumbnail="card.thumbnail"
          :category="card.category"/>
      </div>
    </section> 

    <!-- Popular Games -->
    <section class="content__section content__section--margin">
      <div class="content__section-grid">
        <card
          v-for="(card, index) in $store.games.popular"
          :index="index"
          :header="{ text: 'Popular Games', icon: 'fas fa-fire'}"
          :key="index"
          :name="card.name"
          :id="card.id"            
          :thumbnail="card.thumbnail"
          :category="card.category"/>
      </div>
    </section> 

    <!-- About -->
    <article class="content__section-article">
      <hr>
      <p class="content__section-article-title">
        Discover & Play
      </p>
      <p class="content__section-article-details">
        {{ $store.site.description }}
      </p>
    </article>
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
      $store: this.$store
    };
  },
  computed: {
    scaleContent() {
      return this.$store.menu.show ? 'content--offset' : '';
    }
  },
  methods: {
    shuffleGames(games) {
      games.sort(() => { 
        return 0.5 - Math.random() 
      });

      return games;
    }     
  },
  mounted() {
    this.$set(this.$store.games, 'recommended', this.shuffleGames(this.$store.games.recommended));
    this.$set(this.$store.games, 'popular', this.shuffleGames(this.$store.games.popular));

    // track route path
    this.$store.route.path = this.$route.path;   
  }  
};
</script>