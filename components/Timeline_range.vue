<template>
    <div id="timeline-range">
        <no-ssr>
        <vue-slider ref="timeline"
                    :value="$store.state.currentYear"
                    :disabled="false"
                    @callback="val => rangeChange(val)"
                    :data="$store.state.years"
                    :piecewise="true"
                    :dot-size="20"
                    :piecewiseLabel="true"
                    :bg-style="{'border': ' 1px solid #FBF7F0', 'backgroundColor': '#2c2b36'}"
                    :piecewiseStyle="{'backgroundColor': '#FBF7F0',
                                        'visibility': 'visible',
                                        'width': '12px',
                                        'height': '12px'
                                        }"
                    :process-style="{'backgroundColor': '#FBF7F0'}"
                    :label-style="{'top': '15px'}"
                    :piecewiseActiveStyle="{'backgroundColor': '#FBF7F0'}"
                    :labelActiveStyle="{'color': '#FBF7F0', 'transform': 'scale(1.1)'}"> 
                    </vue-slider>
        </no-ssr>
    </div>
</template>

<script>
export default {
    data () {
        return {
        currentVal: this.$store.state.currentYear
        }
    },
    props: {
        yearCount: Number
    },
    methods: {
        rangeChange: function(val) {
            this.$store.commit('scrollToHash', val);
        }
    }
}
</script>

<style>
    #timeline-range {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        width: 30vw;
        bottom: 2em;
    }

</style>
