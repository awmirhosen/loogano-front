<template>
  <div class="w-full px-8">
    <div class="w-full">
      <!------ page title ----->
      <div class="w-full" dir="rtl">
        <p class="text-[23px] text-[#0C5C75]" >دارایی ها</p>
        <span class="block w-full mt-3 h-[2px] bg-sky-custom"></span>
      </div>
      <!------ title cards ------>
      <div class="w-full flex justify-center mt-12 gap-4">
        <div class="w-full text-center flex justify-between items-center rounded-[5px] bg-white p-6" dir="rtl">
          <p class="text-[20px] whitespace-nowrap">سود کل دارایی ها</p>
          <div class="w-full flex items-center justify-end gap-2">
            <p class="py-1 px-4 bg-green-500 rounded-[5px] text-white">36%</p>
            <p class="text-blue-custom">31,120,000 </p>
            <p class="text-blue-custom text-[14px]"> ریال </p>
          </div>
        </div>
        <div class="w-full text-center flex justify-between items-center rounded-[5px] bg-white p-6" dir="rtl">
          <p class="text-[20px]">ارزش کل سرمایه ها</p>
          <p class="text-blue-custom">307,120,000 ریال</p>
        </div>
        <div class="w-full text-center flex justify-between items-center rounded-[5px] bg-white p-6" dir="rtl">
          <p class="text-[20px]">تعداد دارایی ها</p>
          <p class="text-blue-custom">2 عدد</p>
        </div>
      </div>

      <!------ project details card -------->
      <div class="w-full mt-12 bg-white p-10">
        <!------ project title ------->
        <h3 class="w-full text-right text-[24px]">پروژه آرمونیا</h3>

        <div class="w-full gap-4 flex flex-row-reverse items-center justify-center">
          <!------- investment details------>
          <div class="w-full text-center">
            <!----- project investment details ---->
            <div class="w-full mt-5">
              <div class="w-full flex items-center">
                <div class="w-full flex justify-between">
                  <div class="flex items-center gap-2">
                    <p class="text-blue-custom text-[12px]">ریال</p>
                    <p class="text-[18px] text-blue-custom">245,520,000</p>
                  </div>
                  <p dir="rtl" class="text-[18px] text-blue-custom">ارزش فعلی:</p>
                </div>
              </div>
              <!----------->
              <div class="w-full flex items-center mt-4" dir="rtl">
                <p class="text-[20px] whitespace-nowrap text-green-500">سود:</p>
                <div class="w-full flex items-center justify-end gap-2">
                  <p class="py-1 px-4 bg-green-500 rounded-[5px] text-white">36%</p>
                  <p class="text-green-500">31,120,000 </p>
                  <p class="text-green-500 text-[14px]"> ریال </p>
                </div>
              </div>

              <!------ pricing------>
              <div class="w-full mt-8">

                <div class="w-full flex items-center mt-3">
                  <div class="w-full flex justify-between">
                    <div class="flex items-center gap-2">
                      <p class="text-[12px] text-zinc-700">ریال</p>
                      <p class="text-[18px] text-zinc-700">245,520,000</p>
                    </div>
                    <p dir="rtl" class="text-[18px] text-zinc-700">مبلغ سرمایه گذاری:</p>
                  </div>
                </div>
                <div class="w-full flex items-center mt-3">
                  <div class="w-full flex justify-between">
                    <div class="flex items-center gap-2">
                      <p class="text-[12px] text-zinc-700">ریال</p>
                      <p class="text-[18px] text-zinc-700">245,520,000</p>
                    </div>
                    <p dir="rtl" class="text-[18px] text-zinc-700">متراژ خریداری شده:</p>
                  </div>
                </div>
                <div class="w-full flex items-center mt-3">
                  <div class="w-full flex justify-between">
                    <div class="flex items-center gap-2">
                      <p class="text-[12px] text-zinc-700">ریال</p>
                      <p class="text-[18px] text-zinc-700">245,520,000</p>
                    </div>
                    <p dir="rtl" class="text-[18px] text-zinc-700">قیمت هر متر مربع:</p>
                  </div>
                </div>
              </div>

              <div class="flex justify-center items-center mt-10 gap-4">
                <div class="pb-2 border-b-[2px] border-b border-red-600 text-red-600 px-10 cursor-pointer hover:border-b-2 hover:border-red-400 transition-all hover:text-red-400">
                  فروش
                </div>
                <div class="bg-sky-custom py-2 text-white w-full cursor-pointer rounded-md transition-all hover:bg-[#1B9DC1]">
                  خرید دوباره
                </div>
              </div>

            </div>
          </div>
          <!---------line border--------->
          <div class="left-border"></div>
          <!----- cahrt ----->
          <div class="w-full text-center">
            <div class="flex justify-center w-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <p>              بخش نمودار ها به زودی در دسترس خواهند بود</p>

          </div>
          <!---------line border--------->
          <div class="left-border"></div>
          <!----- project steps --->
          <div class="w-full text-center">
            <div class="w-full">
              <div class="w-full p-5 bg-zinc-200 rounded-md relative mt-[230px]" dir="rtl">
                <p class="font-bold text-right w-full">روند پیشرفت پروژه :</p>
                <div class="mt-2">
                  <!----- develope percent ------->
                  <div class="w-full bg-zinc-100 h-2 rounded mt-5">
                    <div class="w-10/12 h-full bg-green-400 rounded"></div>
                  </div>
                  <!----- develope times ------>
                  <div class="w-full flex justify-between">
                    <p class="text-[13px] text-zinc-500 mt-2">زمان کل پروژه: 9 ماه</p>
                    <p class="text-[13px] text-zinc-500 mt-2">2 ماه تا پایان</p>
                  </div>
                  <!------absolute style for project image ------>
                  <img src="/images/test/profile_mini_image_project.png" alt="project" class="w-full h-[240px] rounded-t-[25px] absolute left-0 -top-[190%]">
                  
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>

import {useLayoutStore} from "~/store/layout";

const layoutStore = useLayoutStore();

onBeforeMount(() => {
  layoutStore.layouts = "profile"
})

</script>

<style scoped>

.left-border {
  height: 200px;
  width: 5px;
  background: rgba(153, 153, 153, 0.4);
}

</style>