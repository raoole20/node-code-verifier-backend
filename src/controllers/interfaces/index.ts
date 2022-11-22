import { IUser } from '../../domain/interfaces/IUser.interface'
import { BasicResponse } from '../types/index'

export interface IHelloController{
    getMessage( name?: string ) : Promise<BasicResponse>
}

export interface IUserController{
    getUser(id?:string):   Promise<any>
    deleteUser(id:string): Promise<any>
    createUser(user: any): Promise<any>
    updateUse(userID: string, userData: any): Promise<any>
}

export interface IKataController{
    getKata(id?:string):   Promise<any>
    deleteKata(id:string): Promise<any>
    createKata(user: any): Promise<any>
    updateKata(userID: string, userData: any): Promise<any>
}

export interface IAuthController {
    registerUser(user: IUser): Promise<any>
    loginUser(email: string, password: string): Promise<any>
}