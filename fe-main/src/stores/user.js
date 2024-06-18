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
    async saveInforUser(data) {
      this.data = data;
    },
    async saveToken(token) {
      const res = await axios.get("https://graph.zalo.me/v2.0/me/info", {
        headers: {
          access_token: this.accessToken,
          code: token,
          secret_key: "rUUl3y4Ua271UMi7UYMI",
        },
      });
      console.log(res.data, res.data.data.number);
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
  },
});
