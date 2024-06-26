<template>
  <div v-if="loadingSuccess" class="" style="margin-top: 15px">
    <div class="flex flex-col" style="margin-bottom: 10px">
      <label
        class="text-[#77869e] text-[13px] not-italic font-normal leading-[normal] tracking-[0.239px] flex justify-between"
        for="startLocate"
      >
        <div class="w-[60%]">
          <span class="font-semibold">{{ locateAuto.name }}</span>
          <p class="truncate">
            {{ locateAuto.display_name }}
          </p>
        </div>
        <button
          class="py-[5px] px-[20px] text-white rounded-[50px] bg-[rgba(46,203,112)]"
          @click="() => (checkStartL = true)"
        >
          Thay đổi
        </button>
      </label>
      <b
        class="block w-[100%] h-[1px] bg-[rgba(46,203,112)] rounded-[50px] my-[10px]"
      ></b>

      <div class="relative">
        <input
          type="text"
          id="startLocate"
          v-model="detailStartL"
          placeholder="Nhập địa chỉ chi tiết"
          class="bg-[#f0f5f5] py-[15px] pr-[19px] pl-[16px] mt-[5px] rounded-[20px] input-text w-[100%]"
        />
      </div>

      <div
        v-if="checkStartL"
        class="z-50 fixed top-0 left-0 right-0 bg-white pt-[50px] pb-[36px] px-[24px] max-h-[100vh] h-[100vh] flex flex-col"
      >
        <div class="relative">
          <input
            class="bg-[#f0f5f5] py-[15px] pr-[19px] pl-[16px] mt-[5px] rounded-[20px] input-text w-[100%]"
            type="text"
            v-model="locateAuto.display_name"
            @keyup.enter="checkStartL = false"
            placeholder="Nhập địa chỉ"
            name=""
            id=""
          />
          <img
            v-if="checkStartL"
            @mousedown.stop="
              () => {
                checkStartL = false;
                locateAuto = storeOrder.locate
                  ? storeOrder.locate
                  : { name: 'Địa chỉ', display_name: '' };
              }
            "
            class="w-[20px] absolute right-[16px] top-1/2 transform -translate-y-[30%] p-[2px] bg-[#ccc] rounded-[50px]"
            src="/cancel.svg"
            alt=""
          />
        </div>

        <div
          class="bg-[#f0f5f5] h-[100vh] py-[15px] pr-[19px] pl-[16px] mt-[5px] rounded-[20px] input-text overflow-auto"
          v-if="checkStartL && locateAuto.display_name"
        >
          <div
            v-if="!skeletonStartL"
            v-for="index of 5"
            class="w-[100%] rounded-md p-2"
          >
            <div class="animate-pulse flex flex-col space-y-4">
              <div class="flex items-center">
                <div class="rounded-full bg-slate-700 h-4 w-4 mr-2"></div>
                <div class="flex-1 h-4 bg-slate-700 rounded"></div>
              </div>
              <div class="h-3 bg-slate-700 rounded w-3/4"></div>
            </div>
          </div>

          <div
            v-else
            v-for="(option, index) of optionStartL"
            @click="
              (locateAuto.display_name = option.display_name),
                (locateAuto.name = option.name ? option.name : 'Điểm đón'),
                (checkStartL = false)
            "
            class="w-[100%] p-2"
          >
            <p class="text-[16px] font-semibold flex justify-between">
              <img width="15px" class="mr-[10px]" src="/locatered.svg" alt="" />
              <p class="w-[100%]">{{ option.name }}</p>
            </p>
            <p class="text-[12px] truncate">
              {{ option.display_name }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col mb-[10px]"
      :class="
        checkEndL
          ? 'fixed top-0 right-0 left-0 bg-white h-[100vh] pt-[50px] pb-[36px] px-[24px]'
          : ''
      "
    >
      <label
        for="endLocate"
        class="text-[#77869e] text-[13px] not-italic leading-[normal] tracking-[0.239px] font-semibold my-[10px]"
        :class="checkEndL ? 'hidden' : ''"
        >*Điểm đến</label
      >
      <div class="relative">
        <input
          type="text"
          id="endLocate"
          v-model="endLocate"
          @click="() => (checkEndL = true)"
          @keyup.enter="checkEndL = false"
          placeholder="Diểm đến"
          class="bg-[#f0f5f5] py-[15px] pr-[19px] pl-[16px] mt-[5px] rounded-[20px] input-text w-[100%]"
        />
        <img
          v-if="checkEndL"
          @mousedown.stop="
            () => {
              checkEndL = false;
              endLocate = '';
            }
          "
          class="w-[20px] absolute right-[16px] top-1/2 transform -translate-y-[30%] p-[2px] bg-[#ccc] rounded-[50px]"
          src="/cancel.svg"
          alt=""
        />
      </div>
      <div
        class="bg-[#f0f5f5] h-[100vh] py-[15px] pr-[19px] pl-[16px] mt-[5px] rounded-[20px] input-text overflow-auto"
        v-if="endLocate && checkEndL"
      >
        <div
          v-if="!skeletonEndL"
          v-for="index of 5"
          class="w-[100%] rounded-md p-2"
        >
          <div class="animate-pulse flex flex-col space-y-4">
            <div class="flex items-center">
              <div class="rounded-full bg-slate-700 h-4 w-4 mr-2"></div>
              <div class="flex-1 h-4 bg-slate-700 rounded"></div>
            </div>
            <div class="h-3 bg-slate-700 rounded w-3/4"></div>
          </div>
        </div>

        <div
          v-else
          v-for="(option, index) of optionEndL"
          @click="(endLocate = option.display_name), (checkEndL = false)"
          class="w-[100%] p-2"
        >
          <p class="text-[16px] font-semibold flex justify-between">
            <img width="15px" class="mr-[10px]" src="/locatered.svg" alt="" />
            <p class="w-[100%]">{{ option.name }}</p>
          </p>
          <p class="text-[12px] truncate">
            {{ option.display_name }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col" style="margin-bottom: 10px">
      <label
        for=""
        class="text-[#77869e] text-[13px] not-italic leading-[normal] tracking-[0.239px] font-semibold my-[10px]"
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
        class="text-[#77869e] text-[13px] not-italic leading-[normal] tracking-[0.239px] font-semibold my-[10px]"
        >Mã giới thiệu nhà hàng</label
      >
      <input
        type="text"
        id="endLocate"
        placeholder="Mã giới thiệu nhà hàng (nếu có)"
        v-model="codeRestau"
        class="bg-[#f0f5f5] py-[15px] pr-[19px] pl-[16px] mt-[5px] rounded-[20px] input-text"
      />
    </div>
    <div style="margin-top: 30px">
      <!-- <RouterLink
        :to="{ name: 'acceptbooking' }"
        class="w-full rounded-[50px] bg-[#2ecb70] text-white h-[56px] flex justify-center items-center"
        style="box-shadow: 2px 5px 6px 0px rgba(0, 0, 0, 0.25)"
      >
        Xác nhận đặt xe
      </RouterLink> -->
      <button
        class="max-w-[100%] w-full h-[56px] rounded-[50px] bg-[#2ecb70] text-white"
        style="box-shadow: 2px 5px 6px 0px rgba(0, 0, 0, 0.25)"
        @click="submit"
      >
        Xác nhận đặt xe
      </button>
    </div>
  </div>
  <div v-else class="h-[100vh] w-[100%] flex justify-center items-center">
    <ProgressSpinner
      style="width: 50px; height: 50px"
      strokeWidth="8"
      fill="transparent"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, watch } from "vue";
import { authorize, getLocation } from "zmp-sdk/apis";
import { debounce } from "lodash";
import toast from "@/helper/toast";
const storeUser = window.$stores.user;
const storeOrder = window.$stores.orderVehicle;
const checkVhc = ref(0);

const detailStartL = ref("");
const checkStartL = ref(false);
const locateAuto = ref({ name: "Địa chỉ", display_name: "" });
const optionStartL = ref("");

const endLocate = ref("");
const optionEndL = ref("");

const typeVhc = ref("Ôtô");
const codeRestau = ref("");

const loadingSuccess = ref(true);
const checkEndL = ref(false);
const skeletonEndL = ref(true);
const skeletonStartL = ref(true);

const data = {
  iduser: "",
  idrestaurant: "",
  addressStart: "",
  addressEnd: "",
  vehicletype: "",
};

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

const submit = async () => {
  data.iduser = storeUser.userInfor.idUser;
  data.idrestaurant = codeRestau.value;
  data.addressStart = detailStartL.value + ", " + locateAuto.value.display_name;
  data.addressEnd = endLocate.value;
  data.vehicletype = typeVhc.value;
  if (
    !data.iduser ||
    !data.vehicletype ||
    !data.addressStart ||
    !data.addressEnd
  ) {
    toast.toastFailed("Không để trống form!");
    return;
  }
  await storeOrder.saveDataBooking(data);
  window.$router.push("/booking/accept");
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
        loadingSuccess.value = false;
        await getLocate();
        locateAuto.value = storeOrder.locate
          ? storeOrder.locate
          : { name: "Địa chỉ", display_name: "" };
        loadingSuccess.value = true;
      }
    },
    fail: (error) => {
      // xử lý khi gọi api thất bại
      console.log(error);
    },
  });
});

watchEffect(() => {
  optionEndL.value = storeOrder.locatefindEnd ? storeOrder.locatefindEnd : [];
  optionStartL.value = storeOrder.locatefindStart
    ? storeOrder.locatefindStart
    : [];
});

watch(
  endLocate,
  debounce(async (newValue) => {
    skeletonEndL.value = false;
    await storeOrder.locateChange(newValue, null);
    skeletonEndL.value = true;
  }, 500)
);

watch(
  () => locateAuto.value.display_name,
  debounce(async (newValue) => {
    skeletonStartL.value = false;
    await storeOrder.locateChange(null, newValue);
    skeletonStartL.value = true;
  }, 500)
);
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
