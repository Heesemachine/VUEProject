<template>
<div class="Race">
    <div class="RaceTables">
        <RaceBase v-for="item in listData"
        :key="item.id"
        :id="item.id"
        :numberRace="item.numberRace"
        :lastStop="item.lastStop"
        :busModel="item.busModel"
        :raceTime="item.raceTime"
        />
    </div>
</div>
</template>

<script>
    import RaceBase from "./RaceBase.vue"
    export default {
        name: "RaceTables",
        components: {
            RaceBase
        },
        props: {
            listData: {
                type: Array,
                default: () => []
            },
        },
    }
</script>

<style lang="scss" scoped>
.RaceTable{
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.Race{
    display: flex;
    justify-content: center;
}
</style>