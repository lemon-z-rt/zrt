// 引进ajax 发送请求获取数据
import  { getHomeswiper}  from "@/api/index.js";
import  { getHomeswiper2} from "@/api/right.js";
import  { getHomeswiper3} from "@/api/left.js";
import  { goodlist,getGoodsDetail} from "@/api/goodlist.js"



// actions 提交mutations 中的数据
const actions ={
    getCategorydatasX(context){
         context.commit ('getCategorydatas')
    },
    // 委托swiper的方法
    async actGetSwipeDatas(context) {
        const result = await getHomeswiper()
    
        context.commit("getSwipredata",result.data)
    },
    // 委托 categoryright的方法
    async actGetRightDatas(context,txt){
    
        const result = await getHomeswiper2(txt)
        context.commit("getRightdata",result.data)
    },
     // 委托 categoryright的左边方法
     async actGetLeftDatas(context,txt){
    
        const result = await getHomeswiper3(txt)

        context.commit("getLeftdata",result.data)
    },
    async getgoodlist(context,data){ 
        const  result = await goodlist(data)
        context.commit("getgoodlist",result.data)
    },
    async getgoodsdetails(context,data){
        console.log(data);
        const  result = await getGoodsDetail(data)
        console.log(result);
        context.commit("getgoodsdetail",result.data[0])
    }
}
export default actions