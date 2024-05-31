<script setup>
import { ref, onMounted } from "vue";
import HistoryCar from "../components/HistoryCar.vue";

const FooterComponent = ref(null);

onMounted(async () => {
    const module = await import("master_app/Footer");
    FooterComponent.value = module.default;
});
</script>
<template>
    <section>
        <div class="w-full relative">
            <img class="w-full " src="../assets/image/header.png" alt="">
            <div class="absolute top-8">Lịch sử </div>
        </div>
        <div class="mx-6">
            <HistoryCar />
        </div>
    </section>


    <!-- footer -->
    <component :is="FooterComponent"></component>
</template>


<style scoped></style>