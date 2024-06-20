<script setup>
import Button from "../components/Button.vue";
import Header from "../components/Header.vue";
import { openShareSheet } from "zmp-sdk/apis";

const handleSubmit = () => {
  openShareSheet({
    type: "zmp",
    data: {
      title: "Go App - by ...",
      thumbnail: "https://sample-videos.com/img/Sample-jpg-image-50kb.jpg",
      path: "https://zalo.me/s/3057952013644751014/?utm_source=zalo-qr",
    },
    success: (res) => {
      console.log("res :", res);
    },
    fail: (err) => {
      console.log("err :", err);
    },
  });
};
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
    <div class="views-wrap text-[#000]">
      <Header title="Thoát"></Header>
    </div>
    <h2 class="text-3xl font-semibold text-center">Mời bạn bè</h2>
    <p class="text-sm font-normal text-center">
      Giới thiệu App cho bạn bè của bạn
    </p>
    <img src="/banner.png" alt="" />
    <div class="px-6">
      <Button type="submit">Mời</Button>
    </div>
  </form>
</template>

<style scoped>
.views-wrap {
  padding: 50px 24px 18px;
}
</style>
