

<template>
  <q-table
    title="Treats"
    :rows="database"
    :columns="columns"
    row-key="name"
  />
</template>

<script setup>
import database from "../utils/database"



const columns = [
  {
    name: 'Nazwa',
    required: true,
    label: 'Nazwa',
    align: 'left',
    field: row => row.title,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]


</script>

<style scoped>

</style>
