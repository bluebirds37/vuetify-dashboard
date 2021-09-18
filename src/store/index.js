import Vue from 'vue'
import Vuex from 'vuex'
import pathify from '@/plugins/vuex-pathify'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['themeDark', 'drawerColor', 'headerColor', 'themeColor', 'user', 'drawer', 'headTitle', 'mini']
})

import {
  make
} from 'vuex-pathify'

Vue.use(Vuex)

const state = {
  themeDark: false,
  drawerColor: "#FFFFFF",
  headerColor: "#FFFFFF",
  themeColor: "#03a9f4",
  user: {
    avator: "",
    nickname: "管理员",
    token: ""
  },
  drawer: true,
  headTitle: '',
  mini: false,
  menuItems: [{
      title: "数据看版",
      icon: "mdi-view-dashboard",
      to: "/admin/dashboard",
    },
    {
      title: "系统账号",
      icon: "mdi-account",
      items: [{
        title: "用户管理",
        icon: "mdi-account-box-multiple-outline",
        items: [{
          title: "用户列表",
          to: "/admin/user/list",
        }, {
          title: "用户添加",
          to: "/admin/user/add",
        }, {
          title: "用户详情",
          to: "/admin/user/detail",
        }, {
          title: "用户编辑",
          to: "/admin/user/edit",
        }]
      }, ]
    },
    {
      title: "主题设置",
      icon: "mdi-brightness-4",
      to: "/admin/theme",
    },
  ],
}

export default new Vuex.Store({
  strict: true,
  state: state,
  mutations: make.mutations(state),
  // actions: {
  //   ...make.actions(state),
  //   init: async ({
  //     dispatch
  //   }) => {

  //   },
  // },
  plugins: [
    pathify.plugin,
    vuexLocal.plugin
  ]
})