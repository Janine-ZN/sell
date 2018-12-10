<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <!-- 使用指令 router-link 组件来导航 -->
        <!-- 通过传入  to 属性指定链接 -->
        <!-- <router-link> 默认会被渲染成一个 <a> 标签 -->
        <router-link to="/goods">商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家
        </router-link>
      </div>
    </div>
    <!-- 路由外链 : 点击上面的 v-link 修改下面的router-view -->
    <router-view></router-view>
    <!--使用 router-view 替换 content-->
    <!--<div class="content">
      I am footer
    </div>-->
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  export default{
      components: {
          'v-header': header
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 #app
    .tab
      display : flex
      width : 100%
      height : 40px
      line-height : 40px
      .tab-item
        flex:1
        text-align : center

</style>
