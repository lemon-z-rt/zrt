import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

// 导入模块
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"

// 实例化一个存储器
const store = new Vuex.Store({
    state,
    mutations,
    actions
})
// 暴漏出去
export default store

