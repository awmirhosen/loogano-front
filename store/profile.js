import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios

export const useProfileStore = defineStore("profile", {
    state: () => {
        return {
            profileData: {},
            userProjects: {},
            cardData: {
                first:  "",
                second: "",
                third: "",
                forth: "",
                sheba: "",
            },
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
                if (process.client) {
                    if (localStorage.getItem("area")) {
                        localStorage.removeItem("area");
                        localStorage.removeItem("id");
                        localStorage.removeItem("maount");
                    }
                }
                toast.error("مشکلی در ارتباط با سرور پیش آمده");
                console.log(err);
            })
        },
        async fetchProfileData () {

            const toast = useToast()

            $axios.get("/user/me").then(res => {
                this.profileData = res.data.data;
            }).catch(err => {
                console.log(err);
            })

        },
        async fetchUserProjects() {

            const toast = useToast();

            $axios.get("/panel/assets").then(res => {
                this.userProjects = res.data.data;
                console.log("پروژه ها دریافت شد")
                console.log(res);
            }).catch(err => {
                console.log(err);
                toast.error("مشکلی در ارتباط با سرور پیش آمده")
            })
        }
    },

})
