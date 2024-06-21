import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    isAuthenticated: false,
    users: [{email:"admin@gmail.com",password:"admin"}]
  }),

  getters: {
    findUserByEmail: (state) => (email) => {
      return state.users.find(user => user.email === email);
    }
  },

  actions: {
    addUser(user) {
      this.users.push(user);
      console.log(this.users)
    },
  },
});
