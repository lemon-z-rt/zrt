<!--  -->
<template>
<div class='list'>
    <Header />
   <Goodlist :List="getlist"/>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "./Header"
import Goodlist from "@/components/Goodlist.vue"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Header,
    Goodlist
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
     getlist(){
        return this.$store.state.goodlist
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
mounted() {
     this.$store.dispatch("getgoodlist",{ cat_id: this.$route.query.cat_id })
},

}
</script>
<style lang="less">
  

</style>