<template>
  <div v-if="dataNft" class="container">
    <div class="nft-container">
      <div class="nft-style">
        <img :src="dataNft.photo" :alt="dataNft.title" />
        <h2>{{ dataNft.title }}</h2>
        <div class="owner-info">

        <div class="line"></div>
        <div class="bottom-card">
          <h1>{{ dataNft.price }}</h1>
          <q-btn @click="clickLike" class="like-button" color="primary">
            {{ dataNft.numberLikes }}
            <q-icon :name="Like ? 'AiFillHeart' : 'AiOutlineHeart'" />
          </q-btn>
        </div>
      </div>
    </div>
    <div class="text-container">
      <div class="timer">
        <h1>AUCTIONS ENDS IN</h1>
        <h2>{{ `${Hours} hours and ${Minutes} minutes ${Seconds} seconds` }}</h2>
      </div>
      <div class="timer">
        <p>{{ dataNft.description }}</p>
      </div>
      <div class="button-container">
        <q-btn to="/login" class="buy-now" color="primary">
          BUY NOW!
        </q-btn>
        <q-btn to="/login" class="make-offer" color="primary">
          MAKE OFFER!
        </q-btn>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import database from '../utils/database'

const route = useRoute()
const dataNft = ref(null)
const Like = ref(false)
const Hours = new Date().getHours()
const Minutes = 60 - new Date().getMinutes()
const Seconds = 60 - new Date().getSeconds()

const item = ref(null)

onBeforeMount(async () => {
  await database.value
  const nft = database.value.find(el => el.id === Number(route.params.id))
  if (nft) {
    dataNft.value = nft
    item.value = nft
  } else {
    console.error(`NFT with id ${route.params.id} not found.`)
  }
})

const clickLike = () => {
  Like.value = !Like.value
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
}

.nft-container {
  display: flex;
  flex: 1;
  justify-content: center;
}

.nft-info-text {
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.nft-style {
  height: 40rem;
  border-radius: 28px;
  background: #0e0e17;
  box-shadow: 0px 0px 10px #0e0e17;
  width: 25rem;
  padding: 25px;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
}

.owner-info {
  display: flex;
  height: 4rem;
}

.detail-info {
  text-align: left;
}

.line {
  width: 100%;
  background-color: #181839;
  height: 5px;
  margin: 10px 0px;
}

.bottom-card {
  margin: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.like-button {
  background-color: #181839;
  border-radius: 20px;
  width: 7rem;
  height: 3rem;
  color: white;
  font-family: 'Outfit';
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
}

.buy-now,
.make-offer {
  cursor: pointer;
  width: 15rem;
  padding: 1.5rem;
  border-radius: 26px;
  font-family: 'Outfit';
  font-size: 1.5rem;
  font-weight: 400;
  border: 1px solid white;
}

.timer {
  background-color: #0e0e17;
  border-radius: 28px;
  width: 80%;
  text-align: center;
  margin-top: 3rem;
  max-width: 550px;
}

.timer h2 {
  font-weight: 400;
}

.timer p {
  font-size: 1.5rem;
  font-weight: lighter;
}
</style>
