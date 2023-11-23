import mongoose from "mongoose";

export async function connectPaises() {
    mongoose.connect("mongodb+srv://maa7vini:TYlIMq0GrHZQx9xe@cluster0.4sc5ufn.mongodb.net/?retryWrites=true&w=majority")
}

export default connectPaises