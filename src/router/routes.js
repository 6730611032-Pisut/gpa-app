
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/ch8/SubjectPage.vue') },
      { path: 'second', component: () => import('@/pages/SecondPage.vue') },
      { path: 'button', component: () => import('@/pages/Ex_qbtn.vue'),
        meta: { requireAuth: true }
       },
      { path: 'list', component: () => import('@/pages/Ex_qlist.vue') },
      { path: 'table', component: () => import('@/pages/Ex_qtable.vue') },
      { path: 'save', component: () => import('@/pages/Ex_Notify.vue') },
      { path: 'load', component: () => import('@/pages/Ex_loading.vue') },
      { path: 'dialog', component: () => import('@/pages/Ex_dialog.vue') },
      { path: 'validation', component: () => import('@/pages/Ex_validation.vue') },
      { path: 'pinia', 
        component: () => import('@/pages/ch5/ExPinia.vue') ,
        meta: { requireAuth: true }
      },
      { path: 'testapi', component: () => import('@/pages/ch6/Ex_api.vue') },
      { path: 'post', component: () => import('@/pages/ch6/Ex_crud.vue') },
      { path: 'mockapi', component: () => import('@/pages/ch6/SubjectPage.vue') },
      { path: 'login', name:'login',
         component: () => import('@/pages/ch7/LoginPage.vue') },
      { path: 'profile', 
        name:'profile',
        meta: {requireAuth: true},
         component: () => import('@/pages/ch7/ProfilePage.vue') },

      { path: 'teacher', 
        name:'teacher',
        meta: {requireAuth: true, roles: ['teacher' , 'admin']},
         component: () => import('@/pages/ch7/TeacherPage.vue') },

      { path: 'admin', 
        name:'admin',
        meta: {requireAuth: true, roles: ['admin']},
         component: () => import('@/pages/ch7/AdminPage.vue') },   
      { path: 'env',name: 'env', component: () => import('@/pages/ch8/Ex_env.vue') },
      { path: 'subject',name: 'subject', component: () => import('@/pages/ch8/SubjectPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes
