<template>
  <div class="w-full px-10">
    <!------ page title ----->
    <div class="w-full" dir="rtl">
      <p class="text-[23px] text-[#0C5C75]">شارژ کیف پول</p>
      <span class="block w-full mt-3 h-[2px] bg-sky-custom"></span>
    </div>
    <!------ empty wallet ------>

    <div class="flex items-center justify-center mt-10" v-if="profileStore.profileData.wallet.balance > 1">
      <div dir="rtl" class="w-[300px] bg-blue-100 p-6 rounded-md">
        <p class="text-center mt-10 mb-4 text-[24px]">موجودی کیف پول :</p>
        <div class="flex items-center justify-center w-full mb-10 gap-4" dir="rtl">
          <div class="w-[50px] h-[50px] bg-sky-custom rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M26.4132 11.0571H17.1989C15.1633 11.0571 13.5132 12.7073 13.5132 14.7429C13.5132 16.7784 15.1633 18.4286 17.1989 18.4286H26.4132M17.1989 14.7429V14.7551M5.66396 6.14286H23.8195C25.252 6.14286 26.4132 7.42631 26.4132 9.00953V20.4762C26.4132 22.0594 25.252 23.3429 23.8195 23.3429H5.66396C4.23153 23.3429 3.07031 22.0594 3.07031 20.4762V9.00953C3.07031 7.42631 4.23153 6.14286 5.66396 6.14286Z" stroke="white" stroke-width="1.22857" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p>{{ eArabic(profileStore.profileData.wallet.balance) }}</p>
          <p>تومان</p>
        </div>
      </div>
    </div>
    <EmptyWallet v-else  />

    <div>
      <div class="flex justify-center">
        <button
            class="px-10 py-2 text-white bg-[#6C96E7] hover:bg-blue-500 transition-all text-[17px] rounded-full mt-4"
            @click="changePaymentFlag"
        >
          افزایش اعتبار
        </button>
      </div>
      <!------------ increase your inventory -------->
      <transition name="fade" mode="out-in">
        <div class="flex justify-center w-full" v-if="paymentFlag">
          <div class="w-[800px]">
            <div class="w-full mt-10 P-10" dir="rtl">
              <p class="font-bold text-[20px]">افزایش موجودی کیف پول</p>
              <p class="text-zinc-400 text-[14px] mt-2">با شارژ موجودی حساب خود آسان‌تر سرمایه گذاری کنید.</p>
            </div>

            <div class="flex justify-center mt-6 gap-4" dir="rtl">
              <div class="px-10 py-2 text-zinc-400 border-2 rounded-md border-zinc-300 w-full text-center cursor-pointer" @click="changeAmount(5000000)">
                5,000,000 تومان
              </div>
              <div class="px-10 py-2 text-zinc-400 border-2 rounded-md border-zinc-300 w-full text-center cursor-pointer" @click="changeAmount(15000000)">
                15,000,000 تومان
              </div>
              <div class="px-10 py-2 border-2 text-zinc-400 rounded-md border-zinc-300 w-full text-center cursor-pointer" @click="changeAmount(30000000)">
                30,000,000 تومان
              </div>
            </div>

            <div class="mt-4 border-2 rounded-md border-zinc-300 py-2 flex gap-2 items-center px-4">
              <p class="text-zinc-400">تومان</p>
              <input class="w-full bg-inherit focus:border-0 focus:outline-0 " v-model="paymentAmount" />
              <p class="whitespace-nowrap text-zinc-400">مبلغ مورد نظر</p>
            </div>

            <div class="flex justify-end w-full mt-4">
              <button class="px-10 py-2 text-white bg-sky-custom rounded-md transition-all hover:text-zinc-200" @click="chargeWallet" >افزایش اعتبار</button>
            </div>


          </div>
        </div>
      </transition>
    </div>

  </div>
</template>

<script setup>

import EmptyWallet from "~/components/profile/wallet/EmptyWallet.vue";
import {useProfileStore} from "~/store/profile";

const paymentFlag = ref(false);
const paymentAmount = ref("");

definePageMeta({
  middleware: 'is-auth',
  layout: 'profile',
});

const router = useRouter();
const profileStore = useProfileStore();

function eArabic(x) {
  return x.toLocaleString('ar-EG');
}

const changeAmount = (amount) => {
  paymentAmount.value = amount
}

const changePaymentFlag = () => {
  if (paymentFlag.value === true){
    paymentFlag.value = false;
  }else {
    paymentFlag.value = true;
  }
}



const chargeWallet = () => {
  profileStore.chargeWallet(paymentAmount.value);
}




</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>