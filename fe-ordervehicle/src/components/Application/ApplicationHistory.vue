<template>
  <div class="" style="margin-top: 20px">
    <div class="flex justify-between">
      <p style="font-size: 14px; color: #111; font-weight: 600">Lịch sử</p>
      <RouterLink
        to="/history"
        style="color: rgba(46, 203, 112, 0.8); font-size: 12px"
        >Xem tất cả</RouterLink
      >
    </div>
    <div>
      <CardHistory v-for="data of fakeData" :data="data"></CardHistory>
    </div>
  </div>
</template>

<script setup>
import CardHistory from "@/components/Card/CardHistory.vue";
const fakeData = [
  {
    codeOrder: "ORDB1234",
    idDriver: "123456",
    nameDriver: "Việt Cường",
    location: "Quán Bàu, Nghệ An",
    time: "12/12/2020, 2:43pm",
    vehicale: 0,
    status: true,
  },
  {
    codeOrder: "ORDB1234",
    idDriver: "123456",
    nameDriver: "Việt Cường",
    location: "Quán Bàu, Nghệ An",
    time: "12/12/2020, 2:43pm",
    vehicale: 0,
    status: true,
  },
];
</script>

<style scoped></style>
