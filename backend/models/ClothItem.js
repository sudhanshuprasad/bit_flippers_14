const { default: mongoose } = require('mongoose');
const req = require("mongoose");
const {Schema}=mongoose;


const ClothSchema = new Schema({
    imageurl:{
        type:String
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    dsc:{
        type: String,
        required: true,
    },
    category:{
        type: Array
    },
    recommendedCat:{
        type: Array
    }
})

module.exports=mongoose.model("cloth",ClothSchema)