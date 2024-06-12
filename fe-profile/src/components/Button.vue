<script setup></script>
<template>
  <button
    type="submit"
    class="rounded-full w-full py-3 bg-[#2ECB70] text-center text-white text-[15px] font-semibold leading-[30px] tracking-wider button"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  box-shadow: 2px 5px 6px 0px rgba(0, 0, 0, 0.25);
}
</style>
