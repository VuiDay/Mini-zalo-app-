import { defineStore } from 'pinia';

export const useTestStore = defineStore('test', {
    state: () => ({
        counter: 1,
    }),
    getters: {
        doubleCounter: (state) => state.counter * 2,
    },
    actions: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
    },
});
