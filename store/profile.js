import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import axios from "~/plugins/axios";
import {useLayoutStore} from "~/store/layout";

const $axios = axios().provide.axios

export const useProfileStore = defineStore("profile", {
    state: () => {
        return {}
    },
    actions: {

        async chargeWallet(amount) {
            $axios.post("/user/charge", {
                amount: amount,
                gateway: 1,
            }).then(res => {
                this.otpLoading = false;
            }).catch(err => {
                console.log(err);
            })
        }
    },

})
