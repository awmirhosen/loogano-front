import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            stepLogin: 1,
        }
    },
    actions: {
        enteredMobile(data) {
            console.log(data);
            this.stepLogin = 2;
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
