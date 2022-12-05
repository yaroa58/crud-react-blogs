//5. imprtacion express
import express from "express";
import cors from 'cors'
import db from "./database/db.js"; //importacion db
import blogsRoutes from './routes/Routes.js'// importacion enrutador

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogsRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitisa a la db')
} catch (error) {
    console.log(`Error Conexion exitisa a la db es : ${error}`)

}

// app.get('/', (req, res) => {
//     res.send('Hola Mundo')
// })

app.listen(8000, () => {
    console.log('server up running http://localhost:8000/')
})
