<template>
    <div v-bind:id="year" class="year-max">
        <Heading v-bind:text="year" />
        <div class="projects-container">
            <ProjectMax v-bind:key="project.data.uuid" 
                    v-bind:project="project.data"
                    v-bind:uid="project.uid"
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
import ProjectMax from './Project_maxSize.vue';

export default {
    components: {
        Heading,
        ProjectMax
    },
    props: {
        year: String,
        projects: Array
    }
}
</script>

<style>
    .year-max {
        font-family: 'IBMPlexSerif';
        margin-bottom: 2em;
    }

    .year-max .heading p {
        font-size: 2.32em;
    }

    .year-max:last-of-type {
        margin-bottom: 60vh;
    }

    .year-max .projects-container {
        margin-top: 1.64em; 
        text-align: center;
    }

    .year-max .info-section {
        font-size: 1.25rem;
        line-height: 1.5rem; 
        font-weight: 600;
    }

    .year-max .info-section a {
        font-size: 1.25rem;
        font-family: 'ScoreDozer';
            letter-spacing: 1px;
        color: #FBF7f0;
    }

    .year-max .info-section a:not(.external):not(.site-name)::after,
    .year-max .info-section a.external::before  {
        border-bottom:  2px solid #FBF7f0;
        top: 110%; 
    }

    .year-max .info-section a:not(.external):not(.site-name)::after
    {
        top: 100%; 
    }

    .year-max .info-section a.external::after {
        content: '';
        background: url('/ExternalArrow-Light.svg');
        top: 7px; 
            transition: all .1s ease;
    }

    .year-max .info-section a.external:hover::after {
        top: 0px;
            transition: all .1s ease; 
    }
</style>
