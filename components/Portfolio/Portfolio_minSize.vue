<template>
    <div class="portfolio-min">
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
        }
    }
</script>

<style scoped>
    .portfolio-min {
        height: calc(100vh - 110px);
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;  
    }
</style>
