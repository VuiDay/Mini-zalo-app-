import { defineStore } from "pinia";
import axios from "axios";

export const useOrderVehicleStore = defineStore("orderVehicle", {
  state: () => ({
    locate: null,
    locatefindEnd: null,
    locatefindStart: null,
    dataBooking: [],
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
        // this.locate = locate.data.display_name;
        // this.nameLocate = locate.data.name;
      } catch (err) {
        console.log(err);
      }
    },
    async locateChange(nameStart, nameEnd) {
      try {
        if (nameStart) {
          console.log(nameStart);
          const res = await axios.get(
            `https://nominatim.openstreetmap.org/search?q=${nameStart}&format=json&polygon=1&addressdetails=1&countrycodes=vn`
          );
          this.locatefindEnd = res.data;
        }
        if (nameEnd) {
          console.log(nameEnd);
          const res = await axios.get(
            `https://nominatim.openstreetmap.org/search?q=${nameEnd}&format=json&polygon=1&addressdetails=1&countrycodes=vn`
          );
          this.locatefindStart = res.data;
        }
      } catch (err) {
        console.log(err);
      }
    },
    async saveDataBooking(data) {
      this.dataBooking = data;
    },
  },
});
