<template>
  <div class="flexRow list">
    <div class="list-aside">
      <ul class="ulReset">
        <li v-for="(item, ind) in menuList" v-if="item.meta.isNavMenu && ind!=0"
            @click="toPage(item.name)">{{item.meta.title}}
        </li>
      </ul>
    </div>
    <div class="list-section flexCol">
      <div class="list-section-cont">
        <j-breadcrumb></j-breadcrumb>
        <slot name="cont"></slot>
      </div>
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script>
  import jBreadcrumb from '@/components/page-components/j-breadcrumb/j-breadcrumb'
  import menu from '@/router/modules/front'
  
  export default {
    name: "j-list-detail",
    props: {
      isList: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      menuList () {
        return menu[0].children
      }
    },
    methods:{
      toPage(name){
        this.$router.push({name: name})
      }
    },
    components: {jBreadcrumb}
  }
</script>

<style lang="scss" scoped>
  .list {
    &-aside {
      margin-right: 30px;
      li {
        width: 180px;
        height: 45px;
        line-height: 45px;
        color: #fff;
        font-size: 18px;
        background-color: #4A7CCD;
        margin-bottom: 2px;
        cursor: pointer;
        text-align: center;
      }
    }
    &-section {
      width: 0;
      flex: 1;
      justify-content: space-between;
      &-cont {
        border-left: 1px solid #ddd;
        padding: 0 50px 20px 50px;
        li {
          font-size: 14px;
          color: #333;
          padding: 20px 0;
          border-bottom: 1px solid #ddd;
          cursor: pointer;
        }
        li:hover {
          color: $theme-color;
        }
      }
      .pagination {
        margin: 10px auto;
        .el-pagination /deep/ .el-pager /deep/ .active {
          background-color: #244F8A;
        }
        .el-pagination /deep/ .el-pager /deep/ li:not(.active):hover {
          color: #244F8A;
        }
      }
    }
  }
</style>
