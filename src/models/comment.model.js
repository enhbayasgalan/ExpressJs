import mongoose from "mongoose";


const userssearch = new mongoose.Schema({
    name: {type : String , require :true}
})
export const Users = mongoose.model("text", userssearch)