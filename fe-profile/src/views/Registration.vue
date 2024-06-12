<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import CheckBox from "../components/CheckBox.vue";
import Dropdown from "../components/DropDown.vue";

const value = ref(null);
const term = ref(false);
</script>
<template>
  <section class="px-6 py-[18px]">
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
    <form class="pt-[25px] flex flex-col gap-[25px]">
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
      <Dropdown />
      <InputText
        type="text"
        v-model="value"
        unstyled="true"
        placeholder="Mật khẩu"
        class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
      />
      <InputText
        type="text"
        v-model="value"
        unstyled="true"
        placeholder="Xác nhận mật khẩu"
        class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
      />
      <div class="flex items-center">
        <CheckBox></CheckBox>
      </div>
      <Button>Tiếp tục</Button>
    </form>
  </section>
</template>

<style scoped></style>
