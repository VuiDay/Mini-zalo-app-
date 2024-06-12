<template>
  <div class="flex header" onclick="history.back()">
    <img src="/arrowleft.svg" alt="" />
    <h3 class="title">{{ props.title }}</h3>
  </div>
</template>

<script setup>
const props = defineProps(["title"]);
</script>

<style scoped>
.header {
  gap: 25px;
}
.title {
  color: #111;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
}
</style>
