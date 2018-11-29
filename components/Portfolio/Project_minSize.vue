<template>
<nuxt-link :to="this.slug" class="abstract">
   <Tilt cls="project" :max="20" :reverse="true"> 
    <div class="project-min">
        <div class="project-content" v-bind:style="{backgroundImage: 'url('+project.headerimage.url+')'}">
                <div class="project-name-wrapper" v-if="project.title[0].text">
                  <div class="background-underlay"> </div>
                    <p class="project-name">
                        {{project.title[0].text}}
                    </p>
                </div>
        </div>
    </div>
   </Tilt>
</nuxt-link>
</template>

<script>

export default {

    props: {
        project: Object,
        slug: String
    }
}
</script>

<style scoped>
    .project-min {
        margin-bottom: 3.5em;
        cursor: pointer; 
        position: relative;
        transform-style: preserve-3d;
        transition: all .1s ease-in-out;
        color:#fcf7f0;
    }

    .project-content {
         width: calc(95vw - 30px);
    min-height: calc(53.44vw - 30px);
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
    margin:auto;
    }

    .project-name-wrapper {
      max-width: 100%;
    min-width: 100%;
    font-family: 'ScoreDozer';
    font-size: 1.25em;
    line-height: normal;
    letter-spacing: 1px;
    position: relative;
    bottom: calc(-57vw / 2);
    }

    .background-underlay {
        background: #2c2b37; 
        height: 100%;
        width: 100%; 
        position: absolute;
        left: 0; 
        top: 0; 
        opacity: 0; 
        transform: all .6s ease-in-out;
    }

    .project-name {
        position: relative;
        opacity: 1; 
        top: 0px; 
        transform: translateZ(32px);
        transform-style: preserve-3d;
        transition: all .2s ease-in-out; 
    }

    .project::after {
        content: '';
        background: #fcf7f0;
        display: block;
        width: 32vw;
        height: 17vw; 
        top: 0; 
        z-index: -1; 
        transform: scale(1);
        transform-origin: center;
        position: absolute;
        box-shadow: 0 0px 0px rgba(100, 101, 110, 0), 0 0px 0px 0 rgba(45, 50, 126, 0);
        transition: all .25s ease-in-out;
    }

    .project:hover::after {
        transform: scale(1.016);
           box-shadow: 0 15px 35px rgba(252, 247, 240, 0.064), 0 5px 15px 0 rgba(45, 50, 126, 0.07);
        transition: all .25s ease-in-out;
    }


</style>
