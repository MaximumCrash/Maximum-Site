<template>
    <div :class="{active: isActive, 'notification-bar': true}"> 
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
                }, 2600);
        }

        this.$set(this,'isActive',this.$store.state.currentNotification !== null);
    }
}
</script>

<style>
    .notification-bar {
        min-height: 42px;
        position: absolute;
        width: auto;
        left: 50%;
        transform: translateX(-50%);
        top: calc(100% - 0px);
        opacity: 0;
        font-family: 'StrongGamer';
        line-height: 36px;
        white-space: nowrap;
        font-size: 19px;
        transition: all .4s ease;  
    }

    .notification-bar .content {
        color: #FBF7F0;
        position: relative;
    }

    .notification-bar.active {
        top: calc(100% - 21px);
        opacity: 1;
        transition: all .4s ease;
    }

    .notification-bar::before{
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background: #2c2b35;
        border: 2px solid #faf7ef;
        transform: scaleX(0);
        opacity: 0; 
        transition: all .4s ease;
    }

    .notification-bar.active::before{
        transform: scaleX(1.1);
        opacity: 1;
        transition: all .4s ease;
    }
</style>
