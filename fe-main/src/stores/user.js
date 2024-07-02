import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfor: [],
    accessToken: "",
    dataUser: "",
  }),
  getters: {},
  actions: {
    async saveAccessTTk(data) {
      this.accessToken = data;
      console.log(this.accessToken);
    },

    async saveInforUser(data) {
      this.dataUser = data;
    },

    async saveToken(token) {
      const fakeData = {
        avatar:
          "https://res.cloudinary.com/dn6xdmqbl/image/upload/v1715768576/avatar_user/jluwfckv2ja7w0z04wio.jpg",
        followedOA: false,
        id: "113113131313131",
        idByOA: true,
        isSensitive: false,
        isDriver: true,
        isRestaurent: true,
        name: "Cường Nè",
        phone: "84768921323",
      };
      const res = await axios.get("https://graph.zalo.me/v2.0/me/info", {
        headers: {
          access_token: this.accessToken,
          code: token?.token,
          secret_key: import.meta.env.VITE_SECRET_APP,
        },
      });
      const dataUser = {
        ...this.dataUser,
        phone: res.data.data?.number,
      };
      const user = await axios.post(
        "https://be-mini-app.minhquancao0.workers.dev/api/user/user-current",
        dataUser.phone ? dataUser : fakeData
      );
      this.userInfor = user.data;
    },
  },
});
