import Vue from 'vue'
import Router from 'vue-router'
import Heat from '@/components/Heat'
import Search from '@/components/Search'
import Recommend from '@/components/Recommend'
// import vue from 'https://cdn.bootcss.com/vue/2.4.2/vue.min.js'
// import vue_resource from 'https://cdn.bootcss.com/vue-resource/1.3.4/vue-resource.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/heat',
      name: 'Heat',
      component: Heat
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
