import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "../../utils/logger";


/**
 * Method to obtain all users from collection "User" in mongo server
 */
export const getAllUser = async () : Promise<any[] | undefined> =>  { 
    try {
        let userModel = userEntity()

        // Search all users 
        return await userModel.find({})
    } catch (error) {
        LogError('[ORM Error] Getting all users ' + error)
    }
}

export const getUserById = async (id: String): Promise<any> =>{
    try {
        const userModel = userEntity()
        return await userModel.findById(id)
    } catch (error) {
        LogError(`[ORM ERROR] Get user by ID ${error}`)
    }
}

// TODO 
// get user by email
// delete user
export const deleteUserById = async (id: String): Promise<any> => {
    try {
        const userModel = userEntity()
        return await userModel.deleteOne({_id: id})
    } catch (error) {
        LogError(`[ORM ERROR] Delete user by ID ${error}`)
    }
}
// create user
// update user by id
