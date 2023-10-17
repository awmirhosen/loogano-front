import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            stepLogin: 1,
            baseUrl: "http://api.loogano.com/api/",
            phoneNumberLoginExistMessage: "شماره ی مورد نظر ",
            phoneNumberLoginExistFlag: false,
            loginPhoneNumber: "",
            passwordLoginErrorFlag: false,
            loading : false,
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
                console.log("-1");
                this.phoneNumberLoginExistFlag = true
            }else if (verified.value.code === 100) {
                this.stepLogin = 2;
                this.loginPhoneNumber = mobile;
            }
        },
        async loginWithPassword(password) {

            console.log(password, this.loginPhoneNumber)
            const { data: verified, error, refresh, pending } = await useFetch( () => `/auth/login`, {
                method: "POST",
                body: {
                    mobile: this.loginPhoneNumber,
                    password: password,
                },
                baseURL: this.baseUrl,
            });
            if (error.value) {
             if (error.value.data.code === 99) {
                 this.passwordLoginErrorFlag = true;
             }
            }


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
