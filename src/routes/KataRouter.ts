import { LogInfo } from "../utils/logger";
import express, { Express, Request, Response, Router } from "express";
import { KataController } from "../controllers/KataControllers";


const kataRouter = Router()

kataRouter.get('/', async (req: Request, res: Response) => {
    let  id: any  | string  = req?.query?.id
    LogInfo(`Query id: ${id}`)

    const controller:KataController = new KataController()
    const response = await controller.getKata(id)
    
    res.status(200).json(response)
})
kataRouter.post('/', async (req: Request, res: Response) => {
    let  kata: any  | string  = req?.body?.kata
    LogInfo(`Query kata: ${ { ...kata }}`)

    const controller:KataController = new KataController()
    const response = await controller.createKata(kata)
    
    res.status(200).json(response)
})
kataRouter.put('/', async (req:Request, res:Response) => {
    const id : any = req?.query?.id
    const data: any = req?.body?.kata

    const controller:KataController = new KataController()
    const response = await controller.updateKata(id, data)

    res.json(response)
})
kataRouter.delete('/', async (req:Request, res:Response) => {
    const id : any = req?.query?.id

    const controller:KataController = new KataController()
    const response = await controller.deleteKata(id)

    res.json(response)
})

export default kataRouter