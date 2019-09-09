<template>
  <div class="j-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item,ind) in itemObj" :key="ind"
                          :to="{name: item.name}">{{showTitle(item)}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "j-breadcrumb",
    computed: {
      itemObj () {
        let listArr = []
        this.$route.matched.forEach(item => {
          listArr.push({name: item.name, title: item.meta.title})
        })
        if (listArr && listArr.length >= 2) {
          let obj = listArr[1].name
          if (obj.indexOf('detail') !== -1) {
            let fatherNm = obj.substring(0, obj.indexOf('_detail'))
            let fatherTitle = ''
            switch (fatherNm) {
              case 'JXJY_F_news':
                fatherTitle = '新闻动态'
                break
              case 'JXJY_F_policies':
                fatherTitle = '政策法规'
                break
              case 'JXJY_F_notice':
                fatherTitle = '公告通知'
                break
              case 'JXJY_F_active':
                fatherTitle = '活动风采'
                break
            }
            let father = {name: fatherNm, title: fatherTitle}
            listArr.splice(1, 0, father)
          }
        }
        return listArr
      }
    },
    methods: {
      showTitle (obj) {
        if (obj.name === 'JXJY_F') {
          return '首页'
        } else {
          return obj.title
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .j-breadcrumb {
    margin-bottom: 5px;
    .el-breadcrumb /deep/ {
      .el-breadcrumb__item:not(:last-child) {
        .is-link {
          color: $theme-color
        }
      }
    }
  }
</style>
