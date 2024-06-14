<template>
  <div class="views-wrap">
    <Header title="FAQ"></Header>
    <Accordion></Accordion>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Accordion from "../components/Accordion.vue";
const store = window.$stores.user;
console.log(store.userInfor);
</script>

<style scoped>
.views-wrap {
  padding: 18px 24px;
}
</style>
