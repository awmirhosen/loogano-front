<template>
  <div class="w-full lg:h-screen ">
    <div class="w-full flex flex-col lg:flex-row pt-28 lg:h-screen">

      <!----- left side----->
      <div class=" mx-auto mt-10 lg:mt-24 w-[340px] lg:w-full shadow-md lg:shadow-none p-8 rounded-md">
        <!----- tabs button-------->
        <div class="flex items-center justify-center w-full lg:px-1">
          <div class="text-white bg-sky-custom w-full w-full lg:w-[300px] rounded-md p-4 text-center">
            ورود
          </div>
          <RouterLink to="/register" class="text-zinc-600 w-full lg:w-[300px] rounded-md p-4 text-center bg-zinc-100">
            ثبت نام
          </RouterLink>
        </div>

        <div class="w-full lg:w-[600px] mt-24 mx-auto ">
          <!----- inputs first step-------->
          <div class="w-full" v-if="authStore.stepLogin === 1">
            <FormKit type="form" @submit="LoginMobileVerify" :actions="false">
              <p class="text-right w-full">
                شماره موبایل را وارد کنید
              </p>

              <div
                  class="flex items-center gap-2 w-full border border-[2px] border-[#8f8f8f] rounded-md px-4 py-2 mt-4 relative">
                <div class=" gap-2 flex items-center ">
                  <div>
                    <img src="/images/auth/iran_flag.png" alt="irans_icon" width="50">
                  </div>
                  <div class="flex items-center">
                    +98
                  </div>
                </div>
                <div class="h-[20px] w-[2px] bg-zinc-400"></div>
                <div class="w-full">
                  <FormKit type="text"
                           name="mobile"
                           input-class="focus:outline-0 p-1 w-full"
                           inputmode="numeric"
                           placeholder="912123..."
                           messages-class="absolute top-[110%] right-0 text-red-500 text-[13px]"
                           validation="required|number|length:10,10|starts_with:9"
                           :validation-messages="{starts_with: 'فیلد مورد نظر با عدد 9 شروع میشود' , length: 'شماره باید ده رقم ادامه را وارد کنید' , number: 'شماره همراه شامل حروف نمیباشد', required: 'فیلد شماره همراه الزامیست'}"
                  />
                </div>

              </div>


              <div class="w-full">

                <FormKit type="submit" v-if="!authStore.loginLoading"
                         input-class="w-full bg-sky-custom text-white p-2 rounded-md mt-8 hover:bg-[#1B9Ea1]">ورود
                </FormKit>
                <div role="status" class="flex justify-center mt-8" v-else>
                  <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-sky-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>

            </FormKit>
          </div>



          <!------ inputs second step (password) ---->
          <div class="w-full" v-else-if="authStore.stepLogin === 2">

            <p class="text-right w-full">
              رمز عبور خود را وارد کنید
            </p>

            <div class="w-full mt-4">
              <input type="password" class="w-full border border-2 border-[#8f8f8f] rounded-md px-4 py-2"
                     v-model="loginPassword">
            </div>

            <div class="w-full" @click.prevent="authStore.loginWithPassword(loginPassword)" v-if="!authStore.loginLoading">
              <button class="w-full bg-sky-custom text-white p-2 rounded-md mt-8 hover:bg-[#1B9Ea1]">ورود</button>
            </div>
            <div role="status" class="flex justify-center mt-8" v-else>
              <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-sky-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
            </div>

            <div @click="authStore.codeLogin(authStore.loginPhoneNumber)"
                 class="text-center w-full text-[17px] cursor-pointer hover:text-zinc-600 mt-4 text-zinc-500" v-if="!authStore.otpLoading">
              ورود با رمز یکبار مصرف
            </div>
            <div role="status" class="flex justify-center mt-8" v-else>
              <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-sky-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
            </div>


          </div>

          <!------ inputs second step (otp login) ---->
          <div class="w-full" v-else-if="authStore.stepLogin === 3">

            <p class="text-right w-full">
              کد یکبار مصرف را وارد کنید
            </p>
            <p class="text-right w-full text-blue-custom text-[14px] mt-2">
              کد تایید به شماره {{ authStore.loginPhoneNumber }} ارسال شد
            </p>

            <div class="w-full mt-4 flex justify-center">
              <input type="text" class="w-6/12 text-center border-b-2 borderzinc-300 px-4 py-2" v-model="loginToken">
            </div>

            <div class="w-full" @click="authStore.verifyMobileCode(loginToken)" v-if="!authStore.loginLoading">
              <button class="w-full bg-sky-custom text-white p-2 rounded-md mt-8 hover:bg-[#1B9Ea1]">ورود</button>
            </div>
            <div role="status" class="flex justify-center mt-8" v-else>
              <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-sky-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
            <p @click="authStore.backToPassword"
               class="text-center w-full text-[17px] cursor-pointer hover:text-zinc-600 mt-4 text-zinc-500">
              ورود با رمز عبور
            </p>

          </div>

        </div>


      </div>

      <!----- right side ----->
      <div class="flex w-full p-5 lg:block hidden">
        <div class="w-full h-full bg-[#000F2D] rounded-[20px] relative">

          <div class="w-full flex justify-center items-center pt-12 pe-12 flex-row-reverse">
            <!----- loogano logo svg------->
            <svg xmlns="http://www.w3.org/2000/svg" width="126" height="61" viewBox="0 0 126 61" fill="none">
              <mask id="mask0_873_14784" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="126"
                    height="61">
                <path
                    d="M126 60.7807H109.631C107.329 60.7807 105.124 59.8673 103.494 58.2376C94.5508 49.2945 85.6078 40.3515 76.6648 31.4085C73.371 28.1147 70.0772 24.8209 66.7834 21.5271C66.53 21.2737 65.1662 19.9599 62.9984 19.9599C61.6284 19.9599 60.2583 20.4823 59.2135 21.5271L22.503 58.2376C20.8765 59.8641 18.6681 60.7807 16.3659 60.7807H0L59.2135 1.56714C61.3031 -0.52238 64.6938 -0.52238 66.7834 1.56714L126 60.7807Z"
                    fill="white"/>
              </mask>
              <g mask="url(#mask0_873_14784)">
                <path
                    d="M63.1755 -14.4764C50.9981 -12.9969 44.5137 1.00721 37.1629 13.3379C14.3439 51.6187 -9.41967 61.3843 -4.88403 69.7831C-1.05533 76.8712 17.6878 76.0704 30.128 69.7831C46.3843 61.5658 37.8198 42.416 55.0771 27.7362C66.2003 18.2739 75.7439 19.9067 79.3724 10.066C81.8717 3.28441 80.73 -6.68451 74.4646 -11.5298C69.8226 -15.1208 64.0764 -14.5859 63.1755 -14.4764Z"
                    fill="url(#paint0_radial_873_14784)"/>
              </g>
              <mask id="mask1_873_14784" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="126"
                    height="61">
                <path
                    d="M126 60.7807H109.631C107.329 60.7807 105.124 59.8673 103.494 58.2376C94.5508 49.2945 85.6078 40.3515 76.6648 31.4085C73.371 28.1147 70.0772 24.8209 66.7834 21.5271C66.53 21.2737 65.1662 19.9599 62.9984 19.9599C61.6284 19.9599 60.2583 20.4823 59.2135 21.5271L22.503 58.2376C20.8765 59.8641 18.6681 60.7807 16.3659 60.7807H0L59.2135 1.56714C61.3031 -0.52238 64.6938 -0.52238 66.7834 1.56714L126 60.7807Z"
                    fill="white"/>
              </mask>
              <g mask="url(#mask1_873_14784)">
                <path
                    d="M107.516 64.0556C84.534 57.4618 70.3609 42.0375 63.9141 33.8702C67.6333 26.1596 71.3369 17.9767 74.9591 9.32772C78.7159 0.353416 82.0535 -8.33937 85.022 -16.6849C92.0944 -11.1045 102.173 -2.25848 112.264 10.3099C115.023 13.7476 145.853 52.629 136.559 64.2996C131.307 70.8935 115.558 66.3641 107.516 64.0556Z"
                    fill="url(#paint1_radial_873_14784)"/>
              </g>
              <mask id="mask2_873_14784" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="126"
                    height="61">
                <path
                    d="M126 60.7807H109.631C107.329 60.7807 105.124 59.8673 103.494 58.2376C94.5508 49.2945 85.6078 40.3515 76.6648 31.4085C73.371 28.1147 70.0772 24.8209 66.7834 21.5271C66.53 21.2737 65.1662 19.9599 62.9984 19.9599C61.6284 19.9599 60.2583 20.4823 59.2135 21.5271L22.503 58.2376C20.8765 59.8641 18.6681 60.7807 16.3659 60.7807H0L59.2135 1.56714C61.3031 -0.52238 64.6938 -0.52238 66.7834 1.56714L126 60.7807Z"
                    fill="white"/>
              </mask>
              <g mask="url(#mask2_873_14784)">
                <path
                    d="M72.832 58.2813C49.8504 51.6875 35.6773 36.2632 29.2305 28.0959C32.9497 20.3853 36.6533 12.2024 40.2755 3.55342C44.0323 -5.42088 47.3699 -14.1137 50.3384 -22.4592C57.4108 -16.8788 67.4893 -8.03278 77.5803 4.53563C80.3393 7.97332 111.169 46.8547 101.876 58.5253C96.6238 65.1161 80.8773 60.5867 72.832 58.2813Z"
                    fill="url(#paint2_radial_873_14784)"/>
              </g>
              <mask id="mask3_873_14784" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="126"
                    height="61">
                <path
                    d="M126 60.7807H109.631C107.329 60.7807 105.124 59.8673 103.494 58.2376C94.5508 49.2945 85.6078 40.3515 76.6648 31.4085C73.371 28.1147 70.0772 24.8209 66.7834 21.5271C66.53 21.2737 65.1662 19.9599 62.9984 19.9599C61.6284 19.9599 60.2583 20.4823 59.2135 21.5271L22.503 58.2376C20.8765 59.8641 18.6681 60.7807 16.3659 60.7807H0L59.2135 1.56714C61.3031 -0.52238 64.6938 -0.52238 66.7834 1.56714L126 60.7807Z"
                    fill="white"/>
              </mask>
              <g mask="url(#mask3_873_14784)">
                <path
                    d="M22.4412 72.1038C-0.540216 65.5099 -14.7133 50.0857 -21.1602 41.9184C-17.4409 34.2078 -13.7374 26.0249 -10.1151 17.3759C-6.35834 8.4016 -3.02074 -0.291183 -0.0522423 -8.6366C7.02022 -3.05636 17.0989 5.7897 27.1899 18.3581C29.9488 21.7958 60.7786 60.6771 51.4853 72.3478C46.2333 78.9417 30.4834 74.4123 22.4412 72.1038Z"
                    fill="url(#paint3_radial_873_14784)"/>
              </g>
              <mask id="mask4_873_14784" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="126"
                    height="61">
                <path
                    d="M126 60.7807H109.631C107.329 60.7807 105.124 59.8673 103.494 58.2376C94.5508 49.2945 85.6078 40.3515 76.6648 31.4085C73.371 28.1147 70.0772 24.8209 66.7834 21.5271C66.53 21.2737 65.1662 19.9599 62.9984 19.9599C61.6284 19.9599 60.2583 20.4823 59.2135 21.5271L22.503 58.2376C20.8765 59.8641 18.6681 60.7807 16.3659 60.7807H0L59.2135 1.56714C61.3031 -0.52238 64.6938 -0.52238 66.7834 1.56714L126 60.7807Z"
                    fill="white"/>
              </mask>
              <g mask="url(#mask4_873_14784)">
                <path
                    d="M24.2359 56.7799C16.3501 41.0365 30.4763 22.5468 38.8312 11.6143C45.3907 3.0279 52.4131 -6.2781 62.0286 -5.55553C71.8694 -4.81731 79.0826 6.00578 81.3411 14.7267C84.6443 27.4984 77.8846 37.9586 76.6772 39.7603C75.1538 42.0875 73.0549 45.7505 71.5222 50.5582C68.1158 61.2655 71.1687 66.2515 68.4067 69.7862C62.4697 77.3998 32.8942 74.0685 24.2359 56.7799Z"
                    fill="url(#paint4_radial_873_14784)"/>
              </g>
              <mask id="mask5_873_14784" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="126"
                    height="61">
                <path
                    d="M126 60.7807H109.631C107.329 60.7807 105.124 59.8673 103.494 58.2376C94.5508 49.2945 85.6078 40.3515 76.6648 31.4085C73.371 28.1147 70.0772 24.8209 66.7834 21.5271C66.53 21.2737 65.1662 19.9599 62.9984 19.9599C61.6284 19.9599 60.2583 20.4823 59.2135 21.5271L22.503 58.2376C20.8765 59.8641 18.6681 60.7807 16.3659 60.7807H0L59.2135 1.56714C61.3031 -0.52238 64.6938 -0.52238 66.7834 1.56714L126 60.7807Z"
                    fill="white"/>
              </mask>
              <g mask="url(#mask5_873_14784)">
                <path
                    d="M67.6642 51.5151C57.4825 74.5937 21.7229 85.5358 5.4227 72.5639C-4.02707 65.0441 -4.99365 51.0365 -5.16882 48.4747C-5.40343 45.0745 -6.22297 30.7482 3.2831 21.7738C12.8768 12.7182 25.3013 13.5972 27.4597 13.7849C30.2342 13.9976 34.4539 14.0695 39.4056 13.0905C50.4288 10.9102 53.3222 5.83031 57.7515 6.5435C66.488 7.95111 75.9253 32.7907 67.6642 51.5151Z"
                    fill="url(#paint5_radial_873_14784)"/>
              </g>
              <defs>
                <radialGradient id="paint0_radial_873_14784" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(14.5901 50.7259) scale(75.4445 75.4445)">
                  <stop stop-color="white"/>
                  <stop offset="0.0486" stop-color="#93E4F1"/>
                  <stop offset="0.2685" stop-color="#D3F7FF"/>
                  <stop offset="0.4961" stop-color="white"/>
                  <stop offset="0.7343" stop-color="#E8FAFF"/>
                  <stop offset="1" stop-color="white"/>
                </radialGradient>
                <radialGradient id="paint1_radial_873_14784" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(101.104 25.5234) scale(39.7788 39.7788)">
                  <stop stop-color="white"/>
                  <stop offset="0.538" stop-color="#1B9DB1"/>
                  <stop offset="1" stop-color="#DBF6FF"/>
                </radialGradient>
                <radialGradient id="paint2_radial_873_14784" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(66.4227 19.7472) scale(39.7788 39.7788)">
                  <stop stop-color="white"/>
                  <stop offset="0.538" stop-color="#DBF8FF"/>
                  <stop offset="1" stop-color="#EAFAFF"/>
                </radialGradient>
                <radialGradient id="paint3_radial_873_14784" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(16.03 33.5719) scale(39.7788 39.7788)">
                  <stop stop-color="white"/>
                  <stop offset="0.538" stop-color="#1B9DB1"/>
                  <stop offset="1" stop-color="#1B9DB1"/>
                </radialGradient>
                <radialGradient id="paint4_radial_873_14784" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(63.6715 -14.9666) scale(24.3221 24.3221)">
                  <stop stop-color="white"/>
                  <stop offset="0.8625" stop-color="white"/>
                  <stop offset="1" stop-color="white"/>
                </radialGradient>
                <radialGradient id="paint5_radial_873_14784" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(47.9989 27.7509) scale(54.4183 54.4182)">
                  <stop offset="0.0475" stop-color="white"/>
                  <stop offset="1" stop-color="#1B9DB1"/>
                </radialGradient>
              </defs>
            </svg>
            <p class="text-white text-[34px] font-bold pt-5">LOOGANO</p>
          </div>

          <h4 class="text-center w-full mt-10 pe-12 text-[40px] text-white font-morabaa">
            فرصت هایی بی انتها
            <br>
            برای <span class="text-sky-200">معاملات</span> هوشمند ملکی
          </h4>

          <!----- bottom image---->
          <img src="/images/login/login_building.png" class="absolute left-1/2 -translate-x-1/2 -bottom-[10px] lg:-bottom-5"
               alt="login_building">
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import {useAuthStore} from "~/store/auth";

definePageMeta({
  middleware: 'is-logged-in',
  layout: 'default',
})


const authStore = useAuthStore();

const phoneNumber = ref("");
const loginPassword = ref("");
const loginToken = ref("");


const LoginMobileVerify = (formData) => {
  console.log(formData.mobile)
  authStore.verifyMobile(formData.mobile)
}

function eArabic(x) {
  return x.toLocaleString('ar-EG');
}
</script>

<style scoped>

</style>