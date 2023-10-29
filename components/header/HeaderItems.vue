<template>
  <div class="w-full fixed top-0 bg-gray-custom max-w-[1900px] mx-auto" style="z-index: 100">

    <div class="w-full block md:hidden">
      <div class="w-full flex justify-between gap-4 px-4 py-3">
        <!----- loogano logo ------>
        <NuxtLink to="/" >
          <img src="/images/header/loogano_mobile_logo.svg" alt="loogano_mobile_logo">
        </NuxtLink>

        <div @click="onChangeMobileMenu" v-if="!mobileMenuFlag">
          <img src="/images/header/menu-hamburger.png" alt="burgut_menu_icon" class="w-8">
        </div>
        <div @click="onChangeMobileMenu" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-8 h-8 text-red-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </div>
      </div>
    </div>

    <Transition name="translateX">
      <div class="w-full h-screen" v-show="mobileMenuFlag">
        <div class="flex flex-col gap-10 items-center justify-center w-full mt-10">
          <NuxtLink to="/" @click="closeMobileMenu" >خانه</NuxtLink>
<!--          <NuxtLink to="/services">خدمات</NuxtLink>-->
          <NuxtLink to="/projects" @click="closeMobileMenu" >سرمایه گذاری</NuxtLink>
          <NuxtLink to="/blog" @click="closeMobileMenu" >بلاگ ها</NuxtLink>
<!--          <NuxtLink to="/projects">سوالات متداول</NuxtLink>-->
        </div>
      </div>
    </Transition>


    <div class="flex flex-row-reverse px-20 gap-2 justify-between items-center hidden md:flex">

      <div class="flex flex-row-reverse gap-x-10">

        <div>
          <!--logo-->
          <NuxtLink to="/" >
            <img src="/images/home/loogano_logo.png" alt="loogano_logo" width="100">
          </NuxtLink>
        </div>
        <!---- items ----->
        <div class="flex gap-10 items-center flex-row-reverse">
          <NuxtLink to="/" >خانه</NuxtLink>
<!--          <NuxtLink to="/services">خدمات</NuxtLink>-->
          <NuxtLink to="/projects">سرمایه گذاری</NuxtLink>
          <NuxtLink to="/blog">بلاگ ها</NuxtLink>
<!--          <NuxtLink to="/projects">سوالات متداول</NuxtLink>-->
        </div>

      </div>

      <!----- sigin button ----->
      <NuxtLink to="/register">
        <button class="py-2 bg-sky-custom px-6 rounded-md text-white">ثبت نام</button>
      </NuxtLink>

    </div>

  </div>
</template>

<script setup>

const mobileMenuFlag = ref(false);

const onChangeMobileMenu = () => {
  if (mobileMenuFlag.value === true) {
    mobileMenuFlag.value = false;
  } else {
    mobileMenuFlag.value = true;
  }
}

const closeMobileMenu = () => {
  mobileMenuFlag.value = false;
}

</script>

<style scoped>

.bg-gray-custom {
  background: #F7F7F7;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


</style>