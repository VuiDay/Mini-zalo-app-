import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfor: [],
    accessToken: "",
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
      const dataUser = {
        ...this.data,
        phone: res.data.data.number,
      };
      const user = await axios.post(
        "https://be-mini-app.minhquancao0.workers.dev/api/user/user-current",
        dataUser
      );
      console.log(user.data);
      this.userInfor = dataUser;
      console.log(dataUser);
    },
    async saveInforUser(data) {
      this.data = data;
    },
  },
});
