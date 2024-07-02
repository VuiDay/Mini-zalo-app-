<template>
  <div
    class="flex flex-col p-[20px] border-b-[1px] border-[#dce8e9]"
    style="padding: 20px; border-bottom: 1px solid #dce8e9"
  >
    <div class="flex items-center justify-between">
      <div style="line-height: 16px">
        <p
          class="text-[#0c341f] text-[14px] not-italic font-normal leading-[16px]"
        >
          Mã đơn hàng: {{ data.idbookacar }}
        </p>
        <p
          class="text-[#545454] text-[12px] not-italic font-normal leading-[16px] flex"
        >
          Người đặt xe: <p class="font-semibold ml-[5px]">{{ data.name }}</p>
        </p>
      </div>
      <p
        class="rounded-[5px] bg-[#2ecb70] text-[#fff] text-[10px] not-italic font-semibold py-[3px] px-[6px] leading-[16px]"
      >
        {{ data.Orderstatus === 3 ? "Đang chờ" : "Xong" }}
      </p>
    </div>
    <div class="flex" style="margin-top: 11px">
      <img v-if="data.vehicletype === 'Ôtô'" src="/car.svg" alt="" />
      <img v-if="data.vehicletype === 'Xe máy'" src="/iconbike.svg" alt="" />
      <div class="w-[100%]" style="margin-left: 9px">
        <div class="flex justify-between flex-col">
          <div>
            <p
              class="text-[#0c341f] text-[12px] not-italic font-semibold leading-[16px]"
            >
              Điểm đón
            </p>
            <div class="flex items-center">
              <img
                src="/locate.svg"
                class=""
                style="margin-right: 5px"
                alt=""
              />
              <p
                class="text-[#0c341f] text-[12px] not-italic font-normal leading-[16px]"
              >
                {{ data.addressStart }}
              </p>
            </div>
          </div>
          <div class="mt-[10px]">
            <p
              class="text-[#0c341f] text-[12px] not-italic font-semibold leading-[16px] text-p"
            >
              Điểm đến
            </p>
            <div class="flex items-center">
              <img
                src="/locatered.svg"
                class=""
                style="margin-right: 5px"
                alt=""
              />
              <p
                class="text-[#0c341f] text-[12px] not-italic font-normal leading-[16px]"
              >
                {{ data.addressEnd }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="text-[#545454] text-[10px] not-italic font-normal leading-[16px]"
        >
          {{ data.CreateDate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const { data } = defineProps(["data"]);

onMounted(() => {});
</script>

<style scoped></style>
