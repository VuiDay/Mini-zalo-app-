<script setup>
import { onMounted, ref } from "vue";
import Datas from "../utils/data.json";

const isOpen = ref(false);
const selected = ref(null);
const list = ref();

const emit = defineEmits(["update:selected"]);

const props = defineProps({
  placeholder: String,
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectedItem = (data) => {
  selected.value = data.name;
  isOpen.value = false;
  emit("update:selected", data.name);
};

onMounted(async () => {
  list.value = Datas.data;
});
</script>

<template>
  <div class="relative w-full h-[50px]">
    <button
      type="button"
      @click="toggleDropdown"
      class="w-full bg-[#F0F5F5] h-[50px] text-[#97A69D] rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#97A69D] transition duration-150 ease-in-out flex justify-between items-center"
    >
      {{ selected ? selected : props.placeholder }}
      <img src="/down.svg" alt="" />
    </button>
    <div
      v-if="isOpen"
      class="absolute mt-1 w-full bg-white shadow-lg rounded z-10"
    >
      <ul class="max-h-60 overflow-auto rounded border border-gray-300">
        <li
          v-for="item in list"
          :key="item.id"
          @click="selectedItem(item)"
          class="cursor-pointer py-2 px-4 hover:bg-[#E2E8F0] hover:text-[#111] text-[#97A69D] transition duration-150 ease-in-out"
        >
          {{ item.name }}
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
