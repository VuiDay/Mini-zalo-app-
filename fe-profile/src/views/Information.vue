<script setup>
import { ref, watchEffect } from "vue";
import Info from "../components/Info.vue";
import SideBar from "../components/SideBar.vue";

const store = window.$stores.user;
const userInfor = store.userInfor;
const storeRegis = window.$stores.profile;

console.log("regisData: ", storeRegis.formRegisData);

const name = ref("");
const avatar = ref("");

watchEffect(() => {
  name.value = userInfor?.name || "";
  avatar.value = userInfor?.avatar || "";
});
</script>

<template>
  <section class="px-6 relative">
    <Info :name="name" :avatar="avatar"></Info>
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
