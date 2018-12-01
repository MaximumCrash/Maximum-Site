module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Maximum Archives',
    htmlAttrs: {
      lang:'en-us'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The archives of everything Maximum Crash.' },
      { name: 'robots', content: 'all' },
      { hid: 'keywords', name: 'keywords', content: 'rejon, rejon taylor-foster, maximum crash, starlot derby, portfolio'},
      { name: 'theme-color', content: '#fcf7f0'},
      { property: 'og:title', content:'Archives.MaximumCrash'},
      { property: 'og:description', content: 'The portfolio of Réjon Taylor-Foster'},
      { property: 'og:image', content: '/twitterCard.png'},
      { property: 'og:url', content: 'https://archive.maximumcrash.com'},
      { name: 'twitter:card', content:'summary_large_image'},
      { name: 'twitter:site', content:'@Maximum_Crash'},
      { name: 'twitter:title', content: 'Maximum Archives'},
      { name: 'twitter:descriptions', content: 'The portfolio of Réjon Taylor-Foster'},
      { name: 'twitter:image:src', content: '/twitterCard.png'},
      { name: 'twitter:image:alt', content: 'Maximum_Archives'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: [{src: '~assets/css/fonts.css'}],
  modules: [
    ['nuxt-mq'],
    ['nuxt-fontawesome'],
    ['nuxt-robots-module'],
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
    {src:'~/plugins/slider.js', ssr: false},
    {src: '~/plugins/vue-typer.js', ssr: false},
    {src: '~/plugins/youtube-embed.js', ssr: false},
    '~/plugins/lazyload.js'
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
  fontawesome: {
    component: 'fa',
    imports: [
      //import whole set
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#2c2b36' },
  router: {
    middleware: 'pages',
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
            return document.getElementById('app').scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' })
          

        } else {
            return document.getElementById('app').scrollTo(0, el.offsetTop)
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

