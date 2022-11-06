import express, { Express, Request, Response } from "express"


// Security
import cors from 'cors'
import helmet from 'helmet'

// TODO https

// Root Router
import routes from '../routes'

const server: Express = express()

// Define Server to use /api and use rootRouter from index.ts in rootes
server.use('/api/', routes)


// TODO mongoose connection

server.use(helmet())
server.use(cors())

// content type 
server.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}))
server.use( express.json({ limit: '50mb'}) )

// redirecciones
server.get('/', (req:Request, res: Response) => {
    res.redirect('/api')
})

export default server