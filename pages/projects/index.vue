<template>
  <div class="w-full mt-24 md:mt-36 lg:px-16 mx-auto">

    <h1 class="w-full text-right text-2xl md:text-3xl lg:text-4xl text-zinc-950 px-5">لیست پروژه ها</h1>

    <div class="w-full flex justify-center flex-wrap gap-10">

      <div class="md:rounded-[30px] mt-56 relative shadow-lg min-w-[378px] lg:p-6 md:p-4 p-3" v-for="(projects, index) in projectStore.projectLists" :key="index">


        <!------image---------->
        <RouterLink :to="{ name: 'projects-id', params: {id: projects.id} }" class="absolute w-full top-0 left-0 -translate-y-2/3 px-6" style="z-index: 3">
          <img :src="'https://loogano.com/endpoints/'+projects.files[6].url" class="w-full max-h-[250px] object-cover rounded-md" alt="investment_building">
        </RouterLink>

        <RouterLink :to="{ name: 'projects-id', params: {id: projects.id} }" class="w-full text-center relative">
          <!--project name-->
          <div class="text-[18px] text-center mt-24 flex items-center flex-row-reverse justify-between flex-wrap">
            <p class="font-[500]">{{ projects.title }}</p>
            <!---investment status---->
            <!--                  <div class="text-center px-3 py-2 bg-zinc-400 text-white text-[12px] rounded-lg">-->
            <!--                    توقف سرمایه پذیری-->
            <!--                  </div>-->
            <div class="text-center px-3 py-2 bg-zinc-400 text-white text-[11px] rounded-[4px] hover:bg-white hover:text-zinc-500 transition-all">
              پذیرش سرمایه گذار
            </div>
          </div>
          <!--border of bottom of title-->
          <div class="">
            <div class="w-full px-10 h-[1px] mt-3 w-full bg-zinc-300 mt-12"></div>
          </div>

          <div class="w-full mt-5">

            <div class="w-full flex justify-start gap-2 my-1 flex-row-reverse items-center">
              <div>
                <img src="/images/home/location.png" alt="location">
              </div>
              <p class="text-zinc-600 text-[14px]">: منطقه</p>
              <p class="text-zinc-500 text-[16px] font-[500]">{{ projects.address }}</p>
            </div>

            <div class="w-full flex justify-start gap-3 flex-row-reverse items-center my-1">
              <div>
                <img src="/images/home/buildings.png" alt="location">
              </div>
              <p class="text-zinc-600 text-[14px]">: کاربری</p>
              <p class="text-zinc-500 text-[16px] " v-if="projects.type === 'apartment'">مسکونی</p>
              <p class="text-zinc-500 text-[16px] " v-else>تجاری</p>
            </div>

            <div class="w-full flex justify-start gap-3 flex-row-reverse items-center my-1">
              <div>
                <img src="/images/home/tape_measure.png" alt="location">
              </div>
              <p class="text-zinc-600 text-[14px]">: متراژ</p>
              <p class="text-zinc-500 text-[16px]" dir="rtl">{{ eArabic(projects.area_cm) }} سانتی متر مربع </p>
            </div>

            <div class="w-full flex justify-between gap-3 flex-row-reverse items-center">
              <div class="flex items-center justify-start gap-3 flex-row-reverse">
                <div class="">
                  <img src="/images/home/peoples.png" alt="location">
                </div>
                <p class="text-zinc-600 text-[14px]">: تعداد سرمایه گذار ها</p>
                <p dir="rtl" class="text-zinc-500 text-[16px]">{{
                    eArabic(projects.project_user_completed_count + 20)
                  }} نفر </p>
              </div>

              <div class="px-4 py-2 bg-[#D4F3CC] text-[10px] rounded-lg">
                پیش بینی سود :  %{{ eArabic(48) }}
              </div>

            </div>

            <div class="w-full h-[1px] mt-3 w-full bg-zinc-300 mt-2"></div>

          </div>
          <!---- development--->
          <div class="w-full mt-4">
            <p class="font-bold w-full text-right">: روند پیشرفت پروژه</p>

            <div class="w-full relative" dir="rtl">
              <div class="w-full h-[8px] bg-zinc-300 mt-4 rounded-full"></div>
              <div class="h-[8px] absolute bg-[#12788F] top-0  rounded-full" :style="`width: ${parseInt(projects.progress_percent)}%`"></div>
            </div>

            <div class="w-full flex justify-between mt-2" dir="rtl">
<!--              <div class="w-full text-zinc-400 text-right text-[12px]" dir="rtl">-->
<!--                زمان کل پروژه : {{ totalMonth(projects.project_start, projects.project_end) }}-->
<!--              </div>-->
              <div class="w-full text-zinc-400 text-left text-[12px]">
                {{ projectEndingDate(projects.project_end) }}
              </div>
            </div>

            <NuxtLink :to="{ name: 'projects-id', params: {id: projects.id} }"
                      class="w-full bg-[#1B9DB1] p-3 block text-white rounded-lg mt-6">
              شروع سرمایه گذاری
            </NuxtLink>

          </div>
        </RouterLink>
      </div>

    </div>

  </div>
</template>

<script setup>

import {useProjectStore} from "~/store/projects";

definePageMeta({
  layout: 'default',
})

const projectStore = useProjectStore();
projectStore.fetchProjectList();


function eArabic(x) {
  return x.toLocaleString('ar-EG');
}

const projectPercentEl = ref(null);



// how much times left?

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




</script>

<style scoped>

</style>