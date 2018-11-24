<template>
    <div id="portfolio" class="portfolio-max">
        <YearMax v-bind:key="year" 
              v-bind:year="year"
              v-bind:projects="$store.state.projects[year]"    
              v-for="year in $store.state.years"/>
    </div>    
</template> 

<script>
    import YearMax from './Year_maxSize.vue';

    export default {
        components: {
            YearMax
        },
        data () {
            return {
                scrolled: false
            };
        },
        methods: {
            handleScroll () {
                var portfolio = document.getElementById('portfolio');
                var portOff = portfolio.offsetTop;

                for (var a = 0; a < this.$store.state.years.length; a++) {
                    var year = this.$store.state.years[a];
                    
                    var child = document.getElementById(year); 
                    var childOff = child.offsetTop + child.offsetHeight - 16;

                    if (childOff - portOff >= portfolio.scrollTop)
                    {
                        this.$store.commit('setCurrentYear', year); 
                        break;
                    }
                }
            }
        },
        mounted () {
            document.getElementById('portfolio').addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy () {
            document.getElementById('portfolio').removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    .portfolio-max {
        height: calc(100vh - 110px);
        width: 100%;
        margin: auto;
        margin-top: 1.25em;
        overflow: auto;
        padding-right: 36vw;
        left: 18vw;
        position: relative;
    }
</style>
