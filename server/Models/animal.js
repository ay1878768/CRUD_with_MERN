import mongoose from "mongoose";
const Schema=mongoose.Schema;

const animalSchema= new Schema({
    name:{
        type:String,
        // requried:true,
       
    },
    habitat:{
        type:String,
        // required:true,
        
    },
    lifespan:{
        type:String,
        // required:true,
        
    },
    diet: {
        type:String,
        // required:true
    },
    facts: {
        type:String,
        // required:true
    }
}, {timestamps:true});

const Animal=mongoose.model("Animal",animalSchema);
export default Animal;