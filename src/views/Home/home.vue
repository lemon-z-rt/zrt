<!--  -->
<template>
<div class='home'>
   <Header></Header>
    <div class="nav-list">
      <ly-tab
    v-model="selectedId"
    :items="items"
    :options="options"
    @change="changeFn">
      </ly-tab>
        <div class="category-link">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
        <span>分类</span>
      </div>
    </div>
     <div style="height:8.8rem"></div>
     <router-view></router-view>
    <Footer />
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
import  Header from "./components/Homeheader";
import { Indicator } from 'mint-ui';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Footer,
    Header,
},
data() {
//这里存放数据
return {
    selectedId: 0,
     items: [
        {
          label: "首页",
        },
        {
          label: "家用电器",
        },
        {
          label: "男装女装",
        },
        {
          label: "鞋靴箱包",
        },
        {
          label: "手机数码",
        },
        {
          label: "电脑办公",
        },
        {
          label: "家具家访",
        },
        {
          label: "个人化妆",
        },
      ],
       options: {
        activeColor: '#fff'
        // 可在这里指定labelKey为你数据里文字对应的字段名
      },
      childrenRouter: [
        "/home/index",
        "/home/ele",
        "/home/person",
        "/home/box",
        "/home/phone",
        "/home/computer",
        "/home/house",
        "/home/dressing",
      ],

};
},
methods: {
      changeFn(item, index) {
      console.log(item);
      console.log(index);
      this.$router.push(this.childrenRouter[index]);
    },
},
mounted() {
    setTimeout(()=>{
         Indicator.close();
    },500)
},

}
</script>
<style lang="less">
 .nav-list{
     display: flex;
     position: fixed;
     left: 0;
     top: 4.4rem;
     background: red;
     z-index: 999;
     .ly-tab{
       flex: 8.5;
         .ly-tabbar{
             background-color:red;
             box-shadow: 0 0px 0px 0px #eee;
             a{
                  color: #fff;
               }
         }
     }
     .category-link{
      flex: 1.5;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
       color: #fff;
      i {
        font-size: 1.6rem;
        padding-left: 5px;
        box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
      }
      span {
        font-size: 1.4rem;
      }
     }
 }
</style>