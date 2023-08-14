import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CastSearchPage from '../views/CastSearchPage.vue'
import StoreSearchPage from '../views/StoreSearchPage.vue'
import StorePage from '../views/StorePage.vue'
import AboutView from '../views/AboutView.vue'
import ContactPage from '../views/ContactPage.vue'
import PublishJpPage from '../views/PublishJpPage.vue'
import PublishVietPage from '../views/PublishVietPage.vue'

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
            path: '/store-search',
            name: 'StoreSearchPage',
            component: StoreSearchPage
        },
        {
            path: '/about',
            name: 'AboutView',
            component: AboutView
        },
        {
            path: '/contact',
            name: 'ContactPage',
            component: ContactPage
        },
        {
            path: '/publishJp',
            name: 'PublishJpPage',
            component: PublishJpPage
        },
        {
            path: '/publishViet',
            name: 'PublishVietPage',
            component: PublishVietPage
        }
    ]
})

export default router