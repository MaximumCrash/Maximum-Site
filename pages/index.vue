<template>
  <section class="app">
      <MobileHeader v-if="isMobile"/>      
  </section>
</template>

<script>
import Header from '~/components/Header.vue';
import MobileHeader from '~/components/MobileHeader.vue';

export default {
  components: {
    Header,
    MobileHeader
  }
}
</script>

<style>
.app {
  min-height: 100vh;
  position: relative;
  color: #2b2a36;
  background: #FBF7F0;
}

a {
  font-size: 1.25rem;
  text-decoration: none;
  color: #2b2a36;
  position: relative;
}

a:not(.external):not(.site-name)::after {
  content: '';
  width: 100%; 
  border-bottom: 1px solid #2b2a36;
  position: absolute;
  left:0;
  top: 125%;
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

