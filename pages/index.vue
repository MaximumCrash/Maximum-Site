<template>
    <section class="app-container">

      <mq-layout class="portfolio-max-wrapper" mq="desktop">
        <PortfolioMax/>
      </mq-layout>

      <mq-layout class="portfolio-wrapper" mq="laptop">
        <Portfolio />
      </mq-layout>

      <mq-layout class="portfolio-min-wrapper" :mq="['tablet', 'mobile', 'xsmobile']">
        <PortfolioMin/>   
      </mq-layout>
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

