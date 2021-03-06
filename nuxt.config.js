
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title:"贾府公子文和",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {  httpEquiv: 'Content-Security-Policy', content: 'upgrade-insecure-requests' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/lzfavicon.ico' },
      { rel: "stylesheet", href: '/css/font-awesome.min.css' },
      { rel: "stylesheet", href: '/icon/iconfont.css' },   
    ],
    script: [{
      src: "/waifu/autoload.js"
    }]
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/stylus/main.styl',
  ],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/infinite-scroll', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://www.eightythousand.com:4000/',
      pathRewrite: { '^/api': '' }
    },
    '/lz': {
      target: 'http://www.eightythousand.com:12937/blog/',
      //target: 'http://localhost:12937/blog/',
      pathRewrite: { '^/lz': '' }
    }
  },
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [/^element-ui/],
  }
}
