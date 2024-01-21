<template>
  <div class="w-full relative mt-24">
    <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :modules="[SwiperEffectCreative]"
        class="mySwiper"
        :breakpoints="{
          '0': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 20,
           },
           '1200': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
         }"
    >
      <swiper-slide class="rounded-[30px] w-[300px]">
        <div class="w-full text-center p-5  relative" dir="rtl">
          <p class="md:text-[30px] text-[22px] mt-24 font-morabaa md:mt-24">مشاوره حرفه ای</p>
          <div class="w-10/12 mx-auto mt-10">
            <div class="absolute p-5  rounded-[30px] bg-[#D1E7EB] md:-top-8 -top-12 left-1/2 -translate-x-1/2 mt-16">
              <img src="/images/icons/home/service_cards_icon.png" alt="service_card_icons" class="md:w-12 w-12">
            </div>
            <p class="w-full font-[12px] md:mt-10 mt-0 text-zinc-500">
              مشاوره حرفه‌ای، کلید موفقیت در سرمایه‌گذاری ملکی. با داشتن یک تیم مشاوران حرفه‌ای و با تجربه، ما به شما
              راهنمایی می‌کنیم تا بهترین تصمیم‌ها را در دنیای پررونق سرمایه‌گذاری ملکی بگیرید.
            </p>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="rounded-[30px] w-[300px]">
        <div class="w-full text-center p-5 h-auto relative" dir="rtl">
          <p class="md:text-[30px] text-[22px] mt-24 font-morabaa md:mt-24">فرصت سرمایه گذاری</p>
          <div class="md:w-10/12 w-full mx-auto mt-10">
            <div class="absolute p-5  rounded-[30px] bg-[#D1E7EB] -top-12 md:-top-8 left-1/2 -translate-x-1/2 mt-16">
              <img src="/images/icons/home/deposit.png" alt="service_card_icons" class="md:w-12 w-12">
            </div>
            <p class="w-full font-[12px] md:mt-10 mt-0 text-zinc-500">
              با سرمایه‌گذاری هوشمندانه در ملک‌های متنوع، از بازدهی بی‌نظیر بهره‌مند شوید. امکانات انعطاف‌پذیر، تحلیل دقیق بازار و مشاوره حرفه‌ای، همه با هدف رسیدن به بهترین نتایج در پیش روی شما قرار دارد.
            </p>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="rounded-[30px] w-[300px]">
        <div class="w-full text-center p-5 h-auto relative" dir="rtl">
          <p class="md:text-[30px] text-[22px] mt-24 font-morabaa md:mt-24">تحلیل بازار</p>
          <div class="md:w-10/12 w-full mx-auto mt-10">
            <div class="absolute p-5  rounded-[30px] bg-[#D1E7EB] -top-12 md:-top-8 left-1/2 -translate-x-1/2 mt-16">
              <img src="/images/icons/home/market-research.png" alt="service_card_icons" class="md:w-12 w-12">
            </div>
            <p class="w-full font-[12px] md:mt-10 mt-0 text-zinc-500 mb-4">
              تیم متخصص ما با ارائه اطلاعات به‌روز و تحلیل‌های گسترده از عوامل مؤثر در بازار، به شما امکان می‌دهد تصمیم‌گیری‌های هوشمندانه‌تری در سرمایه‌گذاری‌های ملکی خود بگیرید.
            </p>
          </div>
        </div>
      </swiper-slide>

    </swiper>

  </div>
</template>

<script setup>

import 'swiper/css';
import 'swiper/css/pagination';

const modules = [SwiperPagination];

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
  border-radius: 25px !important;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  width: 310px;
  align-items: center;
}


</style>