<!--Компонент для главного баннера страницы-->

<script lang="ts" setup>
//опредиление типов для мэйнБаннера
interface Banner {
  title: string
  plot: string
  year: string
  id: string
  genre: string
  duration: string
  poster: string
}

//передаем типы для переменной Banner
const bannerMock: Banner = {
  title: 'Interstellar',
  plot: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper tasks to pilot a spacecraft along with a team of researchers, to find a new planet for humans.',
  year: '2014',
  id: '1',
  genre: 'Fiction',
  duration: '1h 53min',
  poster:
    'https://c4.wallpaperflare.com/wallpaper/522/353/227/cooper-girl-house-clouds-wallpaper-preview.jpg'
}

const bg = `url(${bannerMock.poster})`
</script>
<template>
  <!--Пишем разделы для компонента и стили внутри баннера как тайтл плоттвист жанр -->
  <div class="banner flex p-8 w-full rounded-2xl drop-shadow-xl cursor-pointer">
    <div class="text-white self-end">
      <h1 class="text-4xl mb-2 font-bold">{{ bannerMock.title }}</h1>
      <p>{{ bannerMock.plot }}</p>
      <div class="mt-6 flex justify-between w-[30%]">
        <span> {{ bannerMock.year }}</span>
        <span>
          {{ bannerMock.genre }}
        </span>
        <span>
          {{ bannerMock.duration }}
        </span>
      </div>
    </div>
  </div>
</template>
<!--Затем импортируем компонент на главную страницу-->
<style>
.banner {
  background: linear-gradient(rgb(255 255 255 / 0%), #262c31d9), v-bind(bg);
  background-size: cover;
}
</style>
