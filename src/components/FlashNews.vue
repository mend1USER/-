<!--Компонент для слайдера и стилей новостей на главной странице-->

<script lang="ts" setup>
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { flashNews } from '../mocks/news'
import { ref, computed } from 'vue'
import Stack from './Stack.vue'

interface FlashNews {
  id: number
  rotate: number
  image: string
  text: string
  date: string
}


//Функция для слайдера картинок 
//Сначала пишем простую функцию что бы картинки менялсиь для этого

const isBackDirection = ref<boolean>(false)
//делаем реактивную переменную что бы менять значение актуального слайдера с помощью ref
const currentSlideIndex = ref<number>(0)
//оборачиваем переменную в computed свойство что бы оно меняло себя когда будет задествована колбек функция
const currentSlide = computed(() => flashNews[currentSlideIndex.value])
const isLastSlide = computed(
  () => currentSlideIndex.value >= flashNews.length - 1
)

//Функия если есть слайдер то возврщаем его потом через оператор увеличеваем его количество
const nextSlide = () => {
  if (isLastSlide.value) {
    return
  }
  isBackDirection.value = false
  toggleLoading()
  currentSlideIndex.value++
}
//Обратный слайдер 
const prevSlide = () => {
  if (currentSlideIndex.value === 0) {
    return
  }
  isBackDirection.value = true
  toggleLoading()
  currentSlideIndex.value--
}

//Функция для анимаций сначала делаем реактивную переменную
//что бы менять значение актуального слайдера с помощью ref
//колбек функция что бы написать время при которой будет меняться картинка 
const loading = ref<boolean>(false)
const toggleLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 300)
}



</script>
<template>
  <!--Раздел для того что бы высвечивать картину текст и дату из нашего ручного АПИ-->
  <stack>
    <!--Делаем анимацию когда пользователь меняет картинку-->
    <transition :name="!isBackDirection ? 'slide-fade' : 'slide-fade-reverse' ">
    <div v-show="!loading" class="w-full h-full bg-white rounded-2xl p-6 drop-shadow-md rotate-3">
      <div class="news-top">
        <img
          :src="currentSlide.image"
          class="rounded-2xl"
          alt="flash new poster"
        />
        <h2 class="text-oranje mt-2 font-bol text-m">🔥 Hot News</h2>
        <p class="mt-2 font-bold">{{ currentSlide.text }}</p>
      </div>

      <div class="news-footer mt-4 flex">
        <p class="text-gray-400 w-full">
          {{ currentSlide.date }}
        </p>
        <p class="text-gray-900 flex">
          <!--Обратный слайдер для преведущего слайда-->
          <ArrowLeftIcon
          
            v-if="currentSlideIndex > 0"
            class="w-6 mr-2"
            @click="prevSlide"
          />
          <!--Здесь сначала вешаем слушатель собтия Клик потом пишем актуальные слайды на которых мы остановились-->
          {{ currentSlideIndex + 1 }}/{{ flashNews.length }}
          <ArrowRightIcon
            v-if="!isLastSlide"
            class="w-6 ml-2"
            @click="nextSlide"
          />
          <div v-else class="w-6 ml-2"></div>
        </p>
      </div>
    </div>
    </transition>
  </stack>
</template>

<style>
.slide-fade-reverse-enter-active,
.slide-fade-reverse-leave-active ,
.slide-fade-enter-active ,



.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter {
  transform: translateX(100px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

/* Back Scrolling */


.slide-fade-reverse-enter {
  transform: translateX(-100px);
  opacity: 0;
}
.slide-fade-reverse-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
