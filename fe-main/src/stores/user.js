import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
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
      const res = await axios.get("https://graph.zalo.me/v2.0/me/info", {
        headers: {
          access_token: this.accessToken,
          code: data,
          secret_key: "rUUl3y4Ua271UMi7UYMI",
        },
      });
      console.log(res.data);
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
