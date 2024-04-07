import {defineStore} from "pinia";
import axios from "~/plugins/axios";
import {useToast} from "vue-toastification";
import {useLayoutStore} from "~/store/layout";
import {useProfileStore} from "~/store/profile";

const $axios = axios().provide.axios;


export const useProjectStore = defineStore("projects", {
    state: () => {
        return {
            baseUrl: "https://loogano.com/endpoints/api/",
            galleryModalFlag: false,
            projectLists: [],
            countdownEnd: "",
            projectId: "",
            projectsImprovePercent: [],
            projectListSlider: [],
            projectDetails: [],
            investmentEndingTime: null,
            investmentTimeFlag: true,
            projectImages: [],
            projectPDF: [],
            projectDetailImprovePercent: [],
            investSuccessData: [],
            investSuccessArea: "",
            sliderProjectPercent: [],
            walletNeed: false,
            policyCheck: false,
            buyProjectLoading: false,
            certificateFlag: false,
            certificateData : {
                id: '',
                area: '',
                transactionId: '',
                totalAmount: 2,
                date: '',
                address: '',
                title: '',
                meter: '',
                fName: '',
                lName: '',
            }
        }
    },
    actions: {
        onchangeModalStatus() {
            this.galleryModalFlag = this.galleryModalFlag === false;
        },
        // showErshad() {
        //     $axios.get()
        // },
        async fetchProjectList() {
            const {data: project, error, refresh, pending} = await useFetch("/projects?page=1&count=8", {
                baseURL: this.baseUrl
            });
            this.projectLists = project.value.data.data;
            console.log(this.projectLists)


        },
        async fetchSliderProjectList() {
            const {data: sliderProjects, error, refresh, pending} = await useFetch("/projects?page=1&count=3", {
                baseURL: this.baseUrl
            });
            this.projectListSlider = sliderProjects.value.data.data;

            sliderProjects.value.data.data.forEach(item => {
                var projectStart = new Date(item.project_start).getTime();
                var projectEnd = new Date(item.project_end).getTime();
                var now = new Date().getTime();

                var totalTime = projectEnd - projectStart;
                var timeSpent = now - projectStart;

                let percent = (timeSpent / timeSpent) * 100;

            })

        },
        async fetchProjectById(id) {

            const toast = useToast();

            $axios.get(`/projects/${id}`).then(res => {
                this.projectDetails = res.data.data;
                if (this.countdownEnd === "") {
                    this.countdownEnd = res.data.data.investment_start;
                }

                let detailsImage = [];
                let detailsPDF = [];

                res.data.data.files.forEach(item => {
                    if (item.type === 'image') {
                        detailsImage.push(item);
                    } else {
                        detailsPDF.push(item);
                    }
                })
                this.projectImages = detailsImage;
                this.projectPDF = detailsPDF;


            }).catch(err => {
                toast.error("خطا در برقراری ارتباط با سرور");
            })

        },
        async insertInvest(id, area) {

            const router = useRouter();
            const toast = useToast();
            this.projectId = id;

            if (area >= 1 ) {
                $axios.post("/panel/invoice", {
                    project_id: id,
                    area: area,
                }).then(res => {

                    const layoutStore = useLayoutStore();

                    if (layoutStore.isAuth === false) {
                        toast.error("لطفا اول وارد حساب کاربری خود شوید");
                    } else {
                        if (res.data.errors === "STAGE_MIN_AREA_PER_USER_INVALID") {
                            toast.error("شما باید از حداقل متراژ تعریف شده بیشتر خریداری کنید")
                        } else if (res.data.errors === "NO_ENOUGH_BALANCE_TO_BLOCK") {
                            toast.error("موجودی کیف پول شما کافی نیست")
                            this.walletNeed = true;
                        } else if (res.data.errors === "STAGE_MAX_AREA_EXCEED") {
                            toast.error("شما از حداکثر متراژ تعریف شده بیشتر خریداری کردید");
                        } else if (res.data.code === 100) {
                            this.investSuccessArea = area;
                            this.investSuccessData = res.data.data.invoice;
                            router.push(`/projects/${id}/buy`);
                        }
                    }
                    // router.push(`/projects/${id}/buy`);
                    // this.investSuccessData = invest.value.data;
                    // this.investSuccessArea = area;
                }).catch(err => {

                    if (err.response.status === 401) {
                        toast.error("لطفا وارد حساب کاربری خود شوید")
                    }

                })
            }else {
                toast.error("شما حداقل خرید برای سرمایه گذاری را رعایت نکردید!");
            }

        },

        async successPaymentDetails(id) {

            const toast = useToast();

            this.certificateFlag = true;
            $axios.get(`/panel/assets/${id}`).then(res => {
                this.certificateFlag = false;
                this.certificateData.area = res.data.data.area;
                this.certificateData.date = res.data.data.created_at;
                this.certificateData.id = res.data.data.id;
                this.certificateData.totalAmount = JSON.parse(res.data.data.invoice_details).pure_amount;
                this.certificateData.transactionId = res.data.data.transaction_id;
                this.certificateData.address = res.data.data.project.address;
                this.certificateData.title = res.data.data.project.title;
                this.certificateData.meter = res.data.data.project.area_cm;
                this.certificateData.fName = res.data.data.user.first_name;
                this.certificateData.lName = res.data.data.user.last_name;

            }).catch(err => {
                toast.error("مشکلی در دریافت گواهی بوجود آمد")
            })
        },
        async buyProject(method, amount) {

            const router = useRouter();
            const toast = useToast();
            const layoutStore = useLayoutStore();

            this.buyProjectLoading = true;
            const profileStore = useProfileStore();

            if (this.policyCheck === false) {
                toast.error("شما قوانین لوگانو را تایید نکردید!")
                this.buyProjectLoading = false;
            }else {

                if (method === 1) {
                    localStorage.setItem("amount", amount)
                    localStorage.setItem("id", this.projectId)
                    localStorage.setItem("area", this.investSuccessArea)

                    profileStore.chargeWallet(amount);
                    //// اینجا باید مبلغو ورودی بگیره
                    // profileStore.chargeWallet()
                } else {

                    if (process.client) {
                        if (localStorage.getItem("area")) {
                            localStorage.removeItem("area");
                            localStorage.removeItem("id");
                            localStorage.removeItem("maount");
                        }
                    }

                    $axios.post("/panel/buy", {
                        project_id: this.projectId,
                        area: this.investSuccessArea,
                    }).then(res => {
                        if (layoutStore.isAuth === false) {
                            toast.error("لطفا اول وارد حساب کاربری خود شوید");
                        } else {
                            if (res.data.errors === "STAGE_MIN_AREA_PER_USER_INVALID") {
                                toast.error("شما باید از حداقل متراژ تعریف شده بیشتر خریداری کنید")
                            } else if (res.data.errors === "NO_ENOUGH_BALANCE_TO_BLOCK") {
                                toast.error("موجودی کیف پول شما کافی نیست")
                                this.walletNeed = true;
                                this.buyProjectLoading = false;
                            } else if (res.data.errors === "STAGE_MAX_AREA_EXCEED") {
                                toast.error("شما از حداکثر متراژ تعریف شده بیشتر خریداری کردید");
                            } else if (res.data.code === 100) {

                                $axios.post("/panel/buy/verify", {
                                    project_id: this.projectId,
                                    area: this.investSuccessArea,
                                    invoice: res.data.data.invoice,
                                    block: res.data.data.block
                                }).then(res => {
                                    profileStore.fetchProfileData();
                                    this.buyProjectLoading = false;
                                    router.push(`/payment/success/${res.data.data.id}`)
                                }).catch(err => {
                                    router.push("/payment/error")
                                    toast.error("خطا در ارسال اطلاعات")
                                })

                            }
                        }
                    }).catch(err => {

                        if (err.response.status === 401) {
                            toast.error("لطفا وارد حساب کاربری خود شوید")
                        }

                    })
                }

            }
        },
        async buyProjectOnline(id, area) {

            const router = useRouter();
            const toast = useToast();
            const layoutStore = useLayoutStore();

            this.buyProjectLoading = true;
            const profileStore = useProfileStore();

            $axios.post("/panel/buy", {
                project_id: id,
                area: area,
            }).then(res => {
                if (layoutStore.isAuth === false) {
                    toast.error("لطفا اول وارد حساب کاربری خود شوید");
                } else {
                    if (res.data.errors === "STAGE_MIN_AREA_PER_USER_INVALID") {
                        toast.error("شما باید از حداقل متراژ تعریف شده بیشتر خریداری کنید")
                    } else if (res.data.errors === "NO_ENOUGH_BALANCE_TO_BLOCK") {
                        toast.error("موجودی کیف پول شما کافی نیست")
                        this.walletNeed = true;
                    } else if (res.data.errors === "STAGE_MAX_AREA_EXCEED") {
                        toast.error("شما از حداکثر متراژ تعریف شده بیشتر خریداری کردید");
                    } else if (res.data.code === 100) {

                        if (process.client) {
                            if (localStorage.getItem("area")) {
                                localStorage.removeItem("area");
                                localStorage.removeItem("id");
                                localStorage.removeItem("maount");
                            }
                        }

                        $axios.post("/panel/buy/verify", {
                            project_id: id,
                            area: area,
                            invoice: res.data.data.invoice,
                            block: res.data.data.block
                        }).then(res => {
                            this.buyProjectLoading = false;
                            profileStore.fetchProfileData();
                            router.push("/payment/success");
                        }).catch(err => {

                            if (process.client) {
                                if (localStorage.getItem("area")) {
                                    localStorage.removeItem("area");
                                    localStorage.removeItem("id");
                                    localStorage.removeItem("maount");
                                }
                            }
                            toast.error("کیف پول شما به اندازه ی مبلغ سرمایه گذاری شارژ شد اما خطایی در خرید پروژه رخ داد!")
                            profileStore.fetchProfileData();

                            router.push("/payment/error")
                            toast.error("خطا در ارسال اطلاعات")
                        })
                    }
                }
            }).catch(err => {

                if (process.client) {
                    if (localStorage.getItem("area")) {
                        localStorage.removeItem("area");
                        localStorage.removeItem("id");
                        localStorage.removeItem("maount");
                    }
                }

                toast.error("کیف پول شما به اندازه ی مبلغ سرمایه گذاری شارژ شد اما خطایی در خرید پروژه رخ داد!")

                if (err.response.status === 401) {
                    toast.error("لطفا وارد حساب کاربری خود شوید")
                }

            })

        },
        async test(data) {
            const {data: invest, error, pending} = await useFetch("/panel/invoice", {
                baseURL: this.baseUrl,
                method: "POST",
                fetchOptions: {
                    mode: "cors"
                },
                body: {
                    project_id: this.projectDetails.id,
                    area: 3,
                }
            })

        },

    }
})