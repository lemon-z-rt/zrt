module.exports = {
    devServer: {
        host:"localhost",
        port:"9527",
        open:"true",
        proxy:{ // 配置代理解决vue中的跨域问题
            "/api":{  //"http://114.215.173.225:3000/api/"
                target:"http://localhost:3000/api/",//代理域名
                changeOrigin: true, //开启代理，允许跨域
                pathRewrite:{
                    "^/api":""
                }
            }
        },
        
    }
}