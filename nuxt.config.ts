// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    css: [
        `~/assets/css/global.css`,
    ],
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt', 'nuxt-swiper', '@pinia/nuxt', 'nuxt3-leaflet', ["nuxt-plotly", { inject: true }]],
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
    }
})
