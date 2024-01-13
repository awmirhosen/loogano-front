<template>

  <div class="px-10" >
    <!--service title-->
    <div class="w-full flex justify-start items-center gap-2 gap- px-4 md:my-24">
      <div class="w-full h-1 bg-sky-custom"></div>
      <p class="md:text-[52px] text-[28px] font-morabaa whitespace-nowrap">خدمات لوگانو</p>
    </div>

    <!----banner-------->
    <div class="w-11/12 mx-auto mt-10 relative ">
      <div class="w-full service-banner flex items-center">
        <div class="w-10/12 mx-auto relative mt-52">
          <HomeServiceSwiper/>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

</script>

<style scoped>

.service-banner {
  background: url("../../public/images/home/loogano_service_bnner.jpg") no-repeat center center;
  height: 410px;
  background-size: cover;
  border-radius: 30px;
  overflow-y: visible;
}

</style>