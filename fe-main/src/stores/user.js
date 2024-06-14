import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({
    userInfor: [],
    accessToken: "",
    token: "",
  }),
  getters: {},
  actions: {
    async saveInforUser(data) {
      console.log(data);
      this.userInfor = data;
    },
    async saveAccessTTk(data) {
      this.accessToken = data;
    },
    async saveToken(data) {
      this.token = data;
    },
  },
});
