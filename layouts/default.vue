<template>
  <div id="app">
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
    <div class="timeline-wrapper">
      <Timeline v-show="$mq === 'laptop' || $mq === 'desktop'" v-bind:current-year="$store.state.currentYear"/> 
    </div>
    <MobileHeader v-if="$mq === 'xsmobile' || $mq === 'mobile'"/>
    <Header v-else/> 
    <nuxt/>
    
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import MobileHeader from '~/components/MobileHeader.vue';
import Timeline from '~/components/Timeline.vue';

export default {
  components: {
    Header,
    MobileHeader,
    Timeline
  }
}
</script>



<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #FBF7F0;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}


#app  {
  width: 100%;
  background: #2c2b36;
  min-height: 100vh;
}

.app-container {
  margin: auto;
  min-height: 100vh;
  position: relative;
  color: #FBF7f0;
  overflow: hidden;
}
.particles-wrapper {
  position: absolute;
  top:0; 
  width: 100%; 
  height: 100%; 
}

#particles-js {
  width: 100%; 
  height: 100%; 
}

a {
  text-decoration: none;
}

a:not(.abstract) {
  font-size: 1.25rem;
  font-weight: normal;
  text-decoration: none;
  color: #2b2a36;
  position: relative;
}

a.external {
  margin-right: 16px;
}

a.external:hover::after {
 bottom: -5px; 
 right: -23px; 

 transition: all .1s ease; 
}

a:not(.external):not(.abstract):not(.site-name):not(.nuxt-link-active)::after,
 {
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
    background: url('/ExternalArrow.svg');
    position: absolute;
    right: -19px;
    bottom: -10px;
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

.page-enter-active, .page-leave-active {
  transition: all .2s ease-in-out; 
}

.page-enter, .page-leave-active {
  opacity: 0;
  transform: translateY(16px);
}

.addressed {
        opacity: 1;
    }

    .to{
        opacity: 0.8;
    }

    .tag {
        border: 1px solid #fbf7efa6;
        padding: .32em .5em;
        font-family: 'ScoreDozer';
        letter-spacing: 1px; 
        margin-bottom: .64em;
        display: inline-block;
    }

    .timeline-wrapper {
      position: fixed;
      top: 100px;
      z-index: 10000;
      width: 100%;
      max-width: 1450px;
      left: 50%;
      transform: translateX(-50%);
    }
</style>

