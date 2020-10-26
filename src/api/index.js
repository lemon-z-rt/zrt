import ajax from "./ajax"


//定义一个全局变量--全局路径

export  const getHomeswiper =()=> ajax("/api/v1/index/swipe")