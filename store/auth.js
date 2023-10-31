import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios

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
            loading: false,
            signupLoading: false,
        }
    },
    actions: {
        async verifyMobile(mobile) {

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
                toast.error("حسابی با این تلفن همراه وجود ندارد")
            } else if (verified.value.code === 100) {
                this.stepLogin = 2;
                this.loginPhoneNumber = mobile;
            }
        },
        async registerMobileVerify(phoneNumber) {

            this.signupLoading = true;

            const toast = useToast()

            const {
                data: verified,
                error,
            } = await useFetch(() => `/auth/check-mobile?mobile=${phoneNumber}`, {
                baseURL: this.baseUrl,
            });
            console.log(error.value);
            console.log(verified.value);
            if (verified.value.code === -1) {
                this.sendToken(phoneNumber);
                this.signupLoading = false;
                this.stepSignup = 2;
                this.signupPhoneNumber = phoneNumber;
            } else if (verified.value.code === 100) {
                this.signupLoading = false;
                toast.error("شما با این شماره تلفن همراه ثبت نام کردید")
            }
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
        async registerUser(data, mobile) {
            const toast = useToast();
            const router = useRouter();

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
                console.log(res)
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

          $axios.post("/auth/new-user-otp", {
              mobile: mobile,
          }).then(res => {
              console.log(res)
          }).catch(err => {
              console.log(err)
          })

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
