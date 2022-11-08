<template>
    <div>
        <img 
        :src="film.img"
        :alt="film.title"
        >
        <p class="rating">{{ film.rating }}</p>
        <p class="title">{{ film.title }}</p>

        

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
@import '@/'

</style>