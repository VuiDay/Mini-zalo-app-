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

  const authorize = async () => {
    try {
      const data = await authorize({
        scopes: ["scope.userLocation"],
      });
      console.log(data);
    } catch (error) {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  };
});
</script>

<style scoped></style>
