const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:3000")
.then(()=>{
    console.log('failed');
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports=collection