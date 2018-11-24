<template>
    <div v-bind:id="year" class="year-max">
        <Heading v-bind:text="year" />
        <div class="projects-container">
            <ProjectMax v-bind:key="project.data.uuid" 
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

<style scoped>
    .year-max {
        font-family: 'IBMPlexSerif';
        margin-bottom: 2em;
    }

    .year-max:last-of-type {
        margin-bottom: 35vh;
    }

    .projects-container {
        margin-top: 1.64em; 
        text-align: center;
    }

    .info-section {
        font-size: 1.25rem;
        line-height: 1.5rem; 
        font-weight: 600;
    }

    .info-section a {
        font-size: 1.25rem;
        font-family: 'ScoreDozer';
            letter-spacing: 1px;
        color: #FBF7f0;
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
