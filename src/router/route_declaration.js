import { createRouter, createWebHistory } from 'vue-router'
import SpendingsView from './../views/SpendingsView.vue'
import CategoriesView from './../views/CategoriesView.vue'
import HomeView from './../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/depenses',
        name: 'depenses',
        component: SpendingsView
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/categories',
        name: 'categories',
        component: CategoriesView
    }
  ]
})

export default router