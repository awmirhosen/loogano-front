<template>
  <div class="w-full relative lg:max-w-[1000px]">

    <div  class="w-full flex justify-center lg:rounded-xl rounded-md" v-if="projectStore.projectImages[0]?.url">
      <img :src="'http://api.loogano.com/'+projectStore.projectImages[0]?.url"
           class="w-full object-fit lg:rounded-xl rounded-md" alt="mm">
    </div>

    <div class="w-full lg:max-h-[90px] lg:h-[90px] mt-3 lg:mb-24">
      <div class="w-full relative">
        <swiper
            :slidesPerView="3"
            :spaceBetween="10"
            :pagination="{
      clickable: true,
    }"
            class="mySwiper"
        >
          <swiper-slide class="lg:rounded-xl rounded-md h-[150px]" v-if="projectStore.projectImages[1]?.url">
            <img :src="'http://api.loogano.com/'+projectStore.projectImages[1]?.url" alt="main" class="lg:rounded-xl rounded-md">
          </swiper-slide>
          <swiper-slide class="lg:rounded-xl rounded-md" v-if="projectStore.projectImages[2]?.url">
            <img :src="'http://api.loogano.com/'+projectStore.projectImages[2]?.url" alt="main" class="lg:rounded-xl rounded-md">
          </swiper-slide>
          <swiper-slide class="lg:rounded-xl rounded-md relative cursor-pointer" v-if="projectStore.projectImages[0]?.url" @click="projectStore.onchangeModalStatus()">
            <img :src="'http://api.loogano.com/'+projectStore.projectImages[0]?.url" alt="main" class="lg:rounded-xl rounded-md" />
            <div class="w-full h-full lg:rounded-xl rounded-md flex justify-center items-center absolute top-0" style="background: rgb(0,0,0,0.6)">
              <div class="px-3 py-1 text-sm lg:block hidden pt-2 text-white rounded-lg">مشاهده ی عکس های بیشتر</div>
              <div class="px-3 py-1 block text-[10px] lg:hidden pt-2 text-white">بیشتر</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

  </div>
</template>

<script setup>


import {useProjectStore} from "~/store/projects";
const projectStore = useProjectStore();
console.log(projectStore.projectImages);



</script>

<style scoped>


.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: 150px !important;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>