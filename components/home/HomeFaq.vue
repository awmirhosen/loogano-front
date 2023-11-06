<template>
  <div class="w-full">

    <!--FAQ title-->
    <div class="w-full flex justify-start mt-10 items-center gap-2 px-4 md:my-24">
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

            <div class="w-full flex flex-row-reverse justify-between items-center">
              <div class="flex items-center lg:gap-8 gap-2 ">
                <p class="lg:text-xl text-sm text-right font-morabaa">حداقل میزان سرمایه گذاری برای شروع کار چقدر
                  است؟</p>
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
                  در سرمایه‌گذاری ملکی لوگانو، هدف ما ایجاد فرصت‌های سرمایه‌گذاری قابل دسترس برای همه است.
                  <br>
                  بنابراین، ما با تعیین حداقل میزان سرمایه‌گذاری به مقدار یک سانتی متر مربع، اجازه می‌دهیم تا افراد با
                  اندک سرمایه نیز به این بازار وارد شوند و از مزایای سرمایه‌گذاری ملکی بهره‌مند شوند.
                </p>
              </section>
            </Transition>

          </div>

          <div @click="secondHomeAccordionOpen"
               ref="secondAccordionBox"
               class="bg-white h-20  px-4 py-3 flex-row-reverse items-center rounded-[10px] gap-4 transition-all">

            <div class="w-full flex flex-row-reverse justify-between items-center">
              <div class="flex items-center lg:gap-8 gap-2 ">
                <p class="lg:text-xl text-sm  text-right font-morabaa">چه مدارکی لازم است؟</p>
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
                <p class="lg:text-lg lg:mt-10 text-sm text-zinc-500">
                  ارائه مدارک شناسایی معتبر مانند کارت ملی یا پاسپورت برای احراز هویت الزامی است.
                  <br>
                  ارائه مدارکی مانند قبض‌های آب، برق یا گاز به عنوان تایید آدرس محل اقامت شما ضروری است.
                  <br>
                  گواهی‌های مالی نظیر تصاویر کارت‌های بانکی یا اطلاعات حساب بانکی برای اطلاع از منابع مالی خود می‌باشد
                </p>
              </section>
            </Transition>

          </div>

          <div @click="thirdHomeAccordionOpen"
               ref="thirdAccordionBox"
               class="bg-white h-20  px-4 py-3 flex-row-reverse items-center rounded-[10px] gap-4 transition-all">

            <div class="w-full flex flex-row-reverse justify-between items-center">
              <div class="flex items-center lg:gap-8 gap-2 ">
                <p class="lg:text-xl text-sm text-right font-morabaa">پروژه های ملکی چقدر زمان میبرد؟</p>
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
                  مدت زمان انجام هر پروژه ملکی، بسته به ویژگی‌ها و اندازه پروژه ممکن است متفاوت باشد. در صورتی که به
                  انتخاب پروژه‌ای با زمان کوتاه علاقه‌مند هستید، برخی از پروژه‌ها آماده‌ی سرمایه‌گذاری نیاز به زمان
                  کمتری دارند. اما پروژه‌های بزرگتر و پیچیده‌تر ممکن است زمان بیشتری برای تکمیل داشته باشند.
                </p>
              </section>
            </Transition>

          </div>

          <div @click="forthHomeAccordionOpen"
               ref="forthAccordionBox"
               class="bg-white h-20  px-4 py-3 flex-row-reverse items-center rounded-[10px] gap-4 transition-all">

            <div class="w-full flex flex-row-reverse justify-between items-center">
              <div class="flex items-center lg:gap-8 gap-2 ">
                <p class="lg:text-xl text-sm text-right font-morabaa">چه زمانی میتوانم سهامم را بفروشم؟</p>
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
                  برای فروش سهام خود در وبسایت سرمایه‌گذاری ملکی، بهتر است که ابتدا با مدیریت یا اپراتور وبسایت تماس
                  بگیرید و نحوه‌ی عملکرد و شرایط مربوط به فروش سهام را مطالعه کنید. همچنین، باید مطمئن شوید که سهام شما
                  قابلیت فروش دارند و هیچ محدودیتی برای فروش آن‌ها وجود ندارد.
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