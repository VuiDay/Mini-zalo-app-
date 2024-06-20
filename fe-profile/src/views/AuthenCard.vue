<script setup>
import Button from "../components/Button.vue";
import { ref } from "vue";
import { requestCameraPermission, chooseImage } from "zmp-sdk/apis";
const store = window.$stores.profile;

const imageUrls = ref([null, null, null, null, null]);
const placeholders = ref([
  "Ảnh bằng lái xe (Mặt trước)",
  "Ảnh bằng lái xe (Mặt trước)",
  "Ảnh khuôn mặt",
  "Ảnh CCCD (Mặt trước)",
  "Ảnh CCCD (Mặt sau)",
]);

// const onFileChange = (event, index) => {
//   const file = event.target.files[0];
//   if (file && file.type.startsWith("image/")) {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = (e) => {
//       imageUrls.value[index] = e.target.result;
//     };
//   } else {
//     alert("Vui lòng chọn một file ảnh hợp lệ.");
//   }
// };

const handleChooseImage = async (index) => {
  try {
    const { filePaths, tempFiles } = await chooseImage({
      sourceType: ["album", "camera"],
      cameraType: "back",
    });
    console.log("index :", index);
    console.log("filePaths :", filePaths);

    imageUrls.value[index] = filePaths[0];
  } catch (error) {
    // xử lý khi gọi api thất bại
    console.log(error);
  }
};

const handleSubmit = async () => {
  const resData = store.formRegisData;
  if (resData) {
    const [
      frontdrivinglicense,
      backdrivinglicense,
      Faceimage,
      IDcardfront,
      IDcarback,
    ] = imageUrls.value;
    await store.setFormRegis({
      ...resData,
      frontdrivinglicense,
      backdrivinglicense,
      Faceimage,
      IDcardfront,
      IDcarback,
    });
    if (
      !frontdrivinglicense ||
      !backdrivinglicense ||
      !Faceimage ||
      !IDcardfront ||
      !IDcarback
    ) {
      alert("Select img");
      return;
    }

    const data = store.formRegisData;
    console.log("data :", data);

    // await store.postRegisData(data);
    // window.$router.push("/profile");
  }
};
</script>
<template>
  <form
    class="px-6 pb-[18px] mt-[50px] flex flex-col gap-6"
    @submit.prevent="handleSubmit"
  >
    <div
      class="w-9 h-9 rounded-full bg-[#2ECB70] flex justify-center items-center"
      onclick="history.back()"
    >
      <img class="" src="/arrowleftline.svg" alt="" />
    </div>
    <h2 class="font-semibold text-[#111] text-lg">Chụp ảnh</h2>
    <div class="flex flex-col gap-6 image">
      <span v-for="(imageUrl, index) in imageUrls" :key="index">
        <label
          :for="index + 1"
          class="w-full h-full content-center flex items-center gap-4 text-base"
        >
          <img
            v-if="imageUrl"
            :src="imageUrl"
            :alt="'Ảnh ' + (index + 1)"
            class="h-full object-cover w-10 rounded"
          />
          {{ placeholders[index] }}
        </label>
        <button
          type="button"
          :id="index + 1"
          class="hidden"
          @click="() => handleChooseImage(index)"
        />
      </span>
    </div>
    <Button type="submit">Đăng ký</Button>
  </form>
</template>

<style scoped>
.image span {
  @apply bg-[#F0F5F5] border-none text-[#97A69D] p-2 pl-3 rounded-md w-full overflow-hidden text-sm h-[56px];
}
</style>
