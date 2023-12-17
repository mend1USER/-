<!--Компонент для контроллера плеера тут мы пишем индивидуальный плеер для видео-->


<script setup lang="ts">
import { onUnmounted, onMounted, ref, computed } from 'vue'
//Пропсы для определения что бы показывать контроллер
//videoDuration количество секунд сколько видео идет
//currentVideoPosition нужно что бы понимать на какой позиций мы находимся
const props = defineProps<{
  isActive: boolean
  videoDuration: number
  currentVideoPosition: number
}>()
//timeBar для содержания времени секунд видео в моменте
const timeBar = ref<number>(0)

//Емит что бы менять время при клике
const emits = defineEmits<{ 'on-time-change': [value: number] }>()


//Функция что бы вычислять текуущее время что бы показывать на экране
const calculateTime = (duration: number) => {
  const seconds = Math.floor(duration % 60)
  const minutes = Math.floor(duration / 60)
  const computedSeconds = seconds >= 10 ? seconds : `0 ${seconds}`

  return `${minutes}:${computedSeconds}`
}


//Свойство которые будет показывать в каком времени видео мы находимся
const currenTime = computed(() => calculateTime(props.currentVideoPosition))
//Свойство которая будет показывать полное время видео
const timeTotal = computed(() => calculateTime(props.videoDuration))

const range = computed(() => {
  const precent = (
    (props.currentVideoPosition / props.videoDuration) *
    100
  ).toFixed(2)

  return `${precent}% 100%`
})

//Функция в котором передаем timeBar значение что бы менять время на плеере
//
const updateTimeBar = (event: Event) => {
  const currentTarget = event.target as HTMLInputElement
  timeBar.value = +currentTarget.value
  emits('on-time-change', timeBar.value)
}

const skip = () => {}

//Ивент для мышки с ивентом keydown что когда пользователь нажимал на клаву пройсходило событие проматывания видео вперед
onMounted(() => {
  window.addEventListener('keydown', skip)
})

onUnmounted(() => {
  window.removeEventListener('keydown', skip)
})
</script>
<template>
  <div class="controls" v-bind="$attrs" :class="{ active: isActive }">
    <time class="text-white mr-4">{{ currenTime }}</time>

    <!--Раздел компнента для нашего индивудального плеера видео-->
    <input
      type="range"
      class="time-track outline-none rounded-lg self-center opacity-70 cursor-pointer h-[8px] w-full"
      :min="0"
      step="1"
      :max="videoDuration"
      :value="currentVideoPosition"
      @change="updateTimeBar"
    />

    <time class="text-white ml-4">{{ timeTotal }}</time>
  </div>
</template>

<style>
.time-track {
  background-image: linear-gradient(#f37515, #f37515);
  background-repeat: no-repeat;
  -webkit-appearance: none;
  background-size: v-bind(range);
}

.time-track::-webkit-slider-thumb {
  -webkit-appearance: none;
  @apply h-[18px] w-[18px] self-center bg-oranje rounded-lg cursor-pointer outline-none;
}

.time-track::-moz-range-thumb {
  -webkit-appearance: none;
  @apply h-[18px] w-[18px] self-center bg-oranje rounded-lg cursor-pointer outline-none;
}

.controls {
  @apply px-8 w-full flex opacity-0 invisible m-0;
  transition: 0.5s;
  transition-property: opacity, visibility;
  transform: translateY(-55px);
}

.controls.active {
  @apply opacity-100 visible;
}

.controls * {
  opacity: 0.7;
  transition: opacity 0.3s;
}

@media (hover: hover) {
  .controls *:hover {
    opacity: 0.7;
  }
}
</style>
