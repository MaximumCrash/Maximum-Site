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
