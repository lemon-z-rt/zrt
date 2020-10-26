<!-- 登陆页面 -->
<template>
<div class='login'>
    <div class="login-inner">
        <div class="logo">
          <img src="@/assets/logo.png" alt="">
      </div>
      <div class="tab">
        <a href="javascript:;" :class="{active:flag}" @click="change">短信登录</a>
         <a href="javascript:;" :class="{active:flag2}"  @click="change2">账号登录</a>
      </div>
          <div class="login-content" >
                 <!--短信登录部分  -->
                 <div class="shotletter" v-if="isshow">
                     <section>
                         <input type="phone" placeholder="请输入手机号" v-model="phone">
                        <i @click="codeFn" v-if="!num">获取验证码</i>
                         <i disabled @click="codeFn" v-else>已发送{{num}}</i>
                         <input type="phone" placeholder="验证码">
                     </section>
                 </div>
             <!-- 账号登陆 -->
             <div class="account" v-else >
                <section>
                    <input type="text" placeholder="请输入用户名/邮箱号" v-model="user_name">
                </section>
                <section>
                    <input type="password" v-if="eyes" v-model="pass">
                    <input type="text" v-else>
                    <div>
              <span class="iconfont icon-yincang" @click="eyeshow" v-if="eyes"></span>
                   <span class="iconfont icon-xianshi" @click="eyeshow" v-else></span>
                    </div>
                 
                </section>
                 <section>
                     <input type="text" placeholder="请输入验证码" v-model="captcha">
                     <img src=http://localhost:3000/api/v1/users/captcha alt=""
                     @click="changeImge" ref="cache">
                 </section>
             </div>
             <button @click="login">登录</button>
          </div>  
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
import {loginuser} from "@/api/login.js"
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    flag:false,
    flag2:true,
    isshow:true,
    phone:'',
    num:0,
    timer:'',
    eyes:true,
    pass:'',
    user_name:'',
    captcha:'',
};
},
//监听属性 类似于data概念
computed: {
    regtax(){
        // 符合返回true 否则false
        return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone);
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //短信验证码
    codeFn(){
       //1,先验证手机号是否正确在发送验证码
       console.log(this.regtax);
       if(this.regtax){
           this.num =10
           this.timer=setInterval(()=>{
               this.num--
               if(this.num==0){
                   clearInterval(this.timer)
               }
           },1000)
       }else{
           Toast({
          message: "手机号格式不正确",
          position: "center",
          duration: 3000,
        });
       }
    },
    change(){
         this.flag=false
           this.flag2=true
          this.isshow=true
    },
    change2(){
          this.flag=true
          this.flag2=false
          this.isshow=false
    },
   eyeshow(){
        this.eyes=!this.eyes
   },
  changeImge(){
       this.$refs.cache.src=
       "http://localhost:3000/api/v1/users/captcha?t="+new Date().getTime()
   },
   // 登录方法
   login() {
      //登录方法
      if (!this.user_name) {
        Toast("用户名/邮箱/手机号！");
        return;
      } else if (!this.pass) {    
        Toast("请输入密码！");
        return;
      } else if (!this.captcha) {
        Toast("请输入验证码！");
        return;
      }
      //请求数据
       loginuser(this.user_name, this.pass, this.captcha).then((success)=>{
            if(success.msg=="登录成功"){
                this.$router.push("/home")
            }
      }); 
    },
},

}
</script>
<style lang="less"> 
       .login{ 
        background: white;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
       display: flex;
       justify-content: center;
       flex-direction: column;
        align-items: center;
    .login-inner{
       width: 85%;
       margin: 0 auto;
        .logo{
        width: 10rem;
        height: 10rem;
        border: 6px solid #ccc;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .tab{
         width: 100%;
         overflow: hidden;
         display: flex;
         justify-content: space-between;
          margin-top: 2rem;
         height: 4rem;
         a{
           width: 45%;
          height: 4rem;
          line-height: 4rem;
          text-align: center;
          background: red;
          border: none;
          color: #fff;
          font-size: 1.4rem;
          margin-right: 20px;
      }  
      .active{
          background-color: #666;
      }
    }
    .login-content{
            width: 100%;
       }
          .shotletter{
              position: relative;
              input{
             text-indent: 10px;
             font-size: 1.4rem;
             margin-top:2rem ;
             width: 100%;
             height: 4rem;
             border-radius: 5px;
             line-height: 4rem;
             border: 1px solid  #ccce;
             box-sizing: border-box;
             &:focus{  // less里可以直接写为元素
                 border-color:skyblue;
             }
              }
              i{
                  position: absolute;
                  top: 30px;
                  right: 10px;
                  color: #666;
              }
             
          }
          .account{
               width: 100%;
              section{
                  position: relative;
                    input{
             text-indent: 10px;
             font-size: 1.4rem;
             margin-top:2rem ;
             width: 100%;
             height: 4rem;
             border-radius: 5px;
             line-height: 4rem;
             border: 1px solid  #ccce;
             box-sizing: border-box;
             &:focus{  // less里可以直接写为元素
                 border-color:skyblue;
             }
              }
              span{
                  position: absolute;
                  top: 27px;
                  right: 20px;
                  display: block;
                  width: 1.4rem;
                  height: 1.4rem;
              }
              img{
                  width: 10rem;
                  height: 10rem;
                  position: absolute;
                  top: -10px;
                  right: 10px;
              }
              }
          }
          button{
          width: 45%;
          height: 4rem;
          line-height: 4rem;
          margin: 20px ;
          margin-left: 30%;
          text-align: center;
          background: red;
          border: none;
          color: #fff;
          font-size: 1.4rem;
          margin-right: 20px;
          }
        }
    
    }
</style>