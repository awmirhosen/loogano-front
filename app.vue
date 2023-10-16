<template>
  <div class="main-wrappper w-full">
    <NuxtLoadingIndicator color="#1B9DB1" throttle="0" />
    <NuxtLayout :name="layoutStore.layouts">
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>

import {useLayoutStore} from "~/store/layout";

const layoutStore = useLayoutStore();


</script>

<style scoped>


</style>