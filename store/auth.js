import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            stepLogin: 1,
            stepSignup: 1,
            baseUrl: "http://api.loogano.com/api/",
            phoneNumberLoginExistMessage: "شماره ی مورد نظر ",
            phoneNumberSignupExistFlag: false,
            loginPhoneNumber: "",
            signupPhoneNumber: "",
            passwordLoginErrorFlag: false,
            loading: false,
        }
    },
    actions: {
        async verifyMobile(mobile) {
            const {
                data: verified,
                error,
                refresh,
                pending
            } = await useFetch(() => `/auth/check-mobile?mobile=${mobile}`, {
                baseURL: this.baseUrl,
            });
            console.log(error.value);
            console.log(verified.value);
            if (verified.value.code === -1) {
                this.phoneNumberLoginExistFlag = true;
                this.stepSignup = 2;
                this.signupPhoneNumber = mobile;
            } else if (verified.value.code === 100) {
                console.log("100")
                this.stepLogin = 2;
                this.phoneNumberSignupExistFlag = true;
                this.loginPhoneNumber = mobile;
            }
        },
        async sendOtpRequest(phoneNumber) {

        },
        async loginWithPassword(password) {

            console.log(password, this.loginPhoneNumber)
            const {data: verified, error, refresh, pending} = await useFetch(() => `/auth/login`, {
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
        async signupMobileEntered(phoneNumber) {

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
