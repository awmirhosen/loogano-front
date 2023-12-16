
import {useLayoutStore} from "~/store/layout";

export default defineNuxtRouteMiddleware((to, from) => {

    const layoutStore = useLayoutStore();

    if (to.fullPath === '/login' && layoutStore.isAuth) {
        return navigateTo('/');
    }

    if (to.fullPath === '/register' && layoutStore.isAuth) {
        return navigateTo('/');
    }


})