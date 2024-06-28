<template>
  <div class="row justify-center items-center" style="height: 80vh">
    <form @submit.prevent="handleSubmit" class="col-12 col-sm-10 col-md-8 col-lg-4">
      <div class="column justify-center items-center q-mb-md">
        <div class="title">Witamy z powrotem!</div>
        <h2 class="subtitle">Zaloguj się do konta!</h2>
        <LottieAnimation
          :animation-data="login"
          :auto-play="true"
          :loop="true"
          :speed="1"
          ref="anim"
          style="width: 200px"
        />
      </div>

      <div class="column q-col-gutter-lg justify-center" style="margin-top: 5px">
        <div class="col-12 col-md-6">
          <label class="text-white">Email:</label>
          <q-input v-model="email" id="email" hint="Formikowy hint do maila" maxlength="15" type="email" color="white" outlined dense class="bg-white text-dark" :input-style="{color:'black'}" />
        </div>
        <div class="col-12 col-md-6">
          <label class="text-white">Hasło:</label>
          <q-input v-model="password" id="password" type="password" hint="Formikowy hint do hasła" maxlength="15" color="white" outlined dense class="bg-white text-dark" :input-style="{color:'black'}" />
        </div>
      </div>

      <div class="row col-12 justify-center items-center q-mt-md">
        <ButtonDefault text="ZALOGUJ" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/UserStore';
import { useQuasar } from 'quasar';
import { LottieAnimation } from 'lottie-web-vue';
import login from '../assets/svg/Login.json';
import {storeToRefs} from "pinia";
import ButtonDefault from "components/ButtonDefault.vue";

const { findUserByEmail,  } = useUserStore();
const {isAuthenticated,users} =storeToRefs(useUserStore())

const $q = useQuasar();
const router = useRouter();

const email = ref('');
const password = ref('');

console.log(users.value)

const handleSubmit = () => {
  if (!validateForm()) return;

  const user = findUserByEmail(email.value);

  if (!user) {
    $q.notify({
      color: 'negative',
      message: 'Nie znaleziono użytkownika o podanym adresie email.'
    });
    return;
  }

  if (user.password !== password.value) {
    $q.notify({
      color: 'negative',
      message: 'Nieprawidłowe hasło.'
    });
    return;
  }

  clearForm();
  $q.notify({
    color: 'positive',
    message: 'Pomyślnie zalogowano!'
  });

  isAuthenticated.value = true
  router.push('/');
};

const validateForm = () => {
  if (!email.value || !password.value) {
    $q.notify({
      color: 'negative',
      message: 'Proszę wypełnić wszystkie pola formularza.'
    });
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email.value)) {
    $q.notify({
      color: 'negative',
      message: 'Proszę podać poprawny adres email.'
    });
    return false;
  }

  return true;
};

const clearForm = () => {
  email.value = '';
  password.value = '';
};

</script>

<style scoped lang="scss">
:deep(.q-field--dense .q-field__bottom ) {
  background-color: #14141E;
  color: white;
}

.title {
  font-size: 2rem;
  margin: 0;
  font-weight: bold;
  letter-spacing: 2px;
  background: linear-gradient(to right, #ff3d9d, #8bbfdb);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
}

.subtitle {
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  margin:0;
  color: white;
  text-align: center;
}

.bg-white {
  background-color: #ffffff;
}

.text-dark {
  color: #333333;
}
.q-field__native, .q-field__prefix, .q-field__suffix, .q-field__input {
  color: black !important;
}
</style>
