import { createRouter, createWebHashHistory } from 'vue-router'
import HelloMs from '@/components/HelloMs.vue'
import { defineAsyncComponent } from 'vue';


/**异步引入其他模块代码 */
const msModule = Promise.resolve(
  defineAsyncComponent(() => import('ms1/msModule'))
)

let routes = [
  {
    path:'/',
    component:HelloMs
  },
  {
    path:'/ms',
    component: msModule
  }
]

export default createRouter({
  history:createWebHashHistory(),
  routes
})