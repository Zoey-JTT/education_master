<template>
  <div>
    <j-list-detail>
      <div slot="cont" class="detail" v-loading="loading">
        <h3 class="detail-title">{{detailList.title}}</h3>
        <p class="detail-info">
          <span v-if="detailList.crtTm">发表时间：{{detailList.crtTm}}</span>
          <span v-else>来源：无</span>
          <span v-if="detailList.source">来源：{{detailList.source}}</span>
          <span v-else>来源：无</span>
          <span>浏览量：{{detailList.readQty ? detailList.readQty : 0}}</span>
        </p>
        <div class="detail-cont">
          <p v-html="detailList.cont"></p>
          <p class="no-data-tip" v-if="!detailList.cont">暂无数据</p>
        </div>
        <div class="detail-files" v-if="detailList.fileDtoList && detailList.fileDtoList.length">
          <h4 class="detail-files-title">附件下载：</h4>
          <ul class="ulReset">
            <li v-for="(item, ind) in detailList.fileDtoList" :key="ind">
              <a :href="item.fileUrl" :download="item.name" target="_blank">{{item.name}}</a>
            </li>
          </ul>
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
        detailList: [],
      }
    },
    methods: {
      ...mapActions('front', ['getFrontListDetail']),
      getDetail (id) {
        this.loading = true
        this.detailList = []
        this.getFrontListDetail({id: id}).then(res => {
          this.loading = false
          res.crtTm = res.crtTm.slice(0, 10)
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
      line-height: 40px;
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
      line-height: 30px;
    }
    &-files {
      margin: 50px 0;
      text-align: left;
      &-title {
        font-size: 15px;
        margin-bottom: 10px;
      }
      li {
        padding: 0 10px !important;
        line-height: 25px;
        border: none !important;
        a {
          color: #244F8A;
          font-size: 14px;
        }
      }
    }
  }
</style>
