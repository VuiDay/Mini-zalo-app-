import { defineStore } from "pinia";

export const useOrderVehicleStore = defineStore("orderVehicle", {
  state: () => ({
    vehicles: [],
    selectedVehicle: null,
  }),
  actions: {
    addVehicle(vehicle) {
      this.vehicles.push(vehicle);
    },
    selectVehicle(vehicle) {
      this.selectedVehicle = vehicle;
    },
  },
});
