<template>
    <header>
      <div class="container">
        <router-link
          :to="{ name: 'main' }"
          class="logo"
        >
          Кінотеатр
        </router-link>
        <div class="links">
          <router-link
            :to="{ name: 'films' }"
          >
            Фільми
          </router-link>
          <button
            type="button"
            class="btn btn-outline-light btn-lg"
            @click="changeUserState"
          >
            {{ auth ? 'Вийти' : 'Увійти' }}
          </button>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        auth: false
      }
    },
    created() {
      this.auth = localStorage.getItem('auth') !== null
    },
    methods: {
      changeUserState() {
        if (this.auth) {
          localStorage.removeItem('auth')
          this.$router.push({ name: 'main'})
        } else {
          localStorage.setItem('auth', true)
          this.auth = true
        }
      }
    }
  }
  </script>
  
  <style lang="scss">
  @imp
  
  </style>
  