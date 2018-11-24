<template>
    <div id="portfolio">
        <Year v-bind:key="year" 
              v-bind:year="year"
              v-bind:projects="$store.state.projects[year]"    
              v-for="year in $store.state.years"/>
    </div>    
</template>

<script>
    import Year from './Year.vue';

    export default {
        components: {
            Year
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
    #portfolio {
        height: calc(100vh - 110px);
        width: 100%;
        position: relative;
        left: 118px;
        padding-top: 1.4em;
        padding-left: .75em;
        overflow: auto;
        padding-right: 255px;
    }
</style>
