import {useLayoutStore} from "~/store/layout";

export default defineNuxtRouteMiddleware((to, from) => {
    const layoutStore = useLayoutStore();

    console.log("hello can you run this first")

    if (process.client) {
        if (localStorage.getItem("token")) {
            console.log("token true")
            layoutStore.isAuth = true;
        }else {
            console.log("token false")
            layoutStore.isAuth = false;
        }
    }

})