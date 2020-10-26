// state 中存储数据
const state = {
    num:1,
    catetoryDatas:[],//分类中的数据 
    swiperData:[],
    rightData:[],
    leftData:[],
    goodlist:[],
    goodsDetails:[], //产品详情
     //从本地购物车拿数据
    loccardata:localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    checkAll: localStorage["checkAll"] ? JSON.parse(localStorage["checkAll"]) : false
   
}
export default state