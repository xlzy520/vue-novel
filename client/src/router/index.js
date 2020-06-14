//配置路由信息

import Vue from 'vue';
import VueRouter from 'vue-router';
import index from "@/components/index";
import detail from "@/components/detail";
import content from "@/components/content";
//通过Vue.use()方法来安装vue-router插件
Vue.use(VueRouter);

//创建路由对象

const router = new VueRouter({
    mode:'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
    routes:[{
        path:'/',
        component:index,
        meta:{
            title:'爬虫聚合展示首页'
        }
    },{
        path:'/detail',
        component: detail,
        meta:{
            title: '详情页'
        }
    },
        {
            path:'/content',
            component: content,
            meta:{
                title: '小说内容'
            }
        }

    ]
})

//将router传入Vue实例中
export default router
