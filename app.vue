<template>
  <div class="main-wrappper w-full">
    <NuxtLoadingIndicator color="#1B9DB1" throttle="0" />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>

import {useLayoutStore} from "~/store/layout";
import axios from "~/plugins/axios";
const layoutStore = useLayoutStore();

const $axios = axios().provide

console.log($axios.authFlag);

if ($axios.authFlag === true) {
  layoutStore.isAuth = true;
}else {
  layoutStore.isAuth = false;
}


</script>

<style>

#nuxt-devtools-containe {
  display: none !important;
}


</style>