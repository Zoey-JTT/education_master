export default [
  {
    path: '/',
    name: 'JXJY_F',
    redirect: {name: 'JXJY_F_index'},
    component: resolve => {
      require(['@/page/modules_front/panel'], resolve)
    },
    children: [
      {
        path: '/JXJY_F/index',
        name: 'JXJY_F_index',
        component: resolve => {
          require(['@/page/modules_front/modules/home/home'], resolve)
        },
        meta: {
          title: '首页',
          isNavMenu: true
        }
      },
      {
        path: '/JXJY_F/news',
        name: 'JXJY_F_news',
        component: resolve => {
          require(['@/page/modules_front/modules/list/list'], resolve)
        },
        meta: {
          title: '新闻动态',
          isNavMenu: true
        }
      },
      {
        path: '/JXJY_F/news/detail',
        name: 'JXJY_F_news_detail',
        component: resolve => {
          require(['@/page/modules_front/modules/detail/detail'], resolve)
        },
        meta: {
          title: '详情',
          isNavMenu: false
        }
      },
      {
        path: '/JXJY_F/policies',
        name: 'JXJY_F_policies',
        component: resolve => {
          require(['@/page/modules_front/modules/list/list'], resolve)
        },
        meta: {
          title: '政策法规',
          isNavMenu: true
        }
      },
      {
        path: '/JXJY_F/policies/detail',
        name: 'JXJY_F_policies_detail',
        component: resolve=>{
          require(['@/page/modules_front/modules/detail/detail'],resolve)
        },
        meta:{
          title: '详情',
          isNavMenu: false
        }
      },
      {
        path: '/JXJY_F/notice',
        name: 'JXJY_F_notice',
        component: resolve => {
          require(['@/page/modules_front/modules/list/list'], resolve)
        },
        meta: {
          title: '公告通知',
          isNavMenu: true
        }
      },
      {
        path: '/JXJY_F/notice/detail',
        name: 'JXJY_F_notice_detail',
        component: resolve=>{
          require(['@/page/modules_front/modules/detail/detail'],resolve)
        },
        meta:{
          title: '详情',
          isNavMenu: false
        }
      },
      {
        path: '/JXJY_F/active',
        name: 'JXJY_F_active',
        component: resolve => {
          require(['@/page/modules_front/modules/list/list'], resolve)
        },
        meta: {
          title: '活动风采',
          isNavMenu: true
        }
      },
      {
        path: '/JXJY_F/active/detail',
        name: 'JXJY_F_active_detail',
        component: resolve=>{
          require(['@/page/modules_front/modules/detail/detail'],resolve)
        },
        meta:{
          title: '详情',
          isNavMenu: false
        }
      },
    ]
  }
]
