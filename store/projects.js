import {defineStore} from "pinia";
import axios from "~/plugins/axios";
import {useToast} from "vue-toastification";
import {useLayoutStore} from "~/store/layout";

const $axios = axios().provide.axios;


export const useProjectStore = defineStore("projects", {
    state: () => {
        return {
            baseUrl: "https://loogano.com/endpoints/api/",
            galleryModalFlag: false,
            projectLists: [],
            projectId: "",
            projectsImprovePercent: [],
            projectListSlider: [],
            projectDetails: [],
            investmentEndingTime: "",
            investmentTimeFlag: true,
            projectImages: [],
            projectPDF: [],
            projectDetailImprovePercent: [],
            investSuccessData: [],
            investSuccessArea: "",
            sliderProjectPercent: [],
            walletNeed: false,
        }
    },
    actions: {
        onchangeModalStatus() {
            this.galleryModalFlag = this.galleryModalFlag === false;
        },
        async fetchProjectList() {
            const {data: project, error, refresh, pending} = await useFetch("/projects?page=1&count=8", {
                baseURL: this.baseUrl
            });
            console.log(error);
            this.projectLists = project.value.data.data;

            console.log("project slider list:", project);

        },
        async fetchSliderProjectList() {
            const {data: sliderProjects, error, refresh, pending} = await useFetch("/projects?page=1&count=3", {
                baseURL: this.baseUrl
            });
            console.log(error.value);
            this.projectListSlider = sliderProjects.value.data.data;

            sliderProjects.value.data.data.forEach(item => {
                var projectStart = new Date(item.project_start).getTime();
                var projectEnd = new Date(item.project_end).getTime();
                var now = new Date().getTime();
                console.log("now : ", now)

                var totalTime = projectEnd - projectStart;
                var timeSpent = now - projectStart;

                let percent = (timeSpent / timeSpent) * 100;
                console.log(percent)

            })

            console.log("project slider list:", this.projectListSlider)
        },
        async fetchProjectById(id) {

            const {data: details, error, refresh, pending} = await useFetch(() => `/projects/${id}`, {
                baseURL: this.baseUrl,
            });

            console.log(error.value);
            this.projectDetails = details.value.data;
            this.investmentEndingTime = details.value.data.investment_end;

            // let currentDate = new Date();
            // let projectStart =details.value.data.project_start.split(" ")[0]
            // projectStart = new Date(projectStart);
            //
            // let fromNow = currentDate - details.value.data.project_start
            // // if (currentDate.getTime() <  )
            //
            // console.log(currentDate.getTime(), projectStart.getTime())


            console.log(details.value.data);

            let detailsImage = [];
            let detailsPDF = [];

            details.value.data.files.forEach(item => {
                if (item.type === 'image') {
                    detailsImage.push(item);
                } else {
                    detailsPDF.push(item);
                }
            })
            this.projectImages = detailsImage;
            this.projectPDF = detailsPDF;


            console.log("project details:", details.value.data)
        },
        async insertInvest(id, area) {

            const router = useRouter();
            const toast = useToast();
            this.projectId = id;

            $axios.post("/panel/invoice", {
                project_id: id,
                area: area,
            }).then(res => {
                console.log(res.data.errors);

                const layoutStore = useLayoutStore();

                if (layoutStore.isAuth === false) {
                    toast.error("لطفا اول وارد حساب کاربری خود شوید");
                }else {
                    if ( res.data.errors === "STAGE_MIN_AREA_PER_USER_INVALID") {
                        toast.error("شما باید از حداقل متراژ تعریف شده بیشتر خریداری کنید")
                    }else if (res.data.errors === "NO_ENOUGH_BALANCE_TO_BLOCK") {
                        toast.error("موجودی کیف پول شما کافی نیست")
                        this.walletNeed = true;
                    } else if (res.data.errors === "STAGE_MAX_AREA_EXCEED") {
                        toast.error("شما از حداکثر متراژ تعریف شده بیشتر خریداری کردید");
                    } else if (res.data.code === 100) {
                        console.log("this is for test")
                        console.log(res.data.data);
                        this.investSuccessArea = area;
                        this.investSuccessData = res.data.data.invoice;
                        router.push(`/projects/${id}/buy`);
                    }
                }
                // router.push(`/projects/${id}/buy`);
                // this.investSuccessData = invest.value.data;
                // this.investSuccessArea = area;
                console.log(res);
            }).catch(err => {
                console.log(err.response.status);

                if (err.response.status === 401) {
                    toast.error("لطفا وارد حساب کاربری خود شوید")
                }

            })

        },
        async buyProject(id) {

            const router = useRouter();
            const toast = useToast();
            const layoutStore = useLayoutStore();

            $axios.post("/panel/buy", {
                project_id: this.projectId,
                area: this.investSuccessArea,
            }).then(res => {
                if (layoutStore.isAuth === false) {
                    toast.error("لطفا اول وارد حساب کاربری خود شوید");
                }else {
                    if ( res.data.errors === "STAGE_MIN_AREA_PER_USER_INVALID") {
                        toast.error("شما باید از حداقل متراژ تعریف شده بیشتر خریداری کنید")
                    }else if (res.data.errors === "NO_ENOUGH_BALANCE_TO_BLOCK") {
                        toast.error("موجودی کیف پول شما کافی نیست")
                        this.walletNeed = true;
                    } else if (res.data.errors === "STAGE_MAX_AREA_EXCEED") {
                        toast.error("شما از حداکثر متراژ تعریف شده بیشتر خریداری کردید");
                    } else if (res.data.code === 100) {

                        $axios.post("/panel/buy/verify", {
                            project_id: this.projectId,
                            area: this.investSuccessArea,
                            invoice: res.data.data.invoice,
                            block: res.data.data.block
                        }).then(res => {
                            console.log(res)
                            router.push("/payment/success")
                        }).catch(err => {
                            console.log(err);
                            router.push("/payment/error")
                            toast.error("خطا در ارسال اطلاعات")
                        })

                    }
                }
            }).catch(err => {
                console.log(err.response.status);

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
            console.log(error.value);

        },

    }
})