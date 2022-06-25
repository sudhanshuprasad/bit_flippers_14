const mongoose=require("mongoose");

const connectToMongoose=()=>{
    mongoose.connect(process.env.mongo_URI, (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Connected to mongoose");
        }
    })
}

module.exports=connectToMongoose;