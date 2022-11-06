import express, { Express, Request, Response } from "express"
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const PORT: number | string = process.env.PORT || 8000

app.get('/', (req: Request, res:Response) => {
    res.send('Wlcome to my api restfull funtionando')
})

app.get('/hello', (req: Request, res:Response) => {
    res.send('funcionando')
})

app.get('/newPoint', (req: Request, res:Response) => {
    res.json({
        "data": {
            "message": "GoodBye, world"
        }
    })
})

app.listen(PORT, ()=>{
    console.log('SERVER RUNNING')
})
