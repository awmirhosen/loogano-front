<template>
  <div class="text-center flex items-center justify-center mt-10" v-if="profileStore.propertyLoading">
    <Loader />
  </div>
  <div v-else class="w-full px-0 md:px-8">
    <div class="w-full">
      <!------ page title ----->
      <div class="w-full" dir="rtl">
        <p class="text-[23px] text-[#0C5C75]" >دارایی ها</p>
        <span class="block w-full mt-3 h-[2px] bg-sky-custom"></span>
      </div>
      <!------ title cards ------>
      <div class="w-full flex justify-center mt-12 gap-4 flex-wrap md:flex-nowrap">
        <div class="w-full text-center flex justify-between items-center rounded-[5px] bg-white p-6" dir="rtl">
          <p class="text-[15px] md:text-[20px] whitespace-nowrap">سود کل دارایی ها</p>
          <div class="w-full flex items-center justify-end gap-2 mr-1">
            <p class="py-1 px-1 md:px-4 bg-green-500 text-[10px] md:text-[16px] rounded-[5px] text-white" v-if="profileStore.userProjects.total_transactions === 0">
              0%
            </p>
            <p class="py-1 px-1 md:px-4 bg-green-500 text-[10px] md:text-[16px] rounded-[5px] text-white" v-else>
              {{ eArabic(parseFloat(( 100 * (profileStore.sumNewPrice - profileStore.userProjects.total_transactions) / profileStore.userProjects.total_transactions ).toFixed(1))) }}
              %
            </p>
            <p class="text-blue-custom text-[12px] md:text-[16px]"> {{ eArabic(profileStore.sumNewPrice) }} </p>
            <p class="text-blue-custom text-[12px] md:text-[14px]"> تومان </p>
          </div>
        </div>
        <div class="w-full text-center flex justify-between items-center rounded-[5px] bg-white p-6" dir="rtl">
          <p class="text-[15px] md:text-[20px]">ارزش کل دارایی ها</p>
          <p class="text-blue-custom text-[15px] md:text-[20px]">{{ eArabic(parseInt(profileStore.userProjects.total_transactions)) }} تومان</p>
        </div>
        <div class="w-full text-center flex justify-between items-center rounded-[5px] bg-white p-6" dir="rtl">
          <p class="text-[15px] md:text-[20px]">تعداد دارایی ها</p>
          <p class="text-blue-custom text-[15px] md:text-[20px]">{{ eArabic(profileStore.userProjects.total_assets) }}</p>
        </div>
      </div>

      <!------ project details card -------->
      <div :key="index" class="w-full mt-12 bg-white p-2 md:p-10" v-for="(projects, index) in profileStore.userProjects.projects">
        <!------ project title ------->


        <h3 class="w-full text-right text-[24px] my-2 mb-4">{{ projects.title }}</h3>

        <div class="w-full gap-4 flex flex-col md:flex-row flex-row-reverse items-center justify-center">

          <!----- project steps --->
          <div class="w-full lg:w-[640px] text-center">
            <div class="w-full">
              <div class="w-full p-5 bg-zinc-200 rounded-md relative mt-[230px]" dir="rtl">
                <p class="font-bold text-right w-full">روند پیشرفت پروژه :</p>
                <div class="mt-2">
                  <!----- develope percent ------->
                  <div class="w-full bg-zinc-100 h-2 rounded mt-5">
                    <div class="w-10/12 h-full bg-green-400 rounded" style="width: 28%"></div>
                  </div>

                  <!----- develope times ------>
                  <div class="w-full flex justify-between">
                    <p class="text-[13px] text-zinc-500 mt-2"></p>
                    <p class="text-[13px] text-zinc-500 mt-2">{{ projectEndingDate(projects.project.project_end) }}</p>
                  </div>
                  <!------absolute style for project image ------>
                  <img :src="'https://loogano.com/endpoints/'+projects.project.files[0].url" alt="project" class="w-full md:h-[240px] rounded-t-[25px] absolute left-0 -top-[190%]">

                </div>
              </div>
            </div>
          </div>

          <!---------line border--------->
          <div class="left-border hidden md:block"></div>

          <!------- investment details------>
          <div class="w-full text-center">
            <!----- project investment details ---->
            <div class="w-full mt-5">
              <div class="w-full flex items-center">
                <div class="w-full flex justify-between">
                  <div class="flex items-center gap-2">
                    <p class="text-blue-custom text-[12px]">تومان</p>
                    <p class="text-[18px] text-blue-custom">{{ eArabic(projects.area * projects.newest_price) }}</p>
                  </div>
                  <p dir="rtl" class="text-[18px] text-blue-custom">ارزش فعلی:</p>
                </div>
              </div>
              <!----------->
              <div class="w-full flex items-center mt-4" dir="rtl">
                <p class="text-[20px] whitespace-nowrap text-green-500">سود:</p>
                <div class="w-full flex items-center justify-end gap-2">
                  <p class="py-1 px-4 bg-green-500 rounded-[5px] text-white">
                    {{ eArabic( (100 * ( ((projects.area * projects.newest_price) - (projects.area * projects.buy_price)) / (projects.area * projects.buy_price))) ) }}%
                  </p>
                  <p class="text-green-500">{{ eArabic((projects.area * projects.newest_price) - (projects.area * projects.buy_price) ) }}</p>
                  <p class="text-green-500 text-[14px]"> تومان </p>
                </div>
              </div>

              <!------ pricing------>
              <div class="w-full mt-8">


                <div class="w-full flex items-center mt-3">
                  <div class="w-full flex justify-between">
                    <div class="flex items-center gap-2">
                      <p class="text-[12px] text-zinc-700">تومان</p>
                      <p class="text-[18px] text-zinc-700">{{ eArabic(projects.area * projects.buy_price) }}</p>
                    </div>
                    <p dir="rtl" class="text-[18px] text-zinc-700">مبلغ سرمایه گذاری:</p>
                  </div>
                </div>
                <div class="w-full flex items-center mt-3">
                  <div class="w-full flex justify-between">
                    <div class="flex items-center gap-2">
                      <p class="text-[12px] text-zinc-700">تومان</p>
                      <p class="text-[18px] text-zinc-700">{{ eArabic(projects.buy_price) }}</p>
                    </div>
                    <p dir="rtl" class="text-[18px] text-zinc-700">قیمت خریداری شده هر سانتی متر مربع:</p>
                  </div>
                </div>
                <div class="w-full flex items-center mt-3">
                  <div class="w-full flex justify-between">
                    <div class="flex items-center gap-2">
                      <p class="text-[12px] text-zinc-700">سانتی متر مربع</p>
                      <p class="text-[18px] text-zinc-700">{{ eArabic(projects.area) }}</p>
                    </div>
                    <p dir="rtl" class="text-[18px] text-zinc-700">متراژ خریداری شده:</p>
                  </div>
                </div>
                <div class="w-full flex items-center mt-3">
                  <div class="w-full flex justify-between">
                    <div class="flex items-center gap-2">
                      <p class="text-[12px] text-zinc-700">تومان</p>
                      <p class="text-[18px] text-zinc-700">{{ eArabic(projects.newest_price) }}</p>
                    </div>
                    <p dir="rtl" class="text-[18px] text-zinc-700">قیمت فعلی هر سانتی متر مربع:</p>
                  </div>
                </div>
              </div>

              <div class="flex justify-center items-center mt-10 gap-4">
                <div class="pb-2 border-b-[2px] border-b border-zinc-400 text-zinc-400 px-10 cursor-pointer hover:border-b-2 hover:border-zinc-400 transition-all hover:text-red-400" @click="sellProperty">
                  فروش
                </div>
                <nuxt-link :to="{ name: 'projects-id', params: {id: projects.project_id} }"  class="bg-sky-custom py-2 text-white w-full cursor-pointer rounded-md transition-all hover:bg-[#1B9DC1]">
                  خرید دوباره
                </nuxt-link>
              </div>

            </div>
          </div>


<!--          &lt;!&ndash;-------line border-------&ndash;&gt;-->
<!--          <div class="left-border"></div>-->
<!--          &lt;!&ndash;--- cahrt ---&ndash;&gt;-->
<!--          <div class="w-full text-center">-->
<!--            <div class="flex justify-center w-full">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />-->
<!--              </svg>-->
<!--            </div>-->
<!--            <p>              بخش نمودار ها به زودی در دسترس خواهند بود</p>-->

<!--          </div>-->

        </div>

        <div class="w-full h-[1px] bg-zinc-200 mt-4 md:hidden block"></div>

      </div>


    </div>
  </div>
</template>

<script setup>

import {useLayoutStore} from "~/store/layout";
import {useProfileStore} from "~/store/profile";
import {useToast} from "vue-toastification";

const layoutStore = useLayoutStore();
const profileStore = useProfileStore();
profileStore.mobileHeaderFlag = false;


profileStore.fetchUserProjects();


definePageMeta({
  middleware: "is-auth",
  layout: 'profile',
});

function eArabic(x) {
  return x.toLocaleString('ar-EG');
}

const sellProperty = () => {
  const toast = useToast();

  toast.error("بخش فروش درحال حاضر در دسترس نیست");
}

const today = Date.now();

function getDateFormat(uDate, option) {
  let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
  return date;
}

const projectEndingDate = (end) => {
  end = end.split(" ")

  const endDate = new Date(end[0]);
  const endDateTimestapms = endDate.getTime()

  const endingFa = reactive({
    "day": getDateFormat(endDateTimestapms, {"day": "2-digit"}),
    "month": getDateFormat(endDateTimestapms, {"month": "numeric"}),
    "monthTitle": getDateFormat(endDateTimestapms, {"month": "long"}),
    "year": getDateFormat(endDateTimestapms, {"year": "numeric"}),
    "dayWeek": getDateFormat(endDateTimestapms, {"weekday": "long"}),
  })
  return `${endingFa.year}/${endingFa.month}/${endingFa.day}`

}

// onBeforeMount(() => {
//   setPageLayout("profile");
//   console.log("ff")
// })


// onBeforeMount(() => {
//   layoutStore.layouts = "profile"
// })

</script>

<style scoped>

.left-border {
  height: 200px;
  width: 5px;
  background: rgba(153, 153, 153, 0.4);
}

</style>