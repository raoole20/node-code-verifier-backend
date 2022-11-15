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