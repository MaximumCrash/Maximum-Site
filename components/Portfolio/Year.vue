<template>
    <div v-bind:id="year" class="year">
        <Heading v-bind:text="year" />
        <div class="projects-container">
            <Project v-bind:key="project.data.uuid" 
                    v-bind:project="project.data"
                    v-bind:slug="project.slugs[0]"
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
import Project from './Project.vue';

export default {
    components: {
        Heading,
        Project
    },
    props: {
        year: String,
        projects: Array
    },
}
</script>

<style>
    .year {
        font-family: 'IBMPlexSerif';
        margin-bottom: 2em;
    }

    .year .heading p {
        font-size: 2.32em;
    }

    .year:last-of-type {
        margin-bottom: 93vw;
    }

    .year .projects-container {
        margin-top: 1.64em; 
        text-align: center;
    }

    .year .info-section {
        font-size: 1.25rem;
        line-height: 1.5rem; 
        font-weight: 600;
    }

    .year .info-section a {
        font-size: 1.25rem;
        font-family: 'ScoreDozer';
            letter-spacing: 1px;
        color: #FBF7f0;
            white-space: nowrap;
    }

    .year .info-section a:not(.external):not(.site-name)::after,
    .year .info-section a.external::before  {
        border-bottom:  2px solid #FBF7f0;
        top: 110%; 
    }

    .year .info-section a:not(.external):not(.site-name)::after
    {
        top: 100%; 
    }

    .year .info-section a.external::after {
        content: '';
        background: url('/ExternalArrow-Light.svg');
        top: 7px; 
            transition: all .1s ease;
    }

    .year .info-section a.external:hover::after {
        top: 0px;
            transition: all .1s ease; 
    }
</style>
