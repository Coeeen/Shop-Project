<template>
  <div class="row col-12 q-px-md">
    <div class="row col-11 q-mt-md q-ml-sm justify-between items-center">
      <div class="row col-12 q-my-md">
        <q-input v-model="searchQuery" placeholder="Szukaj..." dense outlined class="q-mb-sm col-xl-3 col-xs-4"/>
        <q-select v-model="sortOption" label="Sortowanie" :options="options" placeholder="Sortuj po" dense outlined class="q-mb-sm col-xl-3 col-xs-7 q-ml-sm" />
      </div>
<!--      <q-icon name="view_list" size="32px" color="darkgrey" class="cursor-pointer" @click="handleChangeViewType"/>-->
    </div>

    <q-card v-for="laptopElement in filteredLaptops" :key="laptopElement.title"
            class=" q-mb-md bg-red col-12 ">
      <ListItem :item="laptopElement" />
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed, watch, toRefs } from 'vue';
import laptopsData from '../utils/laptops';
import ListItem from 'src/components/ListItem.vue';

const viewType = ref(true);

const handleChangeViewType = () => {
  viewType.value = !viewType.value;
}

const { laptops, searchQuery, sortOption } = toRefs({
  laptops: ref(laptopsData),
  searchQuery: ref(''),
  sortOption: ref(null),
});

const options = ['Sortuj po cenie', 'Sortuj po ocenach', 'Sortuj po liczbie kupionych'];

const filterLaptops = (data, query) => {
  if (!query.trim()) return data;

  const lowerCaseQuery = query.trim().toLowerCase();
  return data.filter(item =>
    item.title.toLowerCase().includes(lowerCaseQuery) ||
    item.description.toLowerCase().includes(lowerCaseQuery)
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
          return 0; // Obsługa brakujących ocen
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

const inputShadowText = ref('');

const processInputFill = () => {
  inputShadowText.value = searchQuery.value;
};

const filteredLaptops = computed(() => {
  let filteredData = laptops.value;

  filteredData = filterLaptops(filteredData, searchQuery.value);

  if (sortOption.value) {
    filteredData = sortLaptops(filteredData, sortOption.value);
  }

  return filteredData;
});

watch(sortOption, () => {
  laptops.value = sortLaptops(laptops.value, sortOption.value);
});
</script>

<style scoped>
/* Dodaj stylowanie według potrzeb */
</style>
