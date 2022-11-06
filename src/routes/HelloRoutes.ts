import express, { Request, Response } from "express";
import { HelloController } from "@/controllers/HelloControllers";
import { LogInfo } from "@/utils/logger";
import { BasicResponse } from "@/controllers/types";

let helloRouter = express.Router()

helloRouter.route("/")
    .get(async (req:Request, res:Response ) => {
        let name:any = req?.query?.name
        LogInfo(`Query Param: ${name}`)

        const controllers: HelloController = new HelloController()
        const response: BasicResponse = await controllers.getMessage(name)
    
        return res.send(response)
    })

export default helloRouter