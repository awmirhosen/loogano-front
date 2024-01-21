<template>
  <div class="w-full px-24">
    <div class="w-10/12 mx-auto">
      <!--------- header ------->
      <div class="w-full flex justify-center items-center mt-10" dir="rtl">
        <!------ personal ------>
        <div class="relative">
          <div class="p-3 bg-sky-custom rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16 15H8C5.79086 15 4 16.7909 4 19V21H20V19C20 16.7909 18.2091 15 16 15Z" stroke="white"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="whitespace-nowrap left-1/2 top-16 -translate-x-1/2 absolute text-[14px] text-[#24AFC5]">اطلاعات
            فردی</p>
        </div>
        <!----- line ----->
        <div class="w-full bg-sky-custom h-1"></div>
        <!---- payment card info ---->
        <div class="relative">
          <div ref="firstStepIcon" class="transition-all p-3 bg-[#E9E9E9] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                  d="M21 10V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V10M21 10V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V10M21 10H3M6 15H10"
                  stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="whitespace-nowrap left-1/2 top-16 -translate-x-1/2 absolute text-[14px] text-[#858585]">اطلاعات
            حساب</p>
        </div>
        <!----- line -------->
        <div ref="firstStepLine" class="transition-all w-full bg-[#E9E9E9] h-1"></div>
        <!------- document ----->
        <div class="relative">
          <div class="p-3 bg-[#E9E9E9] transition-all rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 13H14M8 17H16M13 3H5V21H19V9M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19" stroke="#858585"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="whitespace-nowrap left-1/2 top-16 -translate-x-1/2 absolute text-[14px] text-[#858585]">بارگذاری
            مدارک</p>
        </div>
        <!----- line -------->
        <div class="w-full bg-[#E9E9E9] h-1"></div>
        <!----- pending ----->
        <div class="relative">
          <div class="p-3 bg-[#E9E9E9] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                  d="M12 8V12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="whitespace-nowrap left-1/2 top-16 -translate-x-1/2 absolute text-[14px] text-[#858585]">در انتظار
            بررسی</p>
        </div>

      </div>
      <!-------- first step ------>

<!--      <div class="bg-red-400 text-center w-full">-->
<!--        {{ profileStore.profileData }}-->
<!--      </div>-->

      <div class="w-full mt-16" v-if="steps === 1">
        <div class="w-full">
          <!------ page title ----->
          <div class="w-full" dir="rtl">
            <p class="text-[23px] text-[#0C5C75]">اطلاعات فردی</p>
            <span class="block w-full mt-3 h-[2px] bg-sky-custom"></span>
          </div>

          <!---------- form start --------->
          <div class="w-full">
            <div class="w-full mt-10" dir="rtl">
              <FormKit type="form" :actions="false" @submit="submitFirstStep">

                <div class="w-full flex justify-center items-center gap-4">
                  <FormKit class="w-full" outer-class="w-full" type="text" name="firstName" label="نام"
                           input-class="w-full transition-all p-2 rounded-md focus:border-zinc-200"
                           :value="profileStore.profileData.first_name"
                           placeholder="امیرحسین"
                           validation="required|alpha"
                           :validation-messages="{required: 'فیلد نام الزامیست', alpha:'نام نمیتواند شامل عدد باشد'}"
                           messages-class="text-[14px] text-red-500"
                  />
                  <FormKit class="w-full" outer-class="w-full" type="text" name="lastName" label="نام خوانوادگی"
                           input-class="w-full transition-all p-2 rounded-md bg-white"
                           validation="required|alpha"
                           :value="profileStore.profileData.last_name"
                           :validation-messages="{required: 'فیلد نام الزامیست', alpha:'نام خانوادگی نمیتواند شامل عدد باشد'}"
                           messages-class="text-[14px] text-red-500"
                           placeholder="محمدی"
                  />
                </div>

                <div class="w-full flex justify-center items-center gap-4 mt-6">
                  <FormKit class="w-full" outer-class="w-full" type="text" name="nationalCode" label="کدملی"
                           inputmode="numeric"
                           input-class="w-full bg-zinc-200 transition-all p-2 rounded-md bg-white"
                           :value="profileStore.profileData.national_code"
                           validation="required|number|length:10,10"
                           disabled
                           messages-class="text-[14px] text-red-500"
                           :validation-messages="{length: 'کدملی ده رقم میباشد' , number: 'کدملی شامل حروف نمیباشد', required: 'فیلد کدملی الزامیست'}"
                  />

                  <FormKit class="w-full" outer-class="w-full" type="text" name="mobile" label="شماره تماس"
                           inputmode="numeric"
                           :value="profileStore.profileData.mobile"
                           input-class="w-full transition-all p-2 rounded-md bg-white bg-zinc-200"
                           validation="required|number"
                           messages-class="text-[14px] text-red-500"
                           disabled
                           :validation-messages="{ number: 'تلفن همراه شامل حروف نمیباشد', required: 'فیلد کدملی الزامیست'}"
                  />

<!--                  <FormKit class="w-full" outer-class="w-full" type="date" name="birthDate" label="تاریخ تولد"-->
<!--                           input-class="w-full transition-all p-2 rounded-md"-->
<!--                           validation="required"-->
<!--                           :validation-messages="{required: 'فیلد نام الزامیست', alpha:'نام نمیتواند شامل عدد باشد'}"-->
<!--                           messages-class="text-[14px] text-red-500"-->
<!--                           placeholder=""-->
<!--                  />-->
                </div>

                <div class="w-full flex justify-center items-center gap-4 mt-6">
                  <FormKit class="w-full" outer-class="w-full" type="text" name="postalCode" label="کد پستی"
                           input-class="w-full transition-all p-2 rounded-md"
                           validation="required|number|length:10,10"
                           :value="profileStore.profileData.postal_code"
                           :validation-messages="{required: 'این فیلد الزامیست', number:'کد پستی شامل حرف نمیباشد', length:'کد پستی ده رقم میباشد'}"
                           messages-class="text-[14px] text-red-500"
                           placeholder=""
                  />
                </div>

                <div class="w-full flex justify-center items-center gap-4 mt-6">

                  <FormKit
                      type="select"
                      outer-class="w-full"
                      input-class="w-full transition-all p-2 rounded-md bg-white"
                      label="استان"
                      :value="profileStore.profileData.province"
                      name="province"
                      placeholder="نام استان مورد نظر را انتخاب کنید"
                      :options="[
    { label: 'نام استان مورد نظر را انتخاب کنید', value: '' },
    { label: 'تهران', value: 'تهران' },
    { label: 'آذربایجان غربی', value: 'آذربایجان غربی' },
    { label: 'آذربایجان شرقی', value: 'آذربایجان شرقی' },
    { label: 'اردبیل', value: 'اردبیل' },
    { label: 'اصفهان', value: 'اصفهان' },
    { label: 'البرز', value: 'البرز' },
    { label: 'ایلام', value: 'ایلام' },
    { label: 'بوشهر', value: 'بوشهر' },
    { label: 'خراسان رضوی', value: 'خراسان رضوی' },
    { label: 'خراسان شمالی', value: 'خراسان شمالی' },
    { label: 'خراسان جنوبی', value: 'خراسان جنوبی' },
    { label: 'خوزستان', value: 'خوزستان' },
    { label: 'زنجان', value: 'زنجان' },
    { label: 'سمنان', value: 'سمنان' },
    { label: 'سیستان و بلوچستان', value: 'سیستان و بلوچستان' },
    { label: 'فارس', value: 'فارس' },
    { label: 'قزوین', value: 'قزوین' },
    { label: 'قم', value: 'قم' },
    { label: 'کردستان', value: 'کردستان' },
    { label: 'کرمان', value: 'کرمان' },
    { label: 'کرمانشاه', value: 'کرمانشاه' },
    { label: 'کهگیلویه و بویراحمد', value: 'کهگیلویه و بویراحمد' },
    { label: 'گیلان', value: 'گیلان' },
    { label: 'لرستان', value: 'لرستان' },
    { label: 'مازندران', value: 'مازندران' },
    { label: 'مرکزی', value: 'مرکزی' },
    { label: 'هرمزگان', value: 'هرمزگان' },
    { label: 'همدان', value: 'همدان' },
    { label: 'یزد', value: 'یزد' },
  ]"
                  />

                  <FormKit class="w-full" outer-class="w-full" type="text" name="city" label="شهر"
                           inputmode="numeric"
                           input-class="w-full transition-all p-2 rounded-md bg-white"
                           :value="profileStore.profileData.city"
                           validation="required"
                           messages-class="text-[14px] text-red-500"
                           :validation-messages="{ number: 'شهر شامل حروف نمیباشد', required: 'فیلد شماره شهر الزامیست'}"
                  />

                </div>

                <!------ text area of address ------>
                <div class="w-full mt-5">
                  <FormKit class="w-full"
                           outer-class="w-full"
                           type="textarea"
                           name="address"
                           :value="profileStore.profileData.address"
                           label="آدرس محل سکونت"
                           input-class="w-full transition-all p-2 rounded-md bg-white"
                           validation="required"
                           :validation-messages="{required: 'آدرس محل کار سکونت'}"
                           messages-class="text-[14px] text-red-500"
                  />
                </div>

                <!------- submit btn ------->
                <div class="w-full flex justify-end">
                  <FormKit type="submit" input-class="w-full px-8 py-2 bg-sky-custom text-white rounded-md mt-10">
                    مرحله بعدی
                  </FormKit>
                </div>

              </FormKit>
            </div>
          </div>

        </div>
      </div>

      <!-------second step * bank account details ----->
      <div class="w-full px-4 mt-16" v-if="steps === 2">
        <div class="w-full">
          <!------ page title ----->
          <div class="w-full" dir="rtl">
            <p class="text-[23px] text-[#0C5C75]">اطلاعات فردی</p>
            <span class="block w-full mt-3 h-[2px] bg-sky-custom"></span>
          </div>

          <!---------- form start --------->
          <div class="w-full">
            <div class="w-full mt-10" dir="rtl">
              <FormKit type="form" :actions="false" @submit="submitSecondStep">

                <p>شماره کارت</p>
                <div class="flex justify-between items-center gap-4 flex-row-reverse">
                  <FormKit type="text" name="first" dir="ltr" input-class="w-full text-center p-4" maxlength="4" inputmode="numeric" validation="required|number|length:4,4" :validation-messages="{required: 'فیلد الزامیست', number:'از حروف استفاده نکنید', length: 'هر فیلد 4 عدد' }" />
                  <FormKit type="text" name="second" dir="ltr" input-class="w-full text-center p-4" maxlength="4" inputmode="numeric" validation="required|number|length:4,4" :validation-messages="{required: 'فیلد الزامیست', number:'از حروف استفاده نکنید'}" />
                  <FormKit type="text" name="third" dir="ltr" input-class="w-full text-center p-4" maxlength="4" inputmode="numeric" validation="required|number|length:4,4" :validation-messages="{required: 'فیلد الزامیست', number:'از حروف استفاده نکنید'}" />
                  <FormKit type="text" name="forth" dir="ltr" input-class="w-full text-center p-4" maxlength="4" inputmode="numeric" validation="required|number|length:4,4" :validation-messages="{required: 'فیلد الزامیست', number:'از حروف استفاده نکنید'}" />
                </div>


                <div class="w-full flex items-center gap-2">
                  <div class="m-8 w-full">
                    <FormKit type="text" dir="ltr" input-class="w-full p-4" label="شماره شبا" inner-class="w-full" name="sheba" />
                  </div>
                  <p class="mt-4">-</p>
                  <p class="mt-4">IR</p>
                </div>

                <!------- submit btn ------->
                <div class="flex justify-end gap-8 items-center">
                  <div class="w-full flex justify-end gap-4">
                    <div class="whitespace-nowrap px-8 py-2 border-blue-custom text-blue-custom cursor-pointer text-white rounded-md mt-10" @click="backTofirst">
                      مرحله قبلی
                    </div>

                    <FormKit type="submit" input-class="w-full px-8 py-2 bg-sky-custom text-white rounded-md mt-10">
                      مرحله بعدی
                    </FormKit>
                  </div>
                </div>


              </FormKit>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>


import {useProfileStore} from "~/store/profile";

definePageMeta({
  layout: 'profile'
});

const profileStore = useProfileStore();
console.log(profileStore.profileData);

const submitSecondStep = (formData) => {
  console.log(formData)
}

const steps = ref(1);

const firstStepIcon = ref();
const firstStepLine = ref();

const submitFirstStep = (formData) => {

  profileStore.profileData.first_name = formData.firstName;
  profileStore.profileData.last_name = formData.lastName;
  profileStore.profileData.postal_code = formData.postalCode;
  profileStore.profileData.province = formData.province;
  profileStore.profileData.city = formData.city;
  profileStore.profileData.address = formData.address;



  firstStepIcon.value.childNodes[0].childNodes[0].style.stroke = "white"
  firstStepIcon.value.classList.remove("bg-[#E9E9E9]");
  firstStepIcon.value.classList.add("bg-sky-custom");
  firstStepLine.value.classList.remove("bg-[#E9E9E9]");
  firstStepLine.value.classList.add("bg-sky-custom");
  steps.value = 2;

  console.log(formData)

}

const backTofirst = () => {
  console.log(firstStepIcon.value.childNodes[0].childNodes[0])
  firstStepIcon.value.childNodes[0].childNodes[0].style.stroke = "white"
  firstStepIcon.value.childNodes[0].childNodes[0].style.stroke = "#858585"
  firstStepIcon.value.classList.add("bg-[#E9E9E9]");
  firstStepIcon.value.classList.remove("bg-sky-custom");
  firstStepLine.value.classList.add("bg-[#E9E9E9]");
  firstStepLine.value.classList.remove("bg-sky-custom");
  steps.value = 1;
}


</script>

<style scoped>

</style>