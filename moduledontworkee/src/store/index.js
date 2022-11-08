import { createStore } from 'vuex'
// import LocalStorageData from './helpers/LocalStorageData'

// Create a new store instance.
const store = createStore({
    state: {
        list: [
            {
                id: 1,
                numberRace: 24,
                lastStop: 'Дравці',
                busModel: 'PAZ',
                raceTime: '30 minutes',
            },

            {
                id: 2,
                numberRace: 24,
                lastStop: 'Дравці',
                busModel: 'PAZ',
                raceTime: '30 minutes',
            },
    
        ]
        },
        getters: {
            list: state => {
                return state.list;
            }
        },
        mutations: {
          addItem(state, arr){
            state.list.push({
                id: new Date().getTime(),
                numberRace: arr[0],
                lastStop: arr[1],
                busModel: arr[2],
                raceTime: arr[3],
            })
            state.list = [...state.list];
          } 
        },
        actions: {
            addItem({commit}, arr) {
                commit('addItem', arr);
            }
        }
    });
    
    export default store;