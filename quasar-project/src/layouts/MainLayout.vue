<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="text-white" style="background-color: #222222">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="text-white text-bold col-2">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" style="width: 30px">
          </q-avatar>
          FutureElectro
        </q-toolbar-title>
        <q-toolbar-title>
          <q-input filled v-model="search" :dense="dense" :input-style="{color:'white'}" />
        </q-toolbar-title>
        <div class="row col-2 justify-around">
          <router-link to="/login" class=" text-dark" style="text-decoration: none">
          <q-toolbar-title class="text-white cursor-pointer" style="font-size: 12px;">
            <q-icon name="person" size="32px" />
            Zaloguj się
          </q-toolbar-title>
          </router-link>
          <router-link to="/register" class=" text-dark" style="text-decoration: none">
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
      <q-list class="q-pa-md q-gutter-lg q-mt-xl  flex flex-center" >
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
        <router-link to="/televisions" class="full-width text-dark" style="text-decoration: none">
          <q-item clickable v-ripple style="width: 100%">
            <q-item-section avatar>
              <q-icon name="tv" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Telewizory</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
      </q-list>
    </q-drawer>

    <q-drawer v-if="isAuthenticated" show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useUserStore } from "src/stores/UserStore"
import { storeToRefs } from "pinia";

export default {
  setup() {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const dense = ref(false)
    const search = ref('')
    const { isAuthenticated } = storeToRefs(useUserStore())

    return {
      leftDrawerOpen,
      rightDrawerOpen,
      dense,
      search,
      isAuthenticated,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>

<style>
.full-height {
  height: 100%;
}
.flex-center {
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
}
.full-width {
  width: 100%;
}
.text-dark {
  color: var(--q-dark-text);
}
</style>
