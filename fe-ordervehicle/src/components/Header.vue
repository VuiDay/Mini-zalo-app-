<template>
  <div>
    <div class="relative">
      <img class="w-[100%]" src="@/assets/image/header.png" alt="" />
    </div>
    <div class="flex justify-between absolute w-[100%] px-[20px] mt-[75px]">
      <div>
        <p
          style="
            color: #111;
            font-family: 'Anton', sans-serif;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
          "
        >
          Chào mừng trở lại,
        </p>
        <p
          style="
            color: #111;
            font-family: 'Anton', sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
          "
        >
          {{ userName.name }}
        </p>
      </div>
      <div>
        <Avatar :image="userName.avatar" shape="circle" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const store = window.$stores.user;
const userName = ref("");

watchEffect(() => {
  userName.value = store.userInfor;
});
</script>

<style scoped></style>
