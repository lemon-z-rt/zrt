<!-- 首页 首页 -->
<template>
<div class='home-index'>
   <div class="home-swiper">
    <Swipe />
   </div>
   <Quickquery />
   <Swipernews />
   <SwiperList  :datalist="datalist" />
   <Kill />
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swipe  from "@/components/Swiper.vue";
import Quickquery from "../components/Quickquery"
import Swipernews from "../components/SwiperNews"
import SwiperList  from "../components/SwiperList"
import Kill from "../components/Secondkill"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
   Swipe,
   Quickquery,
   Swipernews,
   SwiperList,
   Kill
},
data() {
//这里存放数据
return {
   //  父传子传值
     datalist:[
        {id:1,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg?imageView2/2/format/webp"},
        {id:2,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg?imageView2/2/format/webp"},
        {id:3,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg?imageView2/2/format/webp"},
        {id:4,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg?imageView2/2/format/webp"},
        {id:5,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg?imageView2/2/format/webp"},
        {id:6,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg?imageView2/2/format/webp"},
        {id:7,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg?imageView2/2/format/webp"},
        {id:8,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg?imageView2/2/format/webp"},
        {id:9,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg?imageView2/2/format/webp"},
        {id:10,url:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg?imageView2/2/format/webp"},
        ]
};
},
//监听属性 类似于data概念
computed: {
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},

}
</script>
<style lang="less">
 .home-swiper{
   padding: 0 10px;
   div{
      border-radius: 4px;
   }
 }
</style>