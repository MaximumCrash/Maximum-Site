<template>
    <div class="portfolio-max">
      
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
                var page = document.documentElement;
                var portOff = page.offsetTop + 70;

                for (var a = 0; a < this.$store.state.years.length; a++) {
                    var year = this.$store.state.years[a];
                    
                    var child = document.getElementById(year); 
                    var childOff = child.offsetTop + child.offsetHeight - 32;

                    if (childOff - portOff >= page.scrollTop)
                    {
                        this.$store.commit('setCurrentYear', year); 
                        break;
                    }
                }
            }
        },
        mounted () {
            document.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy () {
            document.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    .portfolio-max {
        width: 100%;
        margin: auto;
        padding-top: 7.9em;
        overflow: auto;
        padding-right: 36vw;
        left: 18vw;
        position: relative;
    }
</style>
