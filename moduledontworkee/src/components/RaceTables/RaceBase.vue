<template>
  <div class="RaceBase">
    <div class="info">
      <h2>{{ numberRace }}</h2>
      <div class="text-list">
        <div>Кінцева зупинка:</div>
        <div>{{ lastStop }}</div>
      </div>
      <div class="text-list">
        <div>Модель тз:</div>
        <div>{{ busModel }}</div>
      </div>
      <div class="text-list">
        <div>Час поїздки:</div>
        <div>{{ raceTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RaceBase",
  methods: {
    ...mapActions(["minusItemCount", "plusItemCount"]),
  },

  props: {
    id: {
      type: Number,
      default: 0,
    },
    numberRace: {
      type: Number,
      default: 0,
    },
    lastStop: {
      type: String,
      default: "No info",
    },
    busModel: {
      type: String,
      default: 'No info',
    },
    raceTime: {
      type: String,
      default: "No info",
    },
  },
  
};
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.RaceBase {
  display: flex;
  background-color: rgb(229, 247, 255);
  width: 600px;
  justify-content: flex-start;
  border-radius: 0px 60px;
  overflow: hidden;
  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
  .info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 30px;
      width: 370px;
      margin-bottom: 40px;
    }
    .text-list {
      display: flex;
      gap: 4px;
      margin-bottom: 10px;
    }
  }
}
</style>
