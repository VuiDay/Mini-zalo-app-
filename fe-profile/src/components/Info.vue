<script setup>
const props = defineProps(["name", "avatar"]);
const words = props.name.split(" ");
const standForName = words.map((word) => word.charAt(0).toUpperCase()).join("");
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-3">
    <span
      v-if="props.avatar"
      class="w-[72px] h-[72px] font-semibold rounded-full flex justify-center items-center stand-for-name"
    >
      <img
        :src="avatar"
        :alt="standForName"
        class="w-full h-full object-cover rounded-full"
      />
    </span>
    <span
      v-else
      class="w-[72px] h-[72px] font-semibold rounded-full flex justify-center items-center stand-for-name"
      >{{ standForName }}</span
    >
    <h3 class="font-medium mb-[25px] text-[#111] text-lg">{{ props.name }}</h3>
  </div>
</template>

<style scoped>
.stand-for-name {
  width: 72px;
  height: 72px;
  color: #4f4f4f;
  font-size: 32px;
  line-height: 20px;
  background-color: rgba(46, 203, 112, 0.6);
  margin-top: 55px;
  gap: 12px;
}
</style>
