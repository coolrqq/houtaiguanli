import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import {
  Button, container, header, aside, main, menu, submenu, MenuItem, MenuItemGroup, Dropdown, DropdownMenu, DropdownItem, row, col, card, table, TableColumn, breadcrumb, breadcrumbItem
  , tag, Form, FormItem, Input, Select, Option, Switch, DatePicker, dialog, pagination,
} from 'element-ui'
import './assets/less/index.less'
import store from './store'
import http from 'axios'
import '../api/mock'
import { MessageBox, message } from 'element-ui';
Vue.config.productionTip = false

Vue.use(Button)
Vue.use(container)
Vue.use(header)
Vue.use(aside)
Vue.use(main)
Vue.use(submenu)
Vue.use(menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.use(row)
Vue.use(col)
Vue.use(card)
Vue.use(table)
Vue.use(TableColumn)
Vue.use(breadcrumb)

Vue.use(breadcrumbItem)
Vue.use(tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(dialog)
Vue.use(pagination)

// Vue.use(Message)
// Vue.use(MessageBox)










// axios想再全局使用需要绑定再vue的prototype属性上
Vue.prototype.$http = http

// Vue.prototype.$message = Message

// axios想再全局使用需要绑定再vue的prototype属性上
Vue.prototype.$MessageBox = MessageBox
Vue.prototype.$message = message

router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
    console.log('123');
  }
  // else if(token&&to.name === 'login'){
  //   next({ name: 'home' })

  // } 
  else {
    next()
  }
})


new Vue({
  render: h => h(App),
  router,
  store,
  created(){
    store.commit('addMenu',router)
  }

}).$mount('#app')
