// @ts-nocheck
import eslintPlugin from 'vite-plugin-eslint';

// https://nuxt.com/docs/api/configuration/nuxt-config
const cookieControlConfig = require('./cookieconfig.js');

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

  cookieControl: cookieControlConfig,

  css: ['~/assets/css/main.css'],

  devtools: {
    enabled: true,
  },

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

  linkChecker: {
    showLiveInspections: false,
  },

  modules: [
    '@nuxt/image',
    'nuxt-icon',
    '@nuxtseo/module',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/html-validator',
    ['@storyblok/nuxt', { accessToken: process.env.NUXT_STORYBLOK_APIKEY }],
  ],

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
      storyblokSpaceId: process.env.NUXT_STORYBLOK_SPACE_ID,
    },
  },

  site: {
    url: 'https://jongstejeugdweekend.nl',
    name: 'MHC Best | Jongste Jeugd Weekend',
    description:
      'Het MHC Jongste Jeugd Weekend is een jaarlijks terugkerend evenement voor de jongste jeugd (t/m 12 jaar) van hockeyvereniging MHC Best. Twee leuke dagen met o.a. spelletjes, plezier, tentjes opzetten en meer!',
    defaultLocale: 'nl',
    identity: {
      type: 'Organization',
    },
    twitter: '@mhc_best',
  },
});
