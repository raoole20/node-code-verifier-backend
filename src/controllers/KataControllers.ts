import { Body, Get, Post, Query, Route, Tags } from "tsoa";
import { createKatas, deleteKatas, getAllKata, getKataById, updateKatas } from "../domain/orm/Katas.orm";
import { IKataController } from "./interfaces";
import { LogError, LogSuccess } from "../utils/logger";

@Route('/api/kata')
@Tags('KataController') 
export class KataController implements IKataController{

    /**
     * Get all kata || Get kata by ID
     * @param { string } id parametro opcional, id de kata a buscar
     * @param { number } page 
     * @param { limit } limit 
     * @returns { kataResponse }
     */
    @Get('/')
    async getKata(@Query()page: number, @Query()limit: number, @Query()id?: string ): Promise<any> {
        let result:any
        if(id){
            await getKataById(id).then(response => {
                LogSuccess(`[/api/kata/] Get User By id successfully id: ${response.id}`)
                result = response
            }).catch( e => {
                LogError(`[/api/kata] Error get User by id`)
            })
        }else{
            await getAllKata(page, limit).then( res => {
                LogSuccess(`[api/kata] Get All User successfully`)
                result = res
            }).catch( e => {
                LogError(`[/api/kata] Error get User by id`)
            } )
        }
        return result
    }

    /**
     * Create a new User
     * @param { userInterface } user  
     * @returns { userResponse}
     */
    @Post('/')
    async createKata(@Body()user: any): Promise<any> {
        let response:any

        await createKatas(user).then( r => {
            LogSuccess(`[/api/kata/] Post Create New user`)
            response = r
        })

        return response
    }

    async deleteKata(id: string): Promise<any> {
        let response: any
        await deleteKatas(id).then( r => {
            LogSuccess(`[/api/kata/] delete Kata id: ${r?.id} `)
            return response = r
        })

        return response
    }

    async updateKata(userID: string, userData: any): Promise<any> {
        let response: any
        await updateKatas(userID, userData).then( r => {
            LogSuccess(`[/api/kata/] update Kata id: ${r?.id} `)
            return response = r
        })

        return response
    }
}