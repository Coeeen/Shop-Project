<template>
  <div class="q-pa-md">
    <q-table
      title="Baza danych uzytkowników"
      :rows="database"
      :columns="columns"
      row-key="name"
      class="q-mb-md"
      dark
      :rows-per-page-options="[10, 20, 30]"
    >
      <template v-slot:body-cell-akcje="props">
        <q-td :props="props">
          <div @click="handleDeleteFromDatabase(props.row.id)" class="q-pa-xs bg-red inline-block row justify-center items-center text-center cursor-pointer" style="border-radius: 20px;width: 50px" ><q-icon name="delete" /></div>
        </q-td>
      </template>

    </q-table>
    <q-table
      title="Baza danych użytkowników"
      :rows="users"
      :columns="columnsUsers"
      row-key="email"
      dark
      :rows-per-page-options="[10, 20, 30]"
    >
      <template v-slot:body-cell-akcje="props">
        <q-td :props="props">
          <div @click="deleteUser(props.row.email)" class="q-pa-xs bg-red inline-block row justify-center items-center text-center cursor-pointer" style="border-radius: 20px;width: 50px" ><q-icon name="delete" /></div>
        </q-td>
      </template>


    </q-table>
  </div>
</template>

<script setup>
import { useUserStore } from 'src/stores/UserStore'
import { onBeforeMount } from 'vue'
import database from "src/utils/database";

const { fetchRandomUsers, addUser, users,deleteUser } = useUserStore()


const handleDeleteFromDatabase = (id) => {
  database.value = database.value.filter(el => el.id !==id)
}

onBeforeMount(async () => {
  const fetchedUsers = await fetchRandomUsers()
  await fetchedUsers.forEach(user => {
    addUser({
      email: user.email,
      password:'trudnehaslo123',
      firstName: user.name.first,
      lastName: user.name.last
    })
  })
})

const columns = [
  {
    name: 'Nazwa',
    required: true,
    label: 'Nazwa',
    align: 'left',
    field: row => row.title,
    sortable: true
  },
  {
    name: 'Opis',
    align: 'center',
    label: 'Opis',
    field: row => row.description,
    sortable: true
  },
  {
    name: 'Cena',
    label: 'Cena',
    field: row => row.price,
    sortable: true
  },
  {
    name: 'Liczba zakupów',
    label: 'Liczba zakupów',
    field: row => row.buyers,
  },
  {
    name: 'akcje',
    label: 'akcje',
    field: row => row.id,
  },
]

const columnsUsers = [
  {
    name: 'Email',
    required: true,
    label: 'Email',
    align: 'left',
    field: 'email',
    sortable: true
  },
  {
    name: 'Imię',
    label: 'Imię',
    align: 'left',
    field: 'firstName',
    sortable: true
  },
  {
    name: 'Nazwisko',
    label: 'Nazwisko',
    align: 'left',
    field: 'lastName',
    sortable: true
  },
  {
    name: 'akcje',
    label: 'akcje',
    align: 'left',
    field: 'email',
    sortable: true
  },
]
</script>

<style scoped>
</style>
