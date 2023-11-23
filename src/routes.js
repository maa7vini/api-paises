import { Router } from "express";

import { getPaises, addPaisNovo } from "./controllers/paisController.js";

const routes = Router()

routes.get('/paises', getPaises)

routes.post('/paisNovo', addPaisNovo)

export default routes