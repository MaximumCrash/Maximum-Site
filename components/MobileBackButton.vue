<template>
   <nuxt-link to="/" v-bind:class="{'mobile-backButton': true, hidden: isHidden}">
       <fa icon="chevron-left" v-bind:style="{color : 'rgb(251, 247, 240)'}"/>
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
        methods: {
            scrollToHash: function(year) {
                if (this.$store.state.currentProject !== null) {
                    this.$store.commit('scrollToHash', year)
                }
            }
        },
        created() {
            this.$set(this, 'isHidden',this.$store.state.currentProject === null);
        }
    }
</script>

<style scoped>
    .mobile-backButton {
        position: fixed;
        width: 70px;
        height: 70px;
        opacity: 1; 
        background: #2c2b35;
        box-shadow: 0 15px 35px rgba(252, 247, 240, 0.064), 0 5px 15px 0 rgba(45, 50, 126, 0.07);
        border-radius: 100%;
        border: 1px solid #fbf7f0;
        bottom: 20px;
        left: 20px;
        z-index: 1000;
        cursor: pointer;
        transform: scale(1) rotate(0deg); 
        transition: all .35s ease;
    }    

    .mobile-backButton > .svg-inline--fa {
        color: rgb(251, 247, 240);
        font-size: 3em;
        position: relative;
        top: 5px;
        left: -4px;
    }

    .mobile-backButton.hidden {
        transform: scale(0) rotate(180deg); 
        opacity: 0;
        transition: all .35s ease;
    }
</style>
