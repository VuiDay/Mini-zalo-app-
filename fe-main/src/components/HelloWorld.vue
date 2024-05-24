<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div @click="router.push('/test')">123</div>
  <p>{{ $t("info.label") }}</p>
</template>

<style scoped></style>
