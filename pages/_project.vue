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

                        </li>
                </ul>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({app, params}) {
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
            if (this.$store.state.currentProject === null || this.$store.state.currentProject === undefined)
            {
                if (this.$store.state.projectsBYUID[this.$route.params.project] === undefined || this.$store.state.projectsBYUID[this.$route.params.project] === null) {
                   this.$router.replace('/');
                   this.$store.commit('pushNotification', 'Sorry this post doesn\'t exist.');
                }
                else {
                    this.$store.commit('setCurrentProject', this.$route.params.project);
                }
            }
        }


    }
}
</script>

<style scoped>
    .project-wrapper {
    overflow: auto;
    z-index: 100;
    height: calc(100vh - 110px);
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
    }

    .header {
        margin-bottom: 1.64em;
    }

    .header h1.header-title{
        font-family: 'ScoreDozer';
        letter-spacing: 2px; 
        font-size: 3.5em; 
        margin-bottom: .25em;
    }

    .header p.header-subtext {
        font-family: 'StrongGamer';
        margin-bottom: 1.5em;
        opacity: 0.64; 
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
        font-family: 'IBM Plex Serif';
        line-height: 26px; 
        font-size: 1.1em; 
    }
</style>


