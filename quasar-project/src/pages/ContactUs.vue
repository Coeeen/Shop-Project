<template>
    <div>
      <div class="header">
        <h1>Kontakt</h1>
        <h2>Czekamy na wiadomośc od ciebie.Odpowiemy tak szybko, jak to możliwe.</h2>
      </div>
      <div class="row justify-center">
        <LottieAnimation
          :animation-data="animationData"
          :auto-play="true"
          :loop="true"
          :speed="1"
          ref="anim"
          style="width: 150px"
        />
        </div>
  
      <div class="contact-us">
        <div class="contact-info">
          <form ref="form" @submit.prevent="sendEmail" class="form" style="display: flex;flex-direction: column;align-items: center; justify-content: center; width: 700px;;">
            <input
              type="text"
              placeholder="Imie i nazwisko"
              name="from_name"
              v-model="fromName"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              name="to_name"
              v-model="toName"
              required
            />
            <textarea
              placeholder="Wiadomość"
              name="message"
              v-model="message"
              required
            ></textarea>
            <button type="submit" >SEND MESSAGE</button>
          </form>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import emailjs from '@emailjs/browser'
  import animationData from '../assets/svg/SignIn.json'
  import { LottieAnimation } from 'lottie-web-vue';
  
  const fromName = ref('')
  const toName = ref('')
  const message = ref('')
  const form = ref(null)
  
  const defaultOptions = {
    animationData,
    loop: true,
    autoplay: true
  }
  
  const sendEmail = () => {
    emailjs
      .sendForm('service_0qy9wii', 'template_jff7npz', form.value, '89YEmMwrb25szBh_Q')
      .then(
        (result) => {
          console.log(result.text)
          fromName.value = ''
          toName.value = ''
          message.value = ''
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  </script>
  
  <style scoped>
  .header {
 
    h1 {
      font-size: 4rem;
      margin: 0;
      font-weight: bold;
      letter-spacing: 2px;
      background: linear-gradient(to right, #c18bdc, #e56333);
      -webkit-background-clip: text;
      background-clip: inset 0 0 6px rgba(0, 0, 0, 0.1);
      color: transparent;
      text-align: center;
    }
    h2 {
      font-size: 1rem;
      text-align: center;
      font-weight: 400;
      margin: 0px 0px;
      color: white;
      text-align: center;
    }
  }
  
  .contact-us {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    height: 34.2rem;
  }
  
  .contact-card {
    display: flex;
    flex: 1;
    text-align: center;
  }
  
  .card {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.28) 100%);
    border-radius: 2rem 2rem 0rem 0rem;
    width: 100%;
    height: 90%;
    position: relative;
    margin: 2rem;
  }
  .card h1 {
    font-size: 1.4rem;
    margin: 2rem;
    font-weight: 400;
    letter-spacing: 5px;
    color: white;
    text-align: left;
  }
  .card ul {
    list-style: none;
  }
  .card li {
    text-align: left;
    margin: 10px 0px;
    color: white;
  }
  .card span {
    display: flex;
    align-items: center;
  }
  .card p {
    font-size: 1.2rem;
    margin-left: 20px;
  }
  .card svg {
    display: none;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .contact-info input[type='text'],
  .contact-info input[type='email'],
  .contact-info textarea {
    width: 60%;
    padding: 12px 20px;
    margin: 20px 10px;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
    background-color: transparent;
    color: white;
    font-family: 'Outfit';
    text-align: center;
  }
  .contact-info input[type='text']:focus,
  .contact-info input[type='email']:focus,
  .contact-info textarea:focus {
    outline: none;
  }
  
  .contact-info button {
    width: 12rem;
    color: white;
    border-radius: 20px;
    margin-top: 1rem;
    background-color: transparent;
    box-shadow: 0 0 5px #fff;
    font-family: 'Outfit';
    font-weight: bold;
    font-size: 1rem;
    padding: 1.2rem;
    cursor: pointer;
    border: none;
  }
  </style>
  