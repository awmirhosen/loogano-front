<template>

  <!--  Home page, main content-->

  <!--hero seciton-->
  <client-only>
    <Hero :auth="layoutStore.isAuth" />
  </client-only>


  <!----- gray wrapper start ---->
  <div class="w-full pt-14 bg-[#F7F7F7]">

    <!-- Loogano Service --->
    <client-only>
      <HomeService class="px-10"/>
    </client-only>

    <!---- third section------>
    <client-only>
      <Reasons/>
    </client-only>


    <!-----swiper investment ----->
    <div class="relative">
      <LazyHomeSlider/>
    </div>

    <LazyHomeInvestmentSteps/>


    <!----- home faq ------->
    <div class="mx-auto">
      <HomeFaq/>
    </div>

  </div>
  <!----- gray wrapper End ---->


</template>

<script setup>

import Hero from "~/components/home/Hero.vue";
import Reasons from "~/components/home/Reasons.vue";
import ServiceSwiper from "~/components/home/ServiceSwiper.vue";
import {useProjectStore} from "~/store/projects";
import {useLayoutStore} from "~/store/layout";
// import HomeSlider from "~/components/home/HomeSlider.vue";
// import InvestmentSteps from "~/components/home/InvestmentSteps.vue";
// import HomeFaq from "~/components/home/HomeFaq.vue";

definePageMeta({
  layout: "default"
})


const layoutStore = useLayoutStore();

const projectStore = useProjectStore();
projectStore.fetchSliderProjectList();

useHead({
  title: "لوگانو - loogano - پلتفرم سرمایه گذاری ملکی",
  meta: [
    { name: 'description', content: 'در لوگانو شما هم می‌توانید با هر میزان سرمایه ای از سود بازار ملک و املاک و سود ساخت '  }
  ]
})

</script>

<style scoped>

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}

.swiper-cards {
  width: 240px;
  height: 240px;
}

.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}

</style>