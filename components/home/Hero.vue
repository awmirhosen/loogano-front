<template>
    <div class="w-full md:mt-36 mt-24 max-w-[450px] sm:max-w-768px md:max-w-[1800px] mx-auto mb-16">
      <div class="mt-10">
        <div class="w-full flex justify-center flex-col md:flex-row max-w-full sm:max-w-[500px] md:max-w-[1800px] mx-auto">

          <!------ left side of hero section start ----->
          <div class="w-full text-center order-2 md:order-1 flex justify-center md:justify-end gap-6 mt-10 px-4">

            <div class="relative sm:px-0 ">
              <div class="w-[150px] sm:w-auto">
                <img src="/images/home/hero_left.png" class="mt-2 w-[150px] sm:w-auto" alt="heros_right">
              </div>
              <div class="absolute -top-2 sm:-top-7 -right-2 sm:-right-6 z-10 w-[150px] sm:w-auto" >
                <img src="/images/home/left_hero_stroke.png" class="w-[150px] sm:w-auto" alt="left_stroke">
              </div>
            </div>

            <div class="">
              <!----left bottom hero image------->
              <div class="relative w-[150px] sm:w-auto">
                <div class="">
                  <img src="/images/home/hero_right_top.png" alt="heros_right" width="310">
                </div>
                <div class="absolute -top-3 -right-3 sm:-top-7 sm:-right-7 w-[150px] sm:w-auto">
                  <img src="/images/home/top_right_hero_stroke.png" alt="right_bottom_hero_stroke" width="310">
                </div>
                <div class="absolute bottom-0 -right-[310px] hidden md:block sm:w-auto">
  <!--                <img src="/images/home/hero_icon.png" alt="arrow_design">-->
                </div>
              </div>
              <!----right bottom hero image------->
              <div class="relative w-[150px] sm:w-auto">
                <img src="../../public/images/home/hero_right_down.png" class="mt-2 sm:mt-7" alt="heros_right-bottom">
                <div class="absolute sm:-top-7 sm:-right-7 -right-3 -top-2 w-[150px] sm:w-auto">
                  <img src="/images/home/right_bottom_hero_stroke.png" alt="right_bottom_hero_stroke">
                </div>
              </div>

            </div>

          </div>
          <!------ left side of hero section End ----->

          <!------ right side of hero section start ----->
          <div class="w-full flex justify-start md:order-1 text-center md:mt-8 mt-0">
            <div class="md:w-8/12 w-11/12  md:ml-20">
              <div class="w-full flex justify-center">
                <!----- title of web ------>
                <h1 class="md:text-[50px] text-[25px] text-right font-morabaa">
                  فرصت هایی بی انتها برای
                  <br>
                   <span class="text-blue-custom">سرمایه گذاری</span> هوشمند ملکی
                </h1>
              </div>

              <div class="flex justify-end px-5 w-full">
                <p class="text-zinc-600 mt-2 md:mt-2 text-right font-[20px]">
                  به دنیایی از فرصت‌ها و سرمایه‌گذاری‌های امن خوش آمدید. <strong class="font-bold font-[22px]">لوگانو</strong>، محیطی
                  <br class="hidden md:block">
                  مطمئن برای رشد و ثبات در بازار سرمایه گذاری ملکی
                </p>
              </div>

              <div class="p-4 mt-10 flex gap-10 justify-end md:flex hidden">

                <NuxtLink to="/login" v-if="!props.auth">
                  <button class="px-10 text-blue-custom border-blue-custom py-2 rounded-md text-white hover:bg-sky-custom login-hero">ورود</button>
                </NuxtLink>

                <NuxtLink to="/projects">
                  <button class="px-10 bg-sky-custom py-2 search-hero rounded-md text-white">سرمایه گذاری</button>
                </NuxtLink>

              </div>

              <div class="p-4 flex gap-10 justify-end block md:hidden" v-if="!props.auth">
                <NuxtLink to="/register">
                  <button class="px-10 bg-sky-custom py-2 search-hero rounded-md text-white">ثبت نام</button>
                </NuxtLink>
              </div>

              <div class="md:mt-16 mt-4 md:block hidden">
                <img src="/images/home/hero_project_count.png" alt="hero_count">
              </div>

            </div>

          </div>

          <!------- right side of hero section End ------>
        </div>
      </div>

      <div class="md:mt-16 mt-4 block md:hidden w-10/12 mx-auto md:w-auto">
        <img src="/images/home/hero_project_count.png" alt="hero_count">
      </div>

    </div>


</template>

<script setup>

const props = defineProps([
  'auth'
])

</script>

<style scoped>

.login-hero:hover {
  background: rgba(27, 158, 178, 1);
  color: white;
}

.login-hero {
  transition: all linear 150ms;
}

.search-hero:hover {
  background: white;
  outline: none;
  color: rgba(27, 158, 178, 1);
  border: 1px solid rgba(27, 158, 178, 1);
}

.search-hero {
  transition: all linear 150ms;
  border: 1px solid white;
}

</style>