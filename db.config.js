const mongoose=require("mongoose")
mongoose.connect(`mongodb+srv://${process.env.udhaya}:${process.env.password}@cluster0.ay7rvre.mongodb.net/${process.env.databasename}`)