<template>
    <div :class="{timeline: true, hidden: isHidden}">
        <ul>
            <li :class="{chosen: year === currentYear}" 
                v-bind:key="year"  
                v-for="(year, index) in $store.state.years"
                @click="scrollToHash(year)"> 
                <span :class="{active: year === currentYear, currentMark: true}">></span><vue-typer :text="year"
                           :repeat='0'
                           initial-action='typing'
                           :pre-type-delay='200'
                           :type-delay='100 + (32 * index)'
                           :erase-on-complete='false'
                           caret-animation='expand'> 
                </vue-typer>

                

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                isHidden: false
            }
        },
        computed: {
            hidden() {
                return this.$store.state.currentProject !== null
            }
        },
        watch: {
            hidden (newVal, oldVal)  {
                this.$set(this, 'isHidden', this.$store.state.currentProject !== null)
            }
        },
        props:{
            currentYear: String,
        },
        methods: {
            scrollToHash: function(year) {
                if (this.$store.state.currentProject === null) {
                    this.$store.commit('scrollToHash', year)
                }
            }
        },
        mounted() {
            this.$set(this, 'isHidden',this.$store.state.currentProject !== null);
        }
    }
</script>

<style>
    .timeline {
        position: absolute;
        left: 1em;
        top: 7.5em;
        opacity: 1;
        transition: all .2s ease-in-out;
    }

    .timeline.hidden {
        left: -3em; 
        opacity:0; 
        transition: all .2s ease-in-out;
    }

    .timeline .vue-typer {
        font-family: 'StrongGamer';
        text-align: right;
        cursor: pointer !important;
    }

    .timeline .vue-typer .custom.char.typed {
        color: #FBF7f0;
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