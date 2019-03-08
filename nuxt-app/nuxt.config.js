const pkg = require('./package');
const path = require('path');
const AppConfig = require('./config/app-config');
const MessageConfig = require('./config/message-config');
const SleeveConfig = require('./config/sleeve-config');
const StoryConfig = require('./config/story-config');

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'theme-color', content: '#000000'},
    ],
    link: [
      {rel: 'icon', size: '192x192', href: '/imgs/favicon-192.png'},
      {rel: 'apple-touch-icon', size: '144x144', href: '/imgs/favicon-144.png'},
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/global.styl',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/global',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }

      // add aliases
      config.resolve.alias['@styles'] = resolve('assets/styles');
      config.resolve.alias['@images'] = resolve('assets/images');
      config.resolve.alias['@fonts'] = resolve('assets/fonts');
      config.resolve.alias['@comp'] = resolve('components');
    },
  },
  env: {
    APP_CONFIG: AppConfig,
    MESSAGE_CONFIG: MessageConfig,
    SLEEVE_CONFIG: SleeveConfig,
    STORY_CONFIG: StoryConfig,
  },
};

/*
 * resolve
 * @return {!String} absolute path
 */
function resolve(relPath) {
  return path.join(__dirname, relPath);
}
