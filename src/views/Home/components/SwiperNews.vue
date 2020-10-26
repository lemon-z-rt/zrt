<!--  -->
<template>
<div class='swiper-news'>
    <img src="@/assets/hot.png" alt="">
     <div class="news">
         <ul ref="news" :class="{'trans':flag==true}">
             <li v-for="list in newsdata" :key="list.id" >{{list.item}}</li>
         </ul>
     </div>
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
    timer:'', // 
    flag:false,
    newsdata:[
        {id:1,item:"新闻111"},
        {id:2,item:"新闻222"},
        {id:3,item:"新闻333"},
        {id:4,item:"新闻444"},
    ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
        Changeli(){
              var oUl = this.$refs.news; // 获取dom节点
              this.flag = !this.flag; //函数内部为一个整体，没有顺序
              oUl.style.marginTop = "-5rem";
         setTimeout(()=>{
                   this.newsdata.push(this.newsdata[0])
                   this.newsdata.shift(this.newsdata[0])
                   oUl.style.marginTop = "0";
                   this.flag = !this.flag;
            },500)
        }  
},
mounted() {
  this.timer=setInterval(this.Changeli,2000);
},
destroyed() {
    clearInterval(this.timer)
},

}
</script>
<style lang="less">
 .swiper-news{
     border-top: 1px solid #eee;
     border-bottom: 1px solid #eee;
     width: 100%;
     display: flex;
     height: 5rem;
     img{
         width: 30%;
         height: 5rem;
     }
     .news{
         width: 70%;
         height: 5rem;
         margin-left: 10px;
        overflow: hidden;
        .trans{
            transition: all 1s ease;
        }
         ul{
              height: 20rem;
             li{
                  height: 5rem;
                  line-height:5rem; 
                  font-size: 1.6rem;
             }
         }
     }
 }
</style>