import { defaultPlugins } from './webpack/svgo.config'

export default {
  ssr: true,
  target: 'server',
  head: {
    title: process.env.npm_package_name || 'Rental vehicles | Pepelane',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { httpEquiv: 'x-ua-compatible', content: 'ie-edge' },
      { hid: 'description', name: 'description', content: 'Rental vehicles' }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },
  srcDir: 'src',
  plugins: [
    '@/plugins/vue-lazyload',
    '@/plugins/v-blur-directive',
    '@/plugins/filter-to-currency'
  ],
  buildModules: [
    '@nuxtjs/color-mode'
  ],
  modules: [
    '@nuxtjs/svg-sprite',
    'portal-vue/nuxt'
  ],
  svgSprite: {
    svgoConfig () {
      return {
        plugins: [defaultPlugins()]
      }
    }
  },
  build: {
    extend (config, ctx) {

    },
    extractCSS: true
  },
  css: [
    'normalize.css',
    '@/assets/style/app.scss'
  ],
  pageTransition: {
    name: 't-fade',
    mode: 'out-in'
  },
  loading: {
    color: '#1B2FFF'
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light'
  }
}
