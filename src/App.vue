<template>
  <div id="app">
   
    <router-view></router-view>
  </div>
</template>

<script>

import { Indicator } from 'mint-ui';

export default {
  name: 'App',
  components: {
   
  },
  data() {
    return {
      timer:''
    }
  },
  methods: {
    loading(){
    Indicator.open({
     text: '加载中...',
    spinnerType: 'fading-circle'
        })
       },
    },
    mounted() {
     this.loading()
    this.timer=setTimeout(()=>{
         Indicator.close();
    },500)
 },   
}
 
</script>

<style>
/* 将公共的css引入进来 */
@import "./fonts/iconfont.css";
@import "./style/common.css";
</style>
