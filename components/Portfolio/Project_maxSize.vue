<template>
    <nuxt-link :to="'/' + this.slug" class="abstract">
    <Tilt cls="project-max" :max="20" :reverse="true">
        <div class="project-content" v-bind:style="{backgroundImage: 'url('+project.headerimage.url+')'}">
                <div class="project-name-wrapper" v-if="project.title[0].text">
                  <div class="background-underlay"> </div>
                    <p class="project-name">
                        {{project.title[0].text}}
                    </p>
                </div>
        </div>
    </Tilt>
    </nuxt-link>

</template>

<script>
import Tilt from '~/components/Tilt';

export default {
    components: {
        Tilt
    },
    props: {
        project: Object,
        slug: String
    }
}
</script>

<style scoped>
    a {
        display: inline-block;
        position: relative;
        visibility: top;
        color: #fcf7f0;
    }
    .project-max {
        margin-right: 1.5vw;
        margin-bottom: 1em;
        cursor: pointer; 
        display: inline-block;
        position: relative;
        transform-style: preserve-3d;
        vertical-align: top;
        transition: all .1s ease-in-out;
        color: #fcf7f0;
    }

    .project-content {
        width: 24vw;
    min-height: 13.50vw;
    background: #2c2b36;
    position: relative;
    border: 1px solid #fcf7f0;
    z-index: 0;
     background-position: center; 
     background-size: cover; 
     background-repeat: no-repeat;
     display: flex;
     justify-content: center;
     background-repeat: no-repeat;
     align-items: center;
    }

    .project-name-wrapper {
        max-width: 80%; 
        font-family: 'ScoreDozer';
        font-size: 1.5em;
        line-height: normal;
        letter-spacing: 1px; 
    }

    .background-underlay {
        background: #2c2b37; 
        height: 100%;
        width: 100%; 
        position: absolute;
        left: 0; 
        top: 0; 
        opacity: 0; 
        transition: all .2s ease-in-out;
    }

    .project-max:hover .background-underlay { 
        opacity: 0.40;
        transition: all .2s ease-in-out;
    }

    .project-max:hover .project-name {
        opacity: 1; 
        top: 0px; 
        transition: all .2s ease-in-out;
    }

    .project-name {
        position: relative;
        opacity: 0; 
        top: 5px; 
        transform: translateZ(32px);
        transform-style: preserve-3d;
        transition: all .2s ease-in-out; 
    }

    .project-max::after {
        content: '';
        background: #fcf7f0;
        display: block;
        width: 24vw;
    min-height: 13.50vw;
        top: 0; 
        z-index: -1; 
        transform: scale(1);
        transform-origin: center;
        position: absolute;
        box-shadow: 0 0px 0px rgba(100, 101, 110, 0), 0 0px 0px 0 rgba(45, 50, 126, 0);
        transition: all .25s ease-in-out;
    }

    .project-max:hover::after {
        transform: scale(1.016);
           box-shadow: 0 15px 35px rgba(252, 247, 240, 0.064), 0 5px 15px 0 rgba(45, 50, 126, 0.07);
        transition: all .25s ease-in-out;
    }


</style>
