import express, { Express, Request, Response } from "express"
import cors from 'cors'
import helmet from 'helmet'
import swaggerUI from 'swagger-ui-express'

// TODO https

// Root Router
import routes from '../routes'
import mongoose from "mongoose"

const server: Express = express()

// * Swagger Config and route
server.use('/docs', swaggerUI.serve, swaggerUI.setup(undefined, {
    swaggerOptions: {
        url: '/swagger.json',
        explorer: true
    }
}))

// Define Server to use /api and use rootRouter from index.ts in rootes
server.use('/api/', routes)

mongoose.connect('mongodb://localhost:3000/CodeVerification')

// Static Server
server.use( express.static('public') )

server.use( helmet() )
server.use( cors() )

// content type 
server.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}))

server.use( express.json() )

// redirecciones
server.get('/', (req:Request, res: Response) => {
    res.redirect('/api')
})

export default server 
