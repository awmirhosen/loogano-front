<template>
  <div class="w-full mt-8 border-zinc-300 rounded-xl p-4">
    <!-----title of box------>
    <div class="flex justify-between w-full items-center mt-4 px-2">
      <div>
        <p class="text-[13px] text-[#1B9DB1]">
          گروه سازندگان: {{ projectStore.projectDetails.constructor.title }}
        </p>
      </div>
      <h4 class="2xl:text-[24px]">پروژه آرمونیا</h4>
    </div>

    <hr class="mt-5">

    <div class="flex justify-around flex-wrap mt-4">
      <div class="w-[117px] text-center rounded-md py-2">
        <p class="text-[#12788F]">37%</p>
        <p class="text-zinc-600 text-sm">فروش رفته</p>
      </div>
      <div class="w-[117px] text-center rounded-md py-2">
        <p class="text-[#12788F]">37%</p>
        <p class="text-zinc-600 text-sm">پیش بینی سود</p>
      </div>
      <div class="w-[117px] text-center rounded-md py-2">
        <p class="text-[#12788F]">37%</p>
        <p class="text-zinc-600 text-sm">سود تا امروز</p>
      </div>
    </div>

<!--    <hr class="mt-5">-->

    <!-----development------>
    <div class="w-full mt-4">
<!--      <p class="font-bold w-full text-right">: روند پیشرفت پروژه</p>-->

<!--      <div class="w-full relative" dir="rtl">-->
<!--        <div class="w-full h-[8px] bg-zinc-300 mt-4 rounded-full"></div>-->
<!--        <div class="w-8/12 h-[8px] absolute bg-[#5BCE90] top-0  rounded-full"></div>-->
<!--      </div>-->

<!--      <div class="w-full flex justify-between mt-2" dir="rtl">-->
<!--        <div class="w-full text-zinc-400 text-right text-[12px]">-->
<!--          زمان کل پروژه : {{ totalMonth() }}-->
<!--        </div>-->
<!--        <div class="w-full text-zinc-400 text-left text-[12px]">-->
<!--          {{ monthLeft(projectStore.projectDetails.project_end) }}-->
<!--        </div>-->
<!--      </div>-->

      <hr class="mt-5">
      <!----custom tabs--------->
<!--      <div class="w-full mt-5" dir="rtl">-->
<!--        <div class="w-full flex gap-2 justify-center">-->
<!--          <div ref="priceBox" class="text-center border-b-2 border-[#12788F] pb-2 cursor-pointer transition-all text-[#6EC3D0] w-2/3" @click="buyBaseOnPrice">-->
<!--            بر اساس قیمت-->
<!--          </div>-->

<!--          <div ref="meterBox" class="border-b-2 w-1/3 text-center border-zinc-200 pb-2 text-zinc-800 cursor-pointer transition-all" @click="buyBaseOnMeter" >-->
<!--            بر اساس متر-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash;&#45;&#45;tabs-&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->
<!--        <div v-if="invertmentBoxStatus === 1" class="w-full mt-4">-->
<!--          <p class="w-full text-right">مبلغ سرمایه گذاری</p>-->
<!--          <div class="w-full flex justify-center flex-row-reverse mt-4 bg-zinc-100 p-2">-->
<!--            <div class="border-r-2 border-zinc-200 pr-1"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">-->
<!--              <path d="M5.71582 9.91718L13.2676 9.91718" stroke="black" stroke-width="1.13276" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--            </svg></div>-->

<!--            <div class="w-full flex px-4">-->
<!--              <input class=" text-center bg-zinc-100 w-full text-center" type="text" placeholder="1980000" @input="onchangePricePriceBox" />-->
<!--              <p>ریال</p>-->
<!--            </div>-->

<!--            <div class="border-l-2 border-zinc-200 pl-1"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">-->
<!--              <path d="M9.78857 6.11426V13.7201M6.0127 9.91719H13.5644" stroke="black" stroke-width="1.13276" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--            </svg></div>-->
<!--          </div>-->

<!--          <div class="w-full flex justify-between items-center mt-2">-->
<!--            <div class="text-zinc-700 text-sm">-->
<!--              متراژ معادل : {{ totalBoughtMeter }} متر-->
<!--            </div>-->

<!--            <div class="text-zinc-700 text-sm">-->
<!--              مبلغ نهایی : 2.200.000 ریال-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->

<!--        <div v-if="invertmentBoxStatus === 2" class="w-full mt-4">-->
<!--          <p class="w-full text-right">متراژ سرمایه گذاری</p>-->
<!--          <div class="w-full flex justify-center flex-row-reverse mt-4 bg-zinc-100 p-2">-->
<!--            <div class="border-r-2 border-zinc-200 pr-1"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">-->
<!--              <path d="M5.71582 9.91718L13.2676 9.91718" stroke="black" stroke-width="1.13276" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--            </svg></div>-->

<!--            <div class="w-full flex items-center px-4">-->
<!--              <input class="w-full text-center bg-zinc-100" type="number" step="10" placeholder="3 متر" @input="onchangeMeterbox" />-->
<!--              <p>متر</p>-->
<!--            </div>-->

<!--            <div class="border-l-2 border-zinc-200 pl-1"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">-->
<!--              <path d="M9.78857 6.11426V13.7201M6.0127 9.91719H13.5644" stroke="black" stroke-width="1.13276" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--            </svg></div>-->
<!--          </div>-->

<!--          <div class="w-full flex justify-between items-center mt-2">-->
<!--            <div class="text-zinc-700 text-sm">-->
<!--              قیمت معادل : {{ totalBoughtPrice }} ریال-->
<!--            </div>-->

<!--            <div class="text-zinc-700 text-sm">-->
<!--              مبلغ نهایی : {{totalBoughtPrice}} ریال-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->
<!--      </div>-->

<!--      <div @click.prevent="invest" class="w-full text-[#1B9DB1] hover:bg-sky-600 p-3 border border-[#1B9DB1] mt-8 rounded-lg text-center cursor-pointer">-->
<!--        شروع سرمایه گذاری-->
<!--      </div>-->


    </div>

  </div>
</template>

<script setup>

import {useProjectStore} from "~/store/projects";
const projectStore = useProjectStore();



const meterBox = ref(null)
const priceBox = ref(null)
const invertmentBoxStatus = ref(1);

// const buyBaseOnPrice = (e) => {
//
//   invertmentBoxStatus.value = 1;
//
//   priceBox.value.classList.add("w-2/3");
//   priceBox.value.classList.remove("text-zinc-800");
//   priceBox.value.classList.add("text-[#6EC3D0]");
//   meterBox.value.classList.remove("text-[#6EC3D0]");
//   meterBox.value.classList.add("text-zinc-800");
//   priceBox.value.classList.add("border-[#12788F]");
//   priceBox.value.classList.remove("w-1/3");
//   priceBox.value.classList.remove("border-zinc-300");
//   meterBox.value.classList.remove("w-2/3");
//   meterBox.value.classList.add("w-1/3");
//   meterBox.value.classList.remove("border-[#12788F]");
// }
//
// const buyBaseOnMeter = (e) => {
//
//   invertmentBoxStatus.value = 2;
//
//   priceBox.value.classList.remove("w-2/3");
//   priceBox.value.classList.remove("border-[#12788F]");
//   priceBox.value.classList.add("w-1/3");
//   priceBox.value.classList.remove("text-[#6EC3D0]");
//
//   meterBox.value.classList.remove("w-1/3");
//   meterBox.value.classList.remove("text-zinc-800");
//   meterBox.value.classList.remove("border-zinc-200");
//   meterBox.value.classList.add("w-2/3");
//   meterBox.value.classList.add("text-[#6EC3D0]");
//   meterBox.value.classList.add("border-[#12788F]");
// }
//
//
//
// // total project time
// const totalMonth = () => {
//
//   console.log("project start time :", projectStore.projectDetails)
//
//   if (projectStore.projectDetails?.project_start === undefined) {
//     totalMonth();
//   }else {
//
//   }
//
//   let start = projectStore.projectDetails?.project_start.split(" ")[0];
//   const startTime = new Date(start);
//   let end = projectStore.projectDetails?.project_end.split(" ")[0];
//   const endTime = new Date(end);
//
//   if (endTime - startTime < 1) {
//     return "پروژه به اتمام رسیده"
//   }else {
//     const monthsLeft =new Date(endTime - startTime);
//
//     if (monthsLeft.getMonth() < 1) {
//       const daysLeft = monthsLeft.getDay();
//       return `${daysLeft} روز`
//       if (daysLeft < 1) {
//         const daysLeft = monthsLeft.getDay();
//         return `${daysLeft} روز `
//       }
//     }
//
//     return `${monthsLeft.getMonth()} ماه `
//
//   }
//
// }
//
//
// // how much times left?
// const monthLeft = (end) => {
//
//   end = end.split(" ")[0];
//   const endTime = new Date(end);
//   // current time
//   const currentTime = Date.now()
//   // times left
//   const timeLeft = new Date(endTime - currentTime);
//   // calculating month or day
//   if (timeLeft.getMonth() < 1) {
//
//   }else {
//     return `${timeLeft.getMonth()} ماه تا پایان`
//   }
//
//   return end;
//
// }
//
// const totalBoughtMeter = ref("");
// const totalBoughtPrice = ref("");
//
// function funcReverseString(str) {
//   return str.split('').reverse().join('');
// }
//
// const onchangePricePriceBox = (e) => {
//   const thisElement = e.target;
//   let thisElementValue = thisElement.value;
//
//   thisElementValue = thisElementValue.replace(/,/g, "");
//
//   if (isNaN(Number(thisElementValue))) {
//     alert("لطفا از وارد کردن حروف خودداری فرمایید !")
//     return false;
//   }
//
//   let seperatedNumber = thisElementValue.toString();
//   seperatedNumber = funcReverseString(seperatedNumber);
//   seperatedNumber = seperatedNumber.split("");
//
//   let tmpSeperatedNumber = "";
//
//   let j = 0;
//   for (let i = 0; i < seperatedNumber.length; i++) {
//     tmpSeperatedNumber += seperatedNumber[i];
//     j++;
//     if (j === 3) {
//       tmpSeperatedNumber += ",";
//       j = 0;
//     }
//   }
//
//   const priceArray = ref(projectStore.projectDetails.prices.length)
//   totalBoughtMeter.value = thisElementValue / projectStore.projectDetails.prices[priceArray.value - 1].value / 100;
//
//   seperatedNumber = funcReverseString(tmpSeperatedNumber);
//   if(seperatedNumber[0] === ",") seperatedNumber = seperatedNumber.replace("," , "");
//   thisElement.value = seperatedNumber;
// }
//
// const onchangeMeterbox = (e) => {
//   const thisElement = e.target;
//   let thisElementValue = thisElement.value;
//   console.log(thisElementValue);
//
//   const priceArray = ref(projectStore.projectDetails.prices.length);
//
//   totalBoughtPrice.value = projectStore.projectDetails.prices[priceArray.value - 1].value * thisElementValue
//
//   console.log(totalBoughtPrice.value);
//
// }




</script>

<style scoped>

input:focus {
  outline: none !important;
}

</style>