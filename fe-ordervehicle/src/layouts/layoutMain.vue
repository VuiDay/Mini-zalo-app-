<template>
  <RouterView></RouterView>
  <component :is="FooterComponent" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { authorize } from "zmp-sdk/apis";

const FooterComponent = ref(null);

onMounted(async () => {
  const module = await import("master_app/Footer");
  FooterComponent.value = module.default;
});
</script>

<style scoped></style>
