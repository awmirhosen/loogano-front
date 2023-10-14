import axios from "axios";

export default defineNuxtPlugin(async () => {

    const baseUrl = "http://api.loogano.com/api";
    let Axios = axios.create({
        baseURL: baseUrl,
        timeout: 30000,
    });

    Axios.interceptors.request.use(config => {
            config.headers['X-Requested-With'] = 'XMLHttpRequest';
            config.headers['Accept'] = "application/json";

            config.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDA3YjBkMzg3YmJkZjEyZGQyZDZjZTE0MDhmM2VmYjBmNjJhZjUwMGYyYTBiYWQyM2NlZGJmMDI1NDFmNjVhNDU2NjY1ZDc5NDk4N2MxOTEiLCJpYXQiOjE2OTY2NjE3MzEuNzUyODgxLCJuYmYiOjE2OTY2NjE3MzEuNzUyODgzLCJleHAiOjE3MjgyODQxMzEuNzQ2Mzg2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.fbKIlY1Bw_k5OaYK6MasIZr4OxJGxnBx33m7qiQ390pTS-hw6aUYM8adB0aH0Wiewxja-HMnShrgjNImoFqv1sCfcz5wrxb6bM-0sAv9GxxueYBdeOMgbkuWpyvAI_5WSEvcM4AEi3kKwMiJAoUFE7TIjoQTIH9rzMYIv6bMS8wjSYOJPT1aAsfaCj8fmGHQp_kY_2VGlScQ9zGU3crmxwOOMYS9ct7J1ahNqspOxShXCHtBdb6DRJp1SzeEcUCjXUSM33BwAwhngIt2mto_evvyPy5kyMVUqBvmjxJz10u6S6bU_TSDeXfjDzNkPzJDLZlbeTea2C8dPv_raYXkI1lKiheP-CMu7z9luFmmWF4SiP14-D43sObE5UySBXedy0eXJ530WYtb66sZajMa5YHOhVfCVNOGAoZf98w0jBwLdz1-kvqROyBkIemH5pkeuzfRkT7DAzE3o2IVBHjBJAMxY99Gun3vpju-9sNfS3Mtbe7oCbgbMOarUUlrcQa8Kzgu2ZkjtcH3vN2d3XtM48ZvU6M_XkVqzSDS-a_8RRTQ_7oyl-s0XyOXnQEZR0XT1dG3NBo7ntXy5rpjWmNZsPwnRiGFgFgZrHoX9cshShoEc0nmj0uRTD9ewozJFmgX_Px3TFnjwYIbPHM_TRGVODPwu5BBUPIZN2TK1Q_tjeA'

            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    return {
        provide: {
            Axios: Axios,
        }
    }
});