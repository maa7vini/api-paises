import Pais from '../models/Paises.js'

export async function getTodoPaises() {
    try {
        const pais = await Pais.find()

        return pais
    } catch(err) {
        return err
    }
}

export async function novoPais(payload) {
    try {
        const paisNovo = await Pais.create(payload)

        return paisNovo
    } catch(err) {
        return err
    }
}