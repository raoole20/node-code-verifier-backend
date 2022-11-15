import { Get, Route, Tags } from "tsoa"
import { IUserController } from "./interfaces"

// ORM - Users Collection
import { getAllUser } from "../domain/orm/User.orm"
import { LogSuccess } from "../utils/logger"
import { BasicResponse } from "./types"

@Route("api/users")
@Tags("UserControllers")
export class UserController implements IUserController{

    /**
     * EndPoint to retreive the users list in databases
     * @returns  all Users 
     */
    async getUser(): Promise<any> {
        LogSuccess('[/api/users] Get all users Request')

        const response = await getAllUser()
        return response
    }
}