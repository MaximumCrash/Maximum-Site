<template>
    <section class="app-container">

      <div class="portfolio-max-wrapper" v-if="$mq ==='desktop'">
        <PortfolioMax/>
      </div>

      <div class="portfolio-wrapper" v-if="$mq === 'laptop'">
        <Portfolio />
      </div>

      <div class="portfolio-min-wrapper" v-if="$mq === 'tablet' || $mq === 'mobile' || $mq === 'xsmobile'">
        <PortfolioMin/>   
      </div>
    </section>
</template>

<script>
import PortfolioMax from '~/components/Portfolio/Portfolio_maxSize.vue';
import Portfolio from '~/components/Portfolio/Portfolio.vue';
import PortfolioMin from '~/components/Portfolio/Portfolio_minSize.vue';


export default {
  components: {
    PortfolioMax,
    Portfolio,
    PortfolioMin
  },
  async asyncData({app, error}) {
    //Order based on year, starting from soonest to oldest.
    let document = await app.$prismic.api.query("", {orderings: '[my.project.year desc]'});
    
    if (document)  { //We got our document. 
      return { document }
    } else { //Data couldn't load, don't render the app.
      error({statusCode: 404, message: 'Trouble loading content. Please content @maximum_crash on Twitter.'})
    }
  },
  created() {
    if (this.document)
    { 
      if (this.document.results.length > 0) 
      {
        this.$store.commit('setProjects', this.document.results);
      }
    }
  },
  mounted() {
    this.$store.commit('unsetCurrentProject');
  }
}
</script>

<style>
.portfolio-min-wrapper,
.portfolio-max-wrapper,
.portfolio-wrapper {
  position: relative;
  z-index: 10;
}
</style>

