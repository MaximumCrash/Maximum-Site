<template>
    <div class="portfolio-max">
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
    .portfolio-max {
      height: calc(100vh - 110px);
      width: 1050px;
      margin: auto;
        
    }
</style>
