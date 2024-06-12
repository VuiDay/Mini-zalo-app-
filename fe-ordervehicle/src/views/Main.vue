<template>
  <Header></Header>
  <div style="margin: 10px 20px 20px 20px">
    <RouterLink to="/booking" class="">
      <div
        class="form-create"
        style="background-color: rgba(46, 203, 112, 0.4); padding: 20px"
      >
        <img src="/thunder.svg" alt="" />
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
console.log(window.$stores);
</script>

<style scoped>
.form-create {
  background: url("@/assets/image/thunder.png") no-repeat right;
  border-radius: 10px;
}
</style>
