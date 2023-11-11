// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
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
        // '@alireza-ab/persian-date/nuxt',
        // '@alireza-ab/vue-persian-datepicker/nuxt',
        ["nuxt-plotly", {inject: true}],
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
