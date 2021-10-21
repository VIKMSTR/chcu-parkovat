export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Chcu parkovat v Brně! - aktuální obsazenost parkovacích domů v Brně.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Chcu parkovat v Brně! Chcu vědět kde je místo! Stránka zobrazující aktuální obsazenost parkovacích domů v Brně.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#2d89ef' },
      { name: 'theme-color', content: '#b1d3ff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32',href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16',href: '/favicon-16x16.png' },
      { rel: 'manifest',  href: '/site.webmanifest' },
      { rel: 'mask-icon',  href: '/safari-pinned-tab.svg',color: '#5bbad5' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
    '@nuxtjs/robots'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "https://services6.arcgis.com/fUWVlHWZNxUvTUh8/arcgis/rest/services/carparks_live"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: "Chcu parkovat v Brně!",
      short_name: "Chcuparkovat.cz",
      icons: [
          {
              "src": "/android-chrome-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "/android-chrome-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
      ],
      theme_color: "#b1d3ff",
      background_color: "#b1d3ff",
      display: "standalone"
    }
  },
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  googleAnalytics: {
    id: 'G-3G567XVL16'
  },
  robots: {
    UserAgent: '*',
    Disallow: ''
  }

}
