<template>
  <div class="w-full px-10">
    <!------ page title ----->
    <div class="w-full" dir="rtl">
      <p class="text-[23px] text-[#0C5C75]">شارژ کیف پول</p>
      <span class="block w-full mt-3 h-[2px] bg-sky-custom"></span>
    </div>
    <!------ empty wallet ------>
    <EmptyWallet />

  </div>
</template>

<script setup>

import EmptyWallet from "~/components/profile/wallet/EmptyWallet.vue";

definePageMeta({
  layout: 'profile',
})


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