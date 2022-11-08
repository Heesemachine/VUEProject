import { createRouter, createWebHashHistory } from 'vue-router'

import AllFilmsPage from '../pages/AllFilmsPage'
import FilmPage from '../pages/FilmPage'
import MainPage from '../pages/MainPage'
import FilmsLayout from '../pages/FilmsLayout'
import NotFoundPage from '../pages/NotFoundPage'

const routes = [
  { path: '/', 
    name: 'main',
    component: MainPage
  },


  { path: '/films', 
    name: 'filmsLayout',
    component: FilmsLayout,
    children: [
      {
        path: '',
        name: 'films',
        component: AllFilmsPage
      },
      {
        path:

      },
      // {
      //   path: ':id',
      //   name: 'filmPage',
      //   component: FilmPage,
      //   beforeEnter: (to, from, next) => {
      //     if(localStorage.getItem('auth')) {
      //       next()
      //     } else {
      //       next({ name: 'films' })
      //     }
      //   }
      // },
      // {
      //   path: '*/*',
      //   redirect: { name: 'films' }
      // },
      {
        path: '*',
        name: 'notFound',
        component: NotFoundPage
      },
    ]
  },

]


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
export default router