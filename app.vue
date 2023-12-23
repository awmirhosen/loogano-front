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
import {useProfileStore} from "~/store/profile";
const profileStore = useProfileStore();

const layoutStore = useLayoutStore();

if (layoutStore.isAuth) {
  profileStore.fetchProfileData();

  profileStore.fetchUserProjects();

}



</script>

<style>

#nuxt-devtools-containe {
  display: none !important;
}


</style>