<!-- 内容右部 -->
<template>
<div class='con-right'>
   <div class="loading" v-if="tab =='123'">   
    <img src="https://pic2.zhimg.com/50/v2-52452ae1f1ba04d14d5f513ff3a4019c_hd.jpg?source=1940ef5c" alt="">
   </div>
    <div class="ad">
        <a href="javascrpit:;">
   <img :src="ad" alt="">
        </a>
    </div>
    <div class="con-content" v-for="item in this.$store.state.rightData" :key="item.cat_id">
       <p>{{item.cat_name}}</p>
       <ul>
           <li v-for="list in item.child" :key="list.cat_id">
             <router-link :to="'/list?cat_id='+list.cat_id">
                  <img src="https://x.dscmall.cn/storage/images/202008/thumb_img/1153_thumb_G_1598580446008.jpg" alt="">
                <p>{{list.cat_name}}</p>
             </router-link>
              </li>
       </ul>
    </div>
    
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//import Axios from "axios"

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
         //rightlist:'',
         ad:'',
         tab:123
};
},
//监听属性 类似于data概念
computed: {
//    rightlist(){
//        return  this.$store.state.rightData
//    } 
},
//监控data中的数据变化
watch: {
    $route(to){
    // console.log(to); //对象，包含路由的信息
     this.tab= 'abc'
     var cid = to.params.cid
     this.$store.dispatch("actGetRightDatas",cid)
     var arr = this.$store.state.leftData.filter((item) => {
        return item.category_id == cid;
      });
      this.ad = arr[0].menu_img;
    }
},
//方法集合
methods: {
    getrightlist(){
             this.tab= 'abc'
            var arr = this.$store.state.leftData.filter((item) => {
                  return item.category_id == 858;
              });
            this.ad = arr[0].menu_img;  
        }

    //   getrightlist(cid){
    //       Axios.get(`/api/v1/category/categorylist/${cid}`).then(
    //           success=>{
    //              if(success.status==200){
    //                  this.rightlist = success.data.data
    //                  var arr = this.$store.state. catetoryDatas.filter((item)=>{
    //                      return item.category_id == cid 
    //                  })
    //                  this.ad = arr[0].menu_img;
    //                   this.tab= 'abc'
    //              }
    //           }
    //       )
    //   }
},
created() {
    
},
mounted() {
    //  console.log(this.$route); // 在params可以拿到传过来的cid
    //this.$store.dispatch("actGetRightDatas","858")
     this.$store.dispatch("actGetRightDatas","858")
     setTimeout(()=>{
       this.getrightlist()
     },100)
   
},

}
</script>
<style lang="less">
     .con-right{
      width: 100%;
      height: 100%;
       overflow-y: scroll;
       .loading{
           position: absolute;
           top:20%;
           left: 20%;
           
       }
    .ad{
        height: 9.6rem;
        margin-top: 1.1rem;
        border-radius: .2rem;
        
        img{
            width: 27rem;
            height: 9.6rem;
            margin-left: 10px;
        }
    }
    .con-content{
         width: 28rem;
         margin-top: 1.1rem;
         margin-left: 1.1rem;
       
         p{
             text-align: center;
             color: #333;
             height: 1.6rem;
             line-height: 1.6rem;
            margin: 1.1rem 0;
            font-size: 1.3rem;
         }
         ul{
             width: 100%;
             display: flex;
             flex-wrap: wrap;
             li{
                width: 33%;
                height: 8.2rem;
                text-align: center;
                margin-bottom: 2rem;
                text-align: center;
                 img{
                     width: 5.2rem;
                     height: 5.2rem;
                 }
             }
         }
    }
     }
</style>