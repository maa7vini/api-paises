import express from 'express'

import routes from './routes.js'
import connectPaises from './database/db.js'

const app = express()

app.use(express.json())
app.use(routes)

connectPaises().then(() => {
    app.listen(3000, () => {
        console.log("Site e banco conectados http://localhost:3000/paises")
    })
}).catch((err) => {
    console.log("Ops, algo deu errado")
})
