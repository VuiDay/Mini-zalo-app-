<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import CheckBox from "../components/CheckBox.vue";
import Dropdown from "../components/DropDown.vue";
// import { requestCameraPermission, chooseImage } from "zmp-sdk/apis";

// const store = window.$stores.profile;

const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const phoneNumber = ref(null);
const city = ref(null);
const term = ref(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    city: city.value,
    term: term.value,
  };
  if (
    formData.firstName === null ||
    formData.lastName === null ||
    formData.email === null ||
    formData.phoneNumber === null
  ) {
    alert("Điền đầy đủ");
    return;
  }
  if (formData.term === false) {
    alert("Tích");
    return;
  }
  // await store.setFormRegis(formData);
  console.log("Form Data:", formData);
};

const handleSelectedUpdate = (data) => {
  city.value = data;
};
const handleUpdateTerm = (data) => {
  term.value = data;
};
</script>

<template>
  <section class="px-6 pb-[18px] mt-[50px]">
    <div
      class="w-9 h-9 rounded-full bg-[#2ECB70] flex justify-center items-center mb-[15px]"
      onclick="history.back()"
    >
      <img class="" src="/arrowleftline.svg" alt="" />
    </div>
    <h2 class="font-bold text-[25px] text-[#111]">Bắt đầu đăng ký</h2>
    <p class="font-normal text-[13px] text-[#111]">
      Vui lòng điền thông tin vào form dưới đây
    </p>
    <form class="pt-[25px] flex flex-col gap-[25px]" @submit="handleSubmit">
      <span class="flex gap-6">
        <InputText
          type="text"
          v-model="firstName"
          unstyled="true"
          placeholder="Họ"
          class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
        />
        <InputText
          type="text"
          v-model="lastName"
          unstyled="true"
          placeholder="Tên"
          class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
        />
      </span>
      <InputText
        type="text"
        v-model="email"
        unstyled="true"
        placeholder="Email"
        class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
      />
      <InputText
        type="text"
        v-model="phoneNumber"
        unstyled="true"
        placeholder="Số điện thoại"
        class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
      />
      <Dropdown
        placeholder="Chọn tỉnh thành"
        @update:selected="handleSelectedUpdate"
      />

      <div class="flex items-center">
        <CheckBox @update:term="handleUpdateTerm"></CheckBox>
      </div>
      <Button type="submit">Tiếp tục</Button>
    </form>
  </section>
</template>

<style scoped></style>
