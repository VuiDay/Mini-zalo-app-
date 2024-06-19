<script setup>
import Button from "../components/Button.vue";
import { onMounted, ref } from "vue";
const store = window.$stores.profile;

console.log(store.formRegisData);

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

const imageUrl = ref(null);

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (e) => {
     imageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    alert('Vui lòng chọn một file ảnh hợp lệ.');
  }
};

const handleSubmit = async() => {
  const resData = store.formRegisData;
  if (resData) {
    await store.setFormRegis({ ...resData, imageCCCD: imageUrl.value });
    window.$router.push("/profile");
  }
}

</script>
<template>
  <form class="px-6 pb-[18px] mt-[50px] flex flex-col gap-6" @submit.prevent="handleSubmit">
    <div
      class="w-9 h-9 rounded-full bg-[#2ECB70] flex justify-center items-center"
      onclick="history.back()"
    >
      <img class="" src="/arrowleftline.svg" alt="" />
    </div>
    <h2 class="font-semibold text-[#111] text-lg">Chụp ảnh</h2>
    <div class="flex flex-col gap-6 image">
      <span>
        <label for="test1" class="w-full h-full content-center block">Ảnh mặt trước CCCD</label>
        <input type="file" id="test1" class="hidden" @change="onFileChange"></input>
      </span>
      <img v-if="imageUrl" :src="imageUrl" alt="Ảnh mặt trước CCCD" />
      <!-- <input type="file">Ảnh mặt sau CCCD</input>
      <input type="file">Ảnh bằng lái (Mặt trước)</input>
      <input type="file">Ảnh bằng lái (Mặt sau)</input> -->
    </div>
    <Button type="submit">Đăng ký</Button>
  </form>
</template>

<style scoped>
.image span {
  @apply bg-[#F0F5F5] h-[50px] border-none text-[#97A69D] p-2 pl-3 rounded-md w-full overflow-hidden text-sm h-[54px];
}
</style>
