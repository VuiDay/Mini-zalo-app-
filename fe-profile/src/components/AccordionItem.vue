<template>
  <div>
    <div
      @click="toggle"
      :class="isOpen ? '!border-transparent' : ''"
      class="bg-transparent cursor-pointer px-[10px] py-4 border border-t-transparent border-x-transparent border-b-[#ddd] flex justify-between items-center text-[#2ECB70] text-base font-semibold"
    >
      {{ props.title }}
      <img v-if="isOpen" src="/minius.svg" alt="" />
      <img v-else src="/plus.svg" alt="" />
    </div>
    <div class="content" :class="isOpen ? 'active' : ''">
      <p :class="isOpen ? 'active' : ''">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const props = defineProps(["title"]);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  border-radius: 8px;
}

.content p {
  padding: 10px;
  visibility: hidden;
  transition: visibility 0.3s ease;
  color: #424242;
  text-align: justify;
  font-size: 14px;
  font-weight: 500;
}

.content p.active {
  padding: 10px;
  visibility: visible;
}

.content.active {
  max-height: 1000px;
  background: rgba(46, 203, 112, 0.2);
}
</style>
