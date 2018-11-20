module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Maximum Crash',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Maximum Crash&apos;s front site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [{src: '~assets/css/fonts.css'}],
  modules: [
    ['nuxt-mq']
  ],
  'mq': {
    defaultBreakpoint: 'default',
    breakpoints: {
      mobile: 450, 
      tablet: 900, 
      laptop: 1250, 
      desktop: Infinity
    }
  },
  // plugins: [
  //   {src: '~plugins/velocity.js', ssr: false}
  // ],
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

