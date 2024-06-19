<template>
  <q-card class="row col-12">
    <q-card-section>
      <q-img :src="item.photo" alt="item Photo" class="item-photo" width="300px" height="200px" />
    </q-card-section>

    <q-card-section style="flex:1">
      <q-item-label class="text-h6 item-title q-mb-sm">{{ item.title }}</q-item-label>

      <div class="row">
        <q-item  v-for="(value, key) in item.specifications" :key="key">
          <q-item-label><b>{{ key }}:</b> {{ value }}</q-item-label>
        </q-item>
      </div>

      <q-item class="row col-12  justify-between items-center">
        <q-item-label><b>Cena:</b> {{ item.price }} zł</q-item-label>
        <q-item-label><b>Osób, które kupiły:</b> {{ item.buyers }}</q-item-label>

      </q-item>

      <q-item class="q-mt-md row justify-between items-center">
        <q-item-label><b>Dostawa:</b> Pojutrze</q-item-label>
        <q-btn>Dodaj do koszyka</q-btn>

      </q-item>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';


const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const item = ref(props.item);
console.log(item.value,'eee')
</script>

<style scoped lang="scss">
.item-photo {
  object-fit: scale-down;
}

.item-title {
  font-size: 18px;
}


</style>
