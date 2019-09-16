<template>
  <div class="j-list" :style="{width: width}" :class="{hasBgColor: !hasBgColor}">
    <div class="j-list-head">
      <h4 v-if="!hasBgColor" class="j-list-head-title" @click="toDetailInfo('JXJY_F_'+name, null)">{{title}}</h4>
      <h4 v-else class="j-list-head-title">{{title}}</h4>
      <span v-if="hasBgColor && hasMore" class="j-list-head-more"
            @click="toDetailInfo('JXJY_F_'+name, null)">更多 <i class="icon el-icon-arrow-right"></i>
      </span>
    </div>
    <div class="j-list-cont">
      <slot>
        <div v-if="!hasBgColor">
          <h4 class="j-list-cont-detail-title" v-if="options[0]">{{options[0].title}}</h4>
          <div class="j-list-cont-detail">
            <p v-if="cont" v-html="cont"></p>
            <p v-else class="no-data-tip">暂无数据</p>
          </div>
        </div>
        <ul v-if="options.length" class="ulReset lists">
          <li v-for="(item, ind) of options" :key="ind" v-if="hasBgColor?ind<8:ind<6&&ind!=0">
            <p class="item-title" @click="toDetailInfo('JXJY_F_'+name+'_detail', item.id)">{{item.title}}</p>
            <!--<span class="item-time">{{item.time}}</span>-->
          </li>
        </ul>
        <p v-else class="no-data-tip">暂无数据</p>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "j-list",
    data () {
      return {}
    },
    props: {
      width: { // 列表宽度
        type: String,
        default: ''
      },
      title: { // 标题
        type: String,
        default: ''
      },
      options: {  // 列表内容
        type: Array,
        default: () => [],
      },
      name: { // 详情页name
        type: String,
        default: ''
      },
      hasBgColor: { // 是否是由背景色的标题样式
        type: Boolean,
        default: true
      },
      hasMore: { // 是否有更多
        type: Boolean,
        default: true
      },
      cont: { // 首条新闻内容
        type: String,
        default: ''
      }
    },
    methods: {
      toDetailInfo (name, id) {
        this.$router.push({name: name, params: {id: id}})
      },
    }
  }
</script>

<style lang="scss" scoped>
  .hasBgColor {
    .j-list-head-title {
      background: none;
      color: $theme-color;
      border-left: 4px solid $theme-color;
      padding: 0 10px;
      border-radius: 0;
      cursor: pointer;
    }
    .j-list-cont {
      border: none;
      border-top: 2px solid $theme-color;
      margin-top: 10px;
      &-detail-title {
        text-align: center;
        color: $theme-color;
        font-size: 24px;
        margin: 10px 0 20px 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &-detail /deep/ {
        text-indent: 2rem;
        font-size: 14px!important;
        color: #666666!important;
        line-height: 24px;
        padding-bottom: 15px;
        margin-bottom: 20px;
        border-bottom: 1px solid #D3D3D3;
        p {
          max-height: 70px;
          overflow: hidden;
        }
        .MsoNormal /deep/ span{
          font-size: 14px;
          font-family: SourceHanSansCN-Normal!important;
        }
      }
    }
  }
  
  .j-list {
    width: 100%;
    &-head {
      position: relative;
      &-title {
        display: inline-block;
        background-color: $theme-color;
        color: #ffffff;
        font-size: 15px!important;
        padding: 8px 28px;
        border-radius: 4px 4px 0px 0px;
      }
      &-more {
        position: absolute;
        right: 0;
        top: 10px;
        font-size: 14px!important;
        color: #999999!important;
        cursor: pointer;
        i {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
    &-cont {
      height: calc(100% - 57px);
      min-height: 225px;
      border: 1px solid #D1D1D1;
      margin-top: 1px;
      padding: 10px;
      .lists {
        padding: 0 20px;
        font-size: 14px!important;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        li::before {
          content: '';
          width: 4px;
          height: 4px;
          background-color: #D3D3D3;
          position: absolute;
          top: 12px;
          left: -15px;
        }
        li {
          width: auto;
          line-height: 35px;
          font-size: 14px!important;
          position: relative;
          .item-title {
            width: auto;
            color: #666666!important;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
          }
          .item-title:hover {
            color: $theme-color
          }
          .item-time {
            color: #999999;
            position: absolute;
            right: -15px;
            top: 0;
          }
        }
      }
    }
  }
</style>
