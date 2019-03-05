<template>
  <!-- Content -->
  <div class="content" :class="scaleContent">
    <!-- Trending Games -->
    <section class="content__section content__section--margin">
      <div class="content__section-grid">
        <card
          v-for="(card, index) in $store.games.trending"
          :index="index"
          :header="{ text: 'Trending', icon: 'fas fa-fire'}"
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
        Trending Games
      </p>
      <p class="content__section-article-details">
        Discover today's most played games.
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
  }      
};
</script>