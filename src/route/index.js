//  路由入口  需要导入vue模块 和 vue-router
// vue-router需要下载
import Vue from "vue";
import VueRouter from "vue-router";

// 使用 
Vue.use(VueRouter)


// 创建组件---新建.vue文件 --导入文件（通常组件名称为大写字母开头）

import Home from "../views/Home/home.vue";
import Mine from "../views/Mine/mine.vue";
import Search from "../views/Search/search.vue";
import Category from "../views/Category/category.vue";
import Cars from "../views/Cars/cars.vue";
import Login from "../views/login/login"

// 创建 引入子组件
import Phone from "../views/Home/children/Phone";
import Person from "../views/Home/children/Person";
import Dressing from "../views/Home/children/dressing";
import Box from "../views/Home/children/Box";
import Ele from "../views/Home/children/Ele";
import House from "../views/Home/children/House";
import Computer from "../views/Home/children/Computer";
import index from "../views/Home/children/Index";
import List from "../views/Category/components/list";
import Detail from "../views/Goodsdetail/detail"



// 配置路由

const routes = [{
    path:"/home",
    name:"home", // 可以通过this.$router.name  找到属性值
    component:Home,
    children:[
        {path:"index", component:index},
        {path:"box", component:Box},
        {path:"house", component:House},
        {path:"ele", component:Ele},
        {path:"person", component:Person},
        {path:"dressing", component:Dressing},
        {path:"computer", component:Computer},
        {path:"phone", component:Phone},
        {path:"/home", redirect:"/home/index"},
    ]
},
{
    path:"/search",
    name:"search", // 
    component:Search
},
{
    path:"/",
    redirect:"/home/index"
},
{
    path:"/mine",
    name:"mine",
    component:Mine
},
{
    path:"/category/:cid", // 配置动态路由
    name:"category",
    component:Category
},{
    path:"/cars",
    name:"cars",
    component:Cars
}
,{
    path:"/list",
    name:"list",
    component:List
},
{
    path:"/detail",
    name:"detail",
    component:Detail
},
{
    path:"/login",
    name:"login",
    component:Login
},]
//  实例化路由对象
const router = new VueRouter({
    routes
})
// 要将路由内容 暴漏出去
 export default router
