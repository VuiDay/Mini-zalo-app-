import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    formRegisData: null,
    test: 1,
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
