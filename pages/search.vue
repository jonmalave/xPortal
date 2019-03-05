<template>
  <!-- Content -->
  <div class="content" :class="scaleContent">
    <!-- Notice -->
    <article v-if="$store.search.results.length < 1" class="content__section-article content__section-article-notice">
      <p class="content__section-article-title">
        Try keywords such as "third person, shooter, rpg, coop" etc.
      </p>     
    </article>

    <!-- Search Results -->
    <section  v-if="$store.search.results.length > 0" class="content__section content__section--margin">
      <div class="content__section-grid">
        <card
          v-for="(card, index) in $store.search.results"
          :index="index"
          :header="{ text: 'Search Result(s)', icon: 'fas fa-search'}"
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
        Search Games
      </p>
      <p class="content__section-article-details">
        Find your favorite types of games.
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