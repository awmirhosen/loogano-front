import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios

export const useProfileStore = defineStore("profile", {
    state: () => {
        return {
            profileData: {},
            profileDataLoading: true,
            userProjects: {},
            sumNewPrice: 0,
            propertyLoading: true,
            cardData: {
                creditNumber: "",
                sheba: "",
            },
            mobileHeaderFlag: false,
            informationStep: 1,
            stepsLoading: false,
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

            })
        },
        async fetchProfileData () {

            const toast = useToast();

            $axios.get("/user/me").then(res => {
                this.profileData = res.data.data;
                this.profileDataLoading = false;
            }).catch(err => {
                toast.error("مشکلی در دریافت اطلاعات شخصی پیش آمده");
            })

        },
        async fetchBankAccount() {

            const toast = useToast();

            $axios.get("/user/bank-account").then(res => {
                this.cardData.creditNumber = res.data[0]?.card_number;
                this.cardData.sheba = res.data[0]?.iban_number;
            }).catch(err => {
                toast.error("مشکلی در دریافت اطلاعات بانکی پیش آمده");
            })

        },
        async fetchUserProjects() {

            const toast = useToast();

            $axios.get("/panel/assets").then(res => {
                this.userProjects = res.data.data;

                var sumNewPrice = 0;
                res.data.data.projects.forEach((item) => {

                    var sumTotalPrice = 0;
                    sumTotalPrice = item.newest_price * item.area;
                    sumNewPrice = sumTotalPrice + sumNewPrice;
                })
                this.sumNewPrice = sumNewPrice;
                this.propertyLoading = false;

            }).catch(err => {
                toast.error("مشکلی در دریافت پروژه های شخصی شما پیش آمده")
            })
        },
        async sendPersonalData(data, birth, city) {

            const toast = useToast();

            this.stepsLoading = true;

            $axios.patch("/user/me", {
                first_name: data.firstName,
                last_name: data.lastName,
                national_code: this.profileData.national_code,
                father_name: "",
                birth_date: birth,
                province: data.province,
                city: city,
                postal_code: data.postalCode,
                address: data.address,
            }).then(res => {
                toast.success("اطلاعات جدید شما با موفقیت ثبت شد!")
                this.stepsLoading = false;
            }).catch(err => {
                toast.error("مشکلی در ارتباط با سرور پیش آمده");
                this.stepsLoading = false;
            })

        },

        async sendCardData(cardNumber, sheba) {

            const toast = useToast();

            $axios.post("/user/bank-account", {
                card_number: cardNumber,
                iban_number: sheba,
            }).then(res => {
                toast.success("اطلاعات جدید بانکی شما با موفقیت ثبت شد!")
            }).catch(err => {
                console.log(err);
            })
        }

    },

})
