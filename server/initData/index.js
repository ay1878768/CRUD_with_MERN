import mongoose from "mongoose";
import allAnimal from "./data.js";
import Animal from "../Models/animal.js";
async function main () {
    await mongoose.connect("mongodb://127.0.0.1:27017/animal");
}

main().then(() => {
    console.log("database connection successfull")
}).catch((err) => {
    console.log("some error occured",err);
})


const insertData =  async () => {
    console.log("data initialisation started")
    const data=await Animal.insertMany(allAnimal);
    //console.log(data);
}
insertData();
export default main;