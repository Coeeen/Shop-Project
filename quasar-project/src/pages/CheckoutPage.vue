<template>
  <q-page class="q-pa-md">
    <q-stepper align="justify" v-model="step" color="primary" :keep-alive="true" style="background-color: #1E222A">
      <q-step name="shipping-address" title="Adres wysyłki">
        <div class="q-pa-md">
          <h2 class="text-h5 text-white">Adres wysyłki</h2>
          <q-form @submit.prevent="nextStep('payment-method')">
            <div class="q-gutter-md">
              <q-input v-model="shippingAddress.street" label="Ulica" outlined dense class="bg-white" :input-style="{color:'white'}"
                       color="white" />
              <q-input v-model="shippingAddress.city" label="Miasto" outlined dense class="bg-white" input-style="{color:'white'}"
                       color="white"/>
              <q-input v-model="shippingAddress.zipCode" label="Kod pocztowy" outlined dense class="bg-white" :input-style="{color:'white'}"
                       color="white"/>
              <q-input v-model="shippingAddress.country" label="Kraj" outlined dense class="bg-white" :input-style="{color:'white'}"
                       color="white" />
            </div>
            <div class="q-mt-md">
              <q-btn type="submit" color="primary" label="Dalej" />
            </div>
          </q-form>
        </div>
      </q-step>

      <q-step name="payment-method" title="Metoda płatności" class="text-white">
        <div class="q-pa-md">
          <h2 class="text-h5">Metoda płatności</h2>
          <q-form @submit.prevent="nextStep('contact-details')" class="q-gutter-md">
            <q-select v-model="paymentMethod" class="bg-white" label="Wybierz metodę płatności" outlined dense :options="paymentMethods" />
            <div class="q-mt-md">
              <q-btn type="submit" color="primary" label="Dalej" />
            </div>
          </q-form>
        </div>
      </q-step>

      <q-step name="contact-details" title="Dane kontaktowe" class="text-white">
        <div class="q-pa-md">
          <h2 class="text-h5">Dane kontaktowe</h2>
          <q-form @submit.prevent="submitOrder" class="q-gutter-md">
            <q-input v-model="contactDetails.email" label="Email" outlined dense  class="bg-white"/>
            <q-input v-model="contactDetails.phone" label="Numer telefonu" outlined dense  class="bg-white"/>
            <div class="q-mt-md">
              <q-btn type="submit" color="primary" label="Złóż zamówienie" />
            </div>
          </q-form>
        </div>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { shopStore } from "src/stores/ShopStore"
import {storeToRefs} from "pinia";
const { card } = storeToRefs(shopStore())

const $q = useQuasar();
const router = useRouter();



const shippingAddress = ref({
  street: '',
  city: '',
  zipCode: '',
  country: ''
});

const paymentMethods = ref([
  { label: 'Karta kredytowa', value: 'credit_card' },
  { label: 'Przelew bankowy', value: 'bank_transfer' },
  { label: 'Płatność przy odbiorze', value: 'cash_on_delivery' }
]);

const paymentMethod = ref('');

const contactDetails = ref({
  email: '',
  phone: ''
});

const step = ref('shipping-address');

const nextStep = (nextStepName) => {
  step.value = nextStepName;
};

const submitOrder = () => {
  if (!validateForm()) return;

  $q.notify({
    color: 'positive',
    message: 'Zamówienie zostało złożone pomyślnie!'
  });
  card.value = []
  router.push('/');
};

const validateForm = () => {
  if (!contactDetails.value.email || !contactDetails.value.phone) {
    $q.notify({
      color: 'negative',
      message: 'Proszę wypełnić wszystkie pola formularza.'
    });
    return false;
  }


  return true;
};
</script>

<style scoped lang="scss">
.text-h5 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
</style>
