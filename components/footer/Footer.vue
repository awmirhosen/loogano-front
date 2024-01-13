<template>

  <div class="w-full overflow-hidden relative mt-24">
    <!-----desktop footer path-------->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1512 622" fill="none" class="w-full hidden lg:block lg:mt-10">
      <path d="M1512 0L0 125.5V622H1512V0Z" fill="#002D4B"/>
    </svg>


    <!-----mobile footer path-------->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1512 622" fill="none"
         class="h-[1200px] block lg:hidden lg:mt-10">
      <path d="M1512 0L0 125.5V622H1512V0Z" fill="#002D4B"/>
    </svg>

    <!-----desktop footer-------->
    <div class="absolute w-full h-full hidden lg:flex top-0 items-center justify-between">
      <div class="w-full h-full flex justify-between items-center px-12 flex-row-reverse gap-48 mt-24">
        <div class="flex flex-col w-4/12 ">

          <div class="w-full flex justify-center items-center gap-4">
            <img src="/images/home/loogano_logo.png" alt="ff">
            <nuxt-link to="https://tehran.irannsr.org/fa/trade_unit/2504716/swd_id/104366/%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D8%A7%DB%8C%D8%AF%D9%87-%D9%BE%D8%B1%D8%AF%D8%A7%D8%B2%D8%A7%D9%86-%D8%B3%D8%A7%D8%B2%D9%87-%DA%AF%D8%B3%D8%AA%D8%B1-%D8%B3%D9%88%D9%85%D8%A7.html
">
              <img src="/images/unnamed.png" alt="rayane_senf_logo" class="h-[70px]">
            </nuxt-link>
          </div>

          <p class="text-sm w-10/12 mx-auto text-right text-white" style="opacity: 60%">
            سرمایه‌گذاری ملکی لوگانو به عنوان یک نقطه آغاز برای رسیدن به آینده‌ی مالی پایدار، به شما کمک می‌کند تا با
            سرمایه‌ی کم به دنیای سرمایه‌گذاری ملکی وارد شوید.
          </p>

          <div class="text-sm w-10/12 mx-auto text-right text-white w-100 justify-center mt-3 flex">
            <a referrerpolicy="origin" target="_blank"
               href="https://trustseal.enamad.ir/?id=364419&amp;Code=famE1evKQ2jNA9Bhl8Hd"><img referrerpolicy="origin"
                                                                                                src="https://Trustseal.eNamad.ir/logo.aspx?id=364419&amp;Code=famE1evKQ2jNA9Bhl8Hd"
                                                                                                alt=""
                                                                                                style="cursor:pointer"
                                                                                                id="famE1evKQ2jNA9Bhl8Hd">
            </a>
          </div>

        </div>

        <div class="flex items-start justify-around w-full flex-row-reverse">
          <div class="flex flex-col w-full">

            <div class="w-full text-right">

              <p class="font-morabaa text-white text-3xl">ارتباط با ما</p>

              <div class="flex items-center gap-2 justify-end mt-10">
                <p class=" text-white text-md opacity-[60%]">loogano@info.com</p>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 justify-end">
                <p class=" text-white text-md opacity-[60%]">09125242600</p>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 justify-end">
                <p class=" text-white text-md opacity-[60%]">خیابان مطهری، نرسیده به سهروردی <br> پلاک 100، طبقه 4</p>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>

            </div>

          </div>

          <div class="flex flex-col w-full">

            <div class="w-full text-right">

              <p class="font-morabaa text-white text-3xl">صفحات</p>

              <div class="flex items-center gap-2 justify-end mt-10">
                <nuxt-link to="/"><p class=" text-white text-md opacity-[60%]">خانه</p></nuxt-link>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 justify-end my-2">
                <nuxt-link to="#services">
                  <p class=" text-white text-md opacity-[60%]">خدمات</p>
                </nuxt-link>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 justify-end my-2">
                <nuxt-link to="/projects"><p class=" text-white text-md opacity-[60%]">فرصت سرمایه گذاری</p></nuxt-link>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 justify-end my-2">
                <nuxt-link to="/faq">
                  <p class=" text-white text-md opacity-[60%]">سوالات متداول</p>
                </nuxt-link>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>

            </div>

          </div>

          <div class="flex flex-col w-full">

            <div class="w-full text-right">

              <p class="font-morabaa text-white text-3xl">شبکه های اجتماعی</p>

              <div class="flex items-center gap-2 justify-end my-2 mt-10">
                <nuxt-link to="https://www.instagram.com/loogano.co/">
                  <p class=" text-white text-md opacity-[60%]">اینستاگرام</p>
                </nuxt-link>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 justify-end my-2">
                <nuxt-link to="https://www.linkedin.com/company/loogano/?viewAsMember=true">
                  <p class=" text-white text-md opacity-[60%]">لینکدین</p>
                </nuxt-link>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
    <!-----mobile footer-------->
    <div class="absolute block lg:hidden w-full h-full mt-12 top-60">

      <div class="flex flex-col w-full text-center">
        <div class="w-full flex justify-center">
          <img src="/images/home/loogano_logo.png" alt="ff">
        </div>

        <p class="text-sm w-10/12 mx-auto text-center text-white" style="opacity: 60%">
          سرمایه‌گذاری ملکی لوگانو به عنوان یک نقطه آغاز برای رسیدن به آینده‌ی مالی پایدار، به شما کمک می‌کند تا با
          سرمایه‌ی کم به دنیای سرمایه‌گذاری ملکی وارد شوید.
        </p>

      </div>

      <div class="flex flex-col items-center justify-around w-full flex-row-reverse">

        <div class="flex flex-col w-full px-6 mt-16">
          <div class="w-full text-right">

            <p class="font-morabaa text-white text-3xl">خدمات</p>

            <div class="flex items-center gap-2 justify-end mt-10">
              <p class=" text-white text-md opacity-[60%]">تحلیل بازار</p>
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div class="flex items-center gap-2 justify-end my-2">
              <p class=" text-white text-md opacity-[60%]">فرصت سرمایه گذاری</p>
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div class="flex items-center gap-2 justify-end my-2">
              <p class=" text-white text-md opacity-[60%]">مشاوره حرفه ای</p>
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div class="flex items-center gap-2 justify-end my-2">
              <p class=" text-white text-md opacity-[60%]">محاسبه ی بازدهی</p>
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>

          </div>


          <div class="flex flex-col w-full">

            <div class="w-full text-right">

              <p class="font-morabaa text-white text-3xl">صفحات</p>

              <div class="flex items-center gap-2 justify-end mt-10">
                <nuxt-link to="/"><p class=" text-white text-md opacity-[60%]">خانه</p></nuxt-link>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 justify-end my-2">
                <nuxt-link to="#services">
                  <p class=" text-white text-md opacity-[60%]">خدمات</p>
                </nuxt-link>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 justify-end my-2">
                <nuxt-link to="/projects"><p class=" text-white text-md opacity-[60%]">فرصت سرمایه گذاری</p></nuxt-link>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 justify-end my-2">
                <nuxt-link to="/">
                  <p class=" text-white text-md opacity-[60%]">سوالات متداول</p>
                </nuxt-link>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>

            </div>

          </div>

          <div class="flex flex-col w-full">

            <div class="w-full text-right">

              <p class="font-morabaa text-white text-3xl">تماس با ما</p>

              <div class="flex items-center gap-2 justify-end mt-10 my-2">
                <p class=" text-white text-md opacity-[60%]">فیسبوک</p>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 justify-end my-2">
                <p class=" text-white text-md opacity-[60%]">توییتر</p>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 justify-end my-2">
                <nuxt-link to="https://www.linkedin.com/company/loogano/?viewAsMember=true">
                  <p class=" text-white text-md opacity-[60%]">لینکدین</p>
                </nuxt-link>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 justify-end my-2">
                <nuxt-link to="https://www.instagram.com/loogano.co/">
                  <p class=" text-white text-md opacity-[60%]">اینستاگرام</p>
                </nuxt-link>
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>


  </div>

</template>

<script setup>

</script>

<style scoped>

</style>