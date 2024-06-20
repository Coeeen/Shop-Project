<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="text-white shadow-0" style="background: transparent; box-shadow: none">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="text-white text-bold col-2">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" style="width: 30px">
          </q-avatar>
          FutureElectro
        </q-toolbar-title>
        <q-toolbar-title class="row items-center">
          <q-select
            filled
            v-model="selectedItemId"
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            :options="filteredOptions"
            option-label="title"
            option-value="id"
            @filter="filterFn"
            hint="Text autocomplete"
            :input-style="{color:'white'}"
            color="white"
            style="width: 50%"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Brak elementu w naszym sklepie
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-btn class="bg-white text-dark q-ml-md" style="height: 20px;color: red" @click="navigateToItem">Szukaj</q-btn>
        </q-toolbar-title>
        <div class="row col-2 justify-around">
          <router-link to="/login" class="text-dark" style="text-decoration: none">
            <q-toolbar-title class="text-white cursor-pointer" style="font-size: 12px;">
              <q-icon name="person" size="32px" />
              Zaloguj się
            </q-toolbar-title>
          </router-link>
          <router-link to="/register" class="text-dark" style="text-decoration: none">
            <q-toolbar-title class="text-white cursor-pointer" style="font-size: 12px;">
              <q-icon name="group" size="32px" />
              Utwórz konto
            </q-toolbar-title>
          </router-link>
        </div>
        <q-btn v-if="isAuthenticated" dense flat round icon="shopping_cart" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list class="q-pa-md q-gutter-lg q-mt-xl flex flex-center">
        <router-link to="/" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple style="width: 100%">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Strona główna</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/laptops" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple style="width: 100%">
            <q-item-section avatar>
              <q-icon name="laptop" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Laptopy</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/computers" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple style="width: 100%">
            <q-item-section avatar>
              <q-icon name="desktop_windows" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Komputery</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/components" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple style="width: 100%">
            <q-item-section avatar>
              <q-icon name="memory" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Podzespoły</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/smartphones" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple style="width: 100%">
            <q-item-section avatar>
              <q-icon name="smartphone" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Smartfony</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/games" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple style="width: 100%">
            <q-item-section avatar>
              <q-icon name="sports_esports" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Gry</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
      </q-list>
    </q-drawer>

    <q-drawer v-if="isAuthenticated" show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- Drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed } from 'vue'
import { useUserStore } from 'src/stores/UserStore'
import { storeToRefs } from 'pinia'
import database from 'src/utils/database'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const selectedItemId = ref(null)
    const search = ref('')
    const { isAuthenticated } = storeToRefs(useUserStore())
    const router = useRouter()

    const filterFn = (val, update) => {
      search.value = val
      update()
    }

    const filteredOptions = computed(() => {
      if (!search.value.trim()) {
        return database.value
      }
      const searchLower = search.value.trim().toLowerCase()
      return database.value.filter(option =>
        option.title.toLowerCase().includes(searchLower)
      )
    })

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const toggleRightDrawer = () => {
      rightDrawerOpen.value = !rightDrawerOpen.value
    }

    const navigateToItem = () => {
      if (selectedItemId.value !== null) {
        router.push(`/item/${selectedItemId.value.id}`)
      }
    }

    return {
      leftDrawerOpen,
      rightDrawerOpen,
      selectedItemId,
      search,
      isAuthenticated,
      filteredOptions,
      filterFn,
      toggleLeftDrawer,
      toggleRightDrawer,
      navigateToItem
    }
  }
}
</script>

<style scoped>
.text-dark {
  color: var(--q-color-dark);
}
</style>
