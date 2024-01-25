<template>

  <div class="w-full h-screen flex justify-center items-center" dir="rtl" v-if="projectStore.projectDetails.project_start === undefined">
    <Loader />
  </div>
  <div class="w-full mt-24 md:mt-36 px-4 lg:px-16 mx-auto relative" v-else>

    <!--modal-->
    <div class="w-full h-screen fixed mx-auto bg-red-400 -top-0 left-0 bg-zinc-950/90" style="z-index: 3335"
         v-if="projectStore.galleryModalFlag">
      <div class="w-full flex justify-between mt-5 px-10 items-center">
        <div @click="projectStore.onchangeModalStatus()" class="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-16 text-zinc-100 h-16">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </div>
        <p class="text-3xl text-white">: تصاویر بیشتر</p>
      </div>

      <div class="w-full relative mt-24">
        <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :modules="[SwiperEffectCreative, SwiperNavigation]"
            class="mySwiper"
            :breakpoints="{
          '0': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 1,
            spaceBetween: 20,
           },
           '1200': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
         }"
        >
          <swiper-slide v-for="(images, index) in projectStore.projectImages">
            <div class="w-full flex justify-center items-center h-full max-h-[600px]">
              <img :src="'https://loogano.com/endpoints/'+images.url" class="max-w-full" alt="main">
            </div>
          </swiper-slide>


        </swiper>

      </div>

    </div>

    <div class="w-full flex flex-col lg:flex-row justify-center items-start gap-4">
      <!-----left box---->
      <client-only>
        <div class="w-full max-w-[390px] mx-auto lg:mx-0 lg:min-w-[423px] lg:max-w-[423px] order-2 lg:order-1">
          <InvestmentBox/>

          <MobileFeatures/>

          <div class="w-full">
            <DownloadBox/>
          </div>

          <div class="w-full sticky">
            <StickyCard :name="projectStore.projectDetails.title" :cons="projectStore.projectDetails.constructor.title" />
          </div>

        </div>
      </client-only>

      <!------ right box----->
      <div class="w-full 2xl:max-w-[870px] max-w-[670px] order-1">
        <div class="">
          <ProjectsDetailsGallerySwiper keep-alive/>
          <!-----project features---->
          <div class="w-full hidden lg:block">
            <LazyProjectsDetailsFeatures :attr="projectStore.projectDetails.attributes"/>
          </div>

          <div class="w-full mt-4">
            <ProjectMap :loccationla="projectStore.projectDetails.location_latitude
" :locationlo="projectStore.projectDetails.location_longitude"
            />
          </div>

          <!--          <div class="w-full">-->
          <!--            <ChartsPieChart />-->
          <!--          </div>-->

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

import {useProjectStore} from "~/store/projects";
import InvestmentBox from "~/components/projects/details/InvestmentBox.vue";
import DownloadBox from "~/components/projects/details/DownloadBox.vue";
import StickyCard from "~/components/projects/details/StickyCard.vue";
import MobileFeatures from "~/components/projects/details/MobileFeatures.vue";
import ProjectMap from "~/components/projects/details/ProjectMap.vue";
import clientOnly from "#app/components/client-only";


definePageMeta({
  layout: 'default',
})

const route = useRoute();
// deifne pinia project store
const projectStore = useProjectStore();
projectStore.fetchProjectById(route.params.id);


const invetmentTime = (end) => {

  end = end.split(" ");
  end = end[0].split("-")

  const month = ref("");

  if (end[1] === '01') {
    month.value = "January"
  } else if (end[1] === "02") {
    month.value = "February"
  } else if (end[1] === '03') {
    month.value = "march"
  } else if (end[1] === '04') {
    month.value = "april"
  } else if (end[1] === '05') {
    month.value = "may"
  } else if (end[1] === '06') {
    month.value = "june"
  } else if (end[1] === '07') {
    month.value = "july"
  } else if (end[1] === '08') {
    month.value = "august"
  } else if (end[1] === '09') {
    month.value = "september"
  } else if (end[1] === '10') {
    month.value = "october"
  } else if (end[1] === '11') {
    month.value = "november"
  } else if (end[1] === '12') {
    month.value = "December"
  }

  projectStore.investmentEndingTime = `${end[2]} ${month.value} ${end[0]}`;

}

invetmentTime("2023-08-27 06:10:04");


</script>

<style scoped>


</style>