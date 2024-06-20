<template>
  <div class="row justify-center items-center" style="height: 80vh">

    <form @submit.prevent="handleSubmit" class="col-6">
      <div class="column justify-center items-center">
        <div class=" title">Utwórz konto!</div>
        <h2 class="text-body1 subtitle">Nie zamjmie to długo!</h2>
      <LottieAnimation
        :animation-data="register"
        :auto-play="true"
        :loop="true"
        :speed="1"
        ref="anim"
        style="width: 300px"
        class="q-mb-md"
      />
      </div>
      <div class="row q-col-gutter-lg justify-center">
        <div class="col-md-4">
          <label class="text-white">Imię:</label>
          <q-input v-model="firstName" maxlength="20" id="firstName" type="text" outlined dense color="white" class="bg-white text-dark"/>
        </div>
        <div class="col-md-4">
          <label class="text-white">Nazwisko:</label>
          <q-input class="bg-white text-dark" v-model="lastName" maxlength="20" id="lastName" type="text" color="white" outlined dense borderless  />
        </div>
      </div>
      <div class="row q-col-gutter-lg justify-center" style="margin-top: 5px">
        <div class="col-md-4 ">
          <label class="text-white" >Email:</label>
          <q-input v-model="email" id="email" type="email" color="white" outlined dense  class="bg-white text-dark" />
        </div>
        <div class="col-md-4">
          <label class="text-white">Hasło:</label>
          <q-input v-model="password"  id="password" type="password" color="white" outlined dense  class="bg-white text-dark" />
        </div>
      </div>
      <div class="row col-12 justify-center items-center q-mt-md">
        <q-btn type="submit" color="primary" label="Utwórz konto" class="q-mt-md" />
      </div>
    </form>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import { useUserStore } from "src/stores/UserStore"
import { storeToRefs } from "pinia"
import { useQuasar } from 'quasar'
import { LottieAnimation } from "lottie-web-vue"
import register from "../assets/svg/Register.json"

const { users, findUserByEmail } = storeToRefs(useUserStore())
const { addUser } = useUserStore()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

const $q = useQuasar()

const handleSubmit = () => {
  if (!validateForm()) return

  if (findUserByEmail(email.value)) {
    $q.notify({
      color: 'negative',
      message: 'Istnieje już użytkownik z podobnym adresem email.'
    })
    return
  }

  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  }
  addUser(user)
  console.log(users.value)
  clearForm()
  $q.notify({
    color: 'positive',
    message: 'Pomyślnie zarejestrowano użytkownika!'
  })
}

const validateForm = () => {
  if (!firstName.value || !lastName.value || !email.value || !password.value) {
    $q.notify({
      color: 'negative',
      message: 'Proszę wypełnić wszystkie pola formularza.'
    })
    return false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  if (!emailRegex.test(email.value)) {
    $q.notify({
      color: 'negative',
      message: 'Proszę podać poprawny adres email.'
    })
    return false
  }

  return true
}


let anim = ref()

onMounted(() => {
  setTimeout(() => {
    console.log(anim.value.goToAndPlay(150, true))
    anim.value
  }, 500)
})

const clearForm = () => {
  firstName.value = ''
  lastName.value = ''
  email.value = ''
  password.value = ''
}
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
</style>
