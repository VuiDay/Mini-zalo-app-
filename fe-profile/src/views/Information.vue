<script setup>
import { ref } from "vue";
import Info from "../components/Info.vue";
import SideBar from "../components/SideBar.vue";

const store = window.$stores.user;
const name = "oke";
// const userInfor = store?.userInfor;
// const name = userInfor?.name;
// const avatar = userInfor?.avatar;
console.log("store:", store);
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
