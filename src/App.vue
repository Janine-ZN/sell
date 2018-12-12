<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <!-- 使用指令 router-link 组件来导航 -->
        <!-- 通过传入  to 属性指定链接 -->
        <!-- <router-link> 默认会被渲染成一个 <a> 标签 -->
        <router-link to="/goods">
          商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">
          评论
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">
          商家
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

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  const ERR_OK = 0
  export default{
      data() {
        return {
            seller: {}
        }
      },
      created() {
        this.$http.get('/api/seller').then(response => {
          response = response.body
          if (response.errno === ERR_OK) {
              this.seller = response.data
              console.log(this.seller)
          }
        })
      },
      components: {
          'v-header': header
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"
 #app
    .tab
      display : flex
      width : 100%
      height : 40px
      line-height : 40px
      //border-bottom : 1px solid rgba(7,17,27,.1)
      border-1px(rgba(7,17,27,.1))
      .tab-item
        flex:1
        text-align : center
        font-size: 14px
        color: rgb(77,85,93)
        & > a
          display : block
          &.active
            color: rgb(240,20,20)
</style>
