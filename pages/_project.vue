<template>
    <div class="project-page">
        <mq-layout :mq="['desktop', 'laptop']">
        <div class="project-wrapper" v-if="$store.state.currentProject !== null">
            <div class="project-view">
                <div class="header"> 
                    <h1 class="header-title inset">{{$store.state.currentProject.data.title[0].text}}</h1>
                    <p class="header-subtext inset"><span v-html="$store.state.currentProject.data.releasedate">{{$store.state.currentProject.data.releasedate}}</span>   <br/><span v-html="$store.state.currentProject.data.developedby"> {{$store.state.currentProject.data.developedby}}</span></p>
                    <div class="header-card" v-bind:style="{backgroundImage: 'url('+$store.state.currentProject.data.headerimage.url+')'}">
                        <div class="youtube-container" v-if="$store.state.currentProject.data.videoid[0] !== undefined && $store.state.currentProject.data.videoid[0] !== null">
                            <youtube player-width="100%" player-height="100%" v-if="$store.state.currentProject.data.videoid[0].text !== ''" video-id="$store.state.currentProject.data.videoid[0] ? $store.state.currentProject.data.videoid[0].text : ''"> </youtube>
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
                            <a v-bind:href="link.linkurl.url" rel="noopener" v-bind:target="link.linkurl.target">
                                <Tilt :max="32" :reverse="true">
                                <div :class="getLinkClass(link)" v-bind:style="{backgroundImage: 'url('+link.linkbg.url+')', backgroundColor: link.linkbg.url === undefined || link.linkbg.url === null ? link.linkbgcolor : '', border: '1px solid' + link.linkbordercolor}">
                                    <img v-bind:src="link.linkbgicon ? link.linkbgicon.url : ''"/>
                                    <div class="link-content" :style="{color: link.linktextcolor ? link.linktextcolor : '#faf7f0'}">  
                                        {{link.linktext[0] !== undefined && link.linktext[0] !== null ? link.linktext[0].text : ''}}
                                    </div>
                                </div>
                                </Tilt>
                            </a>
                        </li>
                    </ul>  
                </div>

                <div class="awards" v-if="$store.state.currentProject.data.awards.length > 0">
                    <h2 class="title">Awards & Recognition</h2> 
                    <div class="award-list">
                        <div class="award-container" v-for="(award, index) in  $store.state.currentProject.data.awards" v-bind:key="'award' + index">
                        
                                <div class="award">
                                    <Tilt :max="28" :reverse="true">
                                        <div class="award-image">
                                            <img src="/Laurel.svg" class="laurel"/>
                                            <img :src="award.awardicon.url" class="award-icon-img"  v-if="award.awardicon.url"/>
                                            <fa icon="award" v-bind:style="{color: '#faf7f0'}" v-else/>
                                        </div>
                                    </Tilt>
                                    <div class="award-content" v-if="award.awardedfor[0] !== null && award.awardedfor[0] !== undefined">
                                        <h1 class="item-header">{{award.awardedfor[0] ? award.awardedfor[0].text : ''}}</h1>
                                        <p class="item-subtext">{{award.awardedby[0] ? award.awardedby[0].text : ''}}</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div class="articles" v-if="$store.state.currentProject.data.articles.length > 0">
                    <h2 class="title">Snippets from Others</h2>
                    <ul>
                        <li v-for="(article, index) in $store.state.currentProject.data.articles" v-bind:key="'article'+index">
                            <div class="article">
                                <span class="left-quote">“</span>
                                {{article.blurbtext[0] ? article.blurbtext[0].text : ''}}
                            </div>
                            <div class="article-links">
                                <span class="by" v-if="article.saidby[0]">-{{article.saidby[0] ? article.saidby[0].text : ''}},</span>
                                <span v-if="article.sitepostedto[0]"> <a class="external" rel="noopener" :href="article.linktoarticle.url" :target="article.linktoarticle.target">{{article.sitepostedto[0] ? article.sitepostedto[0].text : ''}}</a></span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="links-section" v-if="$store.state.currentProject.data.outerlinks.length > 0">
                    <h2 class="title">Related Links</h2>
                    <ul> 
                    <li v-for="link in $store.state.currentProject.data.outerlinks" v-bind:key="link.url"> 
                        <span>{{link.linkname}}:</span> <a class="external" rel="noopener" :target="link.link.target" :href="link.link.url">{{link.link.url}}</a>
                        </li> 
                    </ul>
                </div>
            </div>
            <Footer class="inset"/>
        </div>
        </mq-layout>

        <mq-layout :mq="['tablet','mobile', 'xsmobile']">
            <div class="project-wrapper" v-if="$store.state.currentProject !== null">
            <div class="project-view-mobile">
                <div class="header"> 
                    <h1 class="header-title inset">{{$store.state.currentProject.data.title[0].text}}</h1>
                    <p class="header-subtext inset"><span v-html="$store.state.currentProject.data.releasedate">{{$store.state.currentProject.data.releasedate}}</span>   <br/><span v-html="$store.state.currentProject.data.developedby"> {{$store.state.currentProject.data.developedby}}</span></p>
                    <div class="header-card" v-bind:style="{backgroundImage: 'url('+$store.state.currentProject.data.headerimage.url+')'}">
                        <div class="youtube-container" v-if="$store.state.currentProject.data.videoid[0] !== undefined && $store.state.currentProject.data.videoid[0] !== null">
                           <div v-if="$store.state.currentProject.data.videoid[0].text !== ''">
                                <youtube player-width="100%" player-height="100%" v-if="$store.state.currentProject.data.videoid[0].text !== ''" :video-id="$store.state.currentProject.data.videoid[0] ? $store.state.currentProject.data.videoid[0].text : ''"> </youtube>
                            </div>
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
                            <a v-bind:href="link.linkurl.url" rel="noopener" v-bind:target="link.linkurl.target">
                                <Tilt :max="32" :reverse="true">
                                <div :class="getLinkClass(link)" v-bind:style="{backgroundImage: 'url('+link.linkbg.url+')', backgroundColor: link.linkbg.url === undefined || link.linkbg.url === null ? link.linkbgcolor : '', border: '1px solid' + link.linkbordercolor}">
                                    <img v-bind:src="link.linkbgicon ? link.linkbgicon.url : ''"/>
                                    <div class="link-content" :style="{color: link.linktextcolor ? link.linktextcolor : '#faf7f0'}">  
                                        {{link.linktext[0] !== undefined && link.linktext[0] !== null ? link.linktext[0].text : ''}}
                                    </div>
                                </div>
                                </Tilt>
                            </a>
                        </li>
                    </ul>  
                </div>

                <div class="awards" v-if="$store.state.currentProject.data.awards.length > 0">
                    <h2 class="title">Awards & Recognition</h2> 
                    <div class="award-list">
                        <div class="award-container" v-for="(award, index) in  $store.state.currentProject.data.awards" v-bind:key="'award' + index">
                        
                                <div class="award">
                                    <Tilt :max="28" :reverse="true">
                                        <div class="award-image">
                                            <img src="/Laurel.svg" class="laurel"/>
                                            <img :src="award.awardicon.url" class="award-icon-img"  v-if="award.awardicon.url"/>
                                            <fa icon="award" v-bind:style="{color: '#faf7f0'}" v-else/>
                                        </div>
                                    </Tilt>
                                    <div class="award-content" v-if="award.awardedfor[0] !== null && award.awardedfor[0] !== undefined">
                                        <h1 class="item-header">{{award.awardedfor[0] ? award.awardedfor[0].text : ''}}</h1>
                                        <p class="item-subtext">{{award.awardedby[0] ? award.awardedby[0].text : ''}}</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div class="articles" v-if="$store.state.currentProject.data.articles.length > 0">
                    <h2 class="title">Snippets from Others</h2>
                    <ul>
                        <li v-for="(article, index) in $store.state.currentProject.data.articles" v-bind:key="'article'+index">
                            <div class="article">
                                <span class="left-quote">“</span>
                                {{article.blurbtext[0] ? article.blurbtext[0].text : ''}}
                            </div>
                            <div class="article-links">
                                <span class="by" v-if="article.saidby[0]">-{{article.saidby[0] ? article.saidby[0].text : ''}},</span>
                                <span v-if="article.sitepostedto[0]"> <a class="external" rel="noopener" :href="article.linktoarticle.url" :target="article.linktoarticle.target">{{article.sitepostedto[0] ? article.sitepostedto[0].text : ''}}</a></span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="links-section" v-if="$store.state.currentProject.data.outerlinks.length > 0">
                    <h2 class="title">Related Links</h2>
                    <ul> 
                    <li v-for="link in $store.state.currentProject.data.outerlinks" v-bind:key="link.url"> 
                        <span>{{link.linkname}}:</span> <a class="external" rel="noopener" :target="link.link.target" :href="link.link.url">{{link.link.url}}</a>
                        </li> 
                    </ul>
                </div>
            </div>
            <Footer class="inset"/>
        </div>
        </mq-layout>
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
    async asyncData({app, params, payload}) {
        console.log(payload);
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
    width: 100%;
    position: relative;
        padding-top: 6.1em;
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
        margin-bottom: 2.25em;
    }

    .header h1.header-title{
        font-family: 'ScoreDozer';
        letter-spacing: 2px; 
        font-size: 3.1em; 
        margin-bottom: .25em;
    }

    .header p.header-subtext {
           font-family: 'StrongGamer';
    margin-bottom: 1em;
    font-size: 1.125em;
    line-height: 1.25em;
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
        opacity: 0.64;  
    } 
    .sub-title {
        font-family: 'IBMPlexSerif';
        font-weight: 600;
        opacity: 0.85;
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

    .blurb {
        font-family: 'IBMPlexSerif';
        line-height: 28px;
        font-size: 1.3em;
        margin-bottom: 2.5em;
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
        transition: all .2s ease-out;
    }

    .available-at li a .link-container{
        box-shadow: 0 0px 0px rgba(100, 101, 110, 0), 0 0px 0px 0 rgba(45, 50, 126, 0);
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
    }

    .available-at li:hover a .link-container {
        transition: all .2s ease-out;
        box-shadow: 0 15px 35px rgba(252, 247, 240, 0.08), 0 5px 15px 0 rgba(45, 50, 126, 0.075);
    }

    .available-at li a .link-container.default{
        height: 64px; 
        width: 217px; 
        background-size: cover;
        border-radius: 5px; 
        text-align: left;
        position: relative;
    }

    .available-at li a .link-container.default img{
        width: 50px; 
        position: relative;
        left: 7px;
        top: 5px; 
        display: inline-block;
    }

    .available-at li a .link-container.default .link-content {
        width: calc(100%  - 66px);
        display: inline-block;
        margin-left: 7px; 
        top: 50%;
    transform: translateY(-50%);
    position: relative;
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

    .awards {
        text-align: center;
        margin-bottom: 1.5em; 
    }

    .awards .title{
        margin-bottom: 1.5em;
    }

    .awards .award-list{
        display:flex; 
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .awards .award-container{
        display: inline-block;
        margin-left: 1.5em;
        margin-right: 1.5em;
        margin-bottom: 3em; 
    }

    .awards .award-container .award{
        font-family: 'IBMPlexSerif';
    }

    .awards .award-container .award .award-image{
        width: 180px; 
        position: relative;
        height: 128px;
        display: inline-block;
    }

    .awards .award-container .award .award-image .laurel{ 
        width: 100%; 
        position: absolute;
        left:0; 
        top:0; 
    }

    .awards .award-container .award .award-image .award-icon-img{
        position: relative;
        width: 5em;
    }

    .awards .award-container .award .award-image .svg-inline--fa{
        font-size: 4.5em;
        position: relative;
        top: 7px;
    }

    .awards .award-container .award .award-content{
        margin-top:.25em;
    }

    .awards .award-container .award .award-content .item-header{
        font-size: 1.35em;
    }

    .awards .award-container .award .award-content .item-subtext{
        font-weight: 500; 
        font-size: 1em;
    }

    .articles {
        text-align: center;
        margin-bottom: 2.5em;
    }

    .articles ul {
        margin-top: 2.5em;
        padding: 0; 
        list-style-type: none;
    }

    .articles ul li {
        display: inline-block;
        text-align: left; 
        margin-bottom: 4.5em;
    }

    .articles ul li:last-of-type {
        margin-bottom: 1.5em;
    }

    .articles .article {
        font-family: 'IBMPlexSerif';
        font-size: 1.45em;
        position: relative;
    }

    .articles .article .left-quote{
        font-weight: bold;
        font-size: 40px; 
        position: absolute;
        left: -28px; 
        top: -10px; 
    }

    .articles .article::after {
        content: '”';
        font-weight: bold;
        font-size: 40px;
        position: absolute;
        right: -28px;
        top: -10px;
    } 

    .articles .article .right-quote {
        font-size: 40px; 
        font-weight: bold; 
    }

    .articles .article-links {
        font-family: 'IBMPlexSerif';
        margin-top: .5em;
        font-size: 1.15em; 
    }

    .articles .article-links a.external{
        color: #fbf7f0; 
        cursor: pointer;
    }   

    .articles .article-links a.external::before{
        border-bottom: 2px solid #fbf7f0;
        top: 103%;
    }

    .articles .article-links a.external::after {
        position: absolute;
        right: -19px;
        bottom: -5px;
        opacity: 0.85;
        background: url(/ExternalArrow-Light.svg);
        transition: all .1s ease;
    }

    .articles .article-links a.external:hover::after {
        right: -23px; 
        bottom: 0px; 
        transition: all .1s ease; 
    }
    
    .links-section {
        text-align: center; 
        margin-bottom: 2.5em;
    }

    .links-section ul{
        padding: 0; 
        list-style-type: none;
        margin-top: 1em;
    }

    .links-section ul li span{
        font-family: 'IBMPlexSerif';
        font-size: 1.15em;
    }

    .links-section ul li a {
        font-family: 'IBMPlexSerif';
        color: #faf7f0;
        font-weight: 700;
        font-size: 1.15em; 
        text-decoration: underline;
    }

    .links-section ul li a::before {
        opacity:0; 
    }

    .links-section ul li a::after {
        bottom: 0; 
        right: -19px;
        background: url('/ExternalArrow-Light.svg');
            transition: all .1s ease;
    }

    .links-section ul li a:hover::after {
        bottom:5px; 
        right: -21px;
            transition: all .1s ease;
    }

    .project-view-mobile {
        padding-left: 15px;
        padding-right: 15px; 
        padding-top: 1.64rem;
        margin: auto; 
        max-width: 900px;
    }

    .project-view-mobile .header {
        margin-bottom: 1.5rem;
    }

    .project-view-mobile .header h1.header-title {
        font-size: 2.5rem;
        position: relative;
        margin-bottom: .5em;
    }

    .project-view-mobile .header h1.header-title::after {
        content: '';
        border-bottom: 1px solid #faf7f0;
        width: 100%;
        bottom: -13px;
        position: absolute;
        left: 0;
        opacity: 0.64;
    }

    .project-view-mobile .inset {
        padding-left: 3vw; 
        padding-right: 3vw; 
    }

    .project-view-mobile .header p.header-subtext {
        line-height: 1.5rem;
    }

    .project-view-mobile .header .header-card {
        width: calc(95vw - 30px);
        height: calc(53.44vw - 30px);
        margin: auto; 
    }

    .project-view-mobile .blurb {
        line-height: 32px; 
    }

    .project-view-mobile .available-at li {
        margin-bottom: 1em; 
    }

    .project-view-mobile .articles {
        margin-bottom: 1.5em; 
    }

    .project-view-mobile .articles ul {
        padding-left: 5vw; 
        padding-right: 5vw; 
    }

</style>


