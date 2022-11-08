<template>
  <div>
    
    <RaceTables :key="list.length" :listData="list"/>
    
    <input type="number" v-model="raceNumber"/> <br>
    <input type="text" v-model="lastStop"/> <br>
    <input type="text" v-model="busModel"/> <br>
    <input type="text" v-model="raceTime"/> <br>

    <button @click="addItem([raceNumber,lastStop,busModel,raceTime])">Add</button>
    <button v-on:click="ok">A</button>
    <router-link to="races-page1"/>
    <router-link to="races-page2"/>
    <router-link to="races-page3"/>

    <router-view />
  </div>
</template>

<script>
import RaceTables from "@/components/RaceTables"
import { mapGetters, mapActions } from 'vuex'
  export default {
    name: "App",
    components: {
      RaceTables
    },
    methods:{
      ...mapActions(['addItem']),
      ok(){
        console.log(this.list)
      }
    },
    computed: {
      ...mapGetters(['list']),
    },
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');
*{
  font-family: 'Ubuntu', sans-serif;
}
</style>