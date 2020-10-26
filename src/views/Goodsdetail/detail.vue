<!-- 商品详情页 -->
<template>
<div class='detail-container'>
    <!-- 轮播图 -->
    <div class="detail-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="'http://localhost:3000/'+goodsdetail.goods_img" alt />
          </div>
          <div class="swiper-slide">
           <img :src="'http://localhost:3000/'+goodsdetail.goods_img" alt />

          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 内容部分 -->
     <div class="detail-content">
      <div class="detail-price">{{goodsdetail.shop_price}}</div>
      <div class="detail-title">{{goodsdetail.goods_name}}</div>
      <div v-html="goodsdetail.goods_desc" class="detail-pic"></div>
    </div>
    <!-- 详情页底部 -->
    <div class="detail-footer">
          <div class="kefu">
              <i class="iconfont icon-kefu"></i>
              <span>客服</span>
          </div>
          <div class="shoucang">
               <i class="iconfont icon-shoucang"></i>
              <span>收藏</span>
          </div>
          <div class="cars">
              <router-link to="/cars">
              <i class="iconfont icon-gouwuche"></i>
              <span>购物车</span>
              <em>{{count}}</em>
              </router-link>
          </div>
          <div class="addcars" @click="addFn(goodsdetail)">加入购物车</div>
          <div class="gobuy">立即购买</div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "swiper"
import "swiper/dist/css/swiper.css";

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
   goodsdetail(){
        return this.$store.state.goodsDetails
    },
    count(){
      // 本地数据是个都像需要进行遍历7
        let count = 0;
       this.$store.state.loccardata.map((item) => {
        if(item.goods_id ==this.$store.state.goodsDetails.goods_id ){
            count += item.value;
        }
      });
      return count;
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
      // 添加购物车的方法
      addFn(data){
        //和本地存储的数据对比

      var isCart = this.$store.state.loccardata.find((item) => {
        if (item.goods_id == data.goods_id) {
          item.value++;
        }
        return item.goods_id == data.goods_id;
      });
      // 不相等返回underfind 相等返回true
      console.log(isCart);
      if (!isCart) {
        console.log(333);
        var cartData = {
          goods_id: data.goods_id,
          goods_name: data.goods_name,
          shop_price: data.shop_price,
          goods_img: data.goods_img,
          value: 1,
          isSelect: true,
        };
      }
      this.$store.commit("crasmethodfn",cartData );
    },
},
mounted() {
   this.$store.dispatch("getgoodsdetails", {
      goods_id: this.$route.query.goods_id,
    });
    // 实例化是swiper
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
},

}
</script>
<style lang="less">
.detail-container{
   .detail-swiper{
       width: 100%;
       height: 37.5rem;
     img {
    width: 100%;
    height: 37.5rem;
  }
  
   }
   .detail-content{
      .detail-price{
        color: red;
        font-size: 2.4rem;
        &::before{
          font-size: 1.4rem;
          content: "￥";
        }
      }
      .detail-title{
     font-size: 1.5rem;
    overflow: hidden;
    line-height: 1.5;
    max-height: 5rem;
      }
      .detail-pic{
        width: 100%;
        img{
          width: 100%;
        }
      }
  }
   .detail-footer{
       position: fixed;
       bottom: 0;
       left: 0;
       width: 100%;
       height: 5rem;
       border-top: 1px solid #333;
       background: #fff;
       display: flex;
       flex: 1;
       > div{
          font-size: 1.2rem;
          flex: 1;
         display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
         color: #666;
         i {
      font-size: 2rem;
         }
   }
    .addcars{
      flex: 2;
      background: #f55;
      color: #fff;
      font-size: 1.4rem;
         }
    .gobuy{
        flex: 2;
        background: orange;
        color: #fff;
         }
     .cars{
          position: relative;
          a{
               display: block;
              display: flex;
             flex-direction: column;
             text-align: center;
          }
          em{
              position: absolute;
              width: 2rem;
              height:2rem;
              line-height: 2rem;
              border-radius: 3rem;
              text-align: center;
              background-color: red;
              right: 0;
              top: 0;
          }
     }
   }
  }
</style>