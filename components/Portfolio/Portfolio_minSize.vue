<template>
    <div id="portfolio" class="portfolio-min">
        <YearMin v-bind:key="year" 
              v-bind:year="year"
              v-bind:projects="$store.state.projects[year]"    
              v-for="year in $store.state.years"/>
    </div>    
</template>

<script>
    import YearMin from './Year_minSize.vue';

    export default {
        components: {
            YearMin
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
    .portfolio-min {
        overflow: auto;
        height: calc(100vh - 110px);
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 2em;
    }
</style>
