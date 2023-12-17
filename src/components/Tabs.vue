<script lang="ts" setup>
import { Tab } from '../types'
//Нахоим пропсы табов импортируя их и с помощью defineProps будем передавать пропсы
//пишем пропс для activeTab для импорта дочерних компонентов
defineProps<{
  tabs: Tab[]
  activeTab: string
}>()

//emit слушатель события который помогает в простых сменах страницы ил компонента
//defineEmits функция в с которой мы ищем Емиты и пишем параметры и имя для события
//здесь мы хотим сенять цвета прир клике что бы пользователь понимал на каком табе он находиться
//и сначала в теле функций мы пишем имя для события и вместе с ним пишем параметр Таб что бы менятть именно его
// @click="emits('on-tab-change', id)" при ивенте Клик мы пишем ия события и параметр для него
const emits = defineEmits<{
  'on-tab-change': [tab: string]
}>()
</script>

<template>
  <div>
    <nav class="flex space-x-4">
      <!--Таким же методом пишем через директиву v-for что бы проще читалось
     :class="id === activeTab ? 'bg-oranje' : 'bg-movie-black-200'"Активный стэйт в виде динамичного класса и пишем условие для него
-->
      <a
        class="text-lg rounded-lg px-5 py-2 text-white drop-shadow-sm hover:bg-oranje cursor-pointer"
        :class="id === activeTab ? 'bg-oranje' : 'bg-movie-black-200'"
        v-for="{ id, emoji, title } in tabs"
        @click="emits('on-tab-change', id)"
        :key="id"
      >
        {{ emoji }}
        {{ title }}
      </a>
    </nav>
  </div>
</template>
