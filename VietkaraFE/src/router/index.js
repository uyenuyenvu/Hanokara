import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreSearchPage from '../views/StoreSearachPage.vue'
import  CastSearchPage from '../views/CastSearchPage.vue'
import StorePage from '../views/StorePage.vue'
import AboutView from '../views/AboutView.vue'
import ContactPage from '../views/ContactPage.vue'
import PublishJpPage from '../views/PublishJpPage.vue'
import PublishVietPage from '../views/PublishVietPage.vue'
import ThePrivatePolicyPage from '../views/ThePrivacyPolicyPage.vue'
import TheThanksPage from '../views/TheThanksPage.vue'
import DiscountPage from '../views/DiscountPage.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/store-search',
            name: 'StoreSearchPage',
            component: StoreSearchPage
        },
        {
            path: '/store',
            name: 'StorePage',
            component: StorePage
        },
        {
            path: '/cast-search',
            name: 'CastSearchPage',
            component: CastSearchPage
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
        },
      {

        path: '/thePrivatePolicy',

        name: 'ThePrivatePolicyPage',

        component: ThePrivatePolicyPage

      },

      {

        path: '/theThanksPage',

        name: 'TheThanksPage',

        component: TheThanksPage

      },

      {

        path: '/discountPage',

        name: 'DiscountPage',

        component: DiscountPage
      }
    ]
})

export default router
