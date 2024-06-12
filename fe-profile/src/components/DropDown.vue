<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const selectedCity = ref(null);
const placeholder = "Select a City";
const cities = [
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Paris", code: "PRS" },
];

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectCity = (city) => {
  selectedCity.value = city;
  isOpen.value = false;
};
</script>

<template>
  <div class="relative w-full h-[50px]">
    <button
      type="button"
      @click="toggleDropdown"
      class="w-full bg-[#F0F5F5] h-[50px] text-[#97A69D] rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#97A69D] transition duration-150 ease-in-out flex justify-between items-center"
    >
      {{ selectedCity ? selectedCity.name : placeholder }}
      <img src="/down.svg" alt="" />
    </button>
    <div
      v-if="isOpen"
      class="absolute mt-1 w-full bg-white shadow-lg rounded z-10"
    >
      <ul class="max-h-60 overflow-auto rounded border border-gray-300">
        <li
          v-for="city in cities"
          :key="city.code"
          @click="selectCity(city)"
          class="cursor-pointer py-2 px-4 hover:bg-[#E2E8F0] hover:text-[#111] text-[#97A69D] transition duration-150 ease-in-out"
        >
          {{ city.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul::-webkit-scrollbar {
  width: 8px;
}

ul::-webkit-scrollbar-track {
  background: #f1f1f1;
}

ul::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

ul::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
