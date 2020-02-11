import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Parent from '@/components/Parent'
import Child from '@/components/Child'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/parent',
      name: 'parent',
      component: Parent
    },
    {
      path: '/child',
      name: 'child',
      component: Child
    }
  ]
})
