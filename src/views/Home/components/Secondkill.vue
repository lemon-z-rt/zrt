<!--  -->
<template>
<div class='kill'>
  <div class="kill-title">
   <div class="title-image">
     <img src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png?imageView2/2/format/webp" alt="">
   </div>
    <div class="distance"> <span>距离活动还剩</span>{{dd}}天，{{hh}}小时,活动结束</div>
  </div>
   <div class="tab">
     <ul class="ul">
       <li v-for="(item,index) in  datalist" :key="index" :class="now==index?'active':''"  @click="change(index)">
         <div>
           <strong>{{item.title}}</strong>
           <p>{{item.content}}</p>
         </div>
       </li>
     </ul>
      <div style="clear: both;"></div>
     <div class="content">
       <div  v-for="(list,index) in datalist" :class="now==index?'show':''" :key="list.id" >
         <ul class="tabul">
           <li v-for="attr in list.children" :key="attr.id">
              <div class="pic">
                <img :src=attr.url alt="">
              </div>
                <p>实木衣柜</p>
                <div class="price">6590</div>
                <del>9360</del>
           </li>
         </ul>
       </div>
     </div>
   </div>
 
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {

},
data() {
//这里存放数据
return {
      dd:'',
      hh:'',
      mm:'',
      ss:'',
      timer:'',
      now:0,
     datalist:[
     {id:1,title:'16:00',content:"抢购中",children:[
       {id:1001,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg?imageView2/2/format/webp"},
       {id:1002,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105638483.jpg?imageView2/2/format/webp"},
       {id:1003,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp"},
       {id:1004,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg?imageView2/2/format/webp"},
       {id:1005,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097621751.jpg?imageView2/2/format/webp"},
       {id:1006,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097011644.jpg?imageView2/2/format/webp"},
       {id:1007,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489096810833.jpg?imageView2/2/format/webp"},
       {id:1008,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489096810833.jpg?imageView2/2/format/webp"},
       ],
       },
     {id:2,title:'24:00',content:"即将开始",children:[
       {id:2001,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097011644.jpg?imageView2/2/format/webp"},
       {id:2002,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097011644.jpg?imageView2/2/format/webp"},
       {id:2003,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097621751.jpg?imageView2/2/format/webp"},
       {id:2004,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097621751.jpg?imageView2/2/format/webp"},
       {id:2005,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg?imageView2/2/format/webp"},
       {id:2006,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg?imageView2/2/format/webp"},
       {id:2007,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp"},
       {id:2008,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp"},
       
     ]},
     {id:3,title:'8:00',content:"即将开始"},
     {id:4,title:'10:00',content:"即将开始"},
     ] 
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  change(index){
        this.now = index
  },
    timeFn(){
        //获取当前时间
      var date = new Date();
      var nowTime = date.getTime(); //当前时间的时间戳
      // 设置一个截至时间
      var endDate = new Date("2020-10-29 18:00:00");
      var endTime = endDate.getTime();

      // 时间差
      var minus = (endTime - nowTime)/1000; 
       this.dd= Math.floor(minus/60/60/24).toString()
       this.hh=Math.floor(minus/60/60%24).toString() // 小时
       this.mm = Math.floor(minus/60%60).toString()
       this.ss= Math.floor(minus%60).toString()
         if(this.dd.length<2){
             this.dd = "0"+this.dd
         }
          if(this.hh.length<2){
             this.hh = "0"+this.hh
         }
          if(this.mm.length<2){
             this.mm = "0"+this.mm
         }
          if(this.ss.length<2){

             this.ss = "0"+this.ss
         }

    }
    
},

mounted() {
 this.timer = setInterval(this.timeFn,1000)
},

destroyed() {}, //生命周期 - 销毁完成

}
</script>
<style lang="less">
.kill{
   margin-top: 1rem;
   border: 1rem solid transparent;
   width: 100%;
   height: 37rem;
   box-sizing: border-box;
   .kill-title{
  width: 35.5rem;
  height: 5.5rem;
  border: 22px 10px 12px 15px;
   box-sizing: border-box;
   display: flex;
  justify-content: space-between;
  line-height: 5.5rem;

  img{
    margin-top: 15px;
    width: 10rem;
    height: 2.1rem;
  }
  .distance{
    font-size: 1.4rem;
    span{
      font-size: 1.3rem;
    }
  }

   }
   .tab{
     width: 100%;
  .ul{
     width: 100%;
     li{
       float: left;
       text-align: center;
       width: 8.82rem;
       height: 4.8rem;
       border-bottom: 1px solid #ccc;
      
     strong{
      color: #f20d28;
      font-size: 1.8rem;
       font-weight: 600
     }
     p{
        color: #f20d28;
      font-size: 1.4rem;
     }
      
     }
     .active{
        border-bottom: 1px solid #f20d28 !important;
       }
  }
  .content{
        margin-top: 2rem;

    >div{
       position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 15.8rem;
       display: none;
    }
    .show{
       position: relative;
        top: 0;
        left: 0;
        height: 15.8rem;
        width: 100%;
        display: block;
        overflow: scroll;
      .tabul{
           position: absolute;
            top: 0;
            left: 0;
            height: 15rem;
            width: 88.6rem;
         li{
           width: 10.8rem;
           height: 100%;
           float: left;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           font-size: 1.2rem;
           img{
             width: 10.2rem;
             height: 10.2rem;
           }
           .price{
             color: #f20d28;
             font-size: 1.4rem;
             &::before{
               content: ￥;
             }
           }
         }
      }
    }
  }
      
     
   }
}

</style>