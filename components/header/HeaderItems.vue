<template>
  <div class="w-full fixed top-0 bg-gray-custom max-w-[1900px] mx-auto" style="z-index: 3000">

    <div class="w-full block md:hidden">
      <div class="w-full flex justify-between gap-4 px-4 py-3">
        <!----- loogano logo ------>
        <NuxtLink to="/">
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
          <div class="flex flex-col gap-8 justify-center text-center pb-10 border-zinc-300 border-b-2">
            <NuxtLink to="/" @click="closeMobileMenu">خانه</NuxtLink>
            <!--          <NuxtLink to="/services">خدمات</NuxtLink>-->
            <NuxtLink to="/projects" @click="closeMobileMenu">سرمایه گذاری</NuxtLink>
            <NuxtLink to="/blog" @click="closeMobileMenu">بلاگ </NuxtLink>
            <!--          <NuxtLink to="/projects">سوالات متداول</NuxtLink>-->
          </div>

          <div v-if="!layoutStore.isAuth">
            <div class="mt-10 bg-sky-custom px-10 py-2 text-white rounded-md">
              <NuxtLink to="/register" @click="closeMobileMenu">ثبت نام</NuxtLink>
            </div>

            <div class="mt-2 bg-sky-custom px-10 py-2 text-white rounded-md flex justify-center">
              <NuxtLink to="/login" @click="closeMobileMenu">ورود</NuxtLink>
            </div>
          </div>
          <div class="w-full flex justify-center" v-else>
            <div
                class="right-0 py-2 mt-2 bg-sky-custom rounded-md shadow-xl w-44">
              <router-link
                  to="/profile"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-sky-500 hover:text-indigo-100">
                <div class="w-full flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                  مشاهده حساب
                </div>
              </router-link>
              <router-link
                  @click.prevent="authStore.logout"
                  to="/"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-sky-500 hover:text-indigo-100">
                <div class="w-full flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>
                  خروج از حساب
                </div>
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </Transition>


    <div class="flex flex-row-reverse px-20 gap-2 justify-between items-center hidden md:flex">

      <div class="flex flex-row-reverse gap-x-10">

        <div>
          <!--logo-->
          <NuxtLink to="/">
            <img src="/images/home/loogano_logo.png" alt="loogano_logo" width="100">
          </NuxtLink>
        </div>
        <!---- items ----->
        <div class="flex gap-10 items-center flex-row-reverse">
          <NuxtLink to="/">خانه</NuxtLink>
          <!--          <NuxtLink to="/services">خدمات</NuxtLink>-->
          <NuxtLink to="/projects">سرمایه گذاری</NuxtLink>
          <NuxtLink to="/blog">بلاگ</NuxtLink>
          <!--          <NuxtLink to="/projects">سوالات متداول</NuxtLink>-->
        </div>

      </div>

      <!----- sigin button ----->
      <NuxtLink to="/register" v-if="!layoutStore.isAuth">
        <button class="py-2 bg-sky-custom px-6 rounded-md text-white">ثبت نام</button>
      </NuxtLink>

      <div v-else >
        <div>
          <div class="relative">
            <!-- Dropdown toggle button -->
            <button
                @click="show = !show"
                class="flex gap-3 items-center p-2 text-white bg-sky-custom rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="mr-4">حساب کاربری</span>
            </button>

            <!-- Dropdown menu -->
            <div
                v-show="show"
                class="absolute right-0 py-2 mt-2 bg-sky-custom rounded-md shadow-xl w-44">
              <router-link
                  to="/profile"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-sky-500 hover:text-indigo-100">
                <div class="w-full flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                  مشاهده حساب
                </div>
              </router-link>
              <router-link
                  @click.prevent="authStore.logout"
                  to="/"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-sky-500 hover:text-indigo-100">
                <div class="w-full flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>
                  خروج از حساب
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>

import {useLayoutStore} from "~/store/layout";
import {useAuthStore} from "~/store/auth";

const mobileMenuFlag = ref(false);
const layoutStore = useLayoutStore();
const authStore = useAuthStore();

const show = ref(false)

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