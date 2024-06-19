const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'laptops', component: () => import('pages/LaptopsPage.vue') },
      { path: 'computers', component: () => import('pages/ComputersPage.vue') },
      { path: 'components', component: () => import('pages/ComponentsPage.vue') },
      { path: 'smartphones', component: () => import('pages/SmartphonesPage.vue') },
      { path: 'games', component: () => import('pages/GamesPage.vue') },
      { path: 'televisions', component: () => import('pages/TelevisionsPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
