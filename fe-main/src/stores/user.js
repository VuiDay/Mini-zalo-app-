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
      const dataUser = { ...data, accessTk: this.accessToken, tk: this.token };
      this.userInfor = dataUser;
    },
    async saveAccessTTk(data) {
      this.accessToken = data;
    },
    async saveToken(data) {
      this.token = data;
    },
  },
});
