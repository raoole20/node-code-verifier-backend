import { Get, Query, Route, Tags } from "tsoa"
import { IUserController } from "./interfaces"

// ORM - Users Collection
import { getAllUser, getUserById } from "../domain/orm/User.orm"
import { LogSuccess } from "../utils/logger"
import { BasicResponse } from "./types"

@Route("api/users")
@Tags("UserControllers")
export class UserController implements IUserController{

    /**
     * Get all user || Get user by id
     * @param id optional id for search user by id
     * @returns { userResponse } JSON info user
     */
    @Get('/')
    async getUser(@Query()id?:string): Promise<any> {

        if(id){
            LogSuccess('[/api/users?id] Get user by id ' + id)

            return await getUserById(id)
        }else{     
            LogSuccess('[/api/users] Get all users Request')
    
            const response = await getAllUser()
            return response
        }
    }
}