<template>
    <div class="portfolio">
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
                var page = document.documentElement;
                var portOff = page.offsetTop + 35;

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
            document.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy () {
            document.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    .portfolio {
        width: 100%;
        position: relative;
        left: 118px;
        padding-top: 7.7em;
        padding-left: .75em;
        overflow: auto;
        padding-right: 255px;
        -webkit-overflow-scrolling: touch;
    }
</style>
