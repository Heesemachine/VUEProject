<template>
    <div class="main-page">
      <h1>
        Онлайн кінотеатр
      </h1>
      <button type="button" class="btn btn-outline-light" @click="$router.push({ name: 'films' })">Перейти до фільмів</button>
    </div>
  </template>
  
  <style lang="scss" >
  @import '@/assets/styles/'
</style>