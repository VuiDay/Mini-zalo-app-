<script setup>
import { ref, onMounted } from "vue";
import Button from "../components/Button.vue";
import CheckBox from "../components/CheckBox.vue";
import Dropdown from "../components/DropDown.vue";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import { requestCameraPermission, chooseImage } from "zmp-sdk/apis";

const store = window.$stores.profile;
const storeUser = window.$stores.user;
console.log("storeUser :", storeUser);

const name = ref(null);
const email = ref(null);
const phoneNumber = ref(null);
const city = ref(null);
const term = ref(false);
const IDcard = ref(null);
const imgUrl = ref(null);

const handleSubmit = async () => {
  let id = await storeUser?.userInfor?.idUser;
  const formData = {
    Username: name.value ? capitalizeFirstLetter(name.value) : null,
    email: email.value,
    phoneNumber: phoneNumber.value,
    IDcard: IDcard.value,
    address: city.value,
    term: term.value,
  };
  if (
    !formData.Username ||
    !formData.email ||
    !formData.IDcard ||
    !formData.phoneNumber ||
    !formData.address
  ) {
    alert("Điền đầy đủ");
    return;
  }
  if (formData.term === false) {
    alert("Tích");
    return;
  }

  await store.setFormRegis({ ...formData, idUser: id });
  window.$router.push("/authen-card");
};

const handleSelectedUpdate = (data) => {
  city.value = data;
};
const handleUpdateTerm = (data) => {
  term.value = data;
};

onMounted(() => {
  const requestCamera = async () => {
    try {
      const { userAllow, message } = await requestCameraPermission({});
      if (userAllow) {
        chooseImage({
          sourceType: ["album", "camera"],
          cameraType: "back",
          success: ({ filePaths, tempFiles }) => {
            imgUrl.value = filePaths[0];
            console.log("tempFiles :", tempFiles);
            console.log("filePaths :", filePaths);
          },
          fail: (error) => {
            // xử lý khi gọi api thất bại
            console.log(error);
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  requestCamera();
});
</script>

<template>
  <section class="px-6 pb-[18px] mt-[50px]">
    <div
      class="w-9 h-9 rounded-full bg-[#2ECB70] flex justify-center items-center mb-[15px]"
      onclick="history.back()"
    >
      <img class="" src="/arrowleftline.svg" alt="" />
    </div>
    <h2 class="font-bold text-[25px] text-[#111]">Bắt đầu đăng ký</h2>
    <img :src="imgUrl && imgUrl" alt="anh" />
    <p class="font-normal text-[13px] text-[#111]">
      Vui lòng điền thông tin vào form dưới đây
    </p>
    <form
      class="pt-[25px] flex flex-col gap-[25px]"
      @submit.prevent="handleSubmit"
    >
      <InputText
        type="text"
        v-model="name"
        unstyled="true"
        placeholder="Họ và tên"
        class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
      />
      <InputText
        type="text"
        v-model="email"
        unstyled="true"
        placeholder="Email"
        class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
      />
      <InputText
        type="text"
        v-model="phoneNumber"
        unstyled="true"
        placeholder="Số điện thoại"
        class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
      />
      <InputText
        type="text"
        v-model="IDcard"
        unstyled="true"
        placeholder="Số CCCD"
        class="!bg-[#F0F5F5] placeholder:text-[#97A69D] h-[50px] border-none text-[#111] focus:ring-0 w-full"
      />
      <Dropdown
        placeholder="Chọn tỉnh thành"
        @update:selected="handleSelectedUpdate"
      />

      <div class="flex items-center">
        <CheckBox @update:term="handleUpdateTerm"></CheckBox>
      </div>
      <Button type="submit">Tiếp tục</Button>
    </form>
  </section>
</template>

<style scoped></style>
