module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Maximum Crash',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Historical collection of everything Maximum Crash.' },
      { name: 'robots', content: 'all' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [{src: '~assets/css/fonts.css'}],
  modules: [
    ['nuxt-mq'],
    ['prismic-nuxt', {
      endpoint: 'https://maximumarchive.cdn.prismic.io/api/v2',
      linkResolver: function(doc, ctx) {
        return '/'
      }
    }]
  ],
  plugins: [
    '~/plugins/lodash.js',
    '~/plugins/particles.js'
  ],
  'mq': {
    defaultBreakpoint: 'default',
    breakpoints: {
      xsmobile: 0,
      mobile: 401, //NOTE(Rejon): I set it to 401 because I want Mobile header to show < 400px 
      tablet: 800, 
      laptop: 1300, 
      desktop: Infinity
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

