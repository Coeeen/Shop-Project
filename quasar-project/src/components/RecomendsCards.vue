<template>
                <router-link :to="`/item/${data.id}`">
              <img :src="data.photo" :alt="data.title" class="splide-image"/>
              <div class="text-white text-bold text-subtitle1">{{ data.title }}</div>
            </router-link>
</template>