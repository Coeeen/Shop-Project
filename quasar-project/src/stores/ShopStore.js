import { defineStore } from 'pinia';

export const shopStore = defineStore('shopStore', {
  state: () => ({
    card: []
  }),

  getters: {
    totalPrice: (state) => {
      return state.card.reduce((acc, item) => acc + (item.price * item.count), 0);
    },
    itemCount: (state) => {
      return state.card.reduce((acc, item) => acc + item.count, 0);
    }
  },

  actions: {
    addItemToCard(item) {
      const existingItem = this.card.find(i => i.title === item.title);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        this.card.push({ ...item, count: 1 });
      }
    },
    removeItemFromCard(item) {
      const existingItem = this.card.find(i => i.title === item.title);
      if (existingItem) {
        existingItem.count -= 1;
        if (existingItem.count <= 0) {
          this.card = this.card.filter(i => i.title !== item.title);
        }
      }
    }
  }
});
