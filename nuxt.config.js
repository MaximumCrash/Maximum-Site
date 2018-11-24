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
    {src: '~/plugins/particles.js', ssr: false},
    {src:'~/plugins/slider.js', ssr: false}
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
  router: {
    scrollBehavior: async (to, from, savedPosition) => {

      const findEl = async (hash, x) => {
        let queryHash  = hash.replace('#', '');

        return document.querySelector("[id='"+queryHash+"']") ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          });
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return document.getElementById('portfolio').scrollTo({ top: el.offsetTop - 21, behavior: 'smooth' })

        } else {
          return document.getElementById('portfolio').scrollTo(0, el.offsetTop)
        }
      }
        return {x: 0, y: 0}
      
    }
  },
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

