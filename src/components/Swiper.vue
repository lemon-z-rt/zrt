<!-- 公共的轮播图组件 -->
<template>
  <div class="swipe">
    <!-- :auto="2000"   间隔时间
      :show-indicators="true"   是否显示指示点
      :default-index="1"    初始化索引
      :continuous="true"   是否循环播放
    @change="handleChange"   绑定一个事件，参数index可以获取索引-->

    <mt-swipe
      :auto="2000"
      :show-indicators="true"
      :default-index="1"
      :continuous="true"
    >
      <mt-swipe-item v-for="item in swiperdata" :key="item.swipe_id"> 
        <img
          :src="item.swipe_img"
          alt
        />
      </mt-swipe-item>
    
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data(){
    return {
    
    }
  },
  methods: {
    // handleChange(index) {
    //   // console.log(index);
    // },
  },
  mounted() {
    
    this.$store.dispatch("actGetSwipeDatas");
    console.log(this.$store.state)
  },
  computed: {
     swiperdata(){
       return this.$store.state.swiperData
     }
  },
};
</script>
<style lang="less">
.swipe {
  width: 100%;
  height: 12rem;
  img {
    width: 100%;
    height: 12rem;
  }
}
</style>