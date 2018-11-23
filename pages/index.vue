<template>
  <div id="app">
    <section class="app-container">
      <no-ssr>
      <vue-particles :particlesNumber="24"
                     color="#fbf7f0"
                     shapeType="polygon"
                     :particleOpacity="0.01"
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
      </no-ssr>
      <MobileHeader v-if="$mq === 'xsmobile' || $mq === 'mobile'"/>
      <Header v-else/> 

      <mq-layout class="portfolio-max-wrapper" mq="desktop">
        <PortfolioMax/>
      </mq-layout>

      <mq-layout class="portfolio-wrapper" mq="laptop">
        <Portfolio />
      </mq-layout>

      <mq-layout class="portfolio-min-wrapper" :mq="['tablet','mobile', 'xsmobile']">
        <PortfolioMin/>   
      </mq-layout>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import MobileHeader from '~/components/MobileHeader.vue';
import PortfolioMax from '~/components/Portfolio/Portfolio_maxSize.vue';
import Portfolio from '~/components/Portfolio/Portfolio.vue';
import PortfolioMin from '~/components/Portfolio/Portfolio_minSize.vue';


export default {
  components: {
    Header,
    MobileHeader,
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
  }
}
</script>

<style>
body {
  overflow: hidden;
}

#app  {
  width: 100%;
  background: #2c2b36;
}

.app-container {
  margin: auto;
  min-height: 100vh;
  position: relative;
  color: #FBF7f0;
  overflow: hidden;
}

#particles-js {
  position: absolute;
  height: 100%;
  width: 100vw;
}

a {
  font-size: 1.25rem;
  font-weight: normal;
  text-decoration: none;
  color: #2b2a36;
  position: relative;
}

a.external {
  margin-right: 16px;
}

.portfolio-min-wrapper,
.portfolio-max-wrapper,
.portfolio-wrapper {
  position: relative;
  z-index: 10;
}

a.external:hover::after {
 top: 5px; 
 right: -23px; 

 transition: all .1s ease; 
}

a:not(.external):not(.site-name)::after {
  content: '';
  width: 100%; 
  border-bottom: 2px solid #2b2a36;
  position: absolute;
  left:0;
  top: 125%;
  opacity: 0.64;
}

a.external::before {
  content: '';
  position: absolute;
  width: calc(100% + 3px);
  border-bottom: 2px solid #2b2a36;
  top: 125%;
  opacity: 0.64;
}

a.external::after {
  width: 20px;
    height: 20px;
    content: '';
    background: url('../assets/misc/ExternalArrow.svg');
    position: absolute;
    right: -19px;
    top: 10px;
    opacity: 0.64;
    transition: all .1s ease; 

}

h1::before {
  position: absolute;
  opacity: .16;
  top: 3px; 
}

.title {
  font-family: "StrongGamer", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

