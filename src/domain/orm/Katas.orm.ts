import { LogError } from "@/utils/logger";
import { kataEntity } from "../entities/Katas.entity";


// Create
export const createKatas = async (datos:any): Promise<any> => {
    try{
        const katas = kataEntity()
        return await katas.create(datos)
    }catch(error){
        LogError(`[ORM ERROR] Create Katas error: ${error}`)
    }
}

// Update 
export const updateKatas = async (id: string, datos: any): Promise<any> => {
    try {
        const katas = kataEntity()
        return await katas.updateOne({ _id: id }, datos)
    } catch (error) {
        LogError(`[ORM ERROR] Update Katas error: ${error}`)
    }
} 

// Delete 
export const deleteKatas = async (id: string): Promise<any> => {
    try {
        const katas = kataEntity()
        return await katas.deleteOne({_id: id})
    } catch (error) {
        LogError(`[ORM ERROR] Delete Katas error: ${error}`)
    }
}

// Find for dificult level
export const findForDificult = async (level: string): Promise<any> => {
    try {
        const katas = kataEntity()
        return await katas.find({ level }, { _id: 0 })
    } catch (error) {
        LogError(`[ORM ERROR] Find for Dificult Katas error: ${error}`)
    }
}

// Ultimos 5
export const findLastFive = async () :Promise<any> => {
    try {
        const katas = kataEntity()
        return await katas.find().sort({$natural: -1}).limit(5)
    } catch (error) {
        LogError(`[ORM ERROR] Find for last five Katas error: ${error}`)
    }
}

// Best start
export const findBestKast = async (): Promise<any> => {
    try {
        const katas = kataEntity()
        return await katas.find().sort({start: 1})
    } catch (error) {
        LogError(`[ORM ERROR] Find for Best Katas error: ${error}`)
    }
}

// Intentos 
export const findIntentos = async (): Promise<any> => {
    try {
        const katas = kataEntity()
        return await katas.find().sort({intents: 1})
    } catch (error) {
        LogError(`[ORM ERROR] Find for intents Katas error: ${error}`)
    }
}