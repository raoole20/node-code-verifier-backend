import express, { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { LogInfo } from "../utils/logger"
import { UserController } from "../controllers/UserController"
import { IUser } from '../domain/interfaces/IUser.interface'
import { AuthController } from "@/controllers/AuthController"

let usersRouter = express.Router()

usersRouter.route('/')
    //Get:
    .get(async (req: Request, res: Response) => {
        const id:any = req?.query?.id
        const controllers: UserController = new UserController()

        const response: any = await controllers.getUser(id)

        return res.status(202).send(response)
    })
    // Create: 
    .post(async (req: Request, res: Response) =>{
        
        const controller:UserController = new UserController()

        const user = { 
            name: req?.body?.name ,
            email: req?.body?.email,
            age: req?.body?.age
        }

        const response:any = await controller.createUser(user)
        return res.status(201).json(response)
    })
    // Update
    .put(async (req: Request, res: Response) => {
        const { updateData} = req?.body
        const id:any = req?.query?.id

        const controller: UserController = new UserController()
        const response: any = await controller.updateUse(id, updateData)
        return res.status(response.status).json(response)
    })
    //Delete:
    .delete(async (req: Request, res: Response) => {
        const id: string | any = req?.query?.id
        LogInfo(`Query Param: ${id}`)

        const controllers: UserController = new UserController()
        const response: any = await controllers.deleteUser(id)

    return res.status(response.status).send(response)
    })

export default usersRouter