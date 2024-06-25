<template>
  <div style="margin-top: 15px">
    <p
      style="
        color: #111;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.8px;
      "
    >
      Xác nhận đặt
    </p>
    <div class="flex items-start justify-between" style="margin-top: 15px">
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 7px;
        "
      >
        <img src="/locatered.svg" alt="" />
        <img src="/ellipse.svg" alt="" />
        <img src="/ellipse.svg" alt="" />
        <img src="/dot.svg" alt="" />
      </div>
      <div class="mb-2 flex flex-col items-start" style="gap: 10px; width: 70%">
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          "
        >
          <p
            style="
              color: #77869e;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              letter-spacing: 0.239px;
            "
          >
            Vị trí hiện tại
          </p>
          <p
            style="
              color: #111;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              letter-spacing: 0.4px;
            "
          >
            {{ dataBooking.addressStart }}
          </p>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          "
        >
          <p
            style="
              color: #77869e;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              letter-spacing: 0.239px;
            "
          >
            Điểm đến
          </p>
          <p
            style="
              color: #111;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              letter-spacing: 0.4px;
            "
          >
            {{ dataBooking.addressEnd }}
          </p>
        </div>
      </div>
      <div>
        <img
          v-if="dataBooking.vehicletype === 'Xe máy'"
          src="/iconbike.svg"
          alt=""
        />
        <img v-if="dataBooking.vehicletype === 'Ôtô'" src="/car.svg" alt="" />
      </div>
    </div>
    <div>
      <div style="margin: 25px 0">
        <p
          style="
            color: #77869e;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
          "
        >
          Mã giới thiệu nhà hàng
        </p>
        <p
          style="
            color: #111;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 171.429% */
          "
        >
          {{ dataBooking.idrestaurant }}
        </p>
      </div>
      <!-- <div style="margin: 25px 0">
        <p
          style="
            color: #77869e;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px; /* 133.333% */
          "
        >
          Thanh toán
        </p>
        <p
          style="
            color: #111;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 171.429% */
          "
        >
          Thẻ
        </p>
      </div> -->
      <div style="margin: 25px 0">
        <p
          style="
            color: #77869e;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px; /* 133.333% */
          "
        >
          Người đặt xe
        </p>
        <p
          style="
            color: #111;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 171.429% */
          "
          class="flex items-center font-semibold text-[15px]"
        >
          <Avatar
            :image="storeUser.userInfor.avatar"
            class="mr-2"
            size="large"
            shape="circle"
          />
          {{ storeUser.userInfor.name }}
        </p>
      </div>
    </div>
    <div style="margin-top: 20px">
      <button
        class="max-w-[100%] w-full h-[56px] rounded-[50px] bg-[#2ecb70] text-white"
        style="box-shadow: 2px 5px 6px 0px rgba(0, 0, 0, 0.25)"
        @click=""
      >
        Xác nhận
      </button>
    </div>
  </div>
</template>

<script setup>
import toast from "@/helper/toast";
const storeOrder = window.$stores.orderVehicle;
const storeUser = window.$stores.user;
const dataBooking = storeOrder.dataBooking;
</script>

<style scoped></style>
