<template>
  <section class="flex flex-col gap-4">
    <div class="views-wrap text-[#000]">
      <Header title="Thoát"></Header>
    </div>
    <h2 class="text-3xl font-semibold text-center">Mời bạn bè</h2>
    <p class="text-sm font-normal text-center">
      Giới thiệu App cho bạn bè của bạn
    </p>
    <img src="/banner.png" alt="" />
    <div class="px-6">
      <Button>Mời</Button>
    </div>
  </section>
</template>

<script setup>
import Button from "../components/Button.vue";
import Header from "../components/Header.vue";
</script>

<style scoped>
.views-wrap {
  padding: 18px 24px 0px;
}
</style>
