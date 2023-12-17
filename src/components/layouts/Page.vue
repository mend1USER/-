<script lang="ts" setup>
withDefaults(
  //defineProps функция в которой мы как параметры передаем Тайтл если он есть в компонентах
  //то мы можем просто передать этот пропс дочерним компонентам
  defineProps<{
    title?: string
    paddingless: boolean
  }>(),
  {
    paddingless: false
  }
)
</script>

<template>
  <!--В этом кмопненте прописываем главную мэйн страницу, здесь я просто отделил компоненты слева и справа слева это сайдбар Tab 
  в котором с помощью иконок прописываем главные страницы а справа это мэйн Movie в котором щяс будут находиться просто киношные баннеры 
и нахождения по жанрам фильмов-->
  <section
    class="bg-movie-black flex h-full min-w-0 flex-1 flex-col overflow-y-auto"
  >
    <div class="mx-4 my-9 flex justify-between">
      <h1 v-if="title" class="text-4xl font-weight-900 font-bold text-white">
        {{ title }}
      </h1>
      <h1 v-else class="text-4xl font-weight-900 font-bold text-white">
        <slot name="title" />
      </h1>
      <div>
        <slot name="header" />
      </div>
    </div>
    <div :class="paddingless ? '' : 'mx4'">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
