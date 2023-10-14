<template>
  <div class="w-screen relative">
    <swiper
        :slidesPerView="3"
        :spaceBetween="15"
        :pagination="{
      clickable: true,
    }"
        class="mySwiper"
    >
      <swiper-slide class="rounded-xl">
        <img src="/images/projects/test/main.png" alt="main" class="rounded-xl">
      </swiper-slide>
      <swiper-slide class="rounded-xl">
        <img src="/images/projects/test/main.png" alt="main" class="rounded-xl">
      </swiper-slide>
      <swiper-slide class="rounded-xl relative" @click="onchangeGalleryModalStatus">
        <img src="/images/projects/test/main.png" alt="main" class="rounded-xl" />
        <div class="w-full h-full rounded-xl flex justify-center items-center absolute top-0" style="background: rgb(0,0,0,0.6)">
          <div class="px-3 py-1 text-sm pt-2 text-white rounded-lg">مشاهده ی عکس های بیشتر</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>