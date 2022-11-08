import { createRouter, createWebHashHistory } from 'vue-router'

import AllFilmsPage from '../pages/AllFilmsPage'
import FilmPage from '../pages/FilmPage'
import MainPage from '../pages/MainPage'
import FilmsLayout from '../pages/FilmsLayout'

const routes = [
  // { path: '/',
  //  component: Home 
  // },

  { path: '/', 
    name: 'main',
    component: MainPage
  },


  { path: '/films', 
    name: 'filmsLayout',
    component: FilmsLayout,
    children [{
      
    }]
  },

]


const router = createRouter({
  
  history: createWebHashHistory(),

})