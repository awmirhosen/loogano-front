<template>
  <div class="w-full h-screen flex justify-center items-center gap-3 flex-col">
    <p class="text-3xl">لطفا صبر کنید...</p>

    <div class="w-[50px] h-[50px] bg-sky-custom rounded-full first-animation-ele"></div>
    <div class="w-[50px] h-[50px] bg-sky-custom rounded-full second-animation-ele"></div>

  </div>
</template>

<script setup>


</script>

<style scoped>

.first-animation-ele {
  animation: loading infinite;
  animation-duration: 1.6s;
  transition: all linear 1ms;
}
.second-animation-ele {
  animation: loading2 infinite;
  animation-duration: 1.6s;
  transition: all linear 1ms;
}


@keyframes loading {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(62px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes loading2 {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-62px);
  }
  100% {
    transform: translateY(0px);
  }
}

</style>