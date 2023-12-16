import axios from "axios";
import {useLayoutStore} from "~/store/layout";

export default defineNuxtPlugin((NuxtApp) => {

    // const layoutStore = useLayoutStore();

    // if (process.client) {
    //     if (localStorage.getItem("token")) {
    //         layoutStore.isAuth = true;
    //     }else {
    //         layoutStore.isAuth = false;
    //     }
    // }

    axios.defaults.baseURL = 'https://loogano.com/endpoints/api/'
    axios.defaults.withCredentials = false;
    axios.defaults.proxyHeaders = false;
    if(process.client){
        const token = window.localStorage.getItem('token');
        if(token){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            var flag = true;
        }
    }
    return {
        provide: {
            authFlag: flag,
            axios: axios
        },
    }
})