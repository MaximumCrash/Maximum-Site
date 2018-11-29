<template>
    <nuxt-link to="/" v-bind:class="{'back-button': true, hidden: isHidden}"> 
               <fa icon="chevron-left" v-bind:style="{color : '#2c2b36'}"/>
        Back to Archives
    </nuxt-link>
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
                return this.$store.state.currentProject === null
            }
        },
        watch: {
            hidden (newVal, oldVal)  {
                this.$set(this, 'isHidden', this.$store.state.currentProject === null)
            }
        },
        created() {
            this.$set(this, 'isHidden',this.$store.state.currentProject === null);
        }
    }
</script>

<style scoped>
    .back-button {
        position: absolute;
        bottom: 5px;
        font-size: 1.2em;
        left: 0;
        opacity: 1; 
        color: #2c2b35;
        cursor:pointer; 
        line-height: 28px; 
        font-family: 'StrongGamer';
        transition: all .2s ease-in-out; 
    }

    .back-button::before {
        content: '';
        opacity: 0.64; 
        position: absolute;
        right:0; 
        bottom: -2px;
        width: 91%;
        border:1px solid #2c2b35;
        transition: all .1s ease-in-out; 
    }

    .back-button:hover::before {
        width: calc(91% + 8px);
        transition: all .1s ease-in-out; 
    }

    .back-button.hidden {
        opacity: 0; 
        left: -8px;
        transition: all .2s ease-in-out; 
    }

    .back-button > .svg-inline--fa{
        color: rgb(44, 43, 54);
        font-size: 1.25em;
        vertical-align: bottom;
        position: relative;
        left: 8px;
        bottom: -4px;
        opacity: 0.64;   
        transition: all .1s ease-in-out;
    }

    .back-button:hover > .svg-inline--fa{
        left: 0px;
        transition: all .1s ease-in-out;
    }
</style>
