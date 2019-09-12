<template>
  <div class="j-footer minWidth">
    <div>
      <p>主管单位：宁波市人力资源和社会保障局</p>
      <p>主办单位：宁波市人才培训中心（宁波市继续教育院）</p>
      <p>技术支持：宁波新连一连科技有限公司</p>
      <p>Copyright @ 2016 京公网安备11010102002485</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "j-footer"
  }
</script>

<style lang="scss" scoped>
  .j-footer {
    width: 100%;
    height: 150px;
    background-color: #244F8A;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 14px;
      color: #ffffff;
      margin: 10px 0;
      text-align: center;
    }
  }
</style>
