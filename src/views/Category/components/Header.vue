<!--  -->
<template>
<div class='ca-header'>
      <a href="javascript:;" class="iconfont icon-jiantou3" onclick="window.history.back()"></a>
      <form action="">
        <input type="text" @click="gosearch">
        <i class="iconfont icon-sousuo1"></i>
      </form>
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
  gosearch(){
    this.$router.push("/search")
  }
},

}
</script>
<style  lang="less">
  .ca-header{
    width: 100%;
    position: fixed;
    z-index: 99;
    height: 5rem;
    display: flex;
    top: 0;
    left: 0;
    background: #fff;
    border-bottom: 1px solid #ccc;
    a{
      display: block;
      width: 10%;
      height: 5rem;
      line-height: 5rem;
      text-align: center;
      color:#ccc ;
    }
    form{
      position: relative;
      top: 0;
      left: 0;
      height: 5rem;
      width: 85%;
      input{
        margin-top: 1rem;
        width: 100%;
        height: 3rem;
        border-radius: 4rem;
        border: 1px solid #efefef;
      }
      i{
        position: absolute;
        top: 0;
        right: 0;
        height: 5rem;
        width: 3rem;
        line-height: 5rem;
        text-align: center;

      }
    }
  }
</style>