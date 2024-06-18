<script setup>
const props = defineProps(["type", "to"]);
</script>
<template>
  <button
    :type="props.type ? props.type : 'submit'"
    class="rounded-full w-full py-3 bg-[#2ECB70] text-center text-white text-[15px] font-semibold leading-[30px] tracking-wider button"
  >
    <router-link v-if="props.to" :to="props.to" class="w-full h-full block"
      ><slot></slot
    ></router-link>
    <slot v-else></slot>
  </button>
</template>

<style scoped>
.button {
  box-shadow: 2px 5px 6px 0px rgba(0, 0, 0, 0.25);
}
</style>
