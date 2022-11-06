<template>
    <div class="film-page">
  <div class="container" v-if="film">
    <h1>{{ film.title }}</h1>
    <div class="line" />
    <img
      :src="film.img"
      :alt="film.title"
    >
    <div class="section">
      <p class="section__title">Про сюжет:</p>
      <p class="section__description">{{ film.description }}</p>
    </div>
    <div class="section">
      <p class="section__title">Рейтинг:</p>
      <p class="section__description">{{ film.rating }}</p>
    </div>
    <div class="section">
      <p class="section__title">Акторський склад:</p>
      <p class="section__description">{{ film.actors.join(', ') }}</p>
    </div>
    <div class="section">
      <p class="section__title">Режисери:</p>
      <p class="section__description">{{ film.directors.join(', ') }}</p>
    </div>
    <div class="line" />
    
    <div class="review">
      <h3>Переглядали цей фільм ?</h3>
      <p>Напишіть відгук:</p>
      <ul>
        <li
          v-for="reaction in reactions"
          :key="reaction.id"
        >
          <button type="button" class="btn btn-outline-light">
            {{ reaction.title }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import films from '../mocks/films'
import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                film:null
            }
        },

        computed: {
    ...mapGetters({
      getReactions: 'reactions/getReactions'
    }),
    reactions() {
      return this.getReactions
    }
  },
  created() {
    const film = films.find(film => film.id == this.$route.params.id)
    if (film) {
      this.film = film
    }
  }
}
</script>

<style lang="scss" scoped>

</style>