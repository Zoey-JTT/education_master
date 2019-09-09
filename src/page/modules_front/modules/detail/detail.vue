<template>
  <div>
    <j-list-detail>
      <div slot="cont" class="detail" v-loading="loading">
        <h3 class="detail-title">{{detailList.title}}</h3>
        <p class="detail-info">
          <!--<span>发表时间：{{detailList.time}}</span>-->
          <span>来源：{{detailList.source}}</span>
          <span>浏览量：{{detailList.readQty}}</span>
        </p>
        <div class="detail-cont">
          <p v-html="detailList.cont"></p>
          <p class="no-data-tip" v-if="!detailList.cont">暂无数据</p>
        </div>
      </div>
    </j-list-detail>
  </div>
</template>

<script>
  import jListDetail from '@/components/page-components/j-list-detail/j-list-detail'
  import {mapActions} from 'vuex'
  
  export default {
    name: "detail",
    data () {
      return {
        loading: false,
        detailList: []
      }
    },
    methods: {
      ...mapActions('front', ['getFrontListDetail']),
      getDetail (id) {
        this.loading = true
        this.detailList = []
        this.getFrontListDetail({id: id}).then(res => {
          this.loading = false
          this.detailList = res
        }).catch(err => {
          this.loading = false
          this.$message.error(err)
        })
      }
    },
    watch: {
      $route: {
        handler () {
          if (!this.$route.params.id) return
          this.getDetail(this.$route.params.id)
        },
        immediate: true
      }
    },
    components: {jListDetail}
  }
</script>

<style lang="scss" scoped>
  .detail {
    margin-top: 20px;
    text-align: center;
    color: #333;
    &-title {
      font-size: 22px;
    }
    &-info {
      font-size: 12px;
      color: #666;
      margin: 20px 0;
      span {
        margin: 0 10px;
      }
    }
    &-cont {
      font-size: 14px;
      text-align: left;
      text-indent: 2rem;
    }
  }
</style>
