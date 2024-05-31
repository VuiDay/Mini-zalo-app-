<template>
  <Header></Header>
  <div style="margin: 10px 20px 20px 20px">
    <RouterLink to="/booking" class="">
      <div
        class="form-create"
        style="background-color: rgba(46, 203, 112, 0.4); padding: 20px"
      >
        <div class="icon-locate" v-html="icon"></div>
        <p class="text-[#111] font-bold leading-[16px]" style="font-size: 16px">
          Đặt xe ngay !
        </p>
        <p class="" style="font-size: 12px">
          Chọn vị trí và sẽ có người đưa bạn về
        </p>
      </div>
    </RouterLink>
    <ApplicationHistory></ApplicationHistory>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import ApplicationHistory from "@/components/Application/ApplicationHistory.vue";
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="36" viewBox="0 0 22 36" fill="none">
  <path d="M10.8481 0C4.86581 0 0 4.86711 0 10.8481C0 16.6007 9.94337 34.3883 10.367 35.1427L10.8481 36L11.3299 35.1427C11.7528 34.3877 21.6963 16.6007 21.6963 10.8481C21.6963 4.86711 16.8292 0 10.8481 0ZM10.8481 14.1048C8.59469 14.1048 6.7609 12.2711 6.7609 10.017C6.7609 7.76231 8.59457 5.92852 10.8481 5.92852C13.1028 5.92852 14.9366 7.7622 14.9366 10.017C14.9366 12.2711 13.1022 14.1048 10.8481 14.1048Z" fill="#2ECB70"/>
</svg>`;
</script>

<style scoped>
.form-create {
  background: url("@/assets/image/thunder.png") no-repeat right;
  border-radius: 10px;
}
</style>
