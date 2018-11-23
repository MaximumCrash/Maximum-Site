<template>
    <div class="year-min">
        <Heading v-bind:text="year" />
        <div class="projects-container">
            <ProjectMin v-bind:key="project.data.uuid" 
                    v-bind:project="project.data"
                    v-for="project in projects"
                    v-if="year !== 'Info'" />

            <div class="info-section" v-html="projects[0].data.blurb" v-if="year === 'Info'">
                {{ projects[0].data.blurb }}
            </div>
        </div>
    </div>
</template>

<script>
import Heading from './Heading.vue';
import ProjectMin from './Project_minSize.vue';

export default {
    components: {
        Heading,
        ProjectMin
    },
    props: {
        year: String,
        projects: Array
    }
}
</script>

<style scoped>
    .heading > p {
        font-size: 3.32em;
    }
    .year-min {
        font-family: 'IBMPlexSerif';
        padding-bottom: 3em;
        margin-bottom: 0; 
    }

    .year-min:last-of-type {
        padding-bottom: 45vh;

    }

    .projects-container {
        text-align: center;
    }

    .info-section {
        font-size: 1.25rem;
        line-height: 1.5rem; 
        font-weight: 600;
        text-align: left;
    padding-left: 1vw;
    padding-right: 1vw;
    }

    .info-section a {
        font-size: 1.25rem;
        font-family: 'ScoreDozer';
            letter-spacing: 1px;
        color: #FBF7f0;
            white-space: nowrap;
    }

    .info-section a:not(.external):not(.site-name)::after,
    .info-section a.external::before  {
        border-bottom:  2px solid #FBF7f0;
        top: 110%; 
    }

    .info-section a:not(.external):not(.site-name)::after
    {
        top: 100%; 
    }

    .info-section a.external::after {
        content: '';
        background: url('~assets/misc/ExternalArrow-Light.svg');
        top: 7px; 
            transition: all .1s ease;
    }

    .info-section a.external:hover::after {
        top: 0px;
            transition: all .1s ease; 
    }
</style>
