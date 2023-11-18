import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// Vuetify のインポート
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createStore } from 'vuex'


const app = createApp(App)

app.use(createPinia())
app.use(router)

// Vuetifyの定義
const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
});

// Create a new store instance.
const store = createStore({
  state () {
    return {
      breadcrumbs: [],
      imageCompare: ''
    }
  },
  mutations: {
    UPDATE_BREADCRUMBS (state, payload) {
      state.breadcrumbs = payload
    },
    UPDATE_IMAGE_COMPARE (state, payload) {
      state.imageCompare = payload
    }
  }
})

app.use(store);
app.use(vuetify);

app.mount('#app')
