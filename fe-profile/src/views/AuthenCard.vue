<script setup>
import Button from "../components/Button.vue";
import { onMounted, ref } from "vue";
const store = window.$stores.profile;

// onMounted(async () => {
//   console.log("store", await store.formRegisData);
// });

const handleClick = () => {
  // requestCameraPermission({
  //   success: ({ userAllow, message }) => {
  //     if (userAllow) {
  //       chooseImage({
  //         sourceType: ["album", "camera"],
  //         cameraType: "back",
  //         success: ({ filePaths, tempFiles }) => {
  //           // xử lý khi gọi api thành công
  //         },
  //         fail: (error) => {
  //           // xử lý khi gọi api thất bại
  //           console.log(error);
  //         },
  //       });
  //     }
  //   },
  //   fail: (err) => {
  //     // xử lý khi gọi api thất bại
  //     console.log(err);
  //   },
  // });
};
</script>
<template>
  <section class="px-6 pb-[18px] mt-[50px] flex flex-col gap-6">
    <div
      class="w-9 h-9 rounded-full bg-[#2ECB70] flex justify-center items-center"
      onclick="history.back()"
    >
      <img class="" src="/arrowleftline.svg" alt="" />
    </div>
    <h2 class="font-semibold text-[#111] text-lg">Chụp ảnh</h2>
    <div class="flex flex-col gap-6 image">
      <button type="button">Ảnh mặt trước CCCD</button>
      <button type="button">Ảnh mặt sau CCCD</button>
      <button type="button">Ảnh bằng lái (Mặt trước)</button>
      <button type="button">Ảnh bằng lái (Mặt sau)</button>
    </div>
    <Button>Đăng ký</Button>
  </section>
</template>

<style scoped>
.image button {
  @apply bg-[#F0F5F5] h-[50px] border-none text-[#97A69D] p-2 rounded-md w-full overflow-hidden text-sm h-[54px];
}
</style>
