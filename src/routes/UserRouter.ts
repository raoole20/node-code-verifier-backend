import { UserController } from "../controllers/UserController"
import express, { Request, Response } from "express"

let usersRouter = express.Router()

usersRouter.route('/')
    //Get:
    .get(async (req: Request, res: Response) => {
        const controllers: UserController = new UserController()
        const response: any = await controllers.getUser()

        return res.send(response)
    })


export default usersRouter