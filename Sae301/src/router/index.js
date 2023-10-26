import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inscription from '../views/Inscription.vue'
import Connexion from '../views/Connexion.vue'
import Panier from '../views/Panier.vue'
import Personalisation from '../views/Personalisation.vue'
import Map from '../views/MapOSM.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: Inscription
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion
    },
    {
      path: '/panier',
      name: 'panier',
      component: Panier
    },
    {
      path: '/personalisation',
      name: 'personalisation',
      component: Personalisation
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    }
  ]
})

export default router
