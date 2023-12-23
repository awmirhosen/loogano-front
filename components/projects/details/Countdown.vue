<template>

  <div class="w-full">

    <div class="w-full flex justify-center items-center gap-6 2xl:text-[15px]">

      <div class="flex flex-col justify-center">
        <p class="text-center text-[#D12925] font-bold">{{ days }}</p>
        <p class="text-zinc-400">روز</p>
      </div>

      <div class="flex flex-col justify-center">
        <p class="text-center text-[#D12925] font-bold">{{ hours % 24 }}</p>
        <p class="text-zinc-500">ساعت</p>
      </div>

      <div class="flex flex-col justify-center">
        <p class="text-center text-[#D12925] font-bold">{{ minutes % 60 }}</p>
        <p class="text-zinc-500">دقیقه</p>
      </div>

      <div class="flex flex-col justify-center">
        <p class="text-center text-[#D12925] font-bold">{{ seconds % 60 }}</p>
        <p class="text-zinc-500">ثانیه</p>
      </div>

    </div>

  </div>

</template>

<script setup>

import {useProjectStore} from "~/store/projects";
const projectStore = useProjectStore();

console.log("Ending Time", projectStore.countdownEnd)


const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const launchDate = new Date(projectStore.countdownEnd);
const currentDate = new Date();


if (launchDate.getTime() < currentDate.getTime() ) {
  console.log(launchDate.getTime())
  projectStore.investmentTimeFlag = false;
}else {
  console.log(launchDate.getTime())
  setInterval(() => {
    const currDate = new Date();
    const launchTime = launchDate - currDate;

    seconds.value = parseInt(launchTime / 1000);
    minutes.value = parseInt(seconds.value / 60);
    hours.value = parseInt(minutes.value / 60);
    days.value = parseInt(hours.value / 24);

  }, 1000)
}







</script>

<style scoped>

</style>