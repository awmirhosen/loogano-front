<template>
  <div class="w-full mt-24 md:mt-36 lg:px-16 mx-auto">

    <h1 class="w-full text-right text-2xl md:text-3xl lg:text-4xl text-zinc-950 px-5">لیست پروژه ها</h1>

    <div class="w-full flex justify-center flex-wrap gap-10">

      <div class="md:rounded-[30px] mt-56 relative shadow-lg min-w-[378px] lg:p-6 md:p-4 p-3" v-for="(projects, index) in projectStore.projectLists" :key="index">

        <!------image---------->
        <div class="absolute w-full top-0 left-1/2 -translate-x-1/2 -translate-y-2/3 px-8" style="z-index: 33">
          <img src="/images/home/test_investment_slider_pic.png" class="w-full" alt="investment_building">
        </div>

        <div class="w-full text-center relative rounded-[16px]">
          <!--project name-->
          <div class="text-[22px] rounded-[16px] text-center mt-24 flex items-center flex-row-reverse justify-between flex-wrap">
            <p>{{ projects.title }}</p>
            <!---investment status---->
            <div class="text-center px-3 py-2 bg-zinc-400 text-white text-[13px] rounded-lg">
              توقف سرمایه پذیر
            </div>
          </div>
          <div class="">
            <div class="w-full px-10 h-[1px] mt-3 w-full bg-zinc-300 mt-12"></div>
          </div>

          <div class="w-full mt-5">
            <!-----address----->
            <div class="w-full flex justify-start gap-2 flex-row-reverse items-center my-1">
              <div>
                <img src="/images/home/location.png" alt="location">
              </div>
              <p class="text-zinc-500 text-[14px]">: منطقه</p>
              <p class="text-zinc-500 text-[16px] font-bold">{{ projects.address }}</p>
            </div>
            <!----type of building------->
            <div class="w-full flex justify-start gap-3 my-1 flex-row-reverse items-center">
              <div>
                <img src="/images/home/buildings.png" alt="location">
              </div>
              <p class="text-zinc-500 text-[14px]">: کاربری</p>
              <p class="text-zinc-500 text-[16px] font-bold">{{ projects.type }}</p>
            </div>
            <!---- building meter size------->
            <div class="w-full flex justify-start gap-3 flex-row-reverse items-center">
              <div >
                <img src="/images/home/tape_measure.png" alt="location">
              </div>
              <p class="text-zinc-500 text-[14px]">: متراژ</p>
              <p class="text-zinc-500 text-[16px] font-bold" dir="rtl" >{{ projects.area_mm / 1000 }} متر</p>
            </div>

            <div class="w-full flex justify-between gap-3 flex-row-reverse items-center">
              <div class="flex items-center justify-start gap-3 flex-row-reverse">
                <div class="">
                  <img src="/images/home/peoples.png" alt="location">
                </div>
                <p class="text-zinc-500 text-[14px]">: تعداد سرمایه گذار ها</p>
                <p class="text-zinc-500 text-[14px] font-bold" dir="rtl">{{ projects.project_user_count }} نفر</p>
              </div>

              <div class="px-4 py-2 bg-[#D4F3CC] text-[10px] rounded-lg" dir="rtl">
                سود تا امروز : {{ projects.progresses[0]?.value }}
              </div>

            </div>

            <div class="w-full h-[1px] mt-3 w-full bg-zinc-300 mt-2"></div>

          </div>
          <!---- development--->
          <div class="w-full mt-4">
            <p class="font-bold w-full text-right">: روند پیشرفت پروژه</p>

            <div class="w-full relative" dir="rtl">
              <div class="w-full h-[8px] bg-zinc-300 mt-4 rounded-full"></div>
              <div class="h-[8px] absolute bg-[#12788F] top-0 rounded-full" ref="projectPercentEl"></div>
            </div>

            <div class="w-full flex justify-between mt-2" dir="rtl">
              <div class="w-full text-zinc-400 text-right text-[12px]"> زمان پروژه: {{ totalMonth(projects.project_start, projects.project_end) }} </div>
              <div class="w-full text-zinc-400 text-left text-[12px]">{{ monthLeft(projects.project_end) }}</div>
            </div>

            <NuxtLink :to="{ name: 'projects-id', params: {id: projects.id} }" class="w-full bg-[#1B9DB1] p-3 block text-white rounded-lg mt-6">
              شروع سرمایه گذاری
            </NuxtLink>

          </div>
        </div>
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

const projectPercentEl = ref(null);

// total project time
const totalMonth = (start, end) => {

  start = start.split(" ")[0];
  const startTime = new Date(start);
  end = end.split(" ")[0];
  const endTime = new Date(end);

  const monthsLeft =new Date(endTime - startTime);

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

  }else {
    return `${timeLeft.getMonth()} ماه تا پایان`
  }

  console.log(timeLeft)
}


</script>

<style scoped>

</style>