const cleanupIDs = require('svgo/plugins/cleanupIDs')
const removeAttrs = require('svgo/plugins/removeAttrs')
const removeDimensions = require('svgo/plugins/removeDimensions')
const removeViewBox = require('svgo/plugins/removeViewBox')
const inlineStyles = require('svgo/plugins/inlineStyles')
const inlineDefs = require('@nuxtjs/svg-sprite/lib/plugins/inlineDefs.js')

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
        plugins: [function () {
          removeAttrs.active = true
          removeAttrs.params.attrs = 'svg:id'
          removeViewBox.active = false
          removeDimensions.active = true
          inlineStyles.active = true
          inlineStyles.params.onlyMatchedOnce = false

          return [
            removeDimensions,
            cleanupIDs,
            removeAttrs,
            removeViewBox,
            inlineStyles,
            { inlineDefs }
          ]
        }]
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
