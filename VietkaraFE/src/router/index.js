import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CastSearchPage from '../views/CastSearchPage.vue'
import StorePage from '../views/StorePage.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/cast-search',
            name: 'CastSearchPage',
            component: CastSearchPage
        },
        {
            path: '/store',
            name: 'StorePage',
            component: StorePage
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/AboutView.vue')
        }
    ]
})

export default router