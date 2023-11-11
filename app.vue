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
const layoutStore = useLayoutStore();

definePageMeta({
  middleware: 'set-auth'
})


</script>

<style>

#nuxt-devtools-containe {
  display: none !important;
}


</style>