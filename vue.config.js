const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
   
    proxy:{
     "/admin":{
        target:"https://koa.eveadmin.com/"
      },
      "/upload":{
        target:"https://koa.eveadmin.com/"
      }
    }
  }

})
// module.exports={

// }
