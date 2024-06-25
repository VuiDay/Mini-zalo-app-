import { defineStore } from "pinia";
import axios from "axios";

export const useOrderVehicleStore = defineStore("orderVehicle", {
  state: () => ({
    locate: null,
    locatefind: null,
    secretKey: import.meta.env.VITE_SECRET_APP,
  }),
  actions: {
    async saveLocate(token, accessToken) {
      try {
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
        this.locate = locate.data;
        console.log(this.locate);
        // this.locate = locate.data.display_name;
        // this.nameLocate = locate.data.name;
      } catch (err) {
        console.log(err);
      }
    },
    async locateChange(name) {
      try {
        const res = await axios.get(
          `https://nominatim.openstreetmap.org/search?q=${name}&format=json&polygon=1&addressdetails=1&countrycodes=vn`
        );
        this.locatefind = res.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
