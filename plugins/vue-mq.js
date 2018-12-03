import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
    breakpoints: {
        xsmobile: 0,
        mobile: 401, //NOTE(Rejon): I set it to 401 because I want Mobile header to show < 400px 
        tablet: 800, 
        laptop: 1300, 
        desktop: Infinity
      }
})