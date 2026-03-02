import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReportajesView from '../views/ReportajesView.vue'
import ActualidadView from '../views/ActualidadView.vue'
import PortfolioView from '../views/PortfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/reportajes', name: 'reportajes', component: ReportajesView },
    { path: '/actualidad', name: 'actualidad', component: ActualidadView },
    { path: '/portfolio', name: 'portfolio', component: PortfolioView },
  ],
})

export default router
