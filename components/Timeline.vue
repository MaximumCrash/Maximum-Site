<template>
    <div class="timeline">
        <ul>
            <li class="chosen"><span>></span>2018</li>
            <li>2017</li>
            <li>2016</li>
            <li>2015</li>
            <li>The Rest</li>
        </ul>
    </div>
</template>

<style scoped>
    .timeline {
        position: absolute;
        left: 2em;
        top: 9em;
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

    .timeline ul li.chosen {
        opacity: 1; 
        right: 0; 
    }

    .timeline ul li:not(.chosen) {
        right: 17px;
        opacity: .32;
         transition: all .1s ease-in-out; 
    }

    .timeline ul li:not(.chosen):hover {
        opacity: .64;
        right: 8px;
        transition: all .1s ease-in-out; 
    }   

    .timeline ul li span {
        font-size: 25px;
    }
</style>

