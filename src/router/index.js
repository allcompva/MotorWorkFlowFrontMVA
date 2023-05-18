import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    redirect: 'Inicio',
    children: [
      {
        path: '/Inicio',
        name: 'Inicio',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Inicio.vue'),

        params: true,
      },
      {
        path: '/AdminETramite',
        name: 'AdminETramite',
        component: () => import('@/views/AdminMunicipal/AdminETramite.vue'),
      },
      {
        path: '/ListaTramite',
        name: 'ListaTramite',
        component: () => import('@/views/ListaTramite.vue'),
      },
      {
        path: '/ListaPaso/:id',
        name: 'ListaPaso',
        component: () => import('@/views/ListaPaso.vue'),
      },
      {
        path: '/EstructuraPaso/:id',
        name: 'EstructuraPaso',
        component: () => import('@/views/EstructuraPaso.vue'),
      },
      {
        path: '/Configurador/:id',
        name: 'Configurador',
        component: () => import('@/views/Configurador.vue'),
      },
      {
        path: '/VerificaTramite/:id',
        name: 'VerificaTramite',
        component: () =>
          import('@/views/AdminMunicipal/AdminVerificaTramite.vue'),
        params: true,
      },
      {
        path: '/PasosTramite/:id',
        name: 'PasosTramite',
        component: () => import('@/views/AdminMunicipal/PasosTramite.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
