import express, { Request, Response } from 'express'
import helloRouter from './HelloRoutes'
import { LogInfo } from '../utils/logger'
import GoodByeRoutes from './GoodByeRoutes'
import usersRouter from './UserRouter'
import kataRouter from './KataRouter'

let app = express()
let rootRouter = express.Router()

rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('Get: http://localhost:8000/api/')
    res.send('Welcome to my api restfull')
})

app.use( express.json() )
app.use('/', rootRouter);                   // http://localhost:8000/api/
app.use('/hello', helloRouter);             // http://localhost:8000/api/hello --> HelloRouter
app.use('/goodbye', GoodByeRoutes);         // http://localhost:8000/api/hello --> HelloRouter
app.use('/users', usersRouter)              // http://localhost:8000/api/users --> UserRouter
app.use('/kata', kataRouter )

export default app