import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({
    userInfor: [],
  }),
  getters: {},
  actions: {
    async saveInforUser(data) {
      this.userInfor = data;
    },
  },
});
