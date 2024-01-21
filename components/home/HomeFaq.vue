<template>
  <div class="w-full">

    <!--FAQ title-->
    <div class="w-full flex justify-start mt-10 items-center gap-2 px-4 md:my-24">
      <div class="w-full h-1 max-w-[100px] bg-sky-custom"></div>
      <nuxt-link to="/faq" class="md:text-[26px] text-[16px] whitespace-nowrap">
        سوالات بیشتر
      </nuxt-link>
      <div class="w-full h-1 bg-sky-custom"></div>
      <p class="md:text-[52px] text-[28px] font-morabaa whitespace-nowrap">سوالات شما</p>
    </div>


    <div class="max-w-[1150px] mx-auto w-full lg:mt-24 mt-12">
      <div class="max-w-[1000px] h-[640px] flex justify-center items-center mx-auto custom-faq-box p-4 relative">
        <!----- border of box ----->
        <div class="absolute lg:block hidden w-full h-full border border-zinc-600 top-8 left-8 custom-border"></div>
        <!----acoordion-------->
        <div class="flex flex-col static lg:absolute w-11/12 -left-12 top-1/2 lg:-translate-y-1/2 gap-10">

          <div @click="firstHomeAccordionOpen"
               ref="firstAccordionBox"
               class="bg-white h-20  px-4 py-3 flex-row-reverse items-center rounded-[10px] lg:gap-4 gap-4 transition-all">

            <div class="w-full flex flex-row-reverse justify-between items-center cursor-pointer">
              <div class="flex items-center lg:gap-8 gap-2 ">
                <p class="lg:text-xl text-sm text-right font-morabaa">
                  چه مدارکی پس از سرمایه‌گذاری در پروژه‌ها ارائه می‌شود؟
                </p>
                <div class="">
                  <img src="/images/icons/home/faq_money.png" alt="money_icon" class="w-6 md:w-12">
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"
                   class="w-6 lg:w-10">
                <path d="M8.3335 18.75L25.0002 35.4167L41.6668 18.75" stroke="black" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <Transition name="slide-down">
              <section class="w-full w-full h-0 text-right mt-4 px-5 transition-all" v-if="firstAccordion">
                <p class="lg:text-lg lg:mt-10 text-sm text-zinc-500">
                  مهم‌ترین مدرک، قرارداد حقوقی بین لوگانو و سرمایه‌گذار است که از آن با عنوان توافق‌نامه سرمایه‌گذاری یاد می‌شود. همچنین نسخه‌ای از قرارداد لوگانو و سازنده نیز به سرمایه‌گذاران داده می‌شود. «مقررات مزایده سامانه، مقررات استفاده سامانه، نقشه پروژه، طرح تقسیم پروژه، فهرست مصالح مصرفی و جدول پیشرفت پروژه» هم در اختیار سرمایه‌گذار قرار می‌گیرد. به علاوه گواهی سرمایه‌گذاری نیز به سرمایه‌گذار داده می‌شود.
                </p>
              </section>
            </Transition>

          </div>

          <div @click="secondHomeAccordionOpen"
               ref="secondAccordionBox"
               class="bg-white h-20  px-4 py-3 flex-row-reverse items-center rounded-[10px] gap-4 transition-all">

            <div class="w-full flex flex-row-reverse justify-between items-center cursor-pointer cursor-pointer">
              <div class="flex items-center lg:gap-8 gap-2 ">
                <p class="lg:text-xl text-sm  text-right font-morabaa">
                  آیا سند مالکیت به خریداران داده می‌شود؟
                </p>
                <div class="">
                  <img src="/images/icons/home/faq_second.svg" alt="money_icon" class="w-6 md:w-12">
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"
                   class="w-6 lg:w-10">
                <path d="M8.3335 18.75L25.0002 35.4167L41.6668 18.75" stroke="black" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <Transition name="slide-down">
              <section class="w-full w-full h-0 text-right mt-4 px-5 transition-all" v-if="secondAccordion">
                <p class="lg:text-lg lg:mt-10 text-sm text-zinc-500 text-right" dir="rtl">
                  خیر. به دلیل تعدد سرمایه‌گذاران در یک واحد ملک، امکان ارائه سند به همه وجود ندارد. این کار در زمان اتمام پروژه، باعث بروز اختلاف میان مالکان برای فروش ملک می‌شود؛ چرا که برای فروش باید همه مالکان رضایت داشته باشند. این اختلاف نظر به عدم فروش ملک منجر می‌شود و قفل شدن سرمایه افراد را در پی دارد.
                </p>
              </section>
            </Transition>

          </div>

          <div @click="thirdHomeAccordionOpen"
               ref="thirdAccordionBox"
               class="bg-white h-20  px-4 py-3 flex-row-reverse items-center rounded-[10px] gap-4 transition-all cursor-pointer">

            <div class="w-full flex flex-row-reverse justify-between items-center">
              <div class="flex items-center lg:gap-8 gap-2 ">
                <p class="lg:text-xl text-sm text-right font-morabaa"> آیا نسخه چاپی گواهی سرمایه‌گذاری برای تمامی سرمایه‌گذاران صادر می‌شود؟</p>
                <div class="">
                  <img src="/images/icons/home/faq_third.svg" alt="money_icon" class="w-6 md:w-12">
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"
                   class="w-6 lg:w-10">
                <path d="M8.3335 18.75L25.0002 35.4167L41.6668 18.75" stroke="black" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <Transition name="slide-down">
              <section class="w-full w-full h-0 text-right mt-4 px-5 transition-all" v-if="thirdAccordion">
                <p class="lg:mt-10 lg:text-lg text-sm text-zinc-500" dir="rtl">
                  بله. پس از انتخاب پروژه مورد نظر و سرمایه گذاری در پروژه مورد نظر، نسخه فیزیکی گواهی سرمایه‌گذاری چاپ و برای تمامی سرمایه گذاران ارسال خواهد شد.
                </p>
              </section>
            </Transition>

          </div>

          <div @click="forthHomeAccordionOpen"
               ref="forthAccordionBox"
               class="bg-white h-20  px-4 py-3 flex-row-reverse items-center rounded-[10px] gap-4 cursor-pointer transition-all">

            <div class="w-full flex flex-row-reverse justify-between items-center">
              <div class="flex items-center lg:gap-8 gap-2 ">
                <p class="lg:text-xl text-sm text-right font-morabaa">
                  ضمانت اجرای پروژه توسط سازنده و عدم توقف آن چیست؟
                </p>
                <div class="">
                  <img src="/images/icons/home/faq_forth.svg" alt="money_icon" class="w-6 md:w-12">
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"
                   class="w-6 lg:w-10">
                <path d="M8.3335 18.75L25.0002 35.4167L41.6668 18.75" stroke="black" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <Transition name="slide-down">
              <section class="w-full w-full h-0 text-right mt-4 px-5 transition-all" v-if="forthAccordion">
                <p class="lg:mt-10 lg:text-lg text-sm text-zinc-500" dir="rtl">
                  لوگانو با در نظر گرفتن معیارهای دقیق، سازندگان را انتخاب می‌کند و در کنار عقد قراردادهای حقوقی معتبر، ضمانت‌هایی را نیز از آنها اخذ می‌کند.
                  <br>
                  ضمانت‌هایی نظیر؛ دریافت ضمانت نامه بانکی از سازنده به میزان ۱۲۰ درصد قیمت روز پرو‌ژه. مبلغ این ضمانت‌نامه هر ۳ ماه یک‌بار به روز می‌شود. در صورت عدم تکمیل پروژه تا ۹۰ روز پس از تاریخ اعلامی، سازنده باید به ازای هر روز، ۱ درصد ارزش روز پروژه را به تمام سرمایه‌گذاران پرداخت نماید.
                </p>
              </section>
            </Transition>

          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script setup>

const firstAccordion = ref(false);
const firstAccordionBox = ref(null);
const secondAccordion = ref(false);
const secondAccordionBox = ref(false);
const thirdAccordion = ref(false);
const thirdAccordionBox = ref(false);
const forthAccordion = ref(false);
const forthAccordionBox = ref(false);


const firstHomeAccordionOpen = (e) => {

  secondAccordionBox.value.style = "height: 80px"
  secondAccordion.value = false;

  thirdAccordionBox.value.style = "height: 80px"
  thirdAccordion.value = false;

  forthAccordionBox.value.style = "height: 80px"
  forthAccordion.value = false;

  if (firstAccordion.value === true) {
    firstAccordionBox.value.style = "height: 80px"
    firstAccordion.value = false
  } else {
    firstAccordionBox.value.style = "height: 250px"
    firstAccordion.value = true;
  }

}

const secondHomeAccordionOpen = (e) => {

  firstAccordionBox.value.style = "height: 80px"
  firstAccordion.value = false;

  thirdAccordionBox.value.style = "height: 80px"
  thirdAccordion.value = false;

  forthAccordionBox.value.style = "height: 80px"
  forthAccordion.value = false;


  if (secondAccordion.value === true) {
    e.currentTarget.style = "height: 80px"
    secondAccordion.value = false
  } else {
    e.currentTarget.style = "height: 250px"
    secondAccordion.value = true;
  }

}

const thirdHomeAccordionOpen = (e) => {

  firstAccordionBox.value.style = "height: 80px"
  firstAccordion.value = false;

  secondAccordionBox.value.style = "height: 80px"
  secondAccordion.value = false;

  forthAccordionBox.value.style = "height: 80px"
  forthAccordion.value = false;

  if (thirdAccordion.value === true) {
    e.currentTarget.style = "height: 80px"
    thirdAccordion.value = false
  } else {
    e.currentTarget.style = "height: 250px"
    thirdAccordion.value = true;
  }

}

const forthHomeAccordionOpen = (e) => {

  firstAccordionBox.value.style = "height: 80px"
  firstAccordion.value = false;

  secondAccordionBox.value.style = "height: 80px"
  secondAccordion.value = false;

  thirdAccordionBox.value.style = "height: 80px"
  thirdAccordion.value = false;

  if (forthAccordion.value === true) {
    e.currentTarget.style = "height: 80px"
    forthAccordion.value = false
  } else {
    e.currentTarget.style = "height: 250px"
    forthAccordion.value = true;
  }

}


</script>

<style scoped>

.custom-faq-box {
  border-radius: 0px 70px;
  background: linear-gradient(89deg, rgba(27, 157, 177, 0.50) 0.5%, rgba(198, 227, 232, 0.97) 55.86%, #D1E7EB 94.76%);
}

@media only screen and (max-width: 600px) {
  .custom-faq-box {
    border-radius: 0px;
    background: linear-gradient(89deg, rgba(27, 157, 177, 0.50) 0.5%, rgba(198, 227, 232, 0.97) 55.86%, #D1E7EB 94.76%);
  }
}


.slide-down-enter-active {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;
}

.slide-down-leave-active {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 50ms;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.custom-border {
  border-radius: 0px 70px !important;
}


</style>