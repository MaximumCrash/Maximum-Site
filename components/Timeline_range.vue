<template>
    <div id="timeline-range">
        <no-ssr>
        <vue-slider ref="timeline"
                    :value="$store.state.currentYear"
                    :disabled="false"
                    @callback="val => rangeChange(val)"
                    :data="$store.state.years"
                    :piecewise="true"
                    :dot-size="28"
                    :piecewiseLabel="false"
                    :tooltip-style="{'font-size': '18px', 
                                     'padding': '0px 6px', 
                                     'background': '#fcf7f0', 
                                     'border-color': '#fcf7f0', 
                                     'color': '#2b2b37', 
                                     'font-weight': 'bold', 
                                     'font-family': 'StrongGamer', 
                                     'line-height': '24px'}"
                    :bg-style="{'border': ' 1px solid #FBF7F0', 'backgroundColor': '#2c2b36'}"
                    :piecewiseStyle="{'backgroundColor': '#FBF7F0',
                                        'visibility': 'visible',
                                        'width': '16px',
                                        'height': '16px'
                                        }"
                    :process-style="{'backgroundColor': '#FBF7F0'}"
                    :label-style="{'top': '15px', 'color': '#fbf7f0a6'}"
                    :piecewiseActiveStyle="{'backgroundColor': '#FBF7F0'}"
                    :labelActiveStyle="{'color': '#FBF7F0', 'font-size': '1rem', 'top': '10px'}"> 
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
        width: 90vw;
        bottom: 1em;
        z-index: 100;
    }

</style>
