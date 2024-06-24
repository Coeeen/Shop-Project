import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    isAuthenticated: false,
    users: [{ email: "admin@gmail.com",firstName:'Krystian',lastName:'Jank', password: "admin" }],
    data:[]
  }),



  getters: {
    findUserByEmail: (state) => (email) => {
      return state.users.find(user => user.email === email);
    }
  },

  actions: {
    addUser(user) {
      this.users.push(user);
    },
    deleteUser(email) {
      console.log(email)
      console.log(this.users)
      this.users = this.users.filter(user => user.email !== email);
    },


    async fetchRandomUsers() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        if (!response.ok) {
          throw new Error('Nie działa ci net');
        }
        const data = await response.json();
        return data.results;
      } catch (error) {
        console.error('Coś poszło nie tak', error);
        return [];
      }
    },

    async randomFactsAbautCat() {
      try {
        const response = await fetch('https://cat-fact.herokuapp.com/facts');
        if (!response.ok) {
          throw new Error('Nie działa ci net');
        }
         this.data = await response.json();
      } catch (error) {
        console.error('Coś poszło nie tak', error);
        return [];
      }
    }
  }
});

