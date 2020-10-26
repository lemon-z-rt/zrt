// 将第三方工具从这里引入和使用
import Vue from 'vue'
import App from './App.vue'

//  导入路由模块
import router from './route/index.js'

import MintUI from 'mint-ui'  //引入mint-ui模块
import 'mint-ui/lib/style.css' //引入mint-ui的css

//ly-tab  一个用于移动端的可触摸滑动具有回弹效果的可复用Vue组件
//npm i ly-tab -S  下载
import LyTab from 'ly-tab'  //引入
Vue.use(LyTab)  //使用
Vue.use(MintUI) //使用mint-ui

// 引入store模块 为全局引用
import  store from "../src/vuex/store.js"

Vue.config.productionTip = false

new Vue({
  router, // 将路由模块挂载到实例中
  store,
  render: h => h(App),
}).$mount('#app')
