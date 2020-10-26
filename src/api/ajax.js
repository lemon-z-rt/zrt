import axios from "axios";
// 导出来一个对象
export default function ajax(url="",type="get",params={}){
          let promise
          return new Promise((res,rej)=>{
               if(type=="get"){
                   let paramsstr=""
                   Object.keys(params).forEach(key => {
                    paramsstr += key + "=" + params[key] + "&"
                })
                  if(paramsstr !== ""){
                    paramsstr=paramsstr.substr(0,paramsstr.indexOf('&'))
                  }
                  url+="?"+paramsstr
                  promise = axios.get(url)
               }else if ("post" === type) {  //post请求方式
                  promise = axios.post(url, params)
              }
               // 返回结果
               promise.then((response) => {
                  res(response.data)
              }).catch((err) => {
                  rej(err)
              })
          })
          
}