<template>
  <div v-if="item" class="row column-12 q-pa-md text-white" style="font-size: 14px" >
      <div class="column justify-center items-center col-5 q-pa-lg" style="background-color: #1E222A;border-radius: 20px">
        <img :src="item.photo" :alt="item.title" width="300px" style="border-radius: 20px" class=""/>
        <div class="q-mt-md" style="font-size: 30px">{{ item.title }}</div>
            <div style="font-size: 20px">{{ item.price }} zł</div>
        <div style="font-size: 20px" >{{ item.description }} zł</div>
      </div>
      <div class="column items-center q-mt-lg " style="flex:1">
        <div>
          <div style="font-size: 30px">Promocyjna cena twa tylko do:  </div>
          <div class="text-center">{{ `Pozostało ${Hours} godzina  ${Minutes} minut ${Seconds} sekund` }}</div>
        </div>

        <div class="row q-col-gutter-x-md q-mt-md">
          <q-btn to="/login"  color="primary">
            Zaloguj się
          </q-btn>
          <q-btn to="/login" class="q-ml-md" color="primary">
            Dodaj do koszyka
          </q-btn>

        </div>
    </div>

<!--    <div class="reviews-container">-->
<!--      <h2>Oceny i Opinie</h2>-->
<!--      <p><b>Średnia ocena:</b> {{ averageRating.toFixed(1) }} / 5</p>-->
<!--      <div v-for="(comment, index) in item.comments" :key="index" class="comment">-->
<!--        <h3>{{ comment.author }}</h3>-->
<!--        <p><b>Ocena:</b> {{ comment.rating }} / 5</p>-->
<!--        <p>{{ comment.text }}</p>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>



<script setup>
import { ref, onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'
import database from '../utils/database'

const route = useRoute()
const item = ref(null)
const Like = ref(false)
const Hours = new Date().getHours()
const Minutes = 60 - new Date().getMinutes()
const Seconds = 60 - new Date().getSeconds()

onBeforeMount(async () => {
  await database.value
  const nft = database.value.find(el => el.id === Number(route.params.id))
  if (nft) {
    item.value = nft
  } else {
    console.error(`NFT with id ${route.params.id} not found.`)
  }
})

const clickLike = () => {
  Like.value = !Like.value
}

// const averageRating = computed(() => {
//   if (item.value && item.value.comments.length > 0) {
//     const totalRating = item.value.comments.reduce((sum, comment) => sum + comment.rating, 0)
//     return totalRating / item.value.comments.length
//   }
//   return 0
// })
</script>



<style scoped>

</style>

