const express=require("express");
const appserver = require("./appserver");
const nodeserver=express();
const env=require("dotenv")
env.config()



nodeserver.use('/',appserver)

try {
    nodeserver.listen(process.env.port,'localhost',()=>{
        console.log('server start',process.env.port)
    });
} catch (error) {
      console.log(error)   
}
