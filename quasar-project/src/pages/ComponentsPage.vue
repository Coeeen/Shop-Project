<template>
  <div class="row col-12 q-px-md">
    <div class="row col-11 q-mt-md q-ml-sm justify-between items-center">
      <div class="row col-12 q-my-md">
        <q-input v-model="searchQuery" color="white" placeholder="Szukaj..." filled  dense outlined class="q-mb-sm col-xl-3 col-xs-4" :input-style="{color:'white'}"/>
        <q-select v-model="sortOption" color="dark" label="Sortowanie" filled  :options="options" placeholder="Sortuj po"
                  dense outlined class="text-color q-mb-sm col-xl-3 col-xs-7 q-ml-sm"  label-color="white" style="color: white"  standout=" text-white"/>
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
import components from '../utils/components';
import ListItem from 'src/components/ListItem.vue';

const viewType = ref(true);

const handleChangeViewType = () => {
  viewType.value = !viewType.value;
}

const { laptops, searchQuery, sortOption } = toRefs({
  laptops: ref(components),
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

<style>
.q-field__native, .q-field__prefix, .q-field__suffix, .q-field__input {
  color: white !important;
}
</style>
