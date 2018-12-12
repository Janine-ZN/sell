import Vue from 'vue'
import Router from 'vue-router'
// 引入goods模板
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    // 设置默认路由
    {path: '/', redirect: 'goods'},
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ],
  linkActiveClass: 'active'
})
