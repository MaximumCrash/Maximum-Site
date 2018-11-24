<template>
    <div class="timeline">
        <ul>
            <li :class="{chosen: year === currentYear}" 
                v-bind:key="year"  
                v-for="year in $store.state.years"
                @click="$store.commit('scrollToHash', year)"> 
                <span :class="{active: year === currentYear, currentMark: true}">></span>{{year}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            currentYear: String,
        }
    }
</script>

<style scoped>
    .timeline {
        position: absolute;
        left: 1em;
        top: 8.5em;
    }

    .timeline ul {
        list-style-type:none;
        padding: 0; 
        font-size: 22px;
        text-align: right;
        width: 85px;
        font-family: 'StrongGamer';
    }

    .timeline ul li {
        margin-bottom: 6px;
        padding: 4px; 
        position: relative;
        min-height: 33px; 
        height: auto; 
        cursor: pointer;
        opacity: .32;
    }

    .timeline ul li a{
        color: #FBF7f0;
    }

    .timeline ul li.chosen {
        opacity: 1; 
        right: 0; 
        transition: all .15s ease-in-out;
    }

    .timeline ul li:not(.chosen) {
        right: 17px;
        opacity: .32;
         transition: all .15s ease-in-out; 
    }

    .timeline ul li:not(.chosen):hover {
        opacity: .64;
        right: 8px;
        transition: all .15s ease-in-out; 
    }   

    .timeline ul li span.currentMark {
        font-size: 25px;
        position: relative;
    }

    .timeline ul li.chosen span.currentMark {
        left: 0px;
        opacity: 1; 
        transition: all .15s ease; 
    }

    .timeline ul li:not(.chosen) span.currentMark {
        left: -10px;
        opacity: 0; 
        transition: all .1s ease;
    }
</style>