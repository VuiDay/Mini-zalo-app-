<template>
  <RouterView></RouterView>
  <component :is="FooterComponent" />
</template>

<script setup>
import { ref, onMounted } from "vue";

const FooterComponent = ref(null);
console.log("hehehehe");

onMounted(async () => {
  const module = await import("master_app/Footer");
  FooterComponent.value = module.default;
});
</script>

<style scoped></style>
