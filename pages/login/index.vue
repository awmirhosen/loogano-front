<template>
  <Login />
</template>

<script setup>

import {useAuthStore} from "~/store/auth";
import Login from "~/components/auth/Login.vue";

definePageMeta({
  middleware: 'is-logged-in',
  layout: 'default',
})

const authStore = useAuthStore();

const phoneNumber = ref("");
const loginPassword = ref("");


const LoginMobileVerify = (formData) => {
  console.log(formData.mobile);
  authStore.verifyMobile(formData.mobile);
}

function eArabic(x) {
  return x.toLocaleString('ar-EG');
}

</script>

<style scoped>

input:focus {
  outline: none !important;
}

</style>