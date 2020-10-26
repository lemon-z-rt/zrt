<!-- 选择登录方式 -->
<template>
<div class='select-login'>
      <div class="logo">
          <img src="@/assets/logo.png" alt="">
      </div>
     <h2>选择登录方式</h2>
    <router-link to="/login" tag="button">手机登录</router-link>
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
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},

}
</script>
<style lang="less">
  .select-login{
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
        .logo{
     width: 10rem;
     height: 10rem;
     border: 6px solid #ccc;
     border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
        }
        h2{
            margin-top: 2rem;
        }
      button{
          margin-top: 2rem;
          width: 20rem;
          height: 4rem;
          line-height: 2rem;
          text-align: center;
          background: red;
          border: none;
          color: #fff;
          font-size: 1.4rem;
      }  
  }
</style>