<!-- 商品列表 -->
<template>
<div class='goodlist'>
    <ul >
         <li v-for="item in List" :key="item.goods_id">
            <router-link :to="'/detail/?goods_id='+item.goods_id">
             <img :src="'http://localhost:3000/'+item.goods_img" alt="">
             <h2>{{item.goods_name}}</h2>
             <p>{{item.shop_price}}</p>
              </router-link> 
         </li>
    </ul>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
        
};
},
//监听属性 类似于data概念
computed: {
   
},
props:{
    List:Array
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
mounted() {
    
},

}
</script>
<style lang="less">
 .goodlist{
   width: 100%;
   margin-top: 5.3rem;
  
   ul{
   display: flex;
   flex-wrap: wrap;
 li{
    width: 50%;
    text-align: center;
    height: 29.1rem;
    background-color: white;
    img{
        margin-left: 5%;
        width: 90%;
        height: 17.8rem;
    }
    h2{
         font-size: 1.2rem;
        color: #333;
        text-align: left;
        width: 90%;
        margin-left: 5%;
        line-height: 2rem;
        height: 4rem;
        overflow: hidden;  // 文字溢出隐藏
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 2rem;
    }
    p{
    font-size: 16px;
    font-weight: 700;
    display: inline-block;
    color: rgb(242, 14, 40);
    }
   }
 
  }
 }

</style>