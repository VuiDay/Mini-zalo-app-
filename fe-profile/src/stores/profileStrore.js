import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    formRegisData: null,
  }),
  getters: {},
  actions: {
    async setFormRegis(data) {
      this.formRegisData = data;
    },
    async postRegisData(data) {
      try {
        const res = await axios.post(
          "https://be-mini-app.minhquancao0.workers.dev/api/driver/create-driver",
          data
        );
        console.log("res :", res);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  },
});
