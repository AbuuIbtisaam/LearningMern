//This file define the structure of the database
import mongoose from "mongoose";

const schema = mongoose.Schema({
    image: String,
    title: String,
    caption: String,
})

export default mongoose.model("projects", schema);