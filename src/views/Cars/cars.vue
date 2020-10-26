<!--  -->
<template>
<div class='cars'>
   <div class="carslist" v-if="!isEmpty">
      <ul>
        <li v-for="(item,index) in cardetail " :key="item.goods_id">
          <div class="carselect" @click="singleSelect(item,index)">
          <i class="iconfont icon-danxuankuang" v-if="!item.isSelect"></i>
          <i class="active iconfont icon-danxuankuangxuanzhong" v-else ></i>
          </div>
          <div class="car-content">
               <div class="car-img">
                <img :src="'http://localhost:3000/'+item.goods_img" alt="">
               </div>
               <div class="car-info">
                 <p class="art">{{item.goods_name}}</p>
                   <p class="car-price">{{item.shop_price}}</p>
                  <div class="car-num">
                    <span class="add" @click="addcar(index)">+</span>
                    <input type="number" min="1" :value="item.value" ref="inp" @blur="fillout(index)">
                    <span class="decarse" @click="decrease(index)">-</span>
                    <button class="iconfont icon-shanchu1" @click="dele(index)"></button>
                  </div>
               </div>
          </div>
        </li>
      </ul>
       <div class="cartFooter" >
       <div class="checkAll" @click="checkAll">
        <i class="iconfont icon-danxuankuang" v-if="!checkall"></i>
        <i class="iconfont icon-danxuankuangxuanzhong" style="color:red" v-else></i>
        <span>全选</span>
      </div>
      <div class="priceAll">
        合计:
        <span style="color:red; font-size:1.6rem">{{total}}</span>
      </div>
      <div class="gobuy">去结算()</div>
      </div>
   </div>
   <div v-else class="nocart">
      <i class="iconfont icon-gouwuche"></i>
      <p>
        购物车空空如也！
        <router-link to="/home">去逛逛吧</router-link>
      </p>
   </div>
    <Footer />
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer  from "@/components/Footer.vue";
import { MessageBox } from 'mint-ui';
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Footer,
  },
data() {
//这里存放数据
return {
     isSelect:false
};
},
//监听属性 类似于data概念
computed: {
  cardetail(){
    return this.$store.state.loccardata
  },
  checkall(){
    return this.$store.state.checkAll
  },
  // 判断购物车是否为空
  isEmpty(){
      return this.$store.state.loccardata.length == 0
  },
  //  算总价
  total(){
    var price =0;
    this.$store.state.loccardata.forEach(element => {
      if(element.isSelect == true){
        price+=element.shop_price*element.value
      }
    });
    return price
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  // 添加方法
  addcar(index){
  this.$store.commit("addcars",index)
  //减少方法
  },
   decrease(index){
         if(this.$refs.inp[index].value<=1){
       MessageBox({
           title: '提示',
          message: '不能再少了!',
         });
         }else{
       this.$store.commit("decraese",index)
         }
  },
    // 删除方法
    dele(index){
      MessageBox.confirm('确定执行此操作?').then( ()=> {
               this.$store.commit("dele",index)
          })
    },
  //失去焦点方法
  fillout(index){
    if( this.$refs.inp[index].value.slice(0,1)==0){
       this.$refs.inp[index].value=1
    }
    if(this.$refs.inp[index].value<=1){
       MessageBox({
           title: '提示',
          message: '不能再少了!',
         });
         this.$refs.inp[index].value=1
         }else{
           var val = this.$refs.inp[index].value 
           this.$store.commit("fillout", { index, val })
         }
      },
      // 单选框方法
     singleSelect(item,index){
        item.isSelect=!item.isSelect
        this.$store.commit("singleselect",{item,index})
     },
     //全选框方法
     checkAll(){
       console.log(123);
       this.$store.commit("allSelsect")       
     }
},

}
</script>
<style lang="less">
      .cars{
        .carslist{
         li{
           width: 100%;
           height: 10rem;
          display: flex;
          .carselect{
            width: 10%;
            height: 10rem;
            display: flex;
            flex-direction:column ;
            justify-content: center;
            text-align: center;
            .active{
              color: red;
            }
          }
          .car-content{
            width: 85%;
            height: 10rem;
            background-color: #fff;
            border: 1rem solid transparent;
            box-sizing: border-box;
            display: flex;
            .car-img{
                img{
                  width: 7rem;
                }
            }
            .car-info{
                .art{
             width: 100%;
             font-size: 1.2rem;
             height: 4rem;
            line-height: 2rem;
             overflow: hidden;
             display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
             margin-bottom: 1rem;
                }  
                .car-price{
                  float: left;
                  color: red;
                  font-size: 1.4rem;
                  &::before{
                   content: "￥";
                  }
                } 
                .car-num{
                  display: flex;
                  float: right;
                  span{
                    display: block;
                    width: 2rem;
                    height: 2rem;
                    font-size: 1.4rem;
                    line-height: 2rem;
                    text-align: center;
                    border: 1px solid #efefef;
                  }
                  input{
                    width: 2.5rem;
                    height: 2rem;
                   border: 1px solid #efefef;
                   text-align: center;
                  }
                  button{
                    margin-left: 1rem;
                    background-color: #fff;
                    border: none;
                  }
                }

            }
          }
         }
      .cartFooter {
  position: fixed;
  height: 4.4rem;
  bottom: 4.9rem;
  width: 100%;
  border-right: 10px solid #fff;
  border-left: 10px solid #fff;
  box-sizing: border-box;
  border-top: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  .gobuy {
    width: 30%;
    text-align: center;
    color: #fff;
    background-color: #f55;
    height: 4.4rem;
    line-height: 4.4rem;
    font-size: 1.4rem;
  }    
        }
      }
      .nocart {
  margin-top: 8rem;
  text-align: center;
  i {
    font-size: 10rem;
    color: #999;
  }
  p {
    font-size: 1.4rem;
    margin-top: 3rem;
  }
}
      }
</style>