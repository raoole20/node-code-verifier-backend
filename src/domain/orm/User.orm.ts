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

// TODO 
// Get user by Id
// get user by email
// delete user
// create user
// update user by id
