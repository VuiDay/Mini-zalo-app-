import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    formRegisData: null,
  }),
  getters: {},
  actions: {
    async setFormRegis(data) {
      try {
        this.formRegisData = data;
      } catch (error) {
        console.log("error :", error);
      }
    },
  },
});
