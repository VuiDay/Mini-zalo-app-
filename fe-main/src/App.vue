<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n-lite";

const { t } = useI18n();
onMounted(() => {
  console.log(t, "ttt");
  window.$t = t;
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
