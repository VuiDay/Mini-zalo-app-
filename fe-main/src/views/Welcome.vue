<template>
  <RouterLink to="#">
    <img
      src="../assets/image/Group 1171275006.png"
      width="100%"
      alt=""
      class="top-0 right-0 left-0"
    />
    <div class="mt-[35px] flex flex-col items-center">
      <p
        style="
          color: #2ecb70;
          text-align: center;
          font-family: 'Anton', sans-serif;
          font-size: 48px;
          font-style: normal;
          font-weight: 800;
          line-height: 20px; /* 41.667% */
          letter-spacing: -0.48px;
        "
      >
        GoDrive
      </p>
      <div class="mt-[30px] animate">
        <img src="../assets/image/photo_2024-05-23_15-21-21 1.png" alt="" />
        <img class="ani" src="../assets/image/khoi.png" alt="" />
        <img class="ani" src="../assets/image/khoi.png" alt="" />
        <img class="ani" src="../assets/image/khoi.png" alt="" />
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import {
  getUserInfo,
  authorize,
  closeApp,
  getAccessToken,
  getPhoneNumber,
  getLocation,
} from "zmp-sdk/apis";

const store = window.$stores.user;

const route = useRouter();

onMounted(() => {
  const getAccess = async () => {
    try {
      const accessToken = await getAccessToken({});
      await store.saveAccessTTk(accessToken);
    } catch (error) {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  };

  const getPhone = async () => {
    try {
      const tokenPhone = await getPhoneNumber({});
      await store.saveToken(tokenPhone);
      if (store.userInfor) {
        route.push("/order-vehicle");
      }
    } catch (error) {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const { userInfo } = await getUserInfo({});
      await store.saveInforUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const closeMiniApp = async () => {
    try {
      await closeApp({});
    } catch (error) {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  };

  authorize({
    scopes: ["scope.userInfo", "scope.userPhonenumber"],
    success: async (data) => {
      if (data.code) {
        closeMiniApp();
      } else if (!data.code) {
        await getAccess();
        await getUser();
        await getPhone();
      }
    },
    fail: (error) => {
      // xử lý khi gọi api thất bại
      console.log(error, "234");
    },
  });
});
</script>

<style scoped>
.animate {
  position: relative;
  width: 100%;
  /* Đảm bảo phần tử .animate chiếm toàn bộ chiều rộng */
  height: 150px;
  /* Đặt chiều cao tùy ý */
}

.animate > img {
  display: block;
  margin: 0 auto;
}

.ani {
  position: absolute;
  bottom: -140px;
  /* Đặt các thẻ <img> dưới ảnh */
  width: 100px;
  /* Đặt chiều rộng của các thẻ <img> */
  height: 50px;
  /* Đặt chiều cao của các thẻ <img> */
  animation: move 3s infinite;
}

.ani:nth-child(3) {
  animation-delay: 1s;
}

.ani:nth-child(4) {
  animation-delay: 2s;
}

@keyframes move {
  0% {
    right: -50px;
    /* Đặt vị trí ban đầu của các thẻ <img> ra ngoài màn hình bên phải */
    opacity: 0;
  }

  50% {
    right: 50%;
    /* Đặt vị trí giữa màn hình */
    opacity: 1;
  }

  100% {
    right: 100%;
    /* Đặt vị trí kết thúc của các thẻ <img> ra ngoài màn hình bên trái */
    opacity: 0;
  }
}
</style>
