<template>
  <div class="w-full lg:border lg:border-1 border-zinc-300 rounded-xl p-4">

    <!-----title of box------>
    <div class="flex justify-between w-full items-center gap-4 mt-4 px-2">
      <div>
        <Countdown end="" />
      </div>
      <h4 class="2xl:text-[16px] text-right">{{ projectStore.projectDetails?.title }}</h4>
    </div>

    <hr class="mt-5 hidden lg:block">

    <div class="flex justify-around flex-wrap lg:mt-4 mt-6">
<!--      <div class="lg:w-[117px] w-[100px] bg-zinc-100 text-center rounded-md py-2">-->
<!--        <p class="text-[#12788F]">37%</p>-->
<!--        <p class="text-zinc-600 text-sm">فروش رفته</p>-->
<!--      </div>-->
      <div class="lg:w-[117px] w-[100px] bg-zinc-100 text-center rounded-md py-2">
        <p class="text-[#12788F]">{{ projectStore.projectDetails?.progresses[0].value }}%</p>
        <p class="text-zinc-600 text-sm">پیش بینی سود</p>
      </div>
      <div class="lg:w-[117px] w-[100px] bg-zinc-100 text-center rounded-md py-2">
        <p class="text-[#12788F]">{{ projectStore.projectDetails?.progresses[1].value }}%</p>
        <p class="text-zinc-600 text-sm">سود تا امروز</p>
      </div>
    </div>

    <div class="w-full mt-6 px-1">
      <div class="w-full flex justify-between items-center flex-row-reverse">
        <div class="flex items-center gap-2 flex-row-reverse">
          <img src="/images/home/tape_measure.png" alt="measure_tape">
          <p class="text-zinc-500 text-sm">: متراژ پروژه مسکونی </p>
        </div>

        <p class="text-right text-sm" dir="rtl">{{ eArabic(projectStore.projectDetails?.area_mm)  }} مترمربع </p>
      </div>

      <div class="w-full flex justify-between items-center flex-row-reverse mt-3">
        <div class="flex items-center gap-2 flex-row-reverse">
          <img src="/images/home/location.png" alt="measure_tape">
          <p class="text-zinc-500 text-sm">: منطقه</p>
        </div>

        <p class="text-right text-sm">{{ projectStore.projectDetails?.address }}</p>
      </div>

      <div class="w-full flex justify-between items-center flex-row-reverse mt-3">
        <div class="flex items-center gap-2 flex-row-reverse">
          <img src="/images/projects/images/currency.svg" class="w-6" alt="measure_tape">
          <p class="text-zinc-500 text-sm">: قیمت هر سانتی متر متر مربع</p>
        </div>

        <p class="text-right text-sm">

          {{ `${ eArabic(projectStore.projectDetails.prices[0].value) }`}}

          تومان
        </p>
      </div>

      <div class="w-full flex justify-between items-center flex-row-reverse mt-3">
        <div class="flex items-center gap-2 flex-row-reverse">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M8.77043 15.1063C8.77043 15.3426 8.96199 15.5341 9.19828 15.5341C9.43457 15.5341 9.62613 15.3426 9.62613 15.1063H8.77043ZM9.62613 4.62401C9.62613 4.38772 9.43457 4.19616 9.19828 4.19616C8.96198 4.19616 8.77043 4.38772 8.77043 4.62401H9.62613ZM11.1393 7.1416C11.2574 7.34624 11.5191 7.41635 11.7237 7.29821C11.9284 7.18006 11.9985 6.91839 11.8803 6.71375L11.1393 7.1416ZM11.2286 6.44063L10.8581 6.65455L11.2286 6.44063ZM8.54693 9.62555L8.69464 9.224L8.69462 9.224L8.54693 9.62555ZM9.8498 10.1048L9.99749 9.70322L9.99748 9.70321L9.8498 10.1048ZM7.16811 13.2897L6.79758 13.5036H6.79759L7.16811 13.2897ZM7.25744 12.5887C7.13929 12.3841 6.87763 12.314 6.67299 12.4321C6.46835 12.5502 6.39824 12.8119 6.51639 13.0166L7.25744 12.5887ZM10.1925 14.1001L9.97858 13.7295L10.1925 14.1001ZM8.20421 5.63024L8.41814 6.00077L8.20421 5.63024ZM16.2578 9.86515C16.2578 13.764 13.0971 16.9246 9.19828 16.9246V17.7803C13.5697 17.7803 17.1135 14.2366 17.1135 9.86515H16.2578ZM9.19828 16.9246C5.29943 16.9246 2.13879 13.764 2.13879 9.86515H1.28309C1.28309 14.2366 4.82684 17.7803 9.19828 17.7803V16.9246ZM2.13879 9.86515C2.13879 5.9663 5.29943 2.80566 9.19828 2.80566V1.94996C4.82684 1.94996 1.28309 5.49371 1.28309 9.86515H2.13879ZM9.19828 2.80566C13.0971 2.80566 16.2578 5.9663 16.2578 9.86515H17.1135C17.1135 5.49371 13.5697 1.94996 9.19828 1.94996V2.80566ZM11.8803 6.71375L11.5991 6.2267L10.8581 6.65455L11.1393 7.1416L11.8803 6.71375ZM7.53864 13.0758L7.25744 12.5887L6.51639 13.0166L6.79758 13.5036L7.53864 13.0758ZM9.7021 10.5063C11.1234 11.0291 11.2901 12.9723 9.97858 13.7295L10.4064 14.4706C12.3462 13.3507 12.0997 10.4764 9.99749 9.70322L9.7021 10.5063ZM7.99029 5.25972C6.05051 6.37965 6.29706 9.25387 8.39923 10.0271L8.69462 9.224C7.27334 8.70122 7.10665 6.75796 8.41814 6.00077L7.99029 5.25972ZM9.62613 15.1063V14.3943H8.77043V15.1063H9.62613ZM9.62613 14.3943V9.86515H8.77043V14.3943H9.62613ZM9.97858 13.7295C9.72424 13.8764 9.44998 13.9533 9.17684 13.967L9.21972 14.8216C9.62522 14.8012 10.0319 14.6868 10.4064 14.4706L9.97858 13.7295ZM9.17684 13.967C8.52751 13.9995 7.88511 13.6759 7.53864 13.0758L6.79759 13.5036C7.31079 14.3925 8.26227 14.8696 9.21972 14.8216L9.17684 13.967ZM8.39922 10.0271L9.05057 10.2667L9.34599 9.46361L8.69464 9.224L8.39922 10.0271ZM9.0506 10.2667L9.70212 10.5063L9.99748 9.70321L9.34596 9.4636L9.0506 10.2667ZM9.62613 9.86515L9.62613 5.33604L8.77043 5.33604L8.77043 9.86515H9.62613ZM9.62613 5.33604V4.62401H8.77043V5.33604H9.62613ZM11.5991 6.2267C11.0859 5.33774 10.1343 4.86061 9.17681 4.90873L9.21975 5.76335C9.86913 5.73071 10.5116 6.05441 10.8581 6.65455L11.5991 6.2267ZM9.17681 4.90873C8.77138 4.9291 8.36478 5.04351 7.99029 5.25972L8.41814 6.00077C8.67244 5.85395 8.94666 5.77707 9.21975 5.76335L9.17681 4.90873Z" fill="black"/>
          </svg>

          <p class="text-zinc-500 text-sm">: شروع سرمایه پذیری از</p>
        </div>

        <p class="text-right text-sm">{{ projectEndingDate(projectStore.projectDetails?.investment_start) }}</p>
      </div>

    </div>

    <div class="w-full flex justify-between items-center flex-row-reverse mt-3">
      <div class="flex items-center gap-2 flex-row-reverse">
        <img src="/images/projects/images/calendar.svg" class="w-6" alt="measure_tape">
        <p class="text-zinc-500 text-sm">تاریخ اتمام پروژه:</p>
      </div>

      <p class="text-right text-sm">{{ projectEndingDate(projectStore.projectDetails?.project_end) }}</p>
    </div>

    <div class="w-full flex justify-between items-center flex-row-reverse mt-3">
      <div class="flex items-center gap-2 flex-row-reverse">
        <img src="/images/projects/images/square.svg" class="w-6" alt="measure_tape">
        <p class="text-zinc-500 text-sm">: متراژ فروخته شده</p>
      </div>

      <p class="text-right text-sm"> - </p>
    </div>

    <div class="w-full flex justify-between items-center flex-row-reverse mt-3">
      <div class="flex items-center gap-2 flex-row-reverse">
        <img src="/images/projects/images/group_project.svg" class="w-6" alt="measure_tape">
        <p class="text-zinc-500 text-sm">: تعداد سرمایه گذار ها</p>
      </div>
      <p class="text-right text-sm" dir="rtl">{{ eArabic(projectStore.projectDetails?.project_user_completed_count) }} نفر </p>
    </div>

    <hr class="mt-5">

    <!-----development------>
    <div class="w-full mt-4">
      <p class="font-bold w-full text-right">: روند پیشرفت پروژه</p>

      <div class="w-full relative" dir="rtl">
        <div class="w-full h-[8px] bg-zinc-300 mt-4 rounded-full"></div>
        <div class="h-[8px] absolute bg-[#5BCE90] top-0  rounded-full" :style="`width: ${projectStore.projectDetails.progressss_percent}% `" ></div>
      </div>

      <div class="w-full flex justify-between mt-2" dir="rtl">
<!--        <div class="w-full text-zinc-400 text-right text-[12px]" dir="rtl">-->
<!--          زمان کل پروژه : به زودی-->
<!--        </div>-->
<!--        <div class="w-full text-zinc-400 text-left text-[12px]">{{ monthLeft(projectStore.projectDetails?.project_end) }}</div>-->
        <div class="w-full text-zinc-400 text-left text-[12px]">{{ projectEndingDate(projectStore.projectDetails?.project_end) }}</div>
      </div>

      <hr class="mt-5">

      <!----custom tabs--------->
      <div class="w-full mt-5" dir="rtl" v-if="projectStore.investmentTimeFlag">
        <div class="w-full flex gap-2 justify-center">
          <div ref="priceBox" class="text-center border-b-2 border-[#12788F] pb-2 cursor-pointer transition-all text-[#6EC3D0] w-2/3" @click="buyBaseOnPrice">
            بر اساس قیمت
          </div>

          <div ref="meterBox" class="border-b-2 w-1/3 text-center border-zinc-200 pb-2 text-zinc-800 cursor-pointer transition-all" @click="buyBaseOnMeter" >
            بر اساس متر
          </div>
        </div>
        <!----tabs--------->
        <div v-if="invertmentBoxStatus === 1" class="w-full mt-4">
          <p class="w-full text-right">مبلغ سرمایه گذاری</p>
          <div class="w-full flex justify-center flex-row-reverse mt-4 bg-zinc-100 p-2">
            <div class="border-r-2 border-zinc-200 pr-1"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
              <path d="M5.71582 9.91718L13.2676 9.91718" stroke="black" stroke-width="1.13276" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>

            <div class="w-full flex justify-center items-center">
              <input class=" text-center bg-zinc-100" type="text" placeholder="1980000" @input="onchangePricePriceBox" />
              <p class="text-zinc-400 text-[12px]">تومان</p>
            </div>

            <div class="border-l-2 border-zinc-200 pl-1"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
              <path d="M9.78857 6.11426V13.7201M6.0127 9.91719H13.5644" stroke="black" stroke-width="1.13276" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
          </div>

          <div class="w-full flex justify-between items-center mt-2">
            <div class="text-zinc-700 text-sm">
              متراژ معادل : {{ totalBoughtMeter }} سانتی متر
            </div>

<!--            <div class="text-zinc-700 text-sm">-->
<!--              مبلغ نهایی : 2.200.000 ریال-->
<!--            </div>-->
          </div>

        </div>

        <div v-if="invertmentBoxStatus === 2" class="w-full mt-4">
          <p class="w-full text-right">متراژ سرمایه گذاری</p>
          <div class="w-full flex justify-center flex-row-reverse mt-4 bg-zinc-100 p-2">
            <div class="border-r-2 border-zinc-200 pr-1"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
              <path d="M5.71582 9.91718L13.2676 9.91718" stroke="black" stroke-width="1.13276" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>

            <div class="w-full flex items-center">
              <input class="w-full text-center bg-zinc-100" type="number" step="10" placeholder="3" @input="onchangeMeterbox" />
              <p class="whitespace-nowrap px-2 text-zinc-500 text-[12px]">سانتی متر</p>
            </div>

            <div class="border-l-2 border-zinc-200 pl-1"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
              <path d="M9.78857 6.11426V13.7201M6.0127 9.91719H13.5644" stroke="black" stroke-width="1.13276" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>

          </div>

          <div class="w-full flex justify-between items-center mt-2">
            <div class="text-zinc-700 text-sm">
              قیمت معادل : {{ eArabic(totalBoughtPrice) }} تومان
            </div>

<!--            <div class="text-zinc-700 text-sm">-->
<!--              مبلغ نهایی : 2.200.000 ریال-->
<!--            </div>-->


          </div>

        </div>
      </div>

      <!----- element by change by investment time flag------>
      <div class="w-full justify-center flex items-center mt-4 gap-2" v-if="!projectStore.investmentTimeFlag" dir="rtl">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 5.84166V5.83333M10 14.1667L10 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#D4351F" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <p class="text-[12px] text-red-600">فرصت سرمایه گذاری به پایان رسیده</p>
      </div>

      <div class="w-full bg-[#1B9DB1] hover:bg-sky-600 p-3 text-white rounded-lg mt-6 text-center cursor-pointer" v-if="projectStore.investmentTimeFlag" @click.prevent="projectStore.insertInvest(projectStore.projectDetails.id, totalBoughtMeter)">
        شروع سرمایه گذاری
      </div>
      <div class="w-full bg-zinc-300 p-3 text-white rounded-lg mt-4 text-center cursor-not-allowed" v-else disabled="true">
        شروع سرمایه گذاری
      </div>

      <RouterLink to="/profile/wallet/charge" class="w-full block mt-4 hover:text-sky-600 transition-all text-center text-[#1B9DB1]" v-if="projectStore.walletNeed">
        شارژ کیف پول
      </RouterLink>


    </div>

  </div>
</template>

<script setup>


import Countdown from "~/components/projects/details/Countdown.vue";
import {useProjectStore} from "~/store/projects";
import {totalMonth} from "../../../composable/datesComposable";
const projectStore = useProjectStore();


const meterBox = ref(null)
const priceBox = ref(null)
const invertmentBoxStatus = ref(1);

const totalBoughtMeter = ref('')

const buyBaseOnPrice = (e) => {

  invertmentBoxStatus.value = 1;

  priceBox.value.classList.add("w-2/3");
  priceBox.value.classList.remove("text-zinc-800");
  priceBox.value.classList.add("text-[#6EC3D0]");
  meterBox.value.classList.remove("text-[#6EC3D0]");
  meterBox.value.classList.add("text-zinc-800");
  priceBox.value.classList.add("border-[#12788F]");
  priceBox.value.classList.remove("w-1/3");
  priceBox.value.classList.remove("border-zinc-300");
  meterBox.value.classList.remove("w-2/3");
  meterBox.value.classList.add("w-1/3");
  meterBox.value.classList.remove("border-[#12788F]");
}

const buyBaseOnMeter = (e) => {

  invertmentBoxStatus.value = 2;

  priceBox.value.classList.remove("w-2/3");
  priceBox.value.classList.remove("border-[#12788F]");
  priceBox.value.classList.add("w-1/3");
  priceBox.value.classList.remove("text-[#6EC3D0]");

  meterBox.value.classList.remove("w-1/3");
  meterBox.value.classList.remove("text-zinc-800");
  meterBox.value.classList.remove("border-zinc-200");
  meterBox.value.classList.add("w-2/3");
  meterBox.value.classList.add("text-[#6EC3D0]");
  meterBox.value.classList.add("border-[#12788F]");
}

const priceInput = ref("");
const meterInput = ref("");

const lastPrice = (prices) => {
  console.log(prices)
  const arrayCount = prices?.length
  return prices[arrayCount-1].value;
}




// functions
function funcReverseString(str) {
  return str.split('').reverse().join('');
}

const onchangePricePriceBox = (e) => {
  const thisElement = e.target;
  let thisElementValue = thisElement.value;

  thisElementValue = thisElementValue.replace(/,/g, "");

  if (isNaN(Number(thisElementValue))) {
    alert("لطفا از وارد کردن حروف خودداری فرمایید !")
    return false;
  }

  let seperatedNumber = thisElementValue.toString();
  seperatedNumber = funcReverseString(seperatedNumber);
  seperatedNumber = seperatedNumber.split("");

  let tmpSeperatedNumber = "";

  let j = 0;
  for (let i = 0; i < seperatedNumber.length; i++) {
    tmpSeperatedNumber += seperatedNumber[i];
    j++;
    if (j === 3) {
      tmpSeperatedNumber += ",";
      j = 0;
    }
  }

  const priceArray = ref(projectStore.projectDetails.prices.length)
  totalBoughtMeter.value = thisElementValue / projectStore.projectDetails.prices[priceArray.value - 1].value  ;

  seperatedNumber = funcReverseString(tmpSeperatedNumber);
  if(seperatedNumber[0] === ",") seperatedNumber = seperatedNumber.replace("," , "");
  thisElement.value = seperatedNumber;

  console.log(totalBoughtMeter)
}

const totalBoughtPrice = ref("");

const onchangeMeterbox = (e) => {
  const thisElement = e.target;
  let thisElementValue = thisElement.value;
  console.log(thisElementValue);

  const priceArray = ref(projectStore.projectDetails.prices.length);

  totalBoughtPrice.value = projectStore.projectDetails.prices[priceArray.value - 1].value * thisElementValue ;
  totalBoughtMeter.value = thisElementValue

}

function eArabic(x) {
  return x.toLocaleString('ar-EG');
}



const today = Date.now();

function getDateFormat(uDate,option){
  let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
  return date;
}



const projectEndingDate = (end) => {
  end = end.split(" ")

  const endDate = new Date(end[0]);
  const endDateTimestapms = endDate.getTime()

  const endingFa = reactive({
    "day" : getDateFormat(endDateTimestapms , {"day" : "2-digit"}),
    "month" : getDateFormat(endDateTimestapms , {"month" : "numeric"}),
    "monthTitle" : getDateFormat(endDateTimestapms , {"month" : "long"}),
    "year" : getDateFormat(endDateTimestapms , {"year" : "numeric"}),
    "dayWeek" : getDateFormat(endDateTimestapms , {"weekday" : "long"}),
  })
  return `${endingFa.year}/${endingFa.month}/${endingFa.day}`

}

// total project time



// how much times left?
const monthLeft = (end) => {

  end = end.split(" ")[0];
  const endTime = new Date(end);
  // current time
  const currentTime = Date.now()
  // times left
  const timeLeft = new Date(endTime - currentTime);
  // calculating month or day
  if (timeLeft.getMonth() < 1) {

  }else {
    return `${timeLeft.getMonth()} ماه تا پایان`
  }

  console.log(end)

}

projectStore.walletNeed = false;

</script>

<style scoped>

input:focus {
  outline: none !important;
}

</style>