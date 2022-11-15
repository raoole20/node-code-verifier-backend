import { BasicResponse } from '../types/index'

export interface IHelloController{
    getMessage( name?: string ) : Promise<BasicResponse>
}

export interface IUserController{
    // Real all user from database
    getUser(): Promise<any>
    
}