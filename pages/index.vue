<template>
    <section class="app-container">
            <no-ssr>
      <div class="particles-wrapper">
        <vue-particles :particlesNumber="24"
                      color="#fbf7f0"
                      shapeType="polygon"
                      :particleOpacity="0.02"
                      :particleSize="64"
                      linesColor="#fbf7f0"
                      :lineLinked="true"
                      :linesDistance="150"
                      :lineOpacity="0.2"
                      :moveSpeed="0.64"
                      :hoverEffect="true"
                      :clickEffect="false"
                      hoverMode="grab"
        >
        </vue-particles>
      </div>
      </no-ssr>
      <media :query="{minWidth: 1300}">
        <PortfolioMax/>
      </media>

      <media :query="{minWidth: 800, maxWidth: 1300}">
        <Portfolio />
      </media>

      <media :query="{maxWidth: 800}">
        <PortfolioMin/>   
      </media>
    </section>
</template>

<script>
import PortfolioMax from '~/components/Portfolio/Portfolio_maxSize.vue';
import Portfolio from '~/components/Portfolio/Portfolio.vue';
import PortfolioMin from '~/components/Portfolio/Portfolio_minSize.vue';
import Media from 'vue-media';

export default {
  components: {
    PortfolioMax,
    Portfolio,
    PortfolioMin,
    Media
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

