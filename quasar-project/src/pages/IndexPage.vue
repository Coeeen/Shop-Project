<template>
  <q-page class="row col-12 flex-center">
    <div class="row justify-around col-10 ">
      <div class="headers">
        <h6>
          ODKRYWAJ
          <br /> <span >NIEZWYKŁE</span> URZĄDZENIA
        </h6>
        <h3>Twoje miejsce na unikalne urządzenia elektroniczne</h3>

      </div>
      <div class="col-3 " >
        <LottieAnimation
          :animation-data="Home"
          :auto-play="true"
          :loop="true"
          :speed="1"
          ref="anim"
          style="width: 750px;max-height: 400px"
        />
      </div>
    </div>

    <div class="we-assure-container " style="height: fit-content">
      <div class="assure-text">
        <div class="assure-trading">
          <span>
            <q-icon name="wallet" size="20px" />
          </span>
        </div>
        <div class="text-h6 q-my-md">Handel</div>
        <p>Kupuj, wymieniaj elektroniczne urządzenia na naszym rynku</p>
      </div>
      <div class="assure-text">
        <div class="assure-security">
          <span>
            <q-icon name="security" size="20px" />
          </span>
        </div>
        <div class="text-h6 q-my-md">Bezpieczeństwo</div>
        <p>Zaufaj naszym solidnym środkom bezpieczeństwa, aby chronić Twoje zakupy online</p>
      </div>
      <div class="assure-text">
        <div class="assure-collecting">
          <span>
            <q-icon name="bookmark" size="20px" />
          </span>
        </div>
        <div class="text-h6 q-my-md">Kolekcjonowanie</div>
        <p>Zbieraj punkty lojalnościowe i korzystaj z ekskluzywnych ofert</p>
      </div>
      <div class="assure-text">
        <div class="assure-data-set">
          <span>
            <q-icon name="info" size="20px" />
          </span>
        </div>
        <div class="text-h6 q-my-md">Zestaw danych</div>
        <p>Otrzymuj najnowsze informacje o promocjach i nowych produktach</p>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import "../css/app.scss"
import { defineOptions } from 'vue'
import Home from "assets/svg/Home.json";
import {LottieAnimation} from "lottie-web-vue";

defineOptions({
  name: 'IndexPage'
});
</script>


<style scoped lang="scss">
.main-home {
  display: flex;
  height: 30rem;
  margin: 2rem;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
}

.headers {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;

  h6 {
    font-size: 4rem;
    margin: 2rem 0 1rem;
    font-weight: 800;
    letter-spacing: 0.1rem;
    line-height: 1.2;
    text-align: center;

    span {
      display: block;
      margin-top: 0.5rem;
      background: linear-gradient(to right, #c18bdc, #e56333);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 0 1rem 0;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    .q-btn {
      margin-right: 10px;
    }
  }

  @media (max-width: 1280px) {
    h6 {
      font-size: 4rem;
    }

    h3 {
      font-size: 0.8rem;
      font-weight: 400;
      margin: 0 0 1rem 0;
    }
  }
}

.LottieStyle {
  flex:1;
  max-height: 300px;


  @media (max-width: 1280px) {
    display: none;
  }
}

.we-assure-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 8rem;
}

.assure-text {
  text-align: center;
  width: 20rem;
  margin-bottom: 2rem;
}

.text-h6 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1rem;
}
</style>
