const express=require("express");
const appserver = require("./appserver");
const nodeserver=express();


const PORT=4000

nodeserver.use('/',appserver)

try {
    nodeserver.listen(PORT,'localhost',()=>{
        console.log('server start',PORT)
    });
} catch (error) {
      console.log(error)   
}