<!--Компонент для видеоплеера для стримингового сервиса-->

<script setup lang="ts">
import { ref } from 'vue'
import TimeControl from './TimeControl.vue'

//Переменная что бы
const videoDuration = ref<number>(0)
const videoCurrentTime = ref<number>(0)
const video = ref()
const player = ref()

//Функция в котором мы прокидываем ивент на инпут контроллер и передаем значение видео с помощью ивента loadedmetadata
const setVideoData = () => {
  if (video.value.readyState) {
    videoDuration.value = video.value.duration
  }
}

//Функция которая будет менять текущее значение времени видео с помощью ивента progress
const progress = () => {
  videoCurrentTime.value = video.value.currentTime
}

//Функция в котором мы меняем текущее время плеера
const onTimeChange = (value: number) => {
  video.value.currentTime = value
  progress()
}
</script>

<template>
  <div
    class="player w-full rounded-lg aspect-video relative object-cover cursor-pointer"
    ref="player"
  >
    <!--Раздел для плеера видео и его аттрибутов-->
    <video
      class="video-screen aspect-video shadow-sm block w-full h-full bg-movie-black-200 cursor-pointer"
      src="../../assets/video.mp4"
      controls
      preload="auto"
      step="10"
      ref="video"
      allowfullscreen
      type="video/mp4"
      @loadedmetadata="setVideoData"
      @progress="progress"
      @timeupdate="progress"
    />
    <time-control
      :video-duration="videoDuration"
      :current-video-position="videoCurrentTime"
      :is-active="true"
      @on-time-change="onTimeChange"
    />
    <volume-control />
  </div>
</template>

<style>
.player {
  @apply w-full rounded-lg aspect-video relative object-cover cursor-pointer;
}

.video-screen {
  @apply aspect-video
    shadow-sm
     block w-full h-full bg-movie-black-200 cursor-pointer;
}

::-webkit-media-controls {
  display: none;
}
</style>
