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
{
  path: '/films',
  name: 'filmsLayout',
  component: FilmsLayout,
  children: [
    {
      path: '',
      name: 'films',
      component: AllFilmsPage
    },
    {
      path: ':id',
      name: 'filmPage',
      component: FilmPage,
      beforeEnter: (to, from, next) => {
        if(localStorage.getItem('auth')) {
          next()
        } else {
          next({ name: 'films' })
        }
      }
    },
    {
      path: '*/*',
      redirect: { name: 'films' }
    },
  ]
}

]


const router = createRouter({
  
  history: createWebHashHistory(),

})