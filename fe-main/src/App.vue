<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n-lite";

const { t } = useI18n();
onMounted(() => {
  window.$t = t;
  window.$router.push("/");
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
