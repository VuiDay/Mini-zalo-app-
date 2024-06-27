<template>
  <div style="padding: 36px 24px 36 24px" class="relative">
    <div class="flex items-center">
      <p
        onclick="history.back()"
        style="
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          padding: 14px 20px;
          border-radius: 50px;
        "
      >
        <img src="/arrowleft.svg" alt="" />
      </p>
      <p
        class="text-[#111] ml-[10px] text-[20px] font-bold leading-normal tracking-[-0.8px]"
      >
        Đặt xe
      </p>
    </div>
    <div
      class="flex justify-center items-center h-[135px] rounded-[30px] overflow-hidden my-[10px]"
    >
      <img src="@/assets/image/GoDriver.jpg" alt="" />
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script setup></script>

<style scoped></style>
