import Vue from 'vue'
import Router from 'vue-router'
// 引入goods模板
import goods from '../components/goods/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/goods', component: goods}
  ]
})
