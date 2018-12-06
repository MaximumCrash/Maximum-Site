import Prismic from 'prismic-javascript';

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
      { hid: 'description', name: 'description', content: 'The works and collaborative efforts of Réjon Taylor-Foster.' },
      { name: 'robots', content: 'all' },
      { hid: 'keywords', name: 'keywords', content: 'rejon, rejon taylor-foster, maximum crash, starlot derby, portfolio'},
      { name: 'theme-color', content: '#fcf7f0'},
      {property: 'og:site_name',content: 'Maximum Archives'},
      { property: 'og:title', content:'Archives.MaximumCrash'},
      { property: 'og:type', content: 'website'},
      { property: 'og:description', content: 'The works and collaborative efforts of Réjon Taylor-Foster.'},
      { property: 'og:image', content: 'https://maximumarchive.cdn.prismic.io/maximumarchive/3b63c7c412143cff12918c59a1d42da23590ea2d_twittercard.png'},
      { property: 'og:url', content: 'https://archive.maximumcrash.com'},
      { name: 'twitter:card', content:'summary_large_image'},
      { name: 'twitter:site', content:'@Maximum_Crash'},
      { name: 'twitter:title', content: 'Maximum Archives'},
      { name: 'twitter:description', content: 'The works and collaborative efforts of Réjon Taylor-Foster.'},
      { name: 'twitter:image', content: 'https://maximumarchive.cdn.prismic.io/maximumarchive/3b63c7c412143cff12918c59a1d42da23590ea2d_twittercard.png'},
      { name: 'twitter:image:alt', content: 'Maximum_Archives'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: [{src: '~assets/css/fonts.css'}],
  modules: [
    ['nuxt-fontawesome'],
    ['nuxt-robots-module'],
    ['prismic-nuxt', {
      endpoint: process.env.API_ENDPOINT || "https://maximumarchive.cdn.prismic.io/api/v2",
      linkResolver: function(doc, ctx) {
        return '/'
      }
    }]
  ],
  plugins: [
    '~/plugins/lodash.js',
    {src: '~/plugins/particles.js', ssr: false},
    {src:'~/plugins/slider.js', ssr: false},
    {src: '~/plugins/glide.js', ssr: false}
  ],
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
    middleware: 'pages'
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
  },
  generate: {
    routes: async () => {
      return await Prismic.getApi("https://maximumarchive.cdn.prismic.io/api/v2").then(function(api) {

        return api.query("", {orderings: '[my.project.year desc]'});
      }).then(function (response) {
        return response.results.map((project) => {
          return {
            route: '/' + project.uid,
            payload: project
          }
        })
      });
    }
  }
}

