import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import StoreSearchPage from '@/views/StoreSearchPage.vue'
import CastSearchPage from '@/views/CastSearchPage.vue'
import StorePage from '@/views/StoreDetail.vue'
import AboutView from '@/views/AboutView.vue'
import ContactPage from '@/views/ContactPage.vue'
import PublishJpPage from '@/views/Publish/JpPublish.vue'
import PublishVietPage from '@/views/Publish/VietPublish.vue'
import ThePrivatePolicyPage from '@/views/ThePrivacyPolicyPage.vue'
import TheThanksPage from '@/views/TheThanksPage.vue'
import DiscountPage from '@/views/Discount/DiscountView.vue'
import CastPage from '@/views/CastDetail.vue'

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
            path: '/store/:storeId',
            name: 'StorePage',
            component: StorePage
        },
        {
            path: '/cast-search',
            name: 'CastSearchPage',
            component: CastSearchPage
        },
        {
          path: '/cast/:castId',
          name: 'CastPage',
          component: CastPage
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

        path: '/privacy-policy',

        name: 'ThePrivatePolicyPage',

        component: ThePrivatePolicyPage

      },

      {

        path: '/theThanksPage',

        name: 'TheThanksPage',

        component: TheThanksPage

      },

      {

        path: '/discount',

        name: 'DiscountPage',

        component: DiscountPage
      }
    ]
})

export default router
