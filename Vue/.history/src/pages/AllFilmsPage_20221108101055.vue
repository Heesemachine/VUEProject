<template>
    <div class="films-page-container">
      <h2 class="chose-movie-label">Обери фільм на свій смак</h2>
      <films-list :films="films" />
    </div>
  </template>
  
  <script>
  import FilmsList from '../components/FilmsList'
  import films from '../mocks/films'
  
  
  export default {
    components: { FilmsList },
    data() {
      return {
        films
      }
    }
  }
  </script>
  
  <style lang="scss">
  @import '@/assets/styles/AllFilmsPage.scss'
  </style>