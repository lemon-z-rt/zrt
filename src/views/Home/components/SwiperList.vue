<!--  -->
<template>
<div class="boxswiper">
    <div class='swiperlist' >
        <ul :style="styleobj2">
           <li v-for="item in datalist" :key="item.id">
                <img :src=item.url alt="">
                <strong>Joyoun/九阳g</strong>
                <p>￥7700.00</p>
                <del>￥454.80</del>
                </li>
        </ul>
    </div>
      <div class="progress">
          <div class="progress-bar" :style="styobj"></div>
      </div>
</div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:{datalist:Array},
data() {
//这里存放数据
 return {
      //1、屏幕的宽度
      screenW:
        document.documentElement.clientWidth || document.body.clientWidth,
      //2、滚动内容的宽度
      scrollContentW: 1100,
      //3、进度条的背景宽度
      bgBarW: 100,
      //4、进度条的长度
      barW: '',
      //5、进度条的起点
      startX: 0,
      //6、进度条的终点
      endX: 0,
      //7、移动的距离
      barMoveW: 0,
      //8、内容滚动的距离
      contentMoveW: 0,
      //9、设置变量来存储上一次滚动的left的值
      contentMove: 0,
    };
},
//监听属性 类似于data概念
computed: {
   styobj(){
       return{
            left: `${this.barMoveW}px`,
            width:`${this.barW}px`
       }
   },
    styleobj2() {
      return {
        left: `${this.contentMove}px`,
      };
    },

},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //开始触摸
    touchstarFn(e){
       // console.log(e.touches[0].pageX); 
       //会得到一个x坐标(包含被卷进去的)
       this.startX=Number(e.touches[0].pageX)
    },
    // 触摸开始移动
    touchmoveFn(e){
         // 获得触摸的结束点，第一次触摸时为出发点
        let touch =e.touches[0]
         // 移动的距离
       let movedis = Number(touch.pageX)-this.startX
       console.log(movedis);
       //  存取上一次滚动的值
        this.contentMove = movedis + this.contentMoveW;
        this.barMoveW = -(
        (this.bgBarW / this.scrollContentW) *  movedis-
        this.endX
      );
       // 判断最大移动距离
       if(this.barMoveW<=0){
            this.barMoveW = 0;
       }else if(this.barMoveW > this.bgBarW - this.barW){
          this.barMoveW = this.bgBarW - this.barW;
       }
       if (this.contentMove >= 0) {
        this.contentMove = 0;
      } else if (this.contentMove <= this.screenW - this.scrollContentW) {
        this.contentMove = this.screenW - this.scrollContentW;
      }
    },
    //动态设置进度条的长度
    getBarWidth() {
      this.barW = (this.bgBarW * this.screenW) / this.scrollContentW;
    },
     touchendFn() {
      this.endX = this.barMoveW;
     this.contentMoveW = this.contentMove;
    },
   // 绑定事件的函数
   bindEvent(){
       this.$el.addEventListener("touchstart",this.touchstarFn,false)
       this.$el.addEventListener("touchmove",this.touchmoveFn,false)
       this.$el.addEventListener("touchend",this.touchendFn,false)
   }
},
mounted() {
    //调用方法
    this.bindEvent()
    this. getBarWidth()
},

}
</script>
<style  lang="less">
    .boxswiper{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 12rem;
    }
    .swiperlist{
        width: 100%;
        height: 12rem;
        position: relative;
        top: 0;
        left: 0;
        //overflow: scroll;  水平方向出现滚动条 
        overflow-x: hidden;  // 溢出隐藏就没有滚动条
        ul{
            position: absolute;
            top: 0;
            left: 0;
            height: 12rem;
            width: 110rem;
            li{
                width: 10rem;
                height: 12rem;
                text-align: center;
                float: left;
                display: flex;
                flex-direction: column;
                img{
                     margin-left: 5px;
                    width: 9rem;
                    height: 7.5rem;
                }
                p{
                    color: red;
                }
                del{
                   color: rgb(136, 136, 136);
                }
            }
        }
    }
    // 隐藏滚动条
    .swiperlist::-webkit-scrollbar{
        display: none;
    }
    // 进度条样式
.progress {
  width: 100px;
  height: 5px;
  background: #ccc;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  .progress-bar {
    // 根据父元素的定位，父元素不用是相对定位
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 20px;
    background: #f00;
  }
}
</style>