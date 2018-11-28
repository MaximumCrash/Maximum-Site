<template>
    <div class="project-wrapper" v-if="$store.state.currentProject !== null">
        <div class="project-view">
            <div class="header"> 
                <h1 class="header-title inset">{{$store.state.currentProject.data.title[0].text}}</h1>
                <p class="header-subtext inset">{{$store.state.currentProject.data.releaseDate}} {{$store.state.currentProject.data.developedby}}</p>
                <div class="header-card" v-bind:style="{backgroundImage: 'url('+$store.state.currentProject.data.headerimage.url+')'}">
                    <div class="youtube-container" v-if="$store.state.currentProject.data.videoid[0] !== undefined && $store.state.currentProject.data.videoid[0] !== null">
                        <youtube player-width="100%" player-height="100%" :video-id="$store.state.currentProject.data.videoid[0] ? $store.state.currentProject.data.videoid[0].text : ''"> </youtube>
                    </div>
                </div>
            </div>

            <div class="blurb inset" v-if="$store.state.currentProject.data.blurb !== ''"> 
                {{$store.state.currentProject.data.blurb}}
            </div>

            <div class="available-at" v-if="$store.state.currentProject.data.availablelinks.length > 0">
                <h2 class="sub-title">Available to experience on</h2>
                <ul>
                    <li v-for="link in $store.state.currentProject.data.availablelinks" v-bind:key="link.alt" >
                        <a v-bind:href="link.linkurl.url" v-bind:target="link.linkurl.target">
                            <Tilt :max="32" :reverse="true">
                            <div :class="getLinkClass(link)" v-bind:style="{backgroundImage: 'url('+link.linkbg.url+')', backgroundColor: link.linkbg.url === undefined || link.linkbg.url === null ? link.linkbgcolor : '', border: '1px solid' + link.linkbordercolor}">
                                <img v-bind:src="link.linkbgicon ? link.linkbgicon.url : ''"/>
                                <div class="link-content">  
                                    {{link.linktext[0] !== undefined && link.linktext[0] !== null ? link.linktext[0].text : ''}}
                                </div>
                            </div>
                            </Tilt>
                        </a>
                    </li>
                </ul>  
            </div>

            <div class="links-section" v-if="$store.state.currentProject.data.outerlinks.length > 0">
                <h2 class="title">Related Links</h2>
                <ul> 
                   <li v-for="link in $store.state.currentProject.data.outerlinks" v-bind:key="link.url"> 
                    <span>{{link.linkname}}:</span> <a class="external" :target="link.link.target" :href="link.link.url">{{link.link.url}}</a>
                    </li> 
                </ul>
            </div>
        </div>
        <Footer class="inset"/>
    </div>
</template>

<script>
import Tilt from '~/components/Tilt';
import Footer from '~/components/Footer.vue';

export default {
    components: {
        Tilt,
        Footer
    },
    async asyncData({app, params}) {
        //NOTE(Rejon): Need to check if project exists on both server and client side.
        //AsyncData and Created do just about the same thing. 
        if (Object.keys(app.store.state.projectsBYUID).length <= 0) {
            //Order based on year, starting from soonest to oldest.
            let document = await app.$prismic.api.query("", {orderings: '[my.project.year desc]'});
            
            if (document)  { //We got our document. 
                app.store.commit('setProjects', document.results, params.project);
            } else { //Data couldn't load, don't render the app.
            error({statusCode: 404, message: 'Trouble loading content. Please content @maximum_crash on Twitter.'})
            }
        }
        else {
            if (app.store.state.currentProject === null || app.store.state.currentProject === undefined)
            {
                if (app.store.state.projectsBYUID[params.project] === undefined || app.store.state.projectsBYUID[params.project] === null) {
                    app.router.push('/');
                }
                else {
                    app.store.commit('setCurrentProject', params.project);
                }
            }
        }

    },
    created() {
        //NOTE(Rejon): Need to check if project exists on both server and client side.
        let projects = {};

        if (Object.keys(this.$store.state.projectsBYUID).length <= 0) {
            //Order based on year, starting from soonest to oldest.
            let document = this.$prismic.api.query("", {orderings: '[my.project.year desc]'});
            
            if (document)  { //We got our document. 
                this.$store.commit('setProjects', document.results, this.$route.params.project);
            } else { //Data couldn't load, don't render the app.
                error({statusCode: 404, message: 'Trouble loading content. Please content @maximum_crash on Twitter.'})
            }
        } 
        else {
            //Check if current project is null
            if (this.$store.state.currentProject === null || this.$store.state.currentProject === undefined) {
                if (this.$store.state.projectsBYUID[this.$route.params.project] === undefined || this.$store.state.projectsBYUID[this.$route.params.project] === null) {
                   this.$router.replace('/');
                   this.$store.commit('pushNotification', 'Sorry this post doesn\'t exist.');
                }
                else {
                    this.$store.commit('setCurrentProject', this.$route.params.project);
                }
            }
        }

        console.log(this.$store.state.currentProject);
    },
    methods: {
        getLinkClass: function(link) {
            let linkClass = 'default';
            let linkIMGDimensions = link.linkbg.dimensions; 

            if (linkIMGDimensions === null || linkIMGDimensions === undefined) 
            {
                return 'link-container default';
            }

            //If the link IMG dimensions are equal make it a square.
            if (linkIMGDimensions.height === linkIMGDimensions.width) {
                linkClass = 'square';
            }

            return 'link-container ' + linkClass;
        }
    }
}
</script>

<style scoped>
    .project-wrapper {
    overflow: auto;
    z-index: 100;
    height: calc(100vh - 99px);
    width: 100%;
    position: relative;
    }

    .inset {
        max-width: 740px;
        margin: auto; 
    }

    .project-view {
        max-width: 900px; 
        margin: auto; 
        padding-top: 2em;
        border-bottom: 1px solid #faf7f0; 
    }

    .header {
        margin-bottom: 1.64em;
    }

    .header h1.header-title{
        font-family: 'ScoreDozer';
        letter-spacing: 2px; 
        font-size: 3.1em; 
        margin-bottom: .25em;
    }

    .header p.header-subtext {
        font-family: 'StrongGamer';
        margin-bottom: 1.5em;
        opacity: 0.8;
        font-size: 1.125em; 
    }

    .header .header-card {
        position: relative;
        height: 480px;
        background-position: center;
        background-size: cover; 
        background-repeat: no-repeat;
    }

    .header .youtube-container {
        position: absolute;
        width: 100%; 
        height: 100%;
    }

    .header .youtube-container > div{
        width: 100%; 
        height: 100%;
    }

    .blurb {
        font-family: 'IBMPlexSerif';
        line-height: 26px; 
        font-size: 1.15em; 
        margin-bottom: 2.5em;
    }

    .sub-title {
        font-family: 'IBMPlexSerif';
        font-weight: 600;
        opacity: 0.72;
        font-size: 20px;
        position: relative;
        display: inline-block;
    }

    .sub-title:after {
        content: '';
        position: absolute;
        border-bottom: 1px solid #faf7f0;
        width: 100%;
        left: 0;
        bottom: -4px;
        transform-origin: center;
        transform: scale(1.05);
    }

    .available-at > ul {
        list-style-type: none; 
        padding: 0; 
        margin-top: 1em;
        padding-top: .5em;
        padding-bottom: 1.5em;
    }

    .available-at li {
        display: inline-block;
        position: relative;
        margin-right: 1em;
        margin-left: 1em;
        top: 0px; 
        vertical-align: middle; 
        box-shadow: 0 0px 0px rgba(100, 101, 110, 0), 0 0px 0px 0 rgba(45, 50, 126, 0);
        transition: all .2s ease-out;
    }

    .available-at li:hover {
        top: -4px; 
        box-shadow: 0 15px 35px rgba(252, 247, 240, 0.08), 0 5px 15px 0 rgba(45, 50, 126, 0.075);
        transition: all .2s ease-out;
    }

    .available-at li a .link-container{
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
    }

    .available-at li a .link-container.default{
        height: 64px; 
        width: 215px; 
        background-size: contain; 
    }

    .available-at li a .link-container.square {
        background-size: contain;
        height: 125px;
        width: 125px;
    }

    .available-at {
        text-align: center; 
        margin-bottom: 2.5em;
    }

    .links-section {
        text-align: center; 
        margin-bottom: 2.5em;
    }

    .title {
        font-family: 'IBMPlexSerif';
        font-weight: 700; 
        font-size: 1.8em; 
        position: relative;
        display: inline-block;
    }

    .title::after {
        content: '';
        position: absolute;
        border-bottom: 1px solid #fbf7f0; 
        bottom:0; 
        width: 100%; 
        left:0; 
        transform: scale(1.05);
        transform-origin: center; 
    }   
</style>


