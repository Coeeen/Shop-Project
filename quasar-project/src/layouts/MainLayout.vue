<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="text-white shadow-0" style="background: transparent; box-shadow: none;">
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
            :input-style="{ color: '#FFFF' }"
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
          <q-btn class="bg-white text-dark q-ml-md" style="height: 20px; color: red" @click="navigateToItem">Szukaj</q-btn>
        </q-toolbar-title>
        <div class="row col-2 justify-around" v-if="!isAuthenticated">
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

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered style="background-color: #1E222A;">
      <q-list class="q-pa-md q-gutter-lg q-mt-xl flex flex-center">
        <router-link to="/" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple :class="{ 'active': activeLink === '/' }" style="width: 100%; color: white">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Strona główna</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/laptops" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple :class="{ 'active': activeLink === '/laptops' }" style="width: 100%; color: white">
            <q-item-section avatar>
              <q-icon name="laptop" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Laptopy</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/computers" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple :class="{ 'active': activeLink === '/computers' }" style="width: 100%; color: white">
            <q-item-section avatar>
              <q-icon name="desktop_windows" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Komputery</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/components" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple :class="{ 'active': activeLink === '/components' }" style="width: 100%; color: white">
            <q-item-section avatar>
              <q-icon name="memory" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Podzespoły</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/smartphones" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple :class="{ 'active': activeLink === '/smartphones' }" style="width: 100%; color: white">
            <q-item-section avatar>
              <q-icon name="smartphone" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Smartfony</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/games" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple :class="{ 'active': activeLink === '/games' }" style="width: 100%; color: white">
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

    <q-drawer v-if="isAuthenticated" show-if-above v-model="rightDrawerOpen" side="right" bordered style="background-color: #1E222A;">
      <div v-if="card.length > 0" class="q-pa-md">
        <div v-for="(item, index) in card" :key="index" class="q-mb-md q-pa-md text-white" style="border-radius: 20px; background-color: #0D0D13;">
          <div class="row col-12 justify-between">
            <q-img :src="item.photo" alt="item Photo" class="item-photo" width="50px" height="50px" style="border-radius: 5px" />
            <div class="row col-6 justify-between items-center">
              <q-btn color="primary" style="height: 10px" @click="addItemToCard(item)">+</q-btn>
              <q-item-label>{{ item.count }}</q-item-label>
              <q-btn color="primary" style="height: 10px" @click="removeItemFromCard(item)">-</q-btn>
            </div>
          </div>
          <q-item-label class="q-mt-sm">{{ item.title }}</q-item-label>
          <q-item-label><b>Cena:</b> {{ item.price }} zł</q-item-label>
        </div>
        <q-input v-model="couponCode" outlined placeholder="Wprowadź kod kuponu" dense class="q-my-md" style="color: white;" />
        <q-item-label class="text-white"><b>Łączna suma: </b>
          <span :style="{ color: couponCode.toLowerCase() === 'biu' || couponCode.toLowerCase() === 'studia' ? 'green' : '' }">
            {{
              couponCode.toLowerCase() === 'biu' || couponCode.toLowerCase() === 'studia'
                ? discountedPriceValue
                : totalPrice.toFixed(2)
            }} zł
          </span>
        </q-item-label>

        <q-btn color="primary" class="q-mt-md" @click="proceedToCheckout">Przejdź do zapłaty</q-btn>
      </div>
      <div v-else class="q-pa-md text-white">
        Koszyk jest pusty.
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed, watch, provide } from 'vue'
import { useUserStore } from 'src/stores/UserStore'
import { shopStore } from 'src/stores/ShopStore'
import { storeToRefs } from 'pinia'
import database from 'src/utils/database'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const selectedItemId = ref(null)
    const search = ref('')
    const couponCode = ref('')
    const discountedPriceValue = ref(0)
    const { isAuthenticated } = storeToRefs(useUserStore())
    const { card, totalPrice } = storeToRefs(shopStore())
    const { addItemToCard, removeItemFromCard } = shopStore()
    const router = useRouter()
    const route = useRoute()
    const activeLink = ref(route.path)

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

    const proceedToCheckout = () => {
      router.push('/checkout')
    }

    watch(route, (newRoute) => {
      activeLink.value = newRoute.path
    })

    watch([couponCode, totalPrice], () => {
      discountedPriceValue.value = (couponCode.value.toLowerCase() === 'biu' || couponCode.value.toLowerCase() === 'studia')
        ? (totalPrice.value * 0.49).toFixed(2)
        : totalPrice.value.toFixed(2)
    })

    provide('discountedPrice', discountedPriceValue)

    return {
      card,
      leftDrawerOpen,
      rightDrawerOpen,
      selectedItemId,
      search,
      isAuthenticated,
      filteredOptions,
      totalPrice,
      addItemToCard,
      removeItemFromCard,
      couponCode,
      filterFn,
      toggleLeftDrawer,
      toggleRightDrawer,
      navigateToItem,
      proceedToCheckout,
      activeLink,
      discountedPriceValue,
    }
  }
}
</script>

<style scoped>
.active {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: #3988D6 !important;
}
</style>
