<template>
  <div class="app">
    <section class="app-container">
          <MobileHeader v-if="$mq === 'mobile' || $mq === 'tablet'"/>
          <Header v-else/>     
          <Timeline /> 
    </section>
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
.app  {
  width: 100%;
}

.app-container {
  max-width: 1164px;
  margin: auto;
  min-height: 100vh;
  position: relative;
  color: #2b2a36;
}

a {
  font-size: 1.25rem;
  text-decoration: none;
  color: #2b2a36;
  position: relative;
}

a.external {
  margin-right: 16px;
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

