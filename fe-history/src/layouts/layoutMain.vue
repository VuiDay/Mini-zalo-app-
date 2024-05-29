<template>
  <div>đây là layout history</div>
  <component :is="FooterComponent"></component>
</template>

<script setup>
import { ref, onMounted } from "vue";

const FooterComponent = ref(null);

onMounted(async () => {
  const module = await import("master_app/Footer");
  FooterComponent.value = module.default;
});
</script>

<style scoped></style>
