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
  },
});
