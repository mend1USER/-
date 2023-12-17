<!--Компонент для иконок фильма как реклама или рекомендуемые фильмы 
которые будут передвигаться с помощью карусели написанный с помощью 
допольнительных библиотек-->

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { movies } from '../mocks/movies'
import MovieCard from './MovieCard.vue'
</script>

<template>
  <div class="mt-6">
    <carousel :items-to-show="3.5">
      <slide v-for="movie in movies" :key="movie.id">
        <movie-card v-bind="movie" />
      </slide>
    </carousel>
  </div>
</template>

<style>
.carousel_viewport {
  @apply pl-4;
}
</style>
