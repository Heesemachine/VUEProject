import { createRouter, createWebHashHistory } from 'vue-router'

import RacesPage1 from './RacesPage1'
import RacesPage2 from './RacesPage1'
import RacesPage3 from './RacesPage1'

const routes = [
    {
        path: 'racepage1',
        component: RacesPage1,
        name: 'races-page1'
    },

    {
        path: 'racepage2',
        component: RacesPage2,
        name: 'races-page2'
    },
    {
        path: 'racepage3',
        component: RacesPage3,
        name: 'races-page3'
    },


]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
export default router