<template>
  <div class="front">
    <j-header></j-header>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <j-footer></j-footer>
  </div>
</template>

<script>
  import jHeader from '@/components/page-components/j-header/j-header'
  import jFooter from '@/components/page-components/j-footer/j-footer'
  
  export default {
    name: "panel",
    components: {jHeader, jFooter}
  }
</script>

<style scoped>
  .front{
    height: 100%;
  }
  .container{
    width: 1200px;
    margin: 30px auto;
    min-height: calc(100% - 420px);
    /*height: auto !important;*/
    /*height: 100%;*/
  }
</style>
