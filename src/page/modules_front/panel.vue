<template>
  <div class="front">
    <div class="front-wrap">
      <div class="front-content">
        <j-header></j-header>
        <div class="container">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
    <j-footer class="front-footer"></j-footer>
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
  .front {
    height: 100%;
  }

  .front-wrap {
    min-height: 100%;
  }

  .front-content {
    box-sizing: border-box;
    padding-bottom: 60px;
  }

  .front-footer {
    margin-top: -60px;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0;
  }
</style>
