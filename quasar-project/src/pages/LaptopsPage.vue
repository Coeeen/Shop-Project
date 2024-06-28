<template>
  <div class="row col-12 q-px-md">
    <div class="row col-11 q-mt-md q-ml-sm justify-between items-center">
      <div class="row col-12 q-my-md">
        <q-input v-model="searchQuery" color="white" placeholder="Szukaj..." filled dense outlined class="q-mb-sm col-xl-2 col-md-2 col-xs-4" :input-style="{color:'white'}"/>
        <q-input v-model.number="priceQuery" color="white" type="number" placeholder="Cena maksymalna" filled dense outlined class="q-mb-sm col-xl-2 col-md-2 col-xs-4 q-ml-sm" :input-style="{color:'white'}"/>
        <q-select v-model="sortOption" color="dark" label="Sortowanie" filled :options="options" placeholder="Sortuj po" dense outlined class="text-color q-mb-sm col-xl-2 col-md-2 col-xs-7 q-ml-sm" label-color="white" style="color: white" standout="text-white"/>
        <q-btn color="negative" label="Wyczyść filtry" @click="clearFilters" dense flat class="q-mb-sm col-xl-2 col-md-2 col-xs-3 q-ml-sm" />
      </div>
    </div>

    <q-card v-for="laptopElement in filteredLaptops" :key="laptopElement.title" class="q-mb-md bg-red col-12">
      <ListItem :item="laptopElement" />
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed, watch, toRefs } from 'vue';
import laptopsData from '../utils/laptops';
import ListItem from 'src/components/ListItem.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const { laptops, searchQuery, priceQuery, sortOption } = toRefs({
  laptops: ref(laptopsData),
  searchQuery: ref(''),
  priceQuery: ref(null),
  sortOption: ref(null),
});

const options = ['Sortuj po cenie', 'Sortuj po ocenach', 'Sortuj po liczbie kupionych'];

const filterLaptops = (data, query, price) => {
  if (!query.trim() && !price) return data;

  const lowerCaseQuery = query.trim().toLowerCase();
  return data.filter(item =>
    (item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery)) &&
    (!price || item.price <= price)
  );
};

const sortLaptops = (data, option) => {
  const sortedData = [...data];

  switch (option) {
    case 'Sortuj po cenie':
      sortedData.sort((a, b) => a.price - b.price);
      break;
    case 'Sortuj po ocenach':
      sortedData.sort((a, b) => {
        if (!a.comment || !b.comment || !a.comment.rating || !b.comment.rating) {
          return 0;
        }
        return b.comment.rating - a.comment.rating;
      });
      break;
    case 'Sortuj po liczbie kupionych':
      sortedData.sort((a, b) => b.buyers - a.buyers);
      break;
    default:
      break;
  }

  return sortedData;
};

const clearFilters = () => {
  searchQuery.value = '';
  priceQuery.value = null;
  sortOption.value = null;
  laptops.value = [...laptopsData.value];
};

const filteredLaptops = computed(() => {
  let filteredData = laptops.value;

  if (searchQuery.value || priceQuery.value || sortOption.value) {
    filteredData = filterLaptops(filteredData, searchQuery.value, priceQuery.value);

    if (sortOption.value) {
      filteredData = sortLaptops(filteredData, sortOption.value);
    }
  }

  return filteredData;
});

watch(sortOption, () => {
  laptops.value = sortLaptops([...laptops.value], sortOption.value);
});

watch(priceQuery, () => {
  laptops.value = filterLaptops([...laptops.value], searchQuery.value, priceQuery.value);
}); 
</script>

<style>
.q-field__native, .q-field__prefix, .q-field__suffix, .q-field__input {
  color: white !important;
}
</style>
