// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {rel: "icon", type: "image/x-icon", href: "/images/favicon.svg"},
            ]
        },
    },
    css: [
        `~/assets/css/global.css`,
    ],
    devtools: {enabled: false},
    modules: [
        '@nuxtjs/tailwindcss',
        '@formkit/nuxt',
        'nuxt-swiper',
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        'nuxt3-leaflet',
        '@sidebase/nuxt-pdf',
        'nuxt-pdfeasy',
    ],
    vite: {
        optimizeDeps: {
            include: ["plotly.js-dist-min"],
        },
    },
    swiper: {
        // Swiper options
        //----------------------
        // prefix: 'Swiper',
        // styleLang: 'css',
        // modules: ['navigation', 'pagination'], // all modules are imported by default
    },
    components: true
})
