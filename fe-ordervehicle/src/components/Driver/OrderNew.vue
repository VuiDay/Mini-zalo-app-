<template>
  <div>
    <CardHistory v-for="data of dataOrderNew" :data="data"></CardHistory>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import CardHistory from "@/components/Card/CardHistory.vue";
const dataOrderNew = ref([]);
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

const storeOrder = window.$stores.orderVehicle;
const store = window.$stores.user;

onMounted(async () => {
  await storeOrder.getOrderNew(store.userInfor.idUser);
});
watchEffect(() => {
  dataOrderNew.value = storeOrder.dataOrderNew;
});
</script>

<style scoped></style>
