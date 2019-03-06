module.exports = {
  /*
  ** Server
  */  
  server: {
    host: 'localhost',
    port: 3000
  },

  /*
  ** Mode
  */   
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'xPortal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'minimal-ui, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { charset: 'utf-8' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'description', name: 'description', content: 'Discover & Play the Best 3D Multiplayer Games' },
      { hid: 'keywords', name: 'keywords', content: '3d, multiplayer, webgl, games' }  
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ] 
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/fonts/fontawesome/css/all.min.css', lang: 'css' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/store.js',      
    '~/plugins/xStorage.js',
    '~/plugins/googleAuth.js'      
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    [
      'nuxt-fire',
      {
        useOnly: ['auth', 'firestore'],
        config: {
          development: {
            apiKey: 'AIzaSyC-qTnRUFeIu5ZSCbqKbfn1tZO7bfH7AV0',
            authDomain: 'xportal-6e95b.firebaseapp.com',
            databaseURL: 'https://xportal-6e95b.firebaseio.com',
            projectId: 'xportal-6e95b',
            storageBucket: 'xportal-6e95b.appspot.com',
            messagingSenderId: '1013979061775'
          },
          production: {
            apiKey: 'AIzaSyC-qTnRUFeIu5ZSCbqKbfn1tZO7bfH7AV0',
            authDomain: 'xportal-6e95b.firebaseapp.com',
            databaseURL: 'https://xportal-6e95b.firebaseio.com',
            projectId: 'xportal-6e95b',
            storageBucket: 'xportal-6e95b.appspot.com',
            messagingSenderId: '1013979061775'
          }
        }
      }
    ]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Generate configuration
  */
 generate: {
    routes: [
      '/warscrap',
      '/krunker',
      '/hordes',
      '/squadd',
      '/squaddroyale',
      '/shellshocker',
      '/blastarena',
      '/deadwalk',
      '/exocraft',
      '/pieai',
      '/hole',
      '/relmz',
      '/robostorm',
      '/skywars',
      '/tanks',
      '/tobattle',
      '/snowball',
      '/warbot'      
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  } 
}
