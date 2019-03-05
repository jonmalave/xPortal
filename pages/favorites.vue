<template>
  <!-- Content -->
  <div class="content" :class="scaleContent">
    <!-- Notice -->
    <article v-if="$store.games.favorites.length < 1" class="content__section-article content__section-article-notice">
      <p class="content__section-article-title">
        Click game's star to add to favorites.
      </p>     
    </article>

    <!-- Favorites -->
    <section v-if="$store.games.favorites.length > 0" class="content__section content__section--margin">
      <div class="content__section-grid">
        <card
          v-for="(card, index) in $store.games.favorites"
          :index="index"
          :header="{ text: 'Favorites', icon: 'fa fa-star-half-alt'}"
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
        Favorite Games
      </p>
      <p class="content__section-article-details">
        Create a collection of favorite games.
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
  },
  mounted() {
    // track route path
    this.$store.route.path = this.$route.path;   
  }
};
</script>