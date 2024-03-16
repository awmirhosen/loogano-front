<template>

  <div class="w-full mb-80 ">

    <!--Slider title-->
    <div class="w-full flex justify-start items-center gap-2 gap- px-4 md:my-24">
      <div class="w-full h-1 bg-sky-custom"></div>
      <p class="md:text-[52px] text-[28px] font-morabaa whitespace-nowrap">فرصت های سرمایه گذاری</p>
    </div>

    <div class="relative">

      <div class="w-full mt-[250px] md:mt-[250px] lg:mt-[300px]">
        <div class="w-full relative mt-24 lg:px-24 md:px-8 px-4">
          <swiper
              style="overflow-y: visible"
              :slidesPerView="3"
              :spaceBetween="30"
              :modules="[SwiperEffectCreative]"
              class="mySwiper"
              :breakpoints="{
          '0': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '500': {
            slidesPerView: 1.2,
            spaceBetween: 20,
           },
          '768': {
            slidesPerView: 2,
            spaceBetween: 20,
           },
           '1200': {
            slidesPerView: 3,
            spaceBetween: 20,
         }

         }"
          >
            <swiper-slide class="md:rounded-[30px] relative shadow-lg min-w-[300px] lg:p-6 md:p-4 p-3"
                          v-for="projects in projectStore.projectListSlider">

              <!------image---------->
              <RouterLink :to="{ name: 'projects-id', params: {id: projects.id} }" class="absolute w-full top-0 -translate-y-2/3 px-6" style="z-index: 3333">
                <img :src="'https://loogano.com/endpoints/'+projects.files[0].url" class="w-full rounded-md" alt="investment_building">
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
                    <p class="text-zinc-500 text-[16px]" dir="rtl">{{ eArabic(projects.area_cm) }} متر مربع </p>
                  </div>

                  <div class="w-full flex justify-between gap-3 flex-row-reverse items-center">
                    <div class="flex items-center justify-start gap-3 flex-row-reverse">
                      <div class="">
                        <img src="/images/home/peoples.png" alt="location">
                      </div>
                      <p class="text-zinc-600 text-[14px]">: تعداد سرمایه گذار ها</p>
                      <p dir="rtl" class="text-zinc-500 text-[16px]">{{
                          eArabic(projects.project_user_completed_count)
                        }} نفر </p>
                    </div>

                    <div class="px-4 py-2 bg-[#D4F3CC] text-[10px] rounded-lg">
                      پیش بینی سود :  %{{ eArabic(36) }}
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
<!--                    <div class="w-full text-zinc-400 text-right text-[12px]" dir="rtl">-->
<!--                      زمان کل پروژه : {{ totalMonth(projects.project_start, projects.project_end) }}-->
<!--                    </div>-->
                    <div class="w-full text-zinc-400 text-left text-[12px]">
                      {{ monthLeft(projects.project_end) }}
                    </div>
                  </div>

                  <NuxtLink :to="{ name: 'projects-id', params: {id: projects.id} }"
                            class="w-full bg-[#1B9DB1] p-3 block text-white rounded-lg mt-6">
                    شروع سرمایه گذاری
                  </NuxtLink>

                </div>
              </RouterLink>
            </swiper-slide>

          </swiper>
        </div>
      </div>

      <div class="w-full py-4 bg-[#00243C] mt-96 -top-64 absolute h-[600px] ">
        <!----more project button---->
        <div class="flex w-12/12 h-full">
          <div class="w-full flex justify-center items-center self-end mb-10">
            <div class="w-full h-1 bg-white"></div>
            <NuxtLink to="/projects"
                      class="px-10 whitespace-nowrap border border-2 border-white py-3 rounded-xl text-white">پروژه های
              بیشتر
            </NuxtLink>
            <div class="w-full h-1 bg-white"></div>
          </div>
        </div>

      </div>

    </div>

  </div>

</template>

<script setup>

import {useProjectStore} from "~/store/projects";

const projectStore = useProjectStore();
projectStore.fetchSliderProjectList();

function eArabic(x) {
  return x.toLocaleString('ar-EG');
}

// total project time
const totalMonth = (start, end) => {

  start = start.split(" ")[0];
  const startTime = new Date(start);
  end = end.split(" ")[0];
  const endTime = new Date(end);

  const monthsLeft = new Date(endTime - startTime);

  if (monthsLeft.getMonth() < 1) {
    const daysLeft = monthsLeft.getDay();
    return `${daysLeft} روز`
    if (daysLeft < 1) {
      const daysLeft = monthsLeft.getDay();
      return `${daysLeft} روز `
    }
  }

  return `${monthsLeft.getMonth()} ماه `
}

// how much times left?
const monthLeft = (end) => {

  end = end.split(" ")[0];
  const endTime = new Date(end);
  // current time
  const currentTime = Date.now()
  // times left
  const timeLeft = new Date(endTime - currentTime);
  // calculating month or day
  if (timeLeft.getMonth() < 1) {

  } else {
    return `${timeLeft.getMonth()} ماه تا پایان`
  }

  console.log(timeLeft)
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


</script>

<style scoped>

.swiper {
  width: 100%;
  max-width: 1280px;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  border-radius: 25px !important;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  width: 310px;
  align-items: center;
}

</style>