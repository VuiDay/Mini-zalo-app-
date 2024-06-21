import { defineStore } from "pinia";
import axios from "axios";

export const useOrderVehicleStore = defineStore("orderVehicle", {
  state: () => ({
    locate: "",
    secretKey: import.meta.env.VITE_SECRET_APP,
  }),
  actions: {
    async saveLocate(token, accessToken) {
      const res = await axios.get("https://graph.zalo.me/v2.0/me/info", {
        headers: {
          access_token: accessToken,
          code: token,
          secret_key: this.secretKey,
        },
      });
      const locate = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${res.data.data.latitude}&lon=${res.data.data.longitude}`
      );
      console.log(locate.data.display_name);
      // console.log(
      //   this.locate.data.latitude,
      //   this.locate.data.longitude,
      //   this.locate
      // );
    },
  },
});
