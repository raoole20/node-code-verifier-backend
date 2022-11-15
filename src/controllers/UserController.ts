import { Body, Delete, Get, Post, Query, Route, Tags } from "tsoa"
import { IUserController } from "./interfaces"

// ORM - Users Collection
import { createNewUser, deleteUserById, getAllUser, getUserById } from "../domain/orm/User.orm"
import { LogError, LogSuccess, LogWarning } from "../utils/logger"
import { BasicResponse } from "./types"

@Route("api/users")
@Tags("UserControllers")
export class UserController implements IUserController {

    /**
     * Get all user || Get user by id
     * @param { string } id optional id for search user by id
     * @returns { userResponse } JSON info user
     */
    @Get('/')
    async getUser(@Query() id?: string): Promise<any> {

        if (id) {
            LogSuccess('[/api/users?id] Get user by id ' + id)

            return await getUserById(id)
        } else {
            LogSuccess('[/api/users] Get all users Request')

            const response = await getAllUser()
            return response
        }
    }

    /**
     * Create a new User
     * @param user datos del usuario
     * @return new user
     */
    @Post('/')
    public async createUser(@Body()user: any): Promise<any> {
        let response:any
        await createNewUser(user).then( r => {
            LogSuccess("[/api/user] Create user")
            response = {
                message: `User create successfully: id: ${r?.id}, name: ${r?.name} `
            }
        }).catch( err => {
            LogError(`[/api/user] ERROR create user ${err} `)
        })

        return response
    }

    /**
     * Delete user by id
     * @param { string } id user id
     */
    @Delete('/')
    async deleteUser(@Query() id: string): Promise<any> {

        let response: any = ''

        if (id) {
            LogSuccess(`[/api/user?id] Delete user by id: ${id}`)
            await deleteUserById(id).then(r => {
                response = {
                    message: `User with id ${id} deleted successfully`
                }
            })

        } else {
            LogWarning(`[/api/user] Delete user request Without ID`)
            response = {
                message: `Provide an Id to remove from database`
            }
        }

        return response
    }
}