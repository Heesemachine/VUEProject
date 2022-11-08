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
  component: About 
  },


  { path: '/products-list/:id?', 
  component: Products 
  },

]


const router = createRouter({
  
  history: createWebHashHistory(),

})