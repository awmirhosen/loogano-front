<template>
  <div class="w-full px-8">
    <div class="w-full">
      <!------ project details card -------->
      <div class="w-full mt-12 bg-white p-10">

        <p class="w-full text-center">صفحه ی پیشخوان در حال به روز رسانی میباشد</p>

      </div>

    </div>
  </div>
</template>

<script setup>

import {useLayoutStore} from "~/store/layout";

const layoutStore = useLayoutStore();

definePageMeta({
  layout: 'profile'
});

// onBeforeMount(() => {
//   setPageLayout("profile");
//   console.log("ff")
// })


// onBeforeMount(() => {
//   layoutStore.layouts = "profile"
// })

</script>

<style scoped>

.left-border {
  height: 200px;
  width: 5px;
  background: rgba(153, 153, 153, 0.4);
}

</style>