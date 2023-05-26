const  controllers=require('express').Router();
const mock=require("../mocks/countries.json")

controllers.get("/getallcountries",function (req,res,next){
    res.status(200).json({
        message:"rest countries api is under development",
        data:[]
    })
})

module.exports=controllers