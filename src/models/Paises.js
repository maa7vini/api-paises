import mongoose from "mongoose";

const paisSchema = new mongoose.Schema({
    nome: String,
    idioma: String,
    continente: String,
    idade: Number,
    bandeira: String
})

export default mongoose.model('Pais', paisSchema)