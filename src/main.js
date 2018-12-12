// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue框架
import Vue from 'vue'
// 引入根组件
import App from './App'
// 引入路由设置
import router from './router'
// 引入样式
import 'common/stylus/index.styl'
// 引入 resource
import resource from 'vue-resource'

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

/*  定义实例 */
new Vue({
  el: '#app',
  router,
  resource,
  components: {App},
  template: '<App/>'
})
