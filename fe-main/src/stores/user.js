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
      console.log(data, this.accessToken, this.token, "1111111");
      this.userInfor = data;
    },
  },
});
