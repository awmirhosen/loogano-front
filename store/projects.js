import {defineStore} from "pinia";
import axios from "axios";

// const axios = useNuxtApp().$Axios

export const useProjectStore = defineStore("projects", {
    state: () => {
        return {
            baseUrl: "https://loogano.com/endpoints/api/",
            galleryModalFlag: false,
            projectLists: [],
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
        }
    },
    actions: {
        onchangeModalStatus() {
            this.galleryModalFlag = this.galleryModalFlag === false;
        },
        async fetchProjectList() {
            const { data: project, error, refresh, pending } = await useFetch("/projects?page=1&count=8", {
                baseURL: this.baseUrl
            });
            console.log(error);
            this.projectLists = project.value.data.data;

            console.log("project slider list:", project);

        },
        async fetchSliderProjectList() {
            const { data: sliderProjects, error, refresh, pending } = await useFetch("/projects?page=1&count=3", {
                baseURL: this.baseUrl
            });
            console.log(error);
            this.projectListSlider = sliderProjects.value.data.data;

            console.log("project slider list:", this.projectListSlider)
        },
        async fetchProjectById(id) {

            const { data: details, error, refresh, pending } = await useFetch( () => `/projects/${id}`, {
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
                }else {
                    detailsPDF.push(item);
                }
            })
            this.projectImages = detailsImage;
            this.projectPDF = detailsPDF;


            console.log("project details:", details.value.data)
        },
        async insertInvest(id, area) {

            const {data: invest, error, pending} = await useFetch("/panel/buy", {
                baseURL: this.baseUrl,
                method: "POST",
                headers: {
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDA3YjBkMzg3YmJkZjEyZGQyZDZjZTE0MDhmM2VmYjBmNjJhZjUwMGYyYTBiYWQyM2NlZGJmMDI1NDFmNjVhNDU2NjY1ZDc5NDk4N2MxOTEiLCJpYXQiOjE2OTY2NjE3MzEuNzUyODgxLCJuYmYiOjE2OTY2NjE3MzEuNzUyODgzLCJleHAiOjE3MjgyODQxMzEuNzQ2Mzg2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.fbKIlY1Bw_k5OaYK6MasIZr4OxJGxnBx33m7qiQ390pTS-hw6aUYM8adB0aH0Wiewxja-HMnShrgjNImoFqv1sCfcz5wrxb6bM-0sAv9GxxueYBdeOMgbkuWpyvAI_5WSEvcM4AEi3kKwMiJAoUFE7TIjoQTIH9rzMYIv6bMS8wjSYOJPT1aAsfaCj8fmGHQp_kY_2VGlScQ9zGU3crmxwOOMYS9ct7J1ahNqspOxShXCHtBdb6DRJp1SzeEcUCjXUSM33BwAwhngIt2mto_evvyPy5kyMVUqBvmjxJz10u6S6bU_TSDeXfjDzNkPzJDLZlbeTea2C8dPv_raYXkI1lKiheP-CMu7z9luFmmWF4SiP14-D43sObE5UySBXedy0eXJ530WYtb66sZajMa5YHOhVfCVNOGAoZf98w0jBwLdz1-kvqROyBkIemH5pkeuzfRkT7DAzE3o2IVBHjBJAMxY99Gun3vpju-9sNfS3Mtbe7oCbgbMOarUUlrcQa8Kzgu2ZkjtcH3vN2d3XtM48ZvU6M_XkVqzSDS-a_8RRTQ_7oyl-s0XyOXnQEZR0XT1dG3NBo7ntXy5rpjWmNZsPwnRiGFgFgZrHoX9cshShoEc0nmj0uRTD9ewozJFmgX_Px3TFnjwYIbPHM_TRGVODPwu5BBUPIZN2TK1Q_tjeA"
                },
                body: {
                    project_id: id,
                    area: area,
                }
            })
            console.log(error.value);

            if (invest.value.code === 100) {
                this.investSuccessData = invest.value.data
                this.investSuccessArea = area
            }

            const router = useRouter();
            router.push(`/projects/${id}/buy`);

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
        axTest() {
            axios.post("/panel/buy", {
                "project_id": 1,
                "area": 3,
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }

    }
})