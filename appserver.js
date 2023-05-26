const express=require('express');
const appserver=express()
const body_parser=require("body-parser")


appserver.use(body_parser.urlencoded({extended: true}));
appserver.use(body_parser.json())

const controllers= require("./controllers/controllers")
const filerouter=require("./controllers/filecontroller")


appserver.use("/countries",controllers)
appserver.use("/filesystem",filerouter)

module.exports=appserver
