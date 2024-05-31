<script setup>
import { sideBarList } from "../utils/sideBarList.js";
</script>
<template>
  <div class="sidebar">
    <ul class="flex flex-col sidebar--list">
      <router-link
        :to="item.route"
        v-for="item in sideBarList"
        class="flex items-center sidebar--item"
      >
        <span v-html="item.icon"></span>
        <h4 class="sidebar--item__title">{{ item.name }}</h4>
      </router-link>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  margin-top: 34px;
}
.sidebar--list {
  gap: 32px;
}
.sidebar--item {
  gap: 17px;
}
.sidebar--item__title {
  color: rgba(29, 53, 87, 0.73);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
</style>
