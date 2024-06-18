<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import CheckBox from "../components/CheckBox.vue";
import Dropdown from "../components/DropDown.vue";
import { requestCameraPermission, chooseImage } from "zmp-sdk/apis";

const value = ref(null);
const city = ref(null);
console.log("city :", city);
const district = ref(null);
console.log("district :", district);
const ward = ref(null);
console.log("ward :", ward);

const handleClick = () => {
  // requestCameraPermission({
  //   success: ({ userAllow, message }) => {
  //     if (userAllow) {
  //       chooseImage({
  //         sourceType: ["album", "camera"],
  //         cameraType: "back",
  //         success: ({ filePaths, tempFiles }) => {
  //           // xử lý khi gọi api thành công
  //         },
  //         fail: (error) => {
  //           // xử lý khi gọi api thất bại
  //           console.log(error);
  //         },
  //       });
  //     }
  //   },
  //   fail: (err) => {
  //     // xử lý khi gọi api thất bại
  //     console.log(err);
  //   },
  // });
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
    <form class="pt-[25px] flex flex-col gap-[25px]" @submit="">
      <span class="flex gap-6">
        <InputText
          type="text"
          v-model="value"
          unstyled="true"
          placeholder="Họ"
          class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
        />
        <InputText
          type="text"
          v-model="value"
          unstyled="true"
          placeholder="Tên"
          class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
        />
      </span>
      <InputText
        type="text"
        v-model="value"
        unstyled="true"
        placeholder="Email"
        class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
      />
      <InputText
        type="text"
        v-model="value"
        unstyled="true"
        placeholder="Số điện thoại"
        class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
      />
      <Dropdown
        placeholder="Chọn tỉnh thành"
        :selected="city"
        @update:selected="city = $event"
      />
      <Dropdown
        placeholder="Chọn quận/huyện"
        :selected="district"
        @update:selected="district = $event"
      />
      <Dropdown
        placeholder="Chọn thị xã"
        :selected="ward"
        @update:selected="ward = $event"
      />
      <div class="grid grid-cols-2 gap-6 image">
        <button type="button" class="" @click="handleClick">
          Ảnh mặt trước cccd
        </button>
        <button type="button" class="">Ảnh mặt sau cccd</button>
        <button type="button" class="h-[54px]">Ảnh bằng lái (Mặt trước)</button>
        <button type="button" class="h-[54px]">Ảnh bằng lái (Mặt sau)</button>
      </div>
      <div class="flex items-center">
        <CheckBox></CheckBox>
      </div>
      <Button>Tiếp tục</Button>
    </form>
  </section>
</template>

<style scoped>
.image button {
  @apply bg-[#F0F5F5] h-[50px] border-none text-[#97A69D] p-2 rounded-md w-full overflow-hidden text-sm;
}
</style>
