import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({
    userInfor: [],
    accessToken: "",
    token: "",
    data: "",
  }),
  getters: {},
  actions: {
    async saveAccessTTk(data) {
      this.accessToken = data;
    },
    async saveToken(data) {
      const dataUser = {
        ...this.data,
        accessTk: this.accessToken,
        tk: data,
      };
      this.token = data;
      this.userInfor = dataUser;
      console.log(dataUser);
    },
    async saveInforUser(data) {
      this.data = data;
    },
  },
});
