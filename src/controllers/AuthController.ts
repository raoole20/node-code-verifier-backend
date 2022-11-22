import { Route, Post, Body, Tags } from "tsoa";
import { IUser } from "../domain/interfaces/IUser.interface";
import { IAuthController } from "./interfaces";

import { registerUser, LoginUser, Logiauth } from "../domain/orm/User.orm";
import { LogSuccess, LogWarning } from "../utils/logger";

@Route('/api/auth/')
@Tags('AuthController')

export class AuthController implements IAuthController{

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

    @Post('/login')
    async loginUser(email: string, password: string): Promise<any> {
        let response: any = ''

        if( email && password ){
            await LoginUser(email, password).then( response =>{
                LogSuccess(`[/api/auth/login] Login user ${email}`)
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
       
    }


    @Post('/logout')
    logoutUser(): Promise<any>{
        let response: any = ''

        throw new Error('')
    }

}