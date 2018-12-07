<template>
  <div id="app">
    <no-ssr>
    <gallery :images="$store.state.galleryImages" :index="$store.state.galleryIndex" @close="closeGallery" :options="{closeOnEscape: true, disableScroll: true, closeOnSlideClick: true}"></gallery>
    </no-ssr>
    
    <div class="timeline-wrapper">
      <media :query="{minWidth: 800}">
      <Timeline v-bind:current-year="$store.state.currentYear"/> 
      </media>
    </div>

    <media :query="{maxWidth: 401}">
      <MobileHeader/>
    </media>

    <media :query="{minWidth: 401}">
      <Header />
    </media>

    <nuxt/>
    
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import MobileHeader from '~/components/MobileHeader.vue';
import Timeline from '~/components/Timeline.vue';
import Media from 'vue-media';
import 'vue-glide-js/dist/vue-glide.css';

export default {
  components: {
    Header,
    MobileHeader,
    Timeline,
    Media
  },
  methods: {
    closeGallery: function() {
      this.$store.commit('closeGallery');
    }
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
  overflow: none; 
}

#particles-js {
  width: 100%; 
  height: 100%; 
  overflow: hidden;
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

a.external.light {
  color: #FBF7f0;
}

a.external.light::after {
  background: url('/ExternalArrow-Light.svg');
}

a.external.light::before {
  border-bottom: 2px solid #FBF7f0;
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
        letter-spacing: 2px; 
        margin-bottom: .64em;
        margin-right: 10px;
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

    .header .header-subtext a.external{
        font-weight: 600;
        font-size: 18px;
    }

    .header .header-subtext a.external::before {
        top: 100%; 
    }

    .header .header-subtext a.external::after {
        bottom: -6px;
    }

    .header .header-subtext a.external:hover::after {
        bottom: -1px;
    }

    .nuxt-progress {
      height: 5px; 
      background: linear-gradient(to right,#b827fc 0,#2c90fc 25%,#b8fd33 50%,#fec837 75%,#fd1892 100%);
      -webkit-animation: Gradient 5s ease infinite;
    -moz-animation: Gradient 5s ease infinite;
    animation: Gradient 5s ease infinite;
    }

    @-webkit-keyframes Gradient {
	0%{background-position:10% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
}

@-moz-keyframes Gradient {
	0%{background-position:10% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
}

@keyframes Gradient {
	0%{background-position:10% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
}

    
</style>

