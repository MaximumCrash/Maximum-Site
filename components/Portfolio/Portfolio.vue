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
        }
    }
</script>

<style scoped>
    .portfolio {
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
