<template>
  <div class="w-full text-blue-custom text-center p-4" v-if="profileStore.profileData.wallet === undefined">
    در حال بارگیری اطلاعات شخصی...
  </div>
  <div class="w-full bg-white fixed z-10 flex justify-center items-center top-0 px-10" v-else dir="rtl">

    <div class="w-full flex items-center">
      <div class="w-full flex justify-between items-center">

        <div class="flex items-center gap-4">

          <div class="block md:hidden" @click="onchangeMobileProfileMenu" v-if="!profileStore.mobileHeaderFlag">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div class="block md:hidden" @click="onchangeMobileProfileMenu" v-else>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>

          <div>
            <!-------- logo of loogano ---->
            <NuxtLink to="/">
              <img src="/images/home/loogano_logo.png" alt="loogano_logo" class="md:w-[100px] w-[60px]">
            </NuxtLink>
          </div>
        </div>


<!--        <div class="w-[300px] border border-2 border-zinc-200 rounded-full p-1 flex items-center px-3">-->
<!--          &lt;!&ndash;&#45;&#45;search input -&#45;&#45;&ndash;&gt;-->
<!--          -->
<!--          <div class="w-full">-->
<!--            <input type="text" class="w-full focus:border-0 outline-0" placeholder="جستجو">-->
<!--          </div>-->

<!--          <div>-->
<!--            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <g id="Search 2">-->
<!--                <path id="Vector" d="M16.9458 15.9698C16.6529 15.6769 16.178 15.6769 15.8851 15.9697C15.5922 16.2626 15.5922 16.7375 15.8851 17.0304L16.9458 15.9698ZM19.5517 20.697C19.8446 20.9899 20.3194 20.9899 20.6123 20.697C20.9052 20.4041 20.9052 19.9293 20.6123 19.6364L19.5517 20.697ZM15.8851 17.0304L19.5517 20.697L20.6123 19.6364L16.9458 15.9698L15.8851 17.0304ZM9.08203 16.6667C4.9399 16.6667 1.58203 13.3088 1.58203 9.16666H0.0820312C0.0820312 14.1372 4.11147 18.1667 9.08203 18.1667V16.6667ZM16.582 9.16666C16.582 13.3088 13.2242 16.6667 9.08203 16.6667V18.1667C14.0526 18.1667 18.082 14.1372 18.082 9.16666H16.582ZM9.08203 1.66666C13.2242 1.66666 16.582 5.02453 16.582 9.16666H18.082C18.082 4.1961 14.0526 0.166664 9.08203 0.166664V1.66666ZM9.08203 0.166664C4.11147 0.166664 0.0820312 4.1961 0.0820312 9.16666H1.58203C1.58203 5.02453 4.9399 1.66666 9.08203 1.66666V0.166664Z" fill="#676767"/>-->
<!--              </g>-->
<!--            </svg>-->
<!--          </div>-->
<!--        </div>-->


      </div>
    </div>

    <div class="w-full flex justify-end cursor-pointer items-center gap-x-10">
      <!------ account wallet---------->
      <RouterLink to="/profile/wallet/charge" class="flex gap-x-2 p-2 bg-[#FFC72766] rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="hidden md:block" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M26.4132 11.0571H17.1989C15.1633 11.0571 13.5132 12.7073 13.5132 14.7429C13.5132 16.7784 15.1633 18.4286 17.1989 18.4286H26.4132M17.1989 14.7429V14.7551M5.66396 6.14286H23.8195C25.252 6.14286 26.4132 7.42631 26.4132 9.00953V20.4762C26.4132 22.0594 25.252 23.3429 23.8195 23.3429H5.66396C4.23153 23.3429 3.07031 22.0594 3.07031 20.4762V9.00953C3.07031 7.42631 4.23153 6.14286 5.66396 6.14286Z" stroke="black" stroke-width="1.22857" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="mt-1 flex items-center gap-1 md:gap-2 px-3">
          <p class="text-[12px] md:text-[16px]">{{ eArabic(profileStore.profileData.wallet.balance) }}</p>
          <p class="text-[12px] md:text-[16px]">تومان</p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M14.7444 8.6V20.8857M8.60156 14.7429H20.8873" stroke="black" stroke-width="1.22857" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </RouterLink>

      <div class=" items-center gap-2 hidden md:flex">
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Profile Circle">
            <path id="Vector" d="M20.5846 11.125C20.5846 13.9324 18.3087 16.2083 15.5013 16.2083V17.7083C19.1372 17.7083 22.0846 14.7609 22.0846 11.125H20.5846ZM15.5013 16.2083C12.6939 16.2083 10.418 13.9324 10.418 11.125H8.91797C8.91797 14.7609 11.8654 17.7083 15.5013 17.7083V16.2083ZM10.418 11.125C10.418 8.31755 12.6939 6.04166 15.5013 6.04166V4.54166C11.8654 4.54166 8.91797 7.48912 8.91797 11.125H10.418ZM15.5013 6.04166C18.3087 6.04166 20.5846 8.31755 20.5846 11.125H22.0846C22.0846 7.48912 19.1372 4.54166 15.5013 4.54166V6.04166ZM11.1263 22.0833H19.8763V20.5833H11.1263V22.0833ZM1.66797 15.5C1.66797 7.86006 7.86136 1.66666 15.5013 1.66666V0.166664C7.03294 0.166664 0.167969 7.03163 0.167969 15.5H1.66797ZM15.5013 1.66666C23.1412 1.66666 29.3346 7.86006 29.3346 15.5H30.8346C30.8346 7.03163 23.9697 0.166664 15.5013 0.166664V1.66666ZM29.3346 15.5C29.3346 19.4231 27.7026 22.9637 25.0783 25.4821L26.1169 26.5644C29.0237 23.7748 30.8346 19.8482 30.8346 15.5H29.3346ZM25.0783 25.4821C22.5921 27.8681 19.2186 29.3333 15.5013 29.3333V30.8333C19.621 30.8333 23.3626 29.2076 26.1169 26.5644L25.0783 25.4821ZM19.8763 22.0833C22.3419 22.0833 24.3989 23.8394 24.862 26.1694L26.3332 25.877C25.7334 22.8587 23.0714 20.5833 19.8763 20.5833V22.0833ZM15.5013 29.3333C11.784 29.3333 8.41054 27.8681 5.9243 25.4821L4.88568 26.5644C7.64002 29.2076 11.3816 30.8333 15.5013 30.8333V29.3333ZM5.9243 25.4821C3.30005 22.9637 1.66797 19.4231 1.66797 15.5H0.167969C0.167969 19.8482 1.9789 23.7748 4.88568 26.5644L5.9243 25.4821ZM11.1263 20.5833C7.93122 20.5833 5.26924 22.8587 4.66937 25.877L6.1406 26.1694C6.60367 23.8394 8.66073 22.0833 11.1263 22.0833V20.5833Z" fill="#2D264B"/>
          </g>
        </svg>
        <p class=""> {{profileStore.profileData.first_name}}  {{profileStore.profileData.last_name}} </p>
      </div>

    </div>

  </div>
</template>

<script setup>

import {useProfileStore} from "~/store/profile";

const profileStore = useProfileStore();

function eArabic(x) {
  return x.toLocaleString('ar-EG');
}

const onchangeMobileProfileMenu = () => {
  if (profileStore.mobileHeaderFlag === false) {
    profileStore.mobileHeaderFlag = true;
  }else {
    profileStore.mobileHeaderFlag = false;
  }
}

</script>

<style scoped>

</style>