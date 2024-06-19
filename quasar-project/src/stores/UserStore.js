import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    isAuthenticated:false
  }),

  getters: {
    doubleCount: (state) => state.counter * 2,
  },

  actions: {
    increment() {
      this.counter++;
    },
  },
});
