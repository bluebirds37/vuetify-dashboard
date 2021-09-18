import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/login",
  }, {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/pages/Login"),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import("@/views/layouts/Admin"),
    redirect: "/admin/dashboard",
    children: [{
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import("@/views/pages/Dashboard"),
      },
      {
        path: 'user',
        name: 'User',
        component: () => import("@/views/layouts/Default"),
        children: [{
            path: 'list',
            name: 'UserList',
            component: () => import("@/views/pages/user/List"),
          },
          {
            path: 'add',
            name: 'UserAdd',
            component: () => import("@/views/pages/user/Add"),
          },
        ]
      },
      {
        path: 'theme',
        name: 'Theme',
        component: () => import("@/views/pages/Theme"),
      },

    ]
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404"),
  }, {
    path: "*",
    redirect: "/404"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router