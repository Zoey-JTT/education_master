<template>
  <div>
    <j-list-detail>
      <ul slot="cont" class="ulReset" v-loading="loading">
        <li v-for="(item, ind) in list" :key="ind" @click="toDetailPage($route.name+'_detail', item.id)">
          {{item.title}}
        </li>
        <li v-if="!list.length">暂无数据</li>
      </ul>
      <div slot="pagination" class="pagination">
        <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
                       @current-change="currentChangeHandle"></el-pagination>
      </div>
    </j-list-detail>
  </div>
</template>

<script>
  import jListDetail from '@/components/page-components/j-list-detail/j-list-detail'
  import {mapActions} from 'vuex'
  import query from '@/libs/query'
  
  export default {
    name: "list",
    data () {
      return {
        loading: false,
        list: [], // 列表
        type: '', // 新闻动态，政策法规，公告通知等
        total: 0, // 总条数
        pageSize: 5 //每页条数
      }
    },
    methods: {
      ...mapActions('front', ['getFrontList']),
      
      // 获取新闻动态，政策法规，公告通知，活动风采
      getListInfo (curPage) {
        this.loading = true
        let qry = query.new()
        qry = query.toP(qry, curPage, 5)
        this.getFrontList({type: this.type, param: qry}).then(res => {
          this.loading = false
          if (res) {
            this.list = res.data.list
            this.total = res.page.total
          }
        }).catch(err => {
          this.loading = false
          this.$message.error(err)
        })
      },
      // 分页
      currentChangeHandle (val) {
        this.getListInfo(val)
      },
      // 跳至详情页
      toDetailPage (name, id) {
        this.$router.push({name: name, params: {id: id}})
      }
    },
    watch: {
      $route: {
        handler (newRouter, oldRouter) {
          if (!newRouter.name) return
          switch (newRouter.name) {
            case 'JXJY_F_news':
              this.type = 'news'
              break
            case 'JXJY_F_policies':
              this.type = 'policies'
              break
            case 'JXJY_F_notice':
              this.type = 'notice'
              break
            case 'JXJY_F_active':
              this.type = 'active'
              break
            default:
          }
          this.getListInfo(1)
        },
        immediate: true
      }
    },
    components: {jListDetail}
  }
</script>

<style lang="scss" scoped>
</style>
