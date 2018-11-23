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
        padding-right: 34vw;
        left: 17vw;
        position: relative;
    }
</style>
