
import {useLayoutStore} from "~/store/layout";

export default defineNuxtRouteMiddleware((to, from) => {

    const layoutStore = useLayoutStore();

    if (!layoutStore.isAuth) {
        return navigateTo('/');
    }

})