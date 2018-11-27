<template>
    <div class="project-view">
        <div class="header"> 
            <h1 class="header-title">{{$store.state.currentProject.data.title[0].text}}</h1>
            <p class="header-subtext">{{$store.state.currentProject.data.releaseDate}} {{$store.state.currentProject.data.developedby}}</p>
            <div class="header-card">
                <div class="youtube-container" :v-if="$store.state.currentProject.data.videoid[0].text !== ''">
                    <youtube :video-id="$store.state.currentProject.data.videoid[0].text"> </youtube>
                </div>

                <img class="header-image" :src="$store.state.currentProject.data.headerimage.url" :alt="$store.state.currentProject.data.headerimage.alt" />
            </div>
        </div>

        <div class="blurb" v-if="$store.state.currentProject.data.blurb !== ''"> 
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
</template>

<script>
export default {
    async asyncData({app, params}) {
        if (Object.keys(app.store.state.projectsBYUID).length <= 0) {
            console.log("We need to get our data");
            //Order based on year, starting from soonest to oldest.
            let document = await app.$prismic.api.query("", {orderings: '[my.project.year desc]'});
            
            if (document)  { //We got our document. 
                app.store.commit('setProjects', document.results, params.project);
            } else { //Data couldn't load, don't render the app.
            error({statusCode: 404, message: 'Trouble loading content. Please content @maximum_crash on Twitter.'})
            }
        }
        else {
            console.log("ASYNC: We've got data");
            if (app.store.state.currentProject === null || app.store.state.currentProject === undefined)
            {
                if (app.store.state.projectsBYUID[params.project] === undefined || app.store.state.projectsBYUID[params.project] === null) {
                    app.router.push('/');
                }
                else {
                    app.store.commit('setCurrentProject', params.project);
                }
            }
            else {
                console.log("ASYNC: Project has been set!", app.store.state.currentProject);
            }
        }

    },
    created() {

        let projects = {};

        if (Object.keys(this.$store.state.projectsBYUID).length <= 0) {
            console.log("We need to initialize our data");
            //Order based on year, starting from soonest to oldest.
            let document = this.$prismic.api.query("", {orderings: '[my.project.year desc]'});
            
            if (document)  { //We got our document. 
                this.$store.commit('setProjects', document.results, this.$route.params.project);
            } else { //Data couldn't load, don't render the app.
            error({statusCode: 404, message: 'Trouble loading content. Please content @maximum_crash on Twitter.'})
            }
        } 
        else {
            console.log("CREATED: We've got data");
            if (this.$store.state.currentProject === null || this.$store.state.currentProject === undefined)
            {
                if (this.$store.state.projectsBYUID[this.$route.params.project] === undefined || this.$store.state.projectsBYUID[this.$route.params.project] === null) {
                   console.log("No Dice");
                   this.$router.replace('/');
                }
                else {
                    console.log("Got Dice")
                    this.$store.commit('setCurrentProject', this.$route.params.project);
                }
                
                 
            }
            else 
            {
                console.log("CREATED: Project has been set!", this.$store.state.currentProject);
            }
        }


    }
}
</script>

<style scoped>
    .project-view {
    overflow: auto;
    z-index: 100;
    height: calc(100vh - 110px);
    width: 100%;
    position: relative;

    }
</style>


