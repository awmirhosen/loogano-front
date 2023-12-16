<template>

  <div v-if="projectStore.investSuccessData.invoice_details === undefined" dir="rtl" class="mt-24 relative">
    <Loader />
  </div>
  <div class="bg-[#F8F8F8]" v-else>
    <div class="w-full flex lg:flex-row flex-col justify-center max-w-[1512px] mx-auto py-36 gap-4">
      <!-----left side ----->
      <div class="max-w-[490px] lg:w-[490px] px-2 rounded-t-xl mt-10">
        <!--title-->
        <div class="bg-white rounded-t-xl">
          <p class="w-100 text-center text-zinc-500 py-3 text-[18px]">صورت حساب</p>
        </div>
        <!--box--->
        <div class="w-100 p-4 mt-3 bg-white rounded-b-xl">
          <div class="flex items-center mt-2 justify-between text-[18px] text-zinc-700" dir="rtl">
            <p>مبلغ سرمایه گذاری:</p>
            <p> {{ projectStore.investSuccessData.invoice_details.pure_amount }} ریال</p>
          </div>
          <hr class="mt-2 border-zinc-100">
          <div class="flex items-center mt-2 justify-between text-[18px] text-zinc-700" dir="rtl">
            <p>کارمزد:</p>
            <p> {{ projectStore.investSuccessData.invoice_details.commission_amount.toFixed(2) }} ریال</p>
          </div>
<!--          <hr class="mt-2 border-zinc-100">-->
<!--          <div class="flex items-center mt-2 justify-between text-green-500 text-[18px]" dir="rtl">-->
<!--            <p>تخفیف:</p>-->
<!--            <p>  198,000,000 ریال</p>-->
<!--          </div>-->
          <hr class="mt-2 border-zinc-100">
          <div class="flex items-center mt-2 justify-between font-bold text-[18px]" dir="rtl">
            <p>مبلغ قابل پرداخت:</p>
            <p> {{ projectStore.investSuccessData.invoice_details.total_amount }} ریال</p>
          </div>
          <hr class="mt-2 border-zinc-100 pb-5">
        </div>

        <!---payment methods--->
        <PeymentMethodBox />

      </div>
      <!---- right side ----->
      <div class="max-w-[680px] lg:w-[680px] px-2 rounded-t-xl mt-10">
        <!--title-->
        <div class="bg-white rounded-t-xl">
          <p class="w-100 text-center text-zinc-500 py-3 border-">پیش فاکتور</p>
        </div>

        <!----- box----->
        <div class="w-100 p-4 mt-3 bg-white rounded-b-xl">

          <div class="flex justify-between mt-3 mb-8 px-4">
            <h6 class="py-2 rounded-md bg-[#A3DDBE80] font-bold text-[10px] lg:text-[14px] px-3">
              سازنده: {{ projectStore.investSuccessData.constructor_details.title }}
            </h6>
            <h4 class="font-bold text-[20px] lg:text-[26px]">{{ projectStore.investSuccessData.project_details.title }}</h4>
          </div>

          <div class="px-4" dir="rtl">
            <p class="text-zinc-400 my-2">مبلغ سرمایه گذاری</p>
            <div class="w-full bg-zinc-200 text-center p-3 rounded-md">
              {{ projectStore.investSuccessData.invoice_details.pure_amount }} ریال
            </div>
          </div>

          <div class="flex px-4 items-center mt-2 justify-between mt-4 text-[18px] text-zinc-700" dir="rtl">
            <p>قیمت هر میلی متر مربع:</p>
            <p> {{ projectStore.investSuccessData.project_details.prices[0].value }} ریال</p>
          </div>
          <hr class="mt-2 border-zinc-100 px-4">
          <div class="flex px-4 items-center mt-2 justify-between mt-4 text-[18px] text-zinc-700" dir="rtl">
            <p>مبلغ سرمایه گذار:</p>
            <p> {{ projectStore.investSuccessData.invoice_details.pure_amount }} ریال</p>
          </div>
          <hr class="mt-2 border-zinc-100 px-4">
          <div class="flex px-4 items-center mt-2 justify-between mt-4 text-[18px] text-zinc-700" dir="rtl">
            <p>متراژ سرمایه گذاری:</p>
            <p> {{ projectStore.investSuccessArea }} متر</p>
          </div>
          <hr class="mt-2 border-zinc-100 px-4">
          <div class="flex px-4 items-center mt-2 justify-between mt-4 text-[18px] text-zinc-700" dir="rtl">
            <p>مالیات:</p>
            <p> {{ projectStore.investSuccessData.invoice_details.vat_tax_rate }} درصد</p>
          </div>
          <hr class="mt-2 border-zinc-100 px-4">

          <div class="flex px-4 items-center mt-2 justify-between mt-4 text-[18px] text-zinc-700" dir="rtl">
            <p>کارمزد:</p>
            <p> {{ projectStore.investSuccessData.invoice_details.commission_sale_rate }} درصد</p>
          </div>
          <hr class="mt-2 border-zinc-100 px-4">

          <div class="flex px-4 items-center mt-2 justify-between mt-4 text-[18px] text-zinc-700" dir="rtl">
            <p>جمع کل:</p>
            <p> {{ projectStore.investSuccessData.invoice_details.total_amount }} ریال</p>
          </div>
          <hr class="mt-2 border-zinc-100 px-4">

          <div class="flex px-4 items-center mt-2 justify-between mt-4 text-[18px] text-zinc-700" dir="rtl">
            <p>تاریخ اتمام پروژه:</p>
            <p> {{ projectEndingDate(projectStore.investSuccessData.project_details.project_end) }}</p>
          </div>
          <hr class="mt-2 border-zinc-100 px-4">

          <div class="flex justify-start items-center border border-2 border-zinc-300 rounded-md mt-4 p-3">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                <path d="M12.8568 3.50012H5.54659C5.30424 3.50012 5.07182 3.57914 4.90045 3.71979C4.72908 3.86044 4.63281 4.05121 4.63281 4.25012C4.63281 4.44903 4.72908 4.6398 4.90045 4.78045C5.07182 4.9211 5.30424 5.00012 5.54659 5.00012H12.8568C13.0991 5.00012 13.3316 4.9211 13.5029 4.78045C13.6743 4.6398 13.7706 4.44903 13.7706 4.25012C13.7706 4.05121 13.6743 3.86044 13.5029 3.71979C13.3316 3.57914 13.0991 3.50012 12.8568 3.50012Z" fill="#A0A0A0"/>
                <path d="M12.8568 7.00012H5.54659C5.30424 7.00012 5.07182 7.07914 4.90045 7.21979C4.72908 7.36044 4.63281 7.55121 4.63281 7.75012C4.63281 7.94903 4.72908 8.1398 4.90045 8.28045C5.07182 8.4211 5.30424 8.50012 5.54659 8.50012H12.8568C13.0991 8.50012 13.3316 8.4211 13.5029 8.28045C13.6743 8.1398 13.7706 7.94903 13.7706 7.75012C13.7706 7.55121 13.6743 7.36044 13.5029 7.21979C13.3316 7.07914 13.0991 7.00012 12.8568 7.00012Z" fill="#A0A0A0"/>
                <path d="M12.8568 10.5001H5.54659C5.30424 10.5001 5.07182 10.5791 4.90045 10.7198C4.72908 10.8604 4.63281 11.0512 4.63281 11.2501C4.63281 11.449 4.72908 11.6398 4.90045 11.7805C5.07182 11.9211 5.30424 12.0001 5.54659 12.0001H12.8568C13.0991 12.0001 13.3316 11.9211 13.5029 11.7805C13.6743 11.6398 13.7706 11.449 13.7706 11.2501C13.7706 11.0512 13.6743 10.8604 13.5029 10.7198C13.3316 10.5791 13.0991 10.5001 12.8568 10.5001Z" fill="#A0A0A0"/>
                <path d="M24.4299 0.000169429H19.9063C19.4938 -0.00452858 19.0889 0.0915709 18.7431 0.276247C18.3974 0.460922 18.1263 0.72583 17.9645 1.03728C17.8844 1.16454 17.7632 1.27125 17.6141 1.3457C17.465 1.42016 17.2939 1.45949 17.1194 1.45939C16.9449 1.45929 16.7738 1.41975 16.6248 1.34512C16.4759 1.27048 16.3548 1.16363 16.275 1.03628C16.1128 0.725005 15.8416 0.460317 15.4957 0.275835C15.1499 0.0913526 14.745 -0.00459829 14.3326 0.000169429H2.49933C1.93406 0.000733101 1.39214 0.185288 0.992436 0.513355C0.592731 0.841421 0.367874 1.28621 0.367188 1.75017V13.7502C0.367874 14.2141 0.592731 14.6589 0.992436 14.987C1.39214 15.3151 1.93406 15.4996 2.49933 15.5002H14.3326C14.7452 15.5049 15.1502 15.4089 15.4961 15.2242C15.8419 15.0395 16.1131 14.7746 16.275 14.4631C16.3551 14.3358 16.4763 14.2291 16.6254 14.1546C16.7744 14.0802 16.9456 14.0408 17.1201 14.041C17.2946 14.0411 17.4657 14.0806 17.6147 14.1552C17.7636 14.2299 17.8846 14.3367 17.9645 14.4641C18.1266 14.7753 18.3978 15.0399 18.7435 15.2244C19.0892 15.4089 19.4939 15.5049 19.9063 15.5002C20.1486 15.5002 20.3811 15.4212 20.5524 15.2805C20.7238 15.1398 20.8201 14.9491 20.8201 14.7502C20.8201 14.5513 20.7238 14.3605 20.5524 14.2198C20.3811 14.0792 20.1486 14.0002 19.9063 14.0002C19.8561 14.0025 19.8061 13.9936 19.7616 13.9743C19.7172 13.955 19.68 13.9262 19.6541 13.8908C19.4467 13.4793 19.0953 13.1275 18.6443 12.88C18.1933 12.6325 17.663 12.5003 17.1205 12.5002C16.5779 12.5001 16.0475 12.632 15.5964 12.8794C15.1453 13.1268 14.7937 13.4784 14.5861 13.8898C14.5602 13.9255 14.5229 13.9547 14.4782 13.9742C14.4335 13.9936 14.3832 14.0026 14.3326 14.0002H2.49933C2.4186 14 2.34122 13.9736 2.28413 13.9268C2.22704 13.8799 2.1949 13.8164 2.19474 13.7502V1.75017C2.19489 1.6839 2.22703 1.62039 2.28412 1.57353C2.34121 1.52668 2.4186 1.5003 2.49933 1.50017H14.3326C14.3829 1.49767 14.4331 1.50655 14.4777 1.52584C14.5222 1.54512 14.5595 1.57408 14.5854 1.60955C14.7929 2.02105 15.1443 2.37282 15.5954 2.62035C16.0464 2.86789 16.5768 3.00007 17.1193 3.00018C17.6619 3.00028 18.1923 2.86831 18.6435 2.62096C19.0947 2.3736 19.4464 2.02197 19.654 1.61055C19.6797 1.57491 19.7168 1.54575 19.7612 1.52628C19.8057 1.50681 19.8559 1.49779 19.9062 1.5002H24.4299C24.5107 1.50033 24.5881 1.52671 24.6451 1.57356C24.7022 1.62042 24.7344 1.68393 24.7345 1.7502V13.7502C24.7344 13.8164 24.7022 13.8799 24.6451 13.9268C24.5881 13.9737 24.5107 14 24.4299 14.0002H23.2116C22.9692 14.0002 22.7368 14.0792 22.5654 14.2198C22.3941 14.3605 22.2978 14.5513 22.2978 14.7502C22.2978 14.9491 22.3941 15.1398 22.5654 15.2805C22.7368 15.4212 22.9692 15.5002 23.2116 15.5002H24.4299C24.9952 15.4996 25.5371 15.3151 25.9368 14.987C26.3365 14.6589 26.5614 14.2141 26.5621 13.7502V1.75017C26.5614 1.28621 26.3365 0.841421 25.9368 0.513355C25.5371 0.185288 24.9952 0.000733101 24.4299 0.000169429Z" fill="#A0A0A0"/>
              </svg>
            </div>
            <input type="text" class="w-full" placeholder="کد تخفیف را وارد کنید" dir="rtl">
          </div>

          <div class="w-100 mx-4">

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import PeymentMethodBox from "~/components/projects/buy/PeymentMethodBox.vue";
import {useProjectStore} from "~/store/projects";

definePageMeta({
  layout: 'default',
})

const projectStore = useProjectStore();

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

</script>

<style scoped>

input:focus {
  outline: none !important;
}

</style>