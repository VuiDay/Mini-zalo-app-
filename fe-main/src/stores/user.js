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
    },

    async saveInforUser(data) {
      this.dataUser = data;
    },

    async saveToken(token) {
      const fakeData = {
        avatar:
          "https://scontent.fvii2-4.fna.fbcdn.net/v/t39.30808-6/438304440_1150209179659623_6594686254167414971_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bKDw-h0bZP8Q7kNvgFAfP1v&_nc_ht=scontent.fvii2-4.fna&oh=00_AYAAZ_GL7X70ZOjUGs37ueYp7EDaIFA46NxQ8HRdwcJ34g&oe=667826CF",
        followedOA: false,
        id: "113113131313131",
        idByOA: true,
        isSensitive: false,
        name: "Cường Nè",
        phone: "84768921323",
      };
      const res = await axios.get("https://graph.zalo.me/v2.0/me/info", {
        headers: {
          access_token: this.accessToken,
          code: token?.token,
          secret_key: "rUUl3y4Ua271UMi7UYMI",
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
