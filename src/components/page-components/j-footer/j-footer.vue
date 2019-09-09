<template>
  <div class="j-footer" :style="{height: isHome}">
    <p :style="{top: isHomeTop}">政府网站标识码:1100000062 浙公网安备:110102000777 ICP备案序号:京ICP备05056884号</p>
  </div>
</template>

<script>
  export default {
    name: "j-footer",
    computed: {
      isHome () {
        return this.$route.name === 'JXJY_F_index' ? '100px' : '60px'
      },
      isHomeTop () {
        return this.$route.name === 'JXJY_F_index' ? '35px' : '25px'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .j-footer {
    width: 100%;
    background-color: #244F8A;
    text-align: center;
    p {
      font-size: 14px;
      color: #ffffff;
      position: relative;
      top: 35px;
    }
  }
</style>
