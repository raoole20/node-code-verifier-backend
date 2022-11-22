import { Route, Post, Body, Tags } from "tsoa";
import { IUser } from "../domain/interfaces/IUser.interface";
import { IAuthController } from "./interfaces";


@Route('/api/auth/')
@Tags('AuthController')

export class AuthController implements IAuthController{

    @Post('/register')
    registerUser(user: IUser): Promise<any> {
        // TODO implements register user
        throw new Error("");
            
    }

    @Post('/login')
    loginUser(email: string, password: string): Promise<any> {
        throw new Error("");
       
    }


    @Post('/logout')
    logoutUser(): Promise<any>{
        throw new Error('')
    }

}