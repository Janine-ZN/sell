<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      I am tab
    </div>
    <div class="footer">
      I am footer
    </div>
  </div>
</template>

<script>
  import header from './components/header/Header.vue'
  export default{
      components: {
          'v-header': header
      }
  }
</script>

<style>

</style>
