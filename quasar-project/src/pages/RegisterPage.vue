<template>
  <div class="row justify-center items-center" style="height: 80vh">
    <form @submit.prevent="handleSubmit" class="col-6">
      <div class="column justify-center items-center">
        <div class="title">Utwórz konto!</div>
        <h2 class="text-body1 subtitle">Nie zajmie to długo!</h2>
        <LottieAnimation
          :animation-data="register"
          :auto-play="true"
          :loop="true"
          :speed="1"
          ref="anim"
          style="width: 200px"
          class="q-mb-md"
        />
      </div>
      <div class="row q-col-gutter-lg justify-center">
        <div class="col-md-4">
          <label class="text-white">Imię:</label>
          <q-input v-model="firstName" maxlength="20" id="firstName" hint="Formikowy hint do imienia" type="text" outlined dense color="white" class="bg-white " :input-style="{color:'black'}"/>
        </div>
        <div class="col-md-4">
          <label class="text-white">Nazwisko:</label>
          <q-input class="bg-white text-dark" v-model="lastName" hint="Formikowy hint do nazwiska" maxlength="20" id="lastName" type="text" color="white" outlined dense borderless :input-style="{color:'black'}" />
        </div>
      </div>
      <div class="row q-col-gutter-lg justify-center" style="margin-top: 5px">
        <div class="col-md-4">
          <label class="text-white">Email:</label>
          <q-input v-model="email" id="email" color="white" hint="Formikowy hint do hasła" outlined dense class="bg-white text-dark" :input-style="{color:'black'}" />
        </div>
        <div class="col-md-4">
          <label class="text-white">Hasło:</label>
          <q-input v-model="password" id="password" hint="Formikowy hint do hasła" type="password" color="white" outlined dense class="bg-white text-dark" :input-style="{color:'black'}" />
        </div>
      </div>
      <div class="row col-12 justify-center items-center q-mt-md">
        <ButtonDefault text="Utwórz konto" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/UserStore';
import { useQuasar } from 'quasar';
import { LottieAnimation } from 'lottie-web-vue';
import register from '../assets/svg/Register.json';
import ButtonDefault from "components/ButtonDefault.vue";

const { addUser, findUserByEmail } = useUserStore();
const $q = useQuasar();
const router = useRouter();

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');

const handleSubmit = () => {
  if (!validateForm()) return;

  if (findUserByEmail(email.value)) {
    $q.notify({
      color: 'negative',
      message: 'Istnieje już użytkownik z podobnym adresem email.'
    });
    return;
  }

  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  };

  addUser(user);
  clearForm();
  $q.notify({
    color: 'positive',
    message: 'Pomyślnie zarejestrowano użytkownika!'
  });

  router.push('/login');
};

const validateForm = () => {
  if (!firstName.value || !lastName.value || !email.value || !password.value || email.value.length < 3 || password.value.length < 3) {
    $q.notify({
      color: 'negative',
      message: 'Proszę wypełnić poprawnie wszystkie pola formularza.'
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
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  password.value = '';
};

let anim = ref();

onMounted(() => {
  setTimeout(() => {
    anim.value.goToAndPlay(150, true);
  }, 500);
});

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
  background-clip: inset 0 0 10px rgba(0, 0, 0, 1);
  color: transparent;
  text-align: center;
}

.subtitle {
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  margin: 10px 0px;
  color: white;
  text-align: center;
}
</style>
