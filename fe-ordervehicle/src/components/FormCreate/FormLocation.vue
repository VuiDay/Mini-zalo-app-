<template>
  <div class="" style="margin-top: 15px">
    <div class="flex flex-col" style="margin-bottom: 10px">
      <label
        class="text-[#77869e] text-[13px] not-italic font-normal leading-[normal] tracking-[0.239px]"
        for="startLocate"
        >*Vị trí hiện tại</label
      >
      <input
        type="text"
        id="startLocate"
        v-model="startLocate"
        placeholder="Vị trí hiện tại"
        value="hehehe"
        class="bg-[#f0f5f5] py-[15px] pr-[19px] pl-[16px] mt-[5px] rounded-[20px] input-text"
      />
    </div>
    <div class="flex flex-col" style="margin-bottom: 10px">
      <label
        for="endLocat"
        class="text-[#77869e] text-[13px] not-italic font-normal leading-[normal] tracking-[0.239px]"
        >*Điểm đến</label
      >
      <input
        type="text"
        value="hehehe"
        id="endLocate"
        v-model="endLocate"
        placeholder="Diểm đến"
        class="bg-[#f0f5f5] py-[15px] pr-[19px] pl-[16px] mt-[5px] rounded-[20px] input-text"
      />
    </div>
    <div class="flex flex-col" style="margin-bottom: 10px">
      <label
        for=""
        class="text-[#77869e] text-[13px] not-italic font-normal leading-[normal] tracking-[0.239px]"
        >*Chọn phương tiện của bạn</label
      >
      <div class="flex justify-between mt-2">
        <img
          v-for="(vehicle, index) in vehicles"
          :key="index"
          @click="() => ((checkVhc = index), (typeVhc = vehicle.name))"
          :src="getVehicleIcon(vehicle.icon)"
          alt=""
          :class="[Number(index) === Number(checkVhc) ? 'activeVhc' : '']"
          class="rounded-[20px]"
        />
      </div>
    </div>
    <div class="flex flex-col" style="margin-bottom: 10px">
      <label
        for="endLocat"
        class="text-[#77869e] text-[13px] not-italic font-normal leading-[normal] tracking-[0.239px]"
        >Mã giới thiệu nhà hàng</label
      >
      <input
        type="text"
        value="hehehe"
        id="endLocate"
        placeholder="Mã giới thiệu nhà hàng (nếu có)"
        class="bg-[#f0f5f5] py-[15px] pr-[19px] pl-[16px] mt-[5px] rounded-[20px] input-text"
      />
    </div>
    <div style="margin-top: 30px">
      <!-- <button
        class="w-[327px] h-[56px] rounded-[50px] bg-[#2ecb70] text-white"
        style="box-shadow: 2px 5px 6px 0px rgba(0, 0, 0, 0.25)"
      ></button> -->
      <RouterLink
        :to="{ name: 'acceptbooking' }"
        class="rounded-[50px] bg-[#2ecb70] text-white py-[19px] px-[100.5px]"
        style="box-shadow: 2px 5px 6px 0px rgba(0, 0, 0, 0.25)"
      >
        Xác nhận đặt xe
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { authorize, getLocation } from "zmp-sdk/apis";
const storeUser = window.$stores.user;
const storeOrder = window.$stores.orderVehicle;
const checkVhc = ref(0);

const startLocate = ref("");
const endLocate = ref("");
const typeVhc = ref("");
const vehicles = [
  {
    name: "Ôtô",
    icon: "/Vhc/car.svg",
  },
  {
    name: "Xe máy",
    icon: "/Vhc/bike.svg",
  },
];

const getVehicleIcon = (iconPath) => {
  const localHost = "http://localhost:3001";
  const productionHost = "https://ordervehicle-mini-app.pages.dev";
  return `${
    window.location.hostname === "localhost" ? localHost : productionHost
  }${iconPath}`;
};

onMounted(() => {
  const getLocate = async () => {
    try {
      const { token } = await getLocation({});
      await storeOrder.saveLocate(token, storeUser.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  authorize({
    scopes: ["scope.userLocation"],
    success: async (data) => {
      // xử lý khi gọi api thành công
      if (!data.code) {
        await getLocate();
      }
    },
    fail: (error) => {
      // xử lý khi gọi api thất bại
      console.log(error);
    },
  });
});
</script>

<style scoped>
.activeVhc {
  box-shadow: rgba(46, 203, 112, 0.5) 0px 5px 15px;
  border: 1px solid rgba(46, 203, 112);
}
.input-text:focus {
  border: 1px solid rgba(46, 203, 112) !important;
}
</style>
