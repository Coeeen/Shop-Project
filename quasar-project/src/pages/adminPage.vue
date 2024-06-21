

<template>
  <div class="q-pa-md">
  <q-table
    title="Treats"
    :rows="database"
    :columns="columns"
    row-key="name"
    dark
    :rows-per-page-options="[10,20,30]"
  >
  </q-table>
  </div>
</template>

<script setup>
import database from "../utils/database"

console.log(database)

const columns = [
  {
    name: 'Nazwa',
    required: true,
    label: 'Nazwa',
    align: 'left',
    field: row => row.title,
    sortable: true
  },
  { name: 'Opis', align: 'center', label: 'Opis',    field: row => row.description, sortable: true },
  { name: 'Cena', label: 'Cena',    field: row => row.price, sortable: true },
  { name: 'Liczba zakupów', label: 'Liczba zakupów',    field: row => row.buyers, },
  { name: 'akcje', label: 'akcje',    field: row => row.id, },
]
// {
//   id:25,
//     photo: 'https://images.morele.net/i1064/11202027_0_i1064.jpg',
//   title: 'Laptop Lenovo Legion 5 Pro',
//   description: 'Potężny laptop gamingowy Lenovo z procesorem AMD Ryzen 7 i ekranem 16-calowym o wysokiej częstotliwości odświeżania.',
//   price: 7799.99,
//   buyers: 110,
//   comment: {
//   rating: 4.7,
//     author: 'Sophia Garcia',
//     text: 'Idealny laptop do gier. Bardzo dobrze wykonany.'
// },
//   specifications: {
//     procesor: 'AMD Ryzen 7 5800H',
//       ram: '16 GB DDR4',
//       pamiec: '512 GB PCIe NVMe SSD',
//       ekran: '16" WQXGA 165Hz IPS',
//       system: 'Windows 10 Home'
//   }
// },

</script>

<style scoped>

</style>
