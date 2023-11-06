<template>
  <div class="w-full bg-[#F8F8F8]">
    <!--    header-->
    <ProfileHeader/>

    <div class="flex items-start pt-36 px-10">
      <div class="w-full">
        <slot />
      </div>

      <ProfileMenu />

    </div>


    <!-----footer------>
    <Footer />
  </div>
</template>

<script setup>

import ProfileMenu from "~/components/profile/ProfileMenu.vue";



</script>

<style scoped>

</style>