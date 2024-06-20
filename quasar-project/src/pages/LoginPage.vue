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
          style="width: 300px"
          class="q-mb-md"
        />
      </div>

      <div class="column q-col-gutter-lg justify-center" style="margin-top: 5px">
        <div class="col-12 col-md-6">
          <label class="text-white">Email:</label>
          <q-input v-model="email" id="email" type="email" color="white" outlined dense class="bg-white text-dark" />
        </div>
        <div class="col-12 col-md-6">
          <label class="text-white">Hasło:</label>
          <q-input v-model="password" id="password" type="password" color="white" outlined dense class="bg-white text-dark" />
        </div>
      </div>

      <div class="row col-12 justify-center items-center q-mt-md">
        <q-btn type="submit" color="primary" label="Zaloguj" class="q-mt-md" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from "src/stores/UserStore";
import { storeToRefs } from "pinia";
import { useQuasar } from 'quasar';
import { LottieAnimation } from "lottie-web-vue";
import login from "../assets/svg/Login.json";

const { users, findUserByEmail } = storeToRefs(useUserStore());
const { addUser } = useUserStore();

const email = ref('');
const password = ref('');
const $q = useQuasar();

const handleSubmit = () => {
  if (!validateForm()) return;

  if (findUserByEmail(email.value)) {
    $q.notify({
      color: 'negative',
      message: 'Istnieje już użytkownik z podobnym adresem email.'
    });
    return;
  }

  // Logika logowania użytkownika

  clearForm();
  $q.notify({
    color: 'positive',
    message: 'Pomyślnie zalogowano!'
  });
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
.title {
  font-size: 3.6rem;
  margin: 0;
  font-weight: bold;
  letter-spacing: 2px;
  background: linear-gradient(to right, #ff3d9d, #8bbfdb);
  -webkit-background-clip: text;
  background-clip: inset 0 0 10px rgba(0, 0, 0, 1);
  color: transparent;
  text-align: center;
}

.subtitle {
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  margin: 15px 0px;
  color: white;
  text-align: center;
}

.bg-white {
  background-color: #ffffff;
}

.text-dark {
  color: #333333;
}
</style>
