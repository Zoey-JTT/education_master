<template>
  <div class="home">
    <section class="flexRow menu">
      <div class="menu-left">
        <ul class="flexRow ulReset menu-left-list">
          <li><i class="iconfont icon-ruzhuchuangxinjidi"></i>基地管理</li>
          <li><i class="iconfont icon-shijian"></i>学时查询</li>
          <li><i class="iconfont icon-zaixianxuexi"></i>在线学习</li>
          <li><i class="iconfont icon-kaoshiok"></i>考试测试</li>
        </ul>
      </div>
      <div class="menu-right">
        <el-button class="btn">登录/注册</el-button>
      </div>
    </section>
    
    <section class="flexRow flex_1">
      <div class="img-list marginRight20" v-loading="bannerLoading">
        <el-carousel v-if="bannerObj.length" :interval="5000" trigger="click" height="100%">
          <el-carousel-item v-for="(item, ind) in bannerObj" :key="ind" v-if="ind<5">
            <img :src="item.imgUrl" alt="" width="100%" height="100%">
            <p class="title">{{item.title}}</p>
          </el-carousel-item>
        </el-carousel>
        <p v-else class="no-data-tip">暂无数据</p>
      </div>
      <j-list title="新闻动态" :options="newsObj" name="news" :cont="newCont"
              :hasBgColor="false" v-loading="newsLoading"></j-list>
    </section>
    
    <section class="step flexRow">
      <div class="step-title">
        <img src="~@/assets/image/pic-1.1.png" alt="">
        <img src="~@/assets/image/pic-1.2.png" alt="">
        <div class="step-title-text flexCol">
          <p>继续教育</p>
          <p>在线学习流程</p>
        </div>
      </div>
      <div class="step-detail">
        <ul class="ulReset flexRow flex_1">
          <li>
            <i class="iconfont icon-yonghu"></i>
            <p>注册登录</p>
          </li>
          <li>
            <i class="iconfont icon-shu" style="font-size: 40px"></i>
            <p>在线选课</p>
          </li>
          <li>
            <i class="iconfont icon-zaixianxuexi"></i>
            <p>在线学习</p>
          </li>
          <li>
            <i class="iconfont icon-dayin" style="font-size: 45px"></i>
            <p>证书打印</p>
          </li>
          <li>
            <i class="iconfont icon-kaoshi" style="font-size: 40px"></i>
            <p>在线测试</p>
          </li>
          <li>
            <i class="iconfont icon-shijian" style="font-size: 50px"></i>
            <p>学时查询</p>
          </li>
        </ul>
      </div>
    </section>
    
    <section class="flexRow flex_1">
      <j-list title="政策法规" :options="policiesObj" name="policies" class="marginRight20" v-loading="policiesLoading"></j-list>
      <j-list title="公告通知" :options="noticeObj" name="notice" v-loading="noticeLoading"></j-list>
    </section>
    
    <section class="flexRow flex_1" style="justify-content: space-between">
      <img src="~@/assets/image/pic-2.1.png" alt="">
      <img src="~@/assets/image/pic-2.2.png" alt="">
      <img src="~@/assets/image/pic-2.3.png" alt="">
      <img src="~@/assets/image/pic-2.4.png" alt="">
    </section>
    
    <section class="flexRow flex_1">
      <j-list title="活动风采" :options="activeObj" name="active" class="marginRight20" width="50%" v-loading="activeLoading"></j-list>
      <div class="flexRow flex_1">
        <j-list title="帮助中心" :hasMore="false" class="marginRight20 help">
          <div class="flexRow help-list">
            <ul class="ulReset">
              <li>
                <i class="iconfont icon-caozuozhinan" style="color: #28548F"></i>
                <span>操作指南</span>
              </li>
              <li>
                <i class="iconfont icon-xuexi" style="color: #DFA1C0"></i>
                <span>学习指南</span>
              </li>
              <li>
                <i class="iconfont icon-caozuozhinan1" style="color: #E4B0B1"></i>
                <span>常见问题</span>
              </li>
              <li>
                <i class="iconfont icon-wangshangtiaocha" style="color: #8CC4E5"></i>
                <span>网上调查</span>
              </li>
              <li>
                <i class="iconfont icon-zhinan" style="color: #A2CDC7"></i>
                <span>入学指南</span>
              </li>
              <li>
                <i class="iconfont icon-jiagou" style="color: #E5B17D"></i>
                <span>课程架构</span>
              </li>
            </ul>
            <ul class="ulReset">
              <li>
                <i class="iconfont icon-kecheng" style="color: #B994BC"></i>
                <span>课程学习</span>
              </li>
              <li>
                <i class="iconfont icon-wangshangtiaocha1" style="color: #B8D39D"></i>
                <span>意见征集</span>
              </li>
              <li>
                <i class="iconfont icon-lianxiwomen" style="color: #BCAC92"></i>
                <span>联系我们</span>
              </li>
              <li>
                <i class="iconfont icon-shouji" style="color: #BEAE93"></i>
                <span>手机学习</span>
              </li>
            </ul>
          </div>
        </j-list>
        <j-list title="友情链接" :hasMore="false" class="link-list">
          <ul class="ulReset">
            <li><a href="###">浙江人事考试网</a></li>
            <li><a href="###">国家专技人才知识更新工程</a></li>
            <li><a href="###">宁波市人力资源和社会保障</a></li>
            <li><a href="###">宁波人才培训网</a></li>
            <li><a href="###">广州市政府系统培训中心网</a></li>
            <li><a href="###">中国国家人事人才培训网</a></li>
          </ul>
        </j-list>
      </div>
    </section>
  </div>
</template>

<script>
  import jList from '@/components/page-components/j-list/j-list'
  import {mapActions} from 'vuex'
  import query from '@/libs/query'
  
  export default {
    name: "home",
    data () {
      return {
        newCont: '', // 首条新闻内容
        newsObj: [], // 新闻动态
        policiesObj: [], // 政策法规
        noticeObj: [], // 公告通知
        activeObj: [], // 活动风采
        bannerObj: [], // 轮播图
        newsLoading: false, // 新闻动态-加载
        policiesLoading: false, // 政策法规-加载
        noticeLoading: false, // 公告通知-加载
        activeLoading: false, // 活动风采-加载
        bannerLoading: false, // 轮播图-加载
      }
    },
    methods: {
      ...mapActions('front', ['getFrontList', 'getBannerList', 'getFrontListDetail']),
      // 获取轮播图
      getBannerInfo () {
        this.bannerLoading=true
        this.getBannerList().then(res => {
          this.bannerLoading=false
          this.bannerObj = res.list
        }).catch(err => {
          this.bannerLoading=false
          this.$message.error(err)
        })
      },
      // 获取新闻动态，政策法规，公告通知，活动风采
      getListInfo (type, obj, loading) {
        this[loading]=true
        let qry = query.new()
        qry = query.toP(qry, 1, 10)
        this.getFrontList({type: type, param: qry}).then(res => {
          this[loading]=false
          if (res) {
            this[obj] = res.data.list
          }
        }).catch(err => {
          this[loading]=false
          this.$message.error(err)
        })
      },
      getCont () {
        if (!this.newsObj[0]) return
        this.getFrontListDetail({id: this.newsObj[0].id}).then(res => {
          this.newCont = res.cont
        }).catch(err => {
          this.$message.error(err)
        })
      }
    },
    watch:{
      newsObj(){
        this.getCont()
      }
    },
    created () {
      this.getBannerInfo()
      this.getListInfo('news', 'newsObj', 'newsLoading')
      this.getListInfo('policies', 'policiesObj', 'policiesLoading')
      this.getListInfo('notice', 'noticeObj', 'noticeLoading')
      this.getListInfo('active', 'activeObj', 'activeLoading')
    },
    components: {jList}
  }
</script>

<style lang="scss" scoped>
  .marginRight20 {
    margin-right: 20px;
  }
  
  .home {
    section {
      width: 100%;
      margin-bottom: 30px;
    }
    .menu {
      width: 100%;
      height: 90px;
      &-left {
        width: 80%;
        height: 100%;
        background-color: #DEECFF;
        margin-right: 10px;
        &-list {
          justify-content: space-between;
          li {
            width: 25%;
            text-align: center;
            line-height: 90px;
            font-size: 30px;
            color: #333333;
            letter-spacing: 10px;
            position: relative;
            & > i {
              font-size: 30px;
            }
            .icon-ruzhuchuangxinjidi {
              color: #8C59FF;
              font-size: 40px;
              position: relative;
              top: 4px;
            }
            .icon-shijian {
              color: #4FD3F9;
              font-size: 30px
            }
            .icon-zaixianxuexi {
              color: #35CCC4;
              font-size: 25px
            }
            .icon-kaoshiok {
              color: #FB8261;
            }
            &:not(:last-child)::after {
              content: '';
              width: 2px;
              height: 30px;
              background-color: #A0A0A0;
              border-radius: 1px;
              position: absolute;
              top: calc(50% - 15px);
              right: 0;
            }
          }
        }
      }
      &-right {
        width: 20%;
        height: 100%;
        .btn {
          width: 100%;
          height: 100%;
          color: #fff;
          font-size: 30px;
          border-radius: 4px;
          background-color: $theme-color;
        }
      }
    }
    .step {
      height: 160px;
      background-color: #4A7CCD;
      &-title {
        width: 190px;
        height: 100%;
        position: relative;
        img {
          position: absolute;
          top: 0;
          left: 0;
        }
        &-text {
          width: 178px;
          height: 100%;
          justify-content: center;
          p {
            font-size: 20px;
            color: #fff;
            text-align: center;
            line-height: 32px;
            letter-spacing: 4px;
          }
        }
      }
      &-detail {
        width: 100%;
        ul {
          width: 100%;
          height: 100%;
          color: #fff;
          text-align: center;
          justify-content: space-around;
          li {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            i {
              border: 2px solid #fff;
              width: 94px;
              height: 94px;
              border-radius: 50%;
              line-height: 94px;
              font-size: 35px;
              margin: 0 auto;
              background: rgba(110, 150, 215, 1);
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
            }
            p {
              font-size: 16px;
              margin-top: 15px;
            }
            &:not(:last-child)::after {
              content: "\ec6e";
              font-family: "iconfont";
              font-size: 40px;
              position: absolute;
              top: 45px;
              right: -20px;
            }
          }
        }
      }
    }
    .img-list {
      border: 1px solid #D1D1D1;
      width: 100%;
      .title {
        position: absolute;
        bottom: 0px;
        font-size: 15px;
        color: white;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 8px 90px 8px 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
    }
    .link-list {
      font-size: 14px;
      ul {
        padding: 0 10px;
        line-height: 30px;
        a {
          color: $theme-color;
        }
      }
    }
    .help {
      font-size: 14px;
      color: #333;
      &-list {
        height: 100%;
        justify-content: space-between;
        ul {
          padding: 0 15px;
          li {
            line-height: 35px;
            cursor: pointer;
            i {
              font-size: 24px;
            }
          }
        }
      }
    }
    .el-carousel {
      height: 100%;
    }
    .el-carousel--horizontal {
      overflow: hidden;
    }
    /deep/ .el-carousel__indicators--horizontal {
      bottom: 0;
      right: -6%;
      left: auto;
    }
    /deep/ .el-carousel__button {
      width: 10px;
    }
  }
</style>
