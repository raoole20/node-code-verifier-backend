import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa"
import { IUserController } from "./interfaces"

// ORM - Users Collection
import { createNewUser, deleteUserById, getAllUser, getUserById, updateUserById } from "../domain/orm/User.orm"
import { LogError, LogSuccess, LogWarning } from "../utils/logger"
import { BasicResponse } from "./types"
import { IUser } from "@/domain/interfaces/IUser.interface"

@Route("api/users")
@Tags("UserControllers")
export class UserController implements IUserController {

    /**
     * Get all user || Get user by id
     * @param { string } id optional id for search user by id
     * @returns { userResponse } JSON info user
     */
    @Get('/')
    async getUser(@Query()page: number, @Query()limit: number, @Query() id?: string): Promise<any> {

        if (id) {
            LogSuccess('[/api/users?id] Get user by id ' + id)

            return await getUserById(id)
        } else {
            LogSuccess('[/api/users] Get all users Request')

            const response = await getAllUser(page, limit)
            return response
        }
    }

    /**
     * Create a new User
     * @param { IUser } user datos del usuario
     * @return new user
     */
    @Post('/')
    public async createUser(@Body() user: any): Promise<any> {
        let response: any

        await createNewUser(user).then(r => {
            LogSuccess("[/api/user] Create user")
            LogSuccess(`[/api/user] the response is ${r} `)
            response = {
                message: `User create successfully: id: ${r?.id}, name: ${r?.name} `,
                user: r
            }
        }).catch(err => {
            LogError(`[/api/user] ERROR create user ${err} `)
        })

        return response
    }

    /**
     * Actualizar usuario por ID
     * @param userID Id del usuario
     * @param userData informacion del usuario que se desea actualizar
     * @returns { userUpdateResponse }
     */
    @Put('/')
    public async updateUse(@Query() userID: string, @Body() userData: any): Promise<any> {
        let response: any

        if (userID) {
            LogSuccess(`[/api/user] Update User By ID: ${userID}`)
            await updateUserById(userID, userData).then(r => {
                response = {
                    status: 204,
                    message: `Update Successfully id: ${userID}`,
                    infoUpdate: r
                }
            })
        } else {
            LogWarning(`[/api/user] Update user need ID`)
            response = {
                status: 400,
                message: "Pleas Provide an ID to update from databases"
            }
        }

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
                    status: 204,
                    message: `User with id ${id} deleted successfully`
                }
            })

        } else {
            LogWarning(`[/api/user] Delete user request Without ID`)
            response = {
                status: 400,
                message: `Provide an Id to remove from database`
            }
        }

        return response
    }
}