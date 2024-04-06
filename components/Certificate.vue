<template>

  <div class="relative inline-block justify-center" dir="rtl">
    <img src="/images/certi.jpg" alt="certificate layout">
    <div class="absolute h-full top-0 left-0 w-full">
      <div class="mt-24 flex justify-between px-32 items-center">
        <img src="public/images/home/loogano_logo.png" alt="loogano">
        <p class="font-morabaa font-bold text-[34px]">گواهی سرمایه گذاری</p>
      </div>

      <div class="px-28">
        <p>شریک محترم، جناب آقا/خانم {{ projectStore.certificateData.fName }} {{ projectStore.certificateData.lName }}، از همکاری با شما در ساخت و مشارکت این پروژه بسیار مفتخر و خوشحال هستیم.</p>

        <div class="border-1 border border-zinc-400 rounded-[12px] mt-3 p-4">
          <p class="text-[22px] font-morabaa"> مشخصات سرمایه گذاری :</p>

          <div class="w-full flex justify-around items-center mt-3">
            <div class="flex items-center gap-2">
              <p>نام پروژه :</p>
              <p>{{ projectStore.certificateData.title }}</p>
            </div>
            <div class="flex items-center gap-2">
              <p>آدرس پروژه : </p>
              <p>{{ projectStore.certificateData.address }}</p>
            </div>
            <div class="flex items-center gap-2">
              <p>متراژ کل(سانتی متر مربع) : </p>
              <p>{{ eArabic(projectStore.certificateData.meter) }}</p>
            </div>
          </div>

          <div class="w-full flex justify-around items-center mt-3">
            <div class="flex items-center gap-2">
              <p>تاریخ سرمایه گذاری :</p>
              <p>{{ projectEndingDate(projectStore.certificateData.date) }}</p>
            </div>
            <div class="flex items-center gap-2">
              <p>شناسه سرمایه گذاری : </p>
              <p>{{ eArabic(projectStore.certificateData.id) }}</p>
            </div>
            <div class="flex items-center gap-2">
              <p>شناسه تراکنش : </p>
              <p>{{ eArabic(projectStore.certificateData.transactionId) }}</p>
            </div>
          </div>

          <div class="w-full flex justify-around items-center mt-3">
            <div class="flex items-center gap-2">
              <p>مبلغ سرمایه گذاری(تومان) :</p>
              <p>{{ eArabic(projectStore.certificateData.totalAmount) }}</p>
            </div>
            <div class="flex items-center gap-2">
              <p>متراژ سرمایه گذاری(سرمایه گذاری) : </p>
              <p>{{ eArabic(projectStore.certificateData.area) }}</p>
            </div>
          </div>

<!--          {{ projectStore.certificateData }}-->
        </div>

        <div class="p-3 mt-4">
          <div class="">
            اسناد پیوست این قرارداد شامل موافقت نامه سرمایه گذاری، موافقت نامه سرمایه پذیری، شرایط عمومی، تعاریف، آیین نامه، مزایده و قوانین و مقررات مندرج در وبسایت لوگانو می‌باشد و محتوای آن به اطلاع سرمایه گذار رسیده است.
          </div>
          <div class="mt-4">
            این گواهی صرفا جهت اطلاع سرمایه گذار صادر شده و فاقد هر گونه ارزش دیگری می‌باشد. لذا ثبت هر گونه معامله خرید و فروش خارج از پلتفرم لوگانو با این گواهی فاقد هر گونه ارزش می‌باشد.
          </div>
        </div>

        <div class="flex justify-center items-center gap-1 mt-6">
          <img src="public/images/header/loogano_mobile_logo.svg" alt="">
          <p class="font-morabaa">
            فرصت هایی بی انتها برای
            سرمایه گذاری هوشمند ملکی
          </p>
        </div>

        <div class="w-2/3 mx-auto">
          <hr class="mt-2">
        </div>

        <div class="flex items-center justify-center mt-3 gap-2">
          <p>خیابان مطهری، نرسیده به سهروردی
            پلاک 100، طبقه 4
          </p>
        </div>
        <div class="flex items-center justify-center mt-2 gap-2">
          <p>
            021-47708333
          </p>
        </div>

      </div>


    </div>
  </div>

</template>

<script setup>

import {useProjectStore} from "~/store/projects";

const projectStore = useProjectStore();

function eArabic(x) {
  return x.toLocaleString('ar-EG');
}



function getDateFormat(uDate, option) {
  let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
  return date;
}


const projectEndingDate = (end) => {
  end = end.split(" ")

  const endDate = new Date(end[0]);
  const endDateTimestapms = endDate.getTime()

  const endingFa = reactive({
    "day": getDateFormat(endDateTimestapms, {"day": "2-digit"}),
    "month": getDateFormat(endDateTimestapms, {"month": "numeric"}),
    "monthTitle": getDateFormat(endDateTimestapms, {"month": "long"}),
    "year": getDateFormat(endDateTimestapms, {"year": "numeric"}),
    "dayWeek": getDateFormat(endDateTimestapms, {"weekday": "long"}),
  })
  return `${endingFa.year}/${endingFa.month}/${endingFa.day}`

}


</script>

<style scoped>

</style>