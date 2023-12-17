<script lang="ts" setup>
import { ref } from 'vue'
import Page from '../components/layouts/Page.vue'
import MainBanner from '../components/MainBanner.vue'
import FlashNews from '../components/FlashNews.vue'
import ContentRow from '../components/ContentRow.vue'
import MovieFeed from '../components/MovieFeed.vue'
import Tabs from '../components/Tabs.vue'

import { tabsMock } from '../mocks/tabs'

//Переименуем activeTab в динамическую переменную что бы в реальном времени менять Стэйт Табов и пишем параметрах tabsMock[0].id что бы по умолчанию на странице было один активный таб
const activeTab = ref<string>(tabsMock[0].id)
//Функция что бы менять Таб
const onTabChange = (tabId: string) => {
  activeTab.value = tabId
}
</script>

<template>
  <page>
    <!--Тут мы передали Тайтл с помощью defineProps-->
    <template #title> Movie </template>

    <div class="mx-4">
      <!--Передаем Мок данные как пропсы @on-tab-change="onTabChange"с помощью бинда пишем имя события и имя функций
 -->
      <tabs
        :tabs="tabsMock"
        :active-tab="activeTab"
        @on-tab-change="onTabChange"
      />
      <content-row>
        <main-banner />
        <div class="ml-10 max-w-md w-full">
          <flash-news />
        </div>
      </content-row>
    </div>
    <content-row class="flex-col">
      <h1 class="mx-4 text-2xl text-white font-bold">Special for you</h1>
      <movie-feed> </movie-feed>
    </content-row>
  </page>
</template>
