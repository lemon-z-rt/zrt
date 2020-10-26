import ajax from "./ajax"


//定义一个全局变量--全局路径

export  const goodlist =(data)=> ajax(`/api/v1/category/goodslist`,"get",data)
//产品详情页
///api/v1/category/goodsdetail?goods_id=621
export const getGoodsDetail = (params) => ajax(`/api/v1/category/goodsdetail`,"get", params)