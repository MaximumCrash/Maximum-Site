<template>
    <div :class="{active: isActive, 'mobile-notification-bar': true}"> 
       <span class="content"> {{$store.state.currentNotification}}</span> 
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            isActive: false,
            timer: null
        }
    }, 
    computed: {
        active() {
            return this.$store.state.currentNotification !== null;
        }
    },
    watch: {
        active (newVal, oldVal) {
            this.$set(this,'isActive',this.$store.state.currentNotification !== null);
        }
    },
    mounted() {
        if (this.$store.state.currentNotification !== null) {
            var self = this; 
            clearTimeout(this.timer);
            this.timer = setTimeout(function() {
                    self.isActive = false
                    setTimeout(function () {
                        self.$store.commit('unsetNotification');
                    });
                }, 4000);
        }

        this.$set(this,'isActive',this.$store.state.currentNotification !== null);
    }
}
</script>

<style scoped>
    .mobile-notification-bar {
        min-height: 42px;
        position: absolute;
        width: 90vw;
        left: 50%;
        transform: translateX(-50%);
        top: 12vh;
        opacity: 0;
        font-family: 'StrongGamer';
        line-height: 36px;
        font-size: 4.5vw;
        z-index: 1000;
        transition: all .4s ease;  
    }

    .mobile-notification-bar .content {
        color: #FBF7F0;
        position: relative;
    }

    .mobile-notification-bar.active {
        opacity: 1;
        transition: all .4s ease;
    }

    .mobile-notification-bar::before{
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background: #2c2b35;
        border: 2px solid #faf7ef;
        transform: scaleX(0);
        opacity: 0; 
        left:0;
        transition: all .4s ease;
    }

    .mobile-notification-bar.active::before{
        transform: scaleX(1.1);
        opacity: 1;
        transition: all .4s ease;
    }
</style>
