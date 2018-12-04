<template>
    <div class="portfolio-min">
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
                var page = document.documentElement;
                var portOff = page.offsetTop + 70;

                for (var a = 0; a < this.$store.state.years.length; a++) {
                    var year = this.$store.state.years[a];
                    
                    var child = document.getElementById(year); 
                    var childOff = child.offsetTop + child.offsetHeight - 64;

                    if (childOff - portOff >= page.scrollTop)
                    {
                        this.$store.commit('setCurrentYear', year); 
                        break;
                    }
                }
            }
        },
        mounted () {
           window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy () {
           window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    .portfolio-min {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 7em;
        overflow: auto;
    }
</style>
