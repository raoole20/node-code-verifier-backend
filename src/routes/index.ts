import express, { Request, Response } from 'express'
import helloRouter from './HelloRoutes'
import { LogInfo } from '../utils/logger'

let server = express()
let rootRouter = express.Router()

rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('Get: http://localhost:8000/api/')
    res.send('Welcome to my api restfull')
})


server.use('/', rootRouter); // http://localhost:8000/api/
server.use('/hello', helloRouter); // http://localhost:8000/api/hello --> HelloRouter

export default server