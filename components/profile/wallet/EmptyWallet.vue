<template>
  <div class="w-full">
    <!------ empty wallet ------>
    <div class="w-full flex justify-center items-center">
      <div dir="rtl" class="text-center">
        <img src="/images/empty_wallet.png" alt="wallet_icon">
        <p class="text-[#525252] w-full text-center text-[18px]">کیف پول شما خالی است!</p>
        <p class="text-zinc-400 w-full text-center text-[18px]">برای افزایش اعتبار کلیک کنید.</p>

        <button
            class="px-10 py-2 text-white bg-[#6C96E7] hover:bg-blue-500 transition-all text-[17px] rounded-full mt-4"
            @click="changePaymentFlag"
        >
          افزایش اعتبار
        </button>
      </div>
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
</template>

<script setup>

import {useProfileStore} from "~/store/profile";

const paymentFlag = ref(false);
const paymentAmount = ref("");

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

const profileStore = useProfileStore();


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