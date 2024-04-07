<template>
  <div class="w-full">
    <!------ Header Hero ----->
    <div class="w-full mt-8 md:mt-24 flex  items-center justify-center overflow-hidden relative">
      <div class="w-full h-[450px] flex justify-center items-center rounded-b-[30px]" style=" background: url('/images/test/success_hero.jpg') center center no-repeat; background-size: cover">
        <div class="w-[250px] h-[250px] bg-white/[.9] rounded-full flex justify-center items-center">
          <div class="text-center">
            <div class="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="132" height="131" viewBox="0 0 132 131" fill="none">
                <path d="M17.5711 31.9921C10.1205 42.7872 6.5024 55.7678 7.29466 68.8604C8.08692 81.9531 13.2438 94.4026 21.9418 104.221C30.6397 114.039 42.3768 120.658 55.2785 123.023C68.1803 125.388 81.5023 123.361 93.1168 117.266C104.731 111.171 113.968 101.359 119.352 89.3986C124.736 77.4379 125.957 64.018 122.819 51.2822C119.681 38.5464 112.366 27.2295 102.042 19.139C91.7178 11.0485 78.9801 6.65117 65.8635 6.64929C62.2667 6.6495 58.6774 6.97423 55.139 7.61954" stroke="#00596E" stroke-width="4.23604" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.5627 20.9058C25.5916 22.6117 23.7334 24.4439 22 26.3909" stroke="#00596E" stroke-width="4.23604" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M111.698 84.8351C122.472 59.541 110.7 30.3026 85.406 19.5294C60.1119 8.75623 30.8735 20.5278 20.1003 45.8219C9.32714 71.116 21.0987 100.354 46.3928 111.127C71.6869 121.901 100.925 110.129 111.698 84.8351Z" fill="#2DBDD3"/>
                <path d="M40.8281 66.0975L59.7156 87.5593L90.6082 43.7947" stroke="#00596E" stroke-width="5.51878" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="w-full text-center font-morabaa text-[28px] text-[#455A64]" dir="rtl">پرداخت موفق!</p>
          </div>
        </div>
      </div>

      <!------- success text and white field ------>

    </div>

    <!----- white space ----->
    <div class="w-full">
      <p class="w-full text-zinc-400 mt-4 text-[34px] text-center font-morabaa" dir="rtl">تبریک! شماهم صاحب این ملک شدید</p>


      <!----- datas table ---->
      <div class="w-full mt-5">


        <div class="w-ful flex justify-center w-[1200px] mx-auto" id="container" style="display: none" v-if="!projectStore.certificateFlag">
          <Certificate />
        </div>
        <div class="flex justify-center mt-5" dir="rtl" v-else>
          <p class="text-[34px] text-zinc-500 font-bold">در حال دریافت گواهی...</p>
        </div>



<!--        <div class="flex justify-between p-4 border-b-2 mx-auto border-zinc-200 w-full md:w-6/12" dir="rtl">-->
<!--          <p>تاریخ / زمان :</p>-->
<!--          <p>1402/8/10 / 15:24:35</p>-->
<!--        </div>-->
<!--        <div class="flex justify-between p-4 border-b-2 mx-auto border-zinc-200 w-full md:w-6/12" dir="rtl">-->
<!--          <p>تاریخ / زمان :</p>-->
<!--          <p>1402/8/10 / 15:24:35</p>-->
<!--        </div>-->
<!--        <div class="flex justify-between p-4 border-b-2 mx-auto border-zinc-200 w-full md:w-6/12" dir="rtl">-->
<!--          <p>تاریخ / زمان :</p>-->
<!--          <p>1402/8/10 / 15:24:35</p>-->
<!--        </div>-->
<!--        <div class="flex justify-between p-4 border-b-2 mx-auto border-zinc-200 w-full md:w-6/12" dir="rtl">-->
<!--          <p>تاریخ / زمان :</p>-->
<!--          <p>1402/8/10 / 15:24:35</p>-->
<!--        </div>-->
<!--        <div class="flex justify-between p-4 border-b-2 mx-auto border-zinc-200 w-full md:w-6/12" dir="rtl">-->
<!--          <p>تاریخ / زمان :</p>-->
<!--          <p>1402/8/10 / 15:24:35</p>-->
<!--        </div>-->



      </div>

      <div class="mt-4 w-11/12 md:w-[500px] mx-auto">
        <div class="flex justify-center gap-4">
          <RouterLink to="/profile/investment/properties" class="bg-sky-custom text-white p-3 w-full text-center">
            مدیریت دارایی ها
          </RouterLink>
          <RouterLink to="/" class="bg-[#C0ECF2] text-[#005B70] text-white p-3 w-full text-center">
            صفحه ی اصلی
          </RouterLink>
        </div>
        <div class="w-full border cursor-pointer border-2 transition-all hover:border-zinc-500 mt-4 border-[#0093A9] flex items-center justify-center p-2" @click.prevent="downloadCerti" >
          <p class=" text-[#0093A9]">دانلود گواهی سرمایه گذاری</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M25.8307 19.3749V23.2499C25.8307 24.6766 24.6741 25.8332 23.2474 25.8332H7.7474C6.32066 25.8332 5.16406 24.6766 5.16406 23.2499L5.16406 19.3749M10.3307 14.2082L15.4974 19.3749M15.4974 19.3749L20.6641 14.2082M15.4974 19.3749V3.87488" stroke="#0093A9" stroke-width="1.9375" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

      </div>


    </div>

  </div>
</template>

<script setup>

import {useProjectStore} from "~/store/projects";


const { $html2canvas } = useNuxtApp();

const downloadCerti =  () => {

   $html2canvas(document.getElementById("container"), {
    onclone: function (clonedDoc) {
      clonedDoc.getElementById('container').style.display = 'block';
    }
  }).then(function (canvas) {
    var a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = 'certificate.jpg';
    a.click();
  })

}

const projectStore = useProjectStore();


const route = useRoute();

projectStore.successPaymentDetails(route.params.id);

definePageMeta({
  layout: 'default',
})



</script>

<style scoped>

</style>