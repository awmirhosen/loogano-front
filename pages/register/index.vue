<template>
  <div class="w-full h-screen mb-[220px]">
    <div class="w-full flex pt-28 h-screen flex-col lg:flex-row">
      <!----- left side----->
      <div class="w-full mt-1 lg:mt-24 px-4">
        <!----- tabs button-------->
        <div class="flex items-center justify-center w-full">
          <div to="/login" @click.prevent="checkSignupSteps"
               class="text-zinc-600 w-[300px] rounded-md p-4 text-center bg-zinc-100 cursor-pointer">
            ورود
          </div>
          <div class="text-white bg-sky-custom w-[300px] rounded-md p-4 text-center cursor-pointer">
            ثبت نام
          </div>
        </div>


        <div class="w-11/12 lg:w-[600px] mx-auto">

          <!----- inputs first step-------->
          <div class="w-full mt-12 lg:mt-24" v-if="authStore.stepSignup === 1">


            <p class="text-right w-full">
              شماره موبایل را وارد کنید
            </p>

            <div class="flex items-center">
              <div class="flex items-center">
                <div class="p-3 gap-2 flex items-center ">
                  <div>
                    <img src="/images/auth/iran_flag.png" class="mt-4" alt="irans_icon" width="60">
                  </div>
                  <div class="flex items-center mt-4">
                    +{{ eArabic(98) }}
                  </div>
                </div>
              </div>

              <div class="w-full mt-4">
                <input type="text" class="w-full border border-2 border-[#8f8f8f] rounded-md px-4 py-2"
                       v-model="phoneNumber" placeholder="98933..." inputmode="numeric">
              </div>
            </div>

            <!-------- error for phone number------>
            <p class="w-100 text-red-600 text-center mt-4 text-[14px]" v-if="authStore.phoneNumberSignupExistFlag">
              شماره مورد نظر موجود میباشد
            </p>

            <!------- submit for button -------->
            <div class="w-full">
              <button :disabled="authStore.signupLoading" @click.prevent="authStore.registerMobileVerify(phoneNumber)"
                      class="w-full bg-sky-custom text-white p-2 rounded-md mt-8 hover:bg-[#1B9Ea1]">
                <p dir="rtl" v-if="authStore.signupLoading"> لطفا صبر کنید...</p>
                <p v-else>ثبت نام</p>
              </button>
            </div>

          </div>

          <!------ inputs second step (otp signup) ---->
          <div class="w-full mt-12" v-else-if="authStore.stepSignup === 2">
            <FormKit type="form" @submit="registerDataSubmit" :actions="false">

              <div class="flex justify-center w-full gap-4 mt-4" dir="rtl">

                <FormKit class="w-full" outer-class="w-full" type="text" name="firstName" label="نام*"
                         input-class="w-full border-2 border-zinc-300 transition-all p-2 rounded-md"
                         validation="required"
                         :validation-messages="{required: 'فیلد نام الزامیست', alpha:'نام نمیتواند شامل عدد باشد'}"
                         messages-class="text-[14px] text-red-500"
                />
                <FormKit class="w-full" outer-class="w-full" type="text" name="lastName" label="نام خانوادگی*"
                         input-class="w-full border-2 transition-all border-zinc-300 p-2 rounded-md"
                         validation="required"
                         :validation-messages="{required: 'فیلد نام خانوادگی الزامیست', alpha:'نام خانوادگی نمیتواند شامل عدد باشد'}"
                         messages-class="text-[14px] text-red-500"
                />
              </div>

              <div>
                <p class="w-full text-right mt-4">*تاریخ تولد</p>
                <div class="flex justify-center w-full gap-4 mt-4" dir="rtl">

                  <FormKit class="w-full" outer-class="w-full" type="text" name="bDay" label=""
                           input-class="w-full border-2 text-center border-zinc-300 transition-all p-2 rounded-md"
                           maxlength="2"
                           placeholder="روز تولد"
                           inputmode="numeric"
                           validation="required"
                           :validation-messages="{required: 'این فیلد الزامیست'}"
                           messages-class="text-[14px] text-red-500"
                  />
                  <FormKit
                      type="select"
                      outer-class="w-full"
                      input-class="w-full border-2 border-zinc-300 transition-all p-2 rounded-md text-center"
                      label=""
                      name="bMonth"
                      placeholder="ماه تولد"
                      :options="[
    { label: 'فروردین', value: '1' },
    { label: 'اردیبهشت', value: '2' },
    { label: 'خرداد', value: '3' },
    { label: 'تیر', value: '4' },
    { label: 'مرداد', value: '5' },
    { label: 'شهریور', value: '6' },
    { label: 'مهر', value: '7' },
    { label: 'آبان', value: '8' },
    { label: 'آذر', value: '9' },
    { label: 'دی', value: '10' },
    { label: 'بهمن', value: '11' },
    { label: 'اسفند', value: '12' },
  ]"
                  />
                  <FormKit class="w-full" outer-class="w-full" type="text" name="bYear" label=""
                           placeholder="سال تولد"
                           input-class="w-full border-2 transition-all text-center border-zinc-300 p-2 rounded-md"
                           validation="required"
                           :validation-messages="{required: 'این فیلد الزامیست' }"
                           messages-class="text-[14px] text-red-500"
                  />
                </div>
              </div>



              <div class="flex justify-center items-center w-full gap-4 mt-4" dir="rtl">
                <FormKit class="w-full" outer-class="w-full" type="text" name="nationalCode" label="کدملی*"
                         inputmode="numeric"
                         input-class="w-full border-2 transition-all border-zinc-300 p-2 rounded-md"
                         validation="required|number|length:10,10"
                         messages-class="text-[14px] text-red-500"
                         :validation-messages="{length: 'کدملی ده رقم میباشد' , number: 'کدملی شامل حروف نمیباشد', required: 'فیلد کدملی الزامیست'}"
                />
              </div>

              <div class="flex justify-center items-center w-full gap-4 mt-4" dir="rtl">
                <FormKit class="w-full" outer-class="w-full" type="text" name="email" label="ایمیل"
                         input-class="w-full transition-all border-2 border-zinc-300 p-2 rounded-md"
                         validation="email"
                         placeholder=""
                         :validation-messages="{ email: 'ایمیل وارد شده صحیح نمیباشد'}"
                         messages-class="text-[14px] text-red-500"
                />
              </div>


              <div class="flex justify-center items-center w-full gap-4 mt-4" dir="rtl">
                <FormKit class="w-full" outer-class="w-full" type="password" name="password" label="رمز عبور*"
                         input-class="transition-all w-full border-2 border-zinc-300 p-2 rounded-md"
                         help="رمز عبور شما باید شامل حروف بزرگ، کوچک و ارقام باشد و بین 8 تا 16 کاراکتر باشد"
                         validation="required|length:6,16"
                         :validation-messages="{ length: 'رمز عبور شما باید بین 6 تا 16 کاراکتر باشد', required: 'فیلد رمز عبور الزامیست'}"
                         messages-class="text-[14px] text-red-500"
                         help-class="text-[12px] text-zinc-500"
                />
              </div>

              <div class="w-full mt-5 text-center">
                <p class="text-center w-full">
                  کد یکبار مصرف را وارد کنید
                </p>
                <p class="text-center w-full text-blue-custom text-[14px] mt-2">
                  کد تایید به شماره {{ authStore.signupPhoneNumber }} ارسال شد
                </p>

                <div class="w-full flex justify-center">
                  <div class="flex justify-center items-center w-full gap-4">
                    <FormKit class="w-full" outer-class="w-full" type="text" name="token"
                             inputmode="numeric"
                             input-class="w-6/12 transition-all text-center border-b-2 mx-auto border-zinc-300 px-4 py-2 focus:border-b-2 focus:border-zinc-600 focus:outline-0"
                             validation="required|length:6,6|number"
                             :validation-messages="{required: 'فیلد کد ارسالی الزامیست', alpha:'کد ارسالی شش رقم میباشد', number: 'کد ارسالی عدد میباشد'}"
                             messages-class="text-[14px] text-red-500"
                    />
                  </div>
                </div>
              </div>

              <FormKit type="submit"
                       input-class="w-full bg-sky-custom text-white p-2 rounded-md mt-8 hover:bg-[#1B9Ea1]">
                ثبت نام
              </FormKit>

            </FormKit>
          </div>

        </div>

      </div>

      <!----- right side ----->
      <div class="flex w-full p-5">
        <div class="w-full h-full bg-[#000F2D] rounded-[20px] relative">

          <div class="w-full flex justify-start items-center mt-12 pe-12 flex-row-reverse">
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

          <h4 class="text-right w-full mt-10 pe-12 text-[40px] text-white font-morabaa">
            فرصت هایی بی انتهایی
            <br>
            برای <span class="text-sky-200">معاملات</span> هوشمند ملکی
          </h4>

          <!----- bottom image---->
          <img src="/images/login/login_building.png" class="absolute left-1/2 -translate-x-1/2 -bottom-5"
               alt="login_building">
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

import {useAuthStore} from "~/store/auth";
import Swal from "sweetalert2";

definePageMeta({
  layout: 'default',
})

definePageMeta({
  middleware: 'is-logged-in'
})

const authStore = useAuthStore();
const router = useRouter()

const checkSignupSteps = () => {
  if (authStore.stepSignup > 1) {
    Swal.fire({
      title: 'ثبت نام شما کامل نشده',
      text: " در فشردن دکمه تایید، شما باید از اول مراحل را طی کنید",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'تایید',
      cancelButtonText: 'لغو'
    }).then((result) => {
      if (result.isConfirmed) {
        authStore.stepSignup = 1;
        authStore.passwordLoginErrorFlag = "";
        authStore.stepLogin = 1;
        authStore.phoneNumberLoginExistFlag = false;

        router.push("/login");
      }
    })
  } else {
    authStore.stepSignup = 1;
    authStore.passwordLoginErrorFlag = "";
    authStore.stepLogin = 1;
    authStore.phoneNumberLoginExistFlag = false;

    router.push("/login");
  }
}

const phoneNumber = ref("");

function eArabic(x) {
  return x.toLocaleString('ar-EG');
}

const mobile = ref("");


var JalaliDate = {
  g_days_in_month: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  j_days_in_month: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
};

JalaliDate.jalaliToGregorian = function(j_y, j_m, j_d) {
  j_y = parseInt(j_y);
  j_m = parseInt(j_m);
  j_d = parseInt(j_d);
  var jy = j_y - 979;
  var jm = j_m - 1;
  var jd = j_d - 1;

  var j_day_no = 365 * jy + parseInt(jy / 33) * 8 + parseInt((jy % 33 + 3) / 4);
  for (var i = 0; i < jm; ++i) j_day_no += JalaliDate.j_days_in_month[i];

  j_day_no += jd;

  var g_day_no = j_day_no + 79;

  var gy = 1600 + 400 * parseInt(g_day_no / 146097); /* 146097 = 365*400 + 400/4 - 400/100 + 400/400 */
  g_day_no = g_day_no % 146097;

  var leap = true;
  if (g_day_no >= 36525) /* 36525 = 365*100 + 100/4 */
  {
    g_day_no--;
    gy += 100 * parseInt(g_day_no / 36524); /* 36524 = 365*100 + 100/4 - 100/100 */
    g_day_no = g_day_no % 36524;

    if (g_day_no >= 365) g_day_no++;
    else leap = false;
  }

  gy += 4 * parseInt(g_day_no / 1461); /* 1461 = 365*4 + 4/4 */
  g_day_no %= 1461;

  if (g_day_no >= 366) {
    leap = false;

    g_day_no--;
    gy += parseInt(g_day_no / 365);
    g_day_no = g_day_no % 365;
  }

  for (var i = 0; g_day_no >= JalaliDate.g_days_in_month[i] + (i == 1 && leap); i++)
    g_day_no -= JalaliDate.g_days_in_month[i] + (i == 1 && leap);
  var gm = i + 1;
  var gd = g_day_no + 1;

  gm = gm < 10 ? "0" + gm : gm;
  gd = gd < 10 ? "0" + gd : gd;

  return [gy, gm, gd];
}

const registerDataSubmit = (formData) => {

  mobile.value = authStore.signupPhoneNumber

  const jD = JalaliDate.jalaliToGregorian(formData.bYear, formData.bMonth, formData.bDay);
  const jResult = jD[0] + "-" + jD[1] + "-" + jD[2];

  authStore.registerUser(formData, mobile.value, jResult);
}


</script>

<style scoped>

input:focus {
  outline: none !important;
}


</style>