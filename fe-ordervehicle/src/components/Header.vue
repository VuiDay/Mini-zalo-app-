<template>
  <div>
    <div class="relative">
      <img class="w-[100%] h-[150px]" src="@/assets/image/header.png" alt="" />
    </div>
    <div class="flex justify-between absolute w-[100%] px-[20px] top-[75px]">
      <div>
        <p
          class="text-[#111] text-[12px] not-italic font-medium leading-[20px]"
        >
          Chào {{ getTimeDay }} {{ text }}
        </p>
        <p
          class="text-[#111] text-[16px] not-italic font-semibold leading-[20px] flex items-center"
        >
          <Avatar class="mr-[5px]" :image="userName.avatar" shape="circle" />
          {{ userName.name }}
        </p>
      </div>
      <div class="">
        <img
          @click="
            () => {
              showDisplay = !showDisplay;
            }
          "
          class="w-[30px] cursor-pointer"
          src="/Main/arrange.svg"
          alt=""
        />
      </div>
    </div>
  </div>
  <div
    class="menu-child w-[100%] bg-white z-50 fixed bottom-0 rounded-t-[20px]"
    :class="{ show: showDisplay }"
    style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  >
    <div class="flex flex-col justify-center items-center relative">
      <img width="20px" src="/Main/direction.svg" />
      <p class="font-semibold text-[15px]">Giao diện</p>
      <b class="block w-[100%] h-[1px] bg-[#ccc]"></b>
      <img
        width="20px"
        class="absolute top-[10px] right-[12px] cursor-pointer"
        src="/cancel.svg"
        @click="
          () => {
            showDisplay = !showDisplay;
          }
        "
        alt=""
      />
    </div>
    <div class="px-[20px] py-[10px]">
      <div
        v-if="page !== 0"
        class="flex items-center justify-start p-[10px]"
        @click="() => changePage(0)"
      >
        <img width="30px" class="mr-[10px]" src="/Main/driverlogo.svg" alt="" />
        <div>
          <p class="font-semibold">Giao diện người dùng</p>
          <p class="text-[12px]">Giao diện dành cho người dùng</p>
        </div>
      </div>
      <div
        v-if="page !== 1"
        class="flex items-center justify-start p-[10px]"
        @click="() => changePage(1)"
      >
        <img width="30px" class="mr-[10px]" src="/Main/driverlogo.svg" alt="" />
        <div>
          <p class="font-semibold">Giao diện tài xế</p>
          <p class="text-[12px]">Giao diện dành cho tài xế</p>
        </div>
      </div>
      <div
        v-if="page !== 2"
        class="flex items-center justify-start p-[10px]"
        @click="() => changePage(2)"
      >
        <img
          width="30px"
          class="mr-[10px]"
          src="/Main/restaurantlogo.svg"
          alt=""
        />
        <div>
          <p class="font-semibold">Giao diện hợp tác</p>
          <p class="text-[12px]">Giao diện dành cho hợp tác nhà hàng</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { text } = defineProps(["text"]);
import { computed, onMounted, ref, watchEffect } from "vue";
import toast from "../helper/toast";

const store = window.$stores.user;
const storeOrder = window.$stores.orderVehicle;
const userName = ref("");
const showDisplay = ref(false);
const user = store.userInfor;
const page = ref(Number(localStorage.getItem("page")) || 0);

watchEffect(() => {
  userName.value = store.userInfor;
});

const getTimeDay = computed(() => {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 6 && hours < 12) {
    return "buổi sáng";
  } else if (hours >= 12 && hours < 18) {
    return "buổi chiều";
  } else {
    return "buổi tối";
  }
});

const changePage = (index) => {
  if (Number(index) === 1) {
    if (user.isDriver === 1) {
      localStorage.setItem("page", index);
      page.value = Number(localStorage.getItem("page"));
      toast.toastSuccess("Đang thay đổi giao diện");
      if (Number(page.value) === 1) {
        window.$router.push("/driver-order");
      }
      showDisplay.value = !showDisplay.value;
    } else {
      toast.toastFailed("Bạn chưa đăng kí tài xế");
    }
  }
  if (Number(index) === 2) {
    if (user.isRestauent === 1) {
      localStorage.setItem("page", index);
      page.value = Number(localStorage.getItem("page"));
      toast.toastSuccess("Đang thay đổi giao diện");
      if (Number(page.value) === 2) {
        window.$router.push("/order-vehicle");
      }
      showDisplay.value = !showDisplay.value;
    } else {
      toast.toastFailed("Bạn chưa đăng kí đối tác");
    }
  }
  if (Number(index) === 0) {
    localStorage.setItem("page", index);
    page.value = Number(localStorage.getItem("page"));
    toast.toastSuccess("Đang thay đổi giao diện");
    console.log(page.value === 0);
    if (Number(page.value) === 0) {
      window.$router.push("/order-vehicle");
    }
    showDisplay.value = !showDisplay.value;
  }
};
</script>

<style scoped>
.menu-child {
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  overflow: hidden;
}

.menu-child.show {
  max-height: 1000px;
}
</style>
