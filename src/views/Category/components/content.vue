<!-- Category 内容组件 -->
<template>
<div class='cate-body'>
     <Left />
     <Right />
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Left  from "./Con-left"
import Right from "./Con-rig"

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Left,
    Right
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

},
}
</script>
<style lang="less">
  .cate-body{
      //占据整个内容
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      padding:5rem 0 5rem 0 ;
      height: calc(100% - 10rem); // 动态的设置好高
      display: flex;
      background: white;
  }
</style>