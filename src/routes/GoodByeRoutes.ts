import express, { Express, Response, Request } from "express"
import { LogInfo } from '../utils/logger'
import { GoodByeControllers } from '../controllers/GoodByeControllers'
import { BasicResponse } from '../controllers/types'

let GoodByeRoutes = express.Router()

GoodByeRoutes.route("/")
    .get(async (req:Request, res:Response ) => {
        let name:any = req?.query?.name
        LogInfo(`Query Param: ${name}`)

        const controllers: GoodByeControllers  = new GoodByeControllers ()
        const response: BasicResponse = await controllers.getMessage(name)
    
        return res.send(response)
    })

export default GoodByeRoutes