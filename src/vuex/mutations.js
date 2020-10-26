//mutations  使用state中的方法 


const mutations ={
    // 左侧列表数据的方法
    getCategorydatas(state,data){
      state.catetoryDatas = data
    },
    // swier 图方法
    getSwipredata(state,data){
      console.log(data);
       state.swiperData=data
    },
    //ctegory 右边方法
    getRightdata(state,data){
        state.rightData =data  
    },
    //ctegory 左边方法 
    getLeftdata(state,data){
      state.leftData =data  
  },
  //商品列表方法
   getgoodlist(state,data){
    state.goodlist = data
   },
   //商品的详情页
   getgoodsdetail(state,data){
    state.goodsDetails = data
   },
   // 购物车数据
   crasmethodfn(state,data){
       if(data){
        state.loccardata.push(data)
       }
         // 存储到本地
       localStorage.setItem("carts", JSON.stringify(state.loccardata)) 
   },
   // 添加方法
   addcars(state,data){
      state.loccardata[data].value++;
      localStorage.setItem("carts", JSON.stringify(state.loccardata)) 
   },
   // 减少方法
   decraese(state,data){
    state.loccardata[data].value--;
    localStorage.setItem("carts", JSON.stringify(state.loccardata)) 
   },
   // 删除方法
   dele(state,data){
      state.loccardata.splice(data,1)
   },
   //手动填写
   fillout(state,data){
     console.log(data);
    state.loccardata[data.index].value=data.val;
    localStorage.setItem("carts", JSON.stringify(state.loccardata))
   },
   //单选框方法
   singleselect(state,data){
      console.log(data);
      state.loccardata[data.index].isSelect=data.item.isSelect;
      // 和全选框的关系
     let check = state.loccardata.every(item=>{
        return item.isSelect == true
      }) 
      state.checkAll=check
      localStorage.setItem("carts", JSON.stringify(state.loccardata))
      localStorage.setItem("checkAll", JSON.stringify(state.checkAll))
   },
   // 全选框方法
   allSelsect(state){
       state.checkAll = !state.checkAll
       console.log(state.checkAll);
       state.loccardata.forEach(element => {
           element.isSelect=state.checkAll 
       });
       localStorage.setItem("checkAll", JSON.stringify(state.checkAll))
   },

}
export default mutations