<script setup>
import HistoryCar from "../views/components/HistoryCar.vue"
</script>
<template>
    <section>
        <div class="w-full relative">
            <img class="w-full " src="../assets/image/header.png" alt="">
            <div class="absolute text-xl font-semibold  " style="top: 40px; left: 24px; font-family: Poppins;">Lịch sử
            </div>
            <img class="absolute w-7 " style="top: 40px; right: 24px;" src="../assets/svg/arrange.svg" alt="">
        </div>
        <div class="mx-6 ">
            <HistoryCar status="Đang chờ" />
            <HistoryCar status="Xong" />
        </div>
    </section>

</template>


<style scoped></style>