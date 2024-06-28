<template>
  <div class="q-pa-md">
    <q-table
      title="Baza danych urządzeń"
      :rows="database"
      :columns="columns"
      row-key="id"
      class="q-mb-md"
      dark
      :rows-per-page-options="[10, 20, 30]"
    >
      <template v-slot:body-cell-akcje="props">
        <q-td :props="props">
          <div @click="handleDeleteFromDatabase(props.row.id)" class="q-pa-xs bg-red q-mr-sm inline-block row justify-center items-center text-center cursor-pointer" style="border-radius: 20px;width: 50px">
            <q-icon name="delete" />
          </div>
          <div @click="handleEditFromDatabase(props.row.id)" class="q-pa-xs bg-blue inline-block row justify-center items-center text-center cursor-pointer" style="border-radius: 20px;width: 50px">
            <q-icon name="edit" />
          </div>
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
      <template v-slot:body-cell-photo="props">
        <q-td :props="props">
          <q-avatar>
            <q-img :src="props.row?.picture?.thumbnail ? props.row?.picture?.thumbnail : 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg'" alt="user"/>
          </q-avatar>
        </q-td>
      </template>
      <template v-slot:body-cell-akcje="props">
        <q-td :props="props">
          <div @click="deleteUser(props.row.email)" class="q-pa-xs bg-red inline-block row justify-center items-center text-center cursor-pointer" style="border-radius: 20px;width: 50px">
            <q-icon name="delete" />
          </div>
        </q-td>
      </template>
    </q-table>

    <div class="column col-12 justify-center items-center q-mt-md">
      <q-btn class="text-white bg-primary" @click="generateReport">Utwórz raport</q-btn>

      <q-spinner v-if="showSpinner" color="primary" size="10em" />

      <div class="q-pa-md q-mt-lg col-12" style="background-color: #1D1D1D" v-if="!showSpinner && reportVisible">
        <div class="text-white text-h6">Raport sprzedażowy</div>
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Całkowita liczba sprzedanych produktów: {{ totalProductsSold.toFixed(2) }}</div>
          </q-card-section>
        </q-card>
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Całkowity dochód: {{ totalRevenue.toFixed(2) }}</div>
          </q-card-section>
        </q-card>
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Średnia cena sprzedaży: {{ averagePrice.toFixed(2) }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-dialog v-model="editDialogVisible" >
      <q-card style="width: 100vw;background-color: #1D1D1D;color: white;">
        <q-card-section>
          <div class="text-h6">Edycja produktu</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model="editItem.title" label="Nazwa" color="white" label-color="white"   :input-style="{color:'white'}"/>
          <q-input v-model="editItem.description" label="Opis" color="white" label-color="white"  :input-style="{color:'white'}"/>
          <q-input v-model="editItem.price" label="Cena" color="white" label-color="white"  :input-style="{color:'white'}"/>
          <q-input v-model="editItem.buyers" label="Liczba zakupów" color="white" label-color="white"   :input-style="{color:'white'}"/>
        </q-card-section>

        <q-card-actions class="row justify-between">
          <q-btn flat label="Anuluj" color="primary" @click="closeEditDialog" />
          <q-btn flat label="Zapisz" color="primary" @click="saveEditedItem" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue';
import { useUserStore } from 'src/stores/UserStore';
import database from "src/utils/database";

const { fetchRandomUsers, addUser, users, deleteUser } = useUserStore();

const showSpinner = ref(false);
const reportVisible = ref(false);
const editDialogVisible = ref(false);
const editItem = ref({}); 

const totalProductsSold = computed(() => {
  return database.value.reduce((sum, item) => sum + item.buyers, 0);
});

const totalRevenue = computed(() => {
  return database.value.reduce((sum, item) => sum + (item.price * item.buyers), 0);
});

const averagePrice = computed(() => {
  return totalProductsSold.value > 0 ? totalRevenue.value / totalProductsSold.value : 0;
});

const handleEditFromDatabase = (id) => {
  const itemToEdit = database.value.find(item => item.id === id);
  editItem.value = { ...itemToEdit };
  editDialogVisible.value = true;
};

const closeEditDialog = () => {
  editDialogVisible.value = false;
  editItem.value = {};
};

const saveEditedItem = () => {
  const index = database.value.findIndex(item => item.id === editItem.value.id);
  if (index !== -1) {
    database.value[index] = { ...editItem.value };
  }
  closeEditDialog();
};

const handleDeleteFromDatabase = (id) => {
  database.value = database.value.filter(el => el.id !== id);
};

const generateReport = async () => {
  showSpinner.value = true;
  setTimeout(() => {
    showSpinner.value = false;
    reportVisible.value = true;
  }, 2000);
};

onBeforeMount(async () => {
  const fetchedUsers = await fetchRandomUsers();
  fetchedUsers.forEach(user => {
    addUser({
      picture: user.picture,
      email: user.email,
      password: 'trudnehaslo123',
      firstName: user.name.first,
      lastName: user.name.last
    });
  });
});

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
];

const columnsUsers = [
  {
    name: 'photo',
    required: true,
    label: 'Photo',
    align: 'left',
    field: 'photo',
    sortable: true
  },
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
];

</script>

<style scoped>
.text-h6 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
</style>
