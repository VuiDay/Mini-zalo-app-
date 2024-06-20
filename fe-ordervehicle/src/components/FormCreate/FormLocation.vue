<template>
  <div class="" style="margin-top: 15px">
    <div class="flex flex-col" style="margin-bottom: 10px">
      <label
        class="text-[#77869e] text-[13px] not-italic font-normal leading-[normal] tracking-[0.239px]"
        for="startLocate"
        >Vị trí hiện tại</label
      >
      <input
        type="text"
        id="startLocate"
        value="hehehe"
        class="bg-[#f0f5f5] py-[15px] pr-[19px] pl-[16px] mt-[5px]"
      />
    </div>
    <div class="flex flex-col" style="margin-bottom: 10px">
      <label
        for="endLocat"
        class="text-[#77869e] text-[13px] not-italic font-normal leading-[normal] tracking-[0.239px]"
        >Điểm đến</label
      >
      <input
        type="text"
        value="hehehe"
        id="endLocate"
        class="bg-[#f0f5f5] py-[15px] pr-[19px] pl-[16px] mt-[5px]"
      />
    </div>
    <div class="flex flex-col" style="margin-bottom: 10px">
      <label
        for=""
        class="text-[#77869e] text-[13px] not-italic font-normal leading-[normal] tracking-[0.239px]"
        >Chọn phương tiện của bạn</label
      >
      <div class="flex justify-between mt-2">
        <img v-for="(vehicle, index) of vehicles" :src="vehicle.icon" alt="" />
      </div>
    </div>
    <div style="margin-top: 30px">
      <!-- <button
        class="w-[327px] h-[56px] rounded-[50px] bg-[#2ecb70] text-white"
        style="box-shadow: 2px 5px 6px 0px rgba(0, 0, 0, 0.25)"
      ></button> -->
      <RouterLink
        :to="{ name: 'acceptbooking' }"
        class="w-[327px] rounded-[50px] bg-[#2ecb70] text-white py-[19px] px-[100.5px]"
        style="box-shadow: 2px 5px 6px 0px rgba(0, 0, 0, 0.25)"
      >
        Xác nhận đặt xe
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const vehicles = [
  {
    name: "car",
    icon: "/Vhc/car.svg",
  },
  {
    name: "bike",
    icon: "/Vhc/bike.svg",
  },
];
const store = window.$stores.profile;
console.log(store.test);
</script>

<style scoped>
.activeVhc {
  box-shadow: rgba(46, 203, 112, 0.5) 0px 5px 15px;
}
</style>
