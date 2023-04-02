// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1.0',
      title: 'MHC Best',
      meta: [
        { name: 'description', content: 'MHC Best | Jongste Jeugd Weekend' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'msapplication-config', content: '/assets/favicons/browserconfig.xml' },
        { name: 'theme-color', content: '#fff' },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          type: 'image/x-icon',
          href: '/assets/favicons/apple-touch-icon.png',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/assets/favicons/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/favicons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicons/favicon-16x16.png' },
        { rel: 'manifest', href: '/assets/favicons/site.webmanifest' },
        { rel: 'mask-icon', href: '/assets/favicons/safari-pinned-tab.svg', color: '#5bbad5' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/image-edge',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    ['@storyblok/nuxt', { accessToken: '7HfGfsjuelrueg4FycJhAAtt' }],
  ],
  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com',
    },
    screens: {
      xxs: 320,
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
    },
  },
  googleFonts: {
    families: {
      Alkatra: {
        wght: [400, 500],
        // ital: [300, 400, 700],
      },
    },
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      siteHostname: process.env.SITE_HOSTNAME || '',
      contentVersion: process.env.NUXT_STORYBLOK_CONTENTVERSION || 'draft',
    },
  },
});
