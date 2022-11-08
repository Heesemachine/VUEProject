<template>
    <div class="film-card">
      <img
        :src="film.img"
        :alt="film.title"
      >
      <p class="rating">{{ film.rating }}</p>
      <p class="title">{{ film.title }}</p>
      <router-link
        :to="{ name: 'filmPage', params: { id: film.id } }"
        class="more-info"
      >
        Подробнее о фильме
      </router-link>
    </div>
  </template>

<script>
    export default {
        props: {
        film: {
        type: Object
    }
  }
    }
</script>

<style lang="scss" >
@import '@/assets/styles/FilmCard.scss'

</style>