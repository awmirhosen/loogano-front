import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import axios from "~/plugins/axios";
import {useLayoutStore} from "~/store/layout";

const $axios = axios().provide.axios;

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            stepLogin: 1,
            stepSignup: 1,
            baseUrl: "https://loogano.com/endpoints/api/",
            phoneNumberLoginExistMessage: "شماره ی مورد نظر ",
            phoneNumberSignupExistFlag: false,
            phoneNumberLoginExistFlag: false,
            loginPhoneNumber: "",
            signupPhoneNumber: "",
            passwordLoginErrorFlag: false,
            signupLoading: false,
            loginLoading: false,
            otpLoading: false,
        }
    },
    actions: {
        async verifyMobile(mobile) {
            this.loginLoading = true;
            const toast = useToast()

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
                this.loginLoading = false;
                toast.error("حسابی با این تلفن همراه وجود ندارد")
            } else if (verified.value.code === 100) {
                this.loginLoading = false;
                this.stepLogin = 2;
                this.loginPhoneNumber = mobile;
            }
        },

        async verifyMobileCode(token) {

            this.loginLoading = true;
            const layoutStore = useLayoutStore();
            const router = useRouter();
            const toast = useToast();

            $axios.post("/auth/otp-login", {
                mobile: this.loginPhoneNumber,
                token: token,
            }).then(res => {
                console.log(res);
                layoutStore.isAuth = true;
                localStorage.setItem("token", res.data.data.token);
                router.push("/");
                location.reload();
                this.loginLoading = false;
            }).catch(err => {
                console.log(err.response.data.errors)
                if (err.response.data.code === 99) {
                    toast.error("مشکلی در ارسال پیامک ایجاد شده")
                } else if (err.response.data.errors.message === "invalid_token") {
                    toast.error("کد وارد شده اشتباه است")
                }
                this.loginLoading = false;
            })
        },
        async codeLogin(mobile) {
            this.otpLoading = true;
            $axios.post("/auth/forget", {
                mobile: this.loginPhoneNumber,
            }).then(res => {
                console.log(res);
                this.stepLogin = 3;
                this.otpLoading = false;
            }).catch(err => {
                if (err.response.data.code === 99) {
                    toast.error("مشکلی در ارسال پیامک ایجاد شده")
                }
                this.loginLoading = false;
                this.otpLoading = false;
            })
        },
        async registerMobileVerify(phoneNumber) {

            this.signupLoading = true;
            const toast = useToast();

            const {
                data: verified,
                error,
            } = await useFetch(() => `/auth/check-mobile?mobile=${phoneNumber}`, {
                baseURL: this.baseUrl,
            });

            if (verified.value.code === -1) {
                this.sendToken(phoneNumber);
                this.signupLoading = false;
                this.stepSignup = 2;
                this.signupPhoneNumber = phoneNumber;
            } else if (verified.value.code === 100) {
                this.signupLoading = false;
                toast.error("شما با این شماره تلفن همراه ثبت نام کردید");
            }

        },
        async loginWithPassword(password) {
            const router = useRouter();
            const toast = useToast();
            const layoutStore = useLayoutStore();
            this.loginLoading = true;

            $axios.post("/auth/login", {
                mobile: this.loginPhoneNumber,
                password: password
            }).then(res => {
                console.log(res);
                layoutStore.isAuth = true;
                localStorage.setItem("token", res.data.data.token);
                router.push("/");
                location.reload();
                this.loginLoading = false;
            }).catch(err => {
                if (err.response.data.code === 99) {
                    toast.error("رمز عبور شما صحیح نیست");
                }
                this.loginLoading = false;
            })

        },
        async registerUser(data, mobile) {
            const toast = useToast();
            const router = useRouter();

            const layoutStore = useLayoutStore();

            $axios.post("/auth/register", {
                first_name: data.firstName,
                last_name: data.lastName,
                mobile: mobile,
                email: data.email,
                national_code: data.nationalCode,
                token: data.token,
                password: data.password,
                password_confirmation: data.password
            }).then(res => {
                console.log(res);
                layoutStore.isAuth = true;
                console.log(res.data);
                localStorage.setItem("token", res.data.data);
                router.push("/");
                location.reload();
            }).catch(err => {
                console.log(err.response.data.message)
                if (err.response.data.message) {
                    if (err.response.data.message.match('The national code has already been taken.')) {
                        toast.error("کد ملی وارد شده قبلا استفاده شده!")
                    } else if (err.response.data.message.match('email')) {
                        toast.error("ایمیل وارد شده قبلا استفاده شده!")
                    }
                }
            })
        },
        async sendToken(mobile) {

            const toast = useToast();
            this.otpLoading = true;

          $axios.post("/auth/new-user-otp", {
              mobile: mobile,
          }).then(res => {
              this.otpLoading = false;
          }).catch(err => {
              toast.error('مشکلی در برقراری ارتباط پیش آمده')
              this.otpLoading = false;
          })

        },
        loginSmsOtp(data) {
            console.log(data);
            this.stepLogin = 3;
        },
        backToPassword(data) {
            console.log(data)
            this.stepLogin = 2;
        },
        logout() {

            const router = useRouter();
            router.push("/");

            const layoutStore = useLayoutStore();
            localStorage.removeItem("token");
            layoutStore.isAuth = false;
            location.reload();
        }
    },

})
