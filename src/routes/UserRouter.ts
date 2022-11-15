import { UserController } from "../controllers/UserController"
import express, { Request, Response } from "express"
import { LogInfo } from "../utils/logger"

let usersRouter = express.Router()

usersRouter.route('/')
    //Get:
    .get(async (req: Request, res: Response) => {
        const id:any = req?.query?.id
        const controllers: UserController = new UserController()

        const response: any = await controllers.getUser(id)

        return res.send(response)
    })
    //Delete:
    .delete(async (req: Request, res: Response) => {
        
        const id:any = req?.query?.id
        LogInfo(`Query Param: ${id}`)

        const controllers: UserController = new UserController()
        const response: any = await controllers.deleteUser(id)

        return res.send(response)
    })

export default usersRouter