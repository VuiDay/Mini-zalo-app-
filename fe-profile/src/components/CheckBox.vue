<script setup>
import { ref } from "vue";
const checked = ref(false);
</script>

<template>
  <div class="checkbox-container">
    <input type="checkbox" id="custom-checkbox" v-model="checked" />
    <label for="custom-checkbox" class="custom-checkbox-label">
      Bằng cách chọn hộp này, bạn đồng ý với
      <a href="#" class="custom-checkbox-label-link">điều khoản & điều kiện</a>
      của chúng tôi. Rằng tất cả thông tin được cung cấp là đúng sự thật và
      GoApp hoặc đại diện của GoApp có thể liên hệ với tôi qua bất kỳ kênh nào
      được cung cấp.
    </label>
  </div>
</template>

<style scoped>
.checkbox-container {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  color: #77869e;
  text-align: justify;
  font-size: 10px;
  font-weight: 400;
}

.custom-checkbox-label-link {
  color: #dc2836;
  font-size: 10px;
  font-weight: 400;
  text-decoration-line: underline;
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.custom-checkbox-label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox-label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #77869e;
  border-radius: 4px;
  background-color: #fff;
  transition: background-color 0.3s;
}

input[type="checkbox"]:checked + .custom-checkbox-label::before {
  background-color: #4caf50;
  border-color: #4caf50;
}

.custom-checkbox-label::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 6px;
  width: 8px;
  height: 8px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  display: none;
  transform: rotate(45deg);
}

input[type="checkbox"]:checked + .custom-checkbox-label::after {
  display: block;
}
</style>
