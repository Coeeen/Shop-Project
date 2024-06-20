import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    isAuthenticated: false,
    users: []
  }),

  getters: {

  },

  actions: {
    addUser(user) {
      this.users.push(user);
    }
  },
});
