<template>
  <div v-if="item" class="container q-pa-md text-white col-xs-12" style="font-size: 14px">
    <div class="cards">
      <div class="card">
        <img :src="item.photo" :alt="item.title" width="300px" class="image" />
        <div class="title">{{ item.title }}</div>
        <div class="price">{{ item.price }} zł</div>
        <div class="description">{{ item.description }}</div>
      </div>

      <div class="card" style="height: fit-content">
        <div>
          <div class="promo-title">Promocyjna cena trwa tylko do:</div>
          <div class="text-center">{{ `Pozostało ${Hours} godzina ${Minutes} minut ${Seconds} sekund` }}</div>
        </div>
        <div class="add-comment-form q-mt-md">
          <label for="rating">Twoja ocena:</label>
          <input type="number" id="rating" v-model="newRating" min="1" max="5" required>

          <label for="comment">Twój komentarz:</label>
          <textarea id="comment" v-model="newComment" rows="4" required></textarea>

          <button @click="addComment" class="q-mt-md">Dodaj opinię</button>
        </div>
      </div>

      <div class="card">
        <div class="text-h4">Oceny i Opinie</div>
        <p class="q-mt-md" :style="{ color: averageRating > 4 ? 'green' : '' }"><b>Średnia ocena:</b> {{ averageRating.toFixed(1) }} / 5</p>

        <div v-for="(comment, index) in item.comment" :key="index" class="comment">
          <div class="author">{{ comment.author }}</div>
          <p><b>Ocena:</b> {{ comment.rating }} / 5</p>
          <p>{{ comment.text }}</p>
        </div>
      </div>

      <div class="card" style="max-width: 800px">
        <div class="text-h4 q-mb-md">Rekomendacje od naszych użytkowników</div>
        <Splide :options="splideOptions">
          <SplideSlide v-for="(data, index) in recommendedItems" :key="index">
            <router-link :to="`/item/${data.id}`">
              <img :src="data.photo" :alt="data.title" class="splide-image" />
              <div class="splide-title">{{ data.title }}</div>
            </router-link>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import database from '../utils/database'
import { useQuasar } from 'quasar'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

import '@splidejs/splide/dist/css/themes/splide-default.min.css'
const $q = useQuasar()
const router = useRouter()

const route = useRoute()
const item = ref(null)
const newRating = ref(null)
const newComment = ref('')
const Hours = ref(new Date().getHours())
const Minutes = ref(60 - new Date().getMinutes())
const Seconds = ref(60 - new Date().getSeconds())

const splideOptions = {
  perPage: 4,
  type: 'loop',
  pagination: false,
  keyboard: true,
  lazyLoad: true,
  speed: 10000,
  breakpoints: {
    640: { perPage: 1 },
    768: { perPage: 2 },
    1024: { perPage: 3 },
  },
}

onBeforeMount(async () => {
  await database.value
  loadItem()
})

watch(
  () => route.params.id,
  (newId, oldId) => {
    loadItem()
  }
)

const loadItem = () => {
  const items = database.value.find((el) => el.id === Number(route.params.id))
  if (items) {
    item.value = items
    console.log(item.value)
  } else {
    console.error(`Item with id ${route.params.id} not found.`)
  }
}

const averageRating = computed(() => {
  if (!item.value || !item.value.comment || item.value.comment.length === 0) {
    return 0
  }
  const totalRating = item.value.comment.reduce((sum, comment) => sum + comment.rating, 0)
  return totalRating / item.value.comment.length
})

const addComment = () => {
  if (!newRating.value || !newComment.value.trim()) {
    $q.notify({
      color: 'negative',
      message: 'Wypełnij wszystkie pola!',
    })
    return
  }

  const comment = {
    rating: parseFloat(newRating.value),
    author: 'Anonymous',
    text: newComment.value.trim(),
  }

  item.value.comment.push(comment)

  newRating.value = null
  newComment.value = ''
}

const recommendedItems = ref([
  {
    id: 1,
    photo: 'https://example.com/graphics-card1.jpg',
    title: 'NVIDIA GeForce RTX 3080 Ti',
    description: 'Super wydajna karta graficzna do gamingu w 4K.',
    price: 2999.99,
    buyers: 120,
    specifications: {
      chipset: 'RTX 3080 Ti',
      memory: '12 GB GDDR6X',
      interface: 'PCI Express 4.0',
      outputs: '3x DisplayPort, 2x HDMI',
      power: '750W PSU required',
    },
    comment: [
      {
        rating: 4.9,
        author: 'Mark Johnson',
        text: 'Fantastyczna karta graficzna. Idealna do gier w 4K.',
      },
      {
        rating: 4.7,
        author: 'Anna Kowalska',
        text: 'Świetna wydajność w grach. Cieszę się, że wybrałem ten model.',
      },
    ],
  },
  {
    id: 1002,
    photo: 'https://images.morele.net/i1064/phone3.jpg',
    title: 'Xiaomi Mi 12 Pro',
    description: 'Smartfon Xiaomi z ekranem AMOLED, Snapdragon 8 Gen 1 i potrójnym aparatem.',
    price: 4599.99,
    buyers: 95,
    comment: [
      {
        rating: 4.9,
        author: 'Mark Johnson',
        text: 'Fantastyczna karta graficzna. Idealna do gier w 4K.',
      },
      {
        rating: 4.7,
        author: 'Anna Kowalska',
        text: 'Świetna wydajność w grach. Cieszę się, że wybrałem ten model.',
      },
    ],
    specifications: {
      system: 'MIUI 14 (Android 12)',
      ekran: '6.7 cala AMOLED',
      procesor: 'Snapdragon 8 Gen 1',
      pamiec: '256 GB',
      aparat: 'Potrójny 50 MP',
    },
  },
  {
    id: 52,
    photo: 'https://images.morele.net/i1064/game2.jpg',
    title: 'The Witcher 3: Wild Hunt',
    description: 'Epicka gra RPG osadzona w świecie mrocznych fantasy, stworzona przez CD Projekt RED.',
    price: 149.99,
    buyers: 600,
    comment: [
      {
        rating: 2.9,
        author: 'Krystian Jank',
        text: 'Komentarz Hejterski.',
      },
      {
        rating: 4.9,
        author: 'Sophie Brown',
        text: 'Jedna z najlepszych gier, jakie kiedykolwiek grałem. Fabuła jest poruszająca i pełna zwrotów akcji.',
      },
      {
        rating: 4.7,
        author: 'John Doe',
        text: 'Świetna gra, znakomita grafika i mechanika. Polecam każdemu fanowi RPG.',
      },
    ],
  },
])

</script>

<style scoped>
.container {
  font-size: 14px;
}

.cards {
  display: grid;
  gap: 20px;
}

.card {
  background-color: #1E222A;
  border-radius: 20px;
  padding: 20px;
}

@media (min-width: 600px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

.image {
  border-radius: 20px;
}

.title {
  font-size: 30px;
  margin-top: 1rem;
}

.price, .description {
  font-size: 20px;
}

.promo-title {
  font-size: 30px;
}

.comment {
  margin-bottom: 10px;
}

.author {
  font-size: 1.25rem;
}

.add-comment-form {
  margin-top: 20px;
}

.add-comment-form label {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
}

.add-comment-form input[type="number"], .add-comment-form textarea {
  width: 100%;
  font-size: 14px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-comment-form button {
  font-size: 16px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-comment-form button:hover {
  background-color: #45a049;
}

.splide-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
}

.splide-title {
  font-size: 18px;
  margin-top: 5px;
  text-align: center;
  cursor: pointer;
}
</style>
