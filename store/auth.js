import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            stepLogin: 1,
            baseUrl: "http://api.loogano.com/api/",
            phoneNumberLoginExistMessage: "",
            loginPhoneNumber: "",
        }
    },
    actions: {
        async enteredMobile(mobile) {
            const { data: verified, error, refresh, pending } = await useFetch( () => `/auth/check-mobile?mobile=${mobile}`, {
                baseURL: this.baseUrl,
            });
            console.log(error.value);
            console.log(verified.value);
            if (verified.value.code === -1) {
                this.phoneNumberLoginExistMessage = "شماره ی وارد شده موجود نمیباشد"
            }else if (verified.value.code === 100) {
                this.stepLogin = 2;
                this.loginPhoneNumbered = mobile;
            }
        },
        async loginWithPassword(password) {
            const { data: verified, error, refresh, pending } = await useFetch( () => `/auth/check-mobile?mobile=${mobile}`, {
                method: "POST",
                data: {
                    mobile: this.loginPhoneNumber,
                    password: password,
                },
                baseURL: this.baseUrl,
            });
            console.log(verified);
            console.log(error)

        },
        loginSmsOtp(data) {
            console.log(data);
            this.stepLogin = 3;
        },
        backToPassword(data) {
            console.log(data)
            this.stepLogin = 2;
        }
    }
})
