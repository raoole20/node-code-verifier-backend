import { Route, Post, Body, Tags, Query, Get } from "tsoa";
import { IUser } from "../domain/interfaces/IUser.interface";
import { IAuthController } from "./interfaces";

import { registerUser, LoginUser, Logiauth, getUserById } from "../domain/orm/User.orm";
import { LogSuccess, LogWarning } from "../utils/logger";
import { IAuth } from "../domain/interfaces/IAuth.interface";
import { AuthResponse, ErrorResponse } from "./types";

@Route('/api/auth/')
@Tags('AuthController')
export class AuthController implements IAuthController {

    /**
     * Register new User
     * @param { IUser } user data for loggin user
     * @returns { status: 'statuscode', response }
     */
    @Post('/register')
    async registerUser(@Body() user: IUser): Promise<any> {
        let response: any = ''

        if (user) {
            LogSuccess(`[/api/users] Register new User `)
            await registerUser(user).then(res => {
                LogSuccess(`[/api/users/register] New User register ${response}`)
                response = {
                    status: 200,
                    res
                }
            })
        } else {
            LogWarning(`[/api/users/register] Data no provider`)
            response = {
                status: 404,
                message: 'data no provider'
            }
        }

        return response
    }


    /**
     * Login user
     * @param { IAuth } authUser User data for login
     * @returns return status del login
     */
    @Post('/login')
    async loginUser(@Body() authUser: IAuth): Promise<any> {
        let respuesta: AuthResponse | ErrorResponse | any

        if (authUser.email && authUser.password) {
            await LoginUser(authUser.email, authUser.password).then(response => {
                LogSuccess(`[/api/auth/login] Login user ${response.user.email}`)
                respuesta = {
                    status: 202,
                    message: `User logged successfully`,
                    token: response.token,
                    user: response.user
                }
            })
        } else {
            LogWarning(`[/api/auth/login] Regiter needs email and password`)
            respuesta = {
                status: 404,
                message: 'Data no provider'
            }
        }

        return respuesta
    }


    @Post('/logout')
    logoutUser(): Promise<any> {
        let response: any = ''

        throw new Error('')
    }

    /**
     * Enpoint to reatrive 
     * @param id the user data
     * @returns all user o user found by id
     */
    @Get('/me')
    async useData(@Query() id: string): Promise<any> {
        let response: any
        LogSuccess(`[/api/users] Get user data by id ${id}`)
        response = await getUserById(id)
        return response
    }
}