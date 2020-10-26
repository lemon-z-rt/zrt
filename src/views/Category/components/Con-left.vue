<!-- 主体左部 -->
<template>
<div class='con-left'>
    <ul>
        <li v-for="item in this.$store.state.leftData" :key="item.menu_id">
            <router-link :to="'/category/'+item.category_id" tag="p">{{item.menu_name}}</router-link>
        </li>
    </ul>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//import Axios from "axios"
export default {
//import引入的组件需要注入到对象中才能使用
// 引入第三方axious 

components: {},
data() {
//这里存放数据
return {
        
};
},
//监听属性 类似于data概念
computed: {
   
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    // getCategorydatas(){
    //     Axios.get("/api/v1/category").then(success=>{
    //         if(success.data.status==200){
    //             this.$store.commit("getCategorydatas",success.data.data)
    //              console.log(this);
    //         }
    //     })
    // }
},
mounted() {
    //this.getCategorydatas()
    this.$store.dispatch("actGetLeftDatas")
},
}
</script>
<style lang="less">
   .con-left{
       width: 8.4rem;
       height: 100%;
       background: #fff;
       ul{
            overflow-y: scroll; // 超出内容出现滚动条
            width: 8.4rem;
            height: 100%;
           li{ font-size: 1.4rem;
                height: 3.8rem;
               line-height: 3.8rem;
               color: #999;
               text-align: center;
           }
           .router-link-active{
             display: block;
             background: #fff;
             color: red;
           }
       }
   }

</style>