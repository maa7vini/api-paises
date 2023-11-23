import { getTodoPaises, novoPais } from "../services/paisService.js";

export async function getPaises(req, res) {
    try {
        const result = await getTodoPaises()

        return res.status(200).json(result)
    } catch(err) {
        console.error(err)

        return res.status(400).send(err)
    }
}

export async function addPaisNovo(req, res) {
    try {
        const pais = req.body

        const paisNovo = await novoPais(pais)

        return res.status(200).json(paisNovo)
    } catch(err) {
        return err
    }
}