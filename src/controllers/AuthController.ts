import { Route, Post, Body, Tags, Query } from "tsoa";
import { IUser } from "../domain/interfaces/IUser.interface";
import { IAuthController } from "./interfaces";

import { registerUser, LoginUser, Logiauth } from "../domain/orm/User.orm";
import { LogSuccess, LogWarning } from "../utils/logger";
import { IAuth } from "../domain/interfaces/IAuth.interface";

@Route('/api/auth/')
@Tags('AuthController')
export class AuthController implements IAuthController{

    /**
     * Register new User
     * @param { IUser } user data for loggin user
     * @returns { status: 'statuscode', response }
     */
    @Post('/register')
    async registerUser(@Body()user: IUser): Promise<any> {
        let response: any = ''

        if(user){
            LogSuccess(`[/api/users] Register new User `)
            await registerUser(user).then( response => {
                LogSuccess(`[/api/users/register] New User register`)
                response = {
                    status: 202,
                    response
                }
            })
        }else{
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
    async loginUser(@Body()authUser:IAuth): Promise<any> {
        let response: any = ''

        if( authUser.email && authUser.password ){
            await LoginUser(authUser.email, authUser.password).then( response =>{
                LogSuccess(`[/api/auth/login] Login user ${response.email}`)
                response = {
                    status: 202,
                    message: `User logged successfully`
                }
            })
        }else{
            LogWarning(`[/api/auth/login] Regiter needs email and password`)
            response = {
                status: 404,
                message: 'Data no provider'
            }
        }
       
        return response 
    }


    @Post('/logout')
    logoutUser(): Promise<any>{
        let response: any = ''

        throw new Error('')
    }

}