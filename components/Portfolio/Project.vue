<template>
    <Tilt cls="project" :max="24" :reverse="true">
        <div class="project-content">
            <div class="image"> 
                <div class="project-name-wrapper" v-if="project.title[0].text">
                    <p class="project-name">
                        {{project.title[0].text}}
                    </p>
                </div>
            </div>
        </div>
    </Tilt>

</template>

<script>
import Tilt from '~/components/Tilt';

export default {
    components: {
        Tilt
    },
    props: {
        project: Object
    },
    created() {
        console.log("Project Component", this.project)
    }
}
</script>

<style>
    .project {
        margin-right: 1.5vw;
        margin-bottom: 1em;
        cursor: pointer; 
        display: inline-block;
        position: relative;
        
        transition: all .1s ease-in-out;
    }

    .project-content {
        width: 24vw;
    min-height: 14vw;
    background: #2c2b36;
    position: relative;
    border: 1px solid #fcf7f0;
    z-index: 0;
    }

    .project::after {
        content: '';
        background: #fcf7f0;
        display: block;
        width: 24vw;
        height: 14vw; 
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
