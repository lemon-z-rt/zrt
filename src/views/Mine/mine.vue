<!--  -->
<template>

<div class='mine'>
    <Selectlogin />
    <div class="mine-header">
  <span class="iconfont icon-jiantou3" @click="gohome"></span>
    </div>
  
    <form action="">
        <h1>用户登录</h1>
        <div class="input">
          <input type="text" placeholder="请输入您的用户名/手机号">
          <i class="iconfont icon-wode text"></i>
          <input type="password" placeholder="请输入登陆密码">
          <i class="iconfont icon-dianpu pass"></i>
        </div>
        <div class="register">
            <a href="javascrpit:;">新用户注册</a>
            <a href="javascrpit:;">忘记密码?</a>
        </div>
      
           <button>登录</button>
    </form>

     <div class="cutletter">
         短信验证码登录>
     </div>
    <Footer />
</div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer  from "../../components/Footer.vue";
import Selectlogin from "../login/selectLogin.vue";

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Footer,
    Selectlogin,
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  gohome(){
      this.$router.push("/home")
  }
},

}
</script>
<style lang="less">
  .mine{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      background: #fff;
      height: 100%;
      z-index: 999;
        .mine-header{
            margin-top: 1rem;
            span{
                margin-left: 1rem;
                display: block;
                width: 1.5rem;
                height: 1.5rem

            }
        }
        .cutletter{
            width: 100%;
            text-align: center;
            color: red;
            font-size: 1.5rem;
            font-weight: 500;
            margin-top: 5rem;
        }
        form{
            margin-left: 1rem;
            margin-right: 1rem;
            margin-top: 3.5rem;
            position: relative;
            top: 0;
            left: 0;
            h1{
                font-weight: 500;
               line-height: 1.1;
               font-size: 3rem;
               color: #333;
            }
            .input{
                margin-top: 2.5rem;
                 input{
                text-indent: 20px;
                width: 35.2rem;
                height: 41px;
                line-height: 41px;
                border-bottom: 1px solid #efefef;
            }
            .text{
                position: absolute;
                top: 72px;
                left: -2px;
            }
            .pass{
                 position: absolute;
                top: 109px;
                left: -2px;
            }
            }
            
        }
       .register{
           display: flex;
           justify-content: space-between;
           a{
               height: 3.2rem;
               line-height: 3.2rem;
               font-size: 1.4rem;
               color: #4b89dc;
           }
       }
       button{
           background: #f92028;
           border-radius: .5rem;
           margin-top: 2rem;
           font-size: 1.4rem;
           color: #fff;
           border: 0;
          text-align: center;
          padding: 1.1rem 0;
          width: 100%;
          display: block;
       }
  }
</style>