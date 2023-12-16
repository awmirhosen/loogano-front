import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios

export const useProfileStore = defineStore("profile", {
    state: () => {
        return {
            profileData: {}
        }
    },
    actions: {
        // wallet functions
        async chargeWallet(amount) {
            const toast = useToast();

            $axios.post("/user/charge", {
                amount: amount,
                gateway: 1,
            }).then(res => {
                navigateTo(res.data.data.url, {external: true});
            }).catch(err => {
                toast.error("مشکلی در ارتباط با سرور پیش آمده");
                console.log(err);
            })
        },
        async fetchProfileData () {

            const toast = useToast()

            $axios.get("/user/me").then(res => {
                this.profileData = res.data.data;
                console.log(res);
            }).catch(err => {
                console.log(err);
                toast.error("مشکلی در ارتباط با سرور پیش آمده")
            })

        }
    },

})
