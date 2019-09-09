<template>
  <div class="j-header minWidth flexCol">
    <div class="j-header-center" :style="{height: isHome}">
      <img src="~@/assets/image/title.png" alt="">
    </div>
    <div class="j-header-nav minWidth">
      <ul>
        <li v-for="(item, ind) in menuList" :key="ind" v-if="item.meta.isNavMenu"
            :class="{active: isActiveInd===ind}"
            @click="toPage(item.name, ind)">{{item.meta.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import menu from '@/router/modules/front'

  export default {
    name: "j-header",
    data() {
      return {
        isActiveInd: 0,
        menuList: menu[0].children
      }
    },
    computed: {
      isHome() {
        if (this.$route.name === 'JXJY_F_index') return '410px'
        return '250px'
      }
    },
    methods: {
      toPage(name, ind) {
        this.$router.push({name: name})
      }
    },
    watch: {
      $route: {
        handler(newRouter, oldRouter) {
          let ind = this.menuList.findIndex(item => {
            return item.name === newRouter.name
          })
          if (ind && ind % 2 === 0) {
            this.isActiveInd = ind - 1
          } else {
            this.isActiveInd = ind
          }
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .j-header {
    width: 100%;
    text-align: center;
    justify-content: space-between;
    &-center {
      width: 100%;
      height: 100%;
      background-image: url("~@/assets/image/bg.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      img{
        margin-top: 90px;
      }
    }
    &-nav {
      width: 100%;
      height: 50px;
      background-color: $theme-color;
      display: flex;
      align-items: center;
      justify-content: center;
      ul {
        margin: 0;
        padding: 0;
        display: inline-block;
        li {
          list-style: none;
          float: left;
          font-size: 18px;
          color: #FFFFFF;
          margin: 0 50px;
          padding-bottom: 6px;
          padding-top: 6px;
          cursor: pointer;
        }
        .active {
          border-bottom: 3px solid #ffff
        }
      }
    }
  }
  @media(min-width: 1920px){
    .j-header-center {
        background-image: url("~@/assets/image/bg@2x.png");
        background-position: center;
        background-size: cover;
      }
  }
</style>
