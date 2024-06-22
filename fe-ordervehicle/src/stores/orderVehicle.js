import { defineStore } from "pinia";
import axios from "axios";

export const useOrderVehicleStore = defineStore("orderVehicle", {
  state: () => ({
    locate: null,
    nameLocate: null,
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
      this.locate = locate.data.display_name;
      this.nameLocate = locate.data.name;
      console.log(locate.data);
      // console.log(
      //   this.locate.data.latitude,
      //   this.locate.data.longitude,
      //   this.locate
      // );
    },
  },
});
