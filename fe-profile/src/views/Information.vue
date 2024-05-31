<script setup>
import { ref } from "vue";
import Info from "../components/Info.vue";
import SideBar from "../components/SideBar.vue";

const name = ref("Nguyen Van");
</script>

<template>
  <section class="px-6 relative">
    <Info :name="name"></Info>
    <span class="line"></span>
    <SideBar></SideBar>
  </section>
</template>

<style scoped>
.line::after {
  content: "";
  position: absolute;
  height: 1px;
  background-color: #b0b0b0;
  left: 24px;
  right: 24px;
}
</style>
