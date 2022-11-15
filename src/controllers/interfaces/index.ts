import { BasicResponse } from '../types/index'

export interface IHelloController{
    getMessage( name?: string ) : Promise<BasicResponse>
}

export interface IUserController{
    // Get all user from database || Get user by id
    getUser(id?:string): Promise<any>
    deleteUser(id:string): Promise<any>
}