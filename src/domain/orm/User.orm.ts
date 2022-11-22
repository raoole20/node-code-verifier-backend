import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "../../utils/logger";
import { IUser } from "../interfaces/IUser.interface";


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
export const createNewUser = async ( user: any) : Promise<any | undefined> =>{
    try {
        const userModel = userEntity()
        return await userModel.create(user)
    } catch (error) {
        LogError(`[ORM ERROR]: Create User: ${error}`)
    }
}

// update user by id
export const updateUserById = async (id: string, userData: any) : Promise<any>=> {
    try {
        const userModel = userEntity()
        return await userModel.updateOne({_id: id}, userData)
    } catch (error) {
        LogError(`[ORM ERROR]: Update User: ${error}`)
    }
}


// Login user 
export const registerUser = async ( user: IUser ) : Promise<any | undefined> =>{
    try {
        const userModel = userEntity()
        return await userModel.create(user)
    } catch (error) {
        LogError(`[ORM ERROR]: Create User: ${error}`)
    }
}


// Register User
export const LoginUser = async ( email:string, password: string ) : Promise<any | undefined> =>{
  try {
    let user = userEntity()

    //Find user by email
    user.findOne({ email }, { id: 1, name: 1, email: 1 } , (err: any, user: IUser) => {
        if(err) {
            // TODO return error --> while found (500)
            return 
        }

        if(!user){
            //TODO return error --> user not fund (404)
        }

        // use brcypt to compare 
        let validPassword = bcrypt.compareSync(password, user.password)

        if(!validPassword){
            // TODO --> (401)
        }

        // Create JWT
        let token = jwt.sign({ 
            email: user.email,
            name: user.name
        }, String(process.env.API_KEY) ,{
            expiresIn: '1d'
        })
        

        return {
            token,
            user
        }
    })


    return await user.findOne({ email })
  } catch (error) {
    
  }
}


// Register User
export const Logiauth = async () : Promise<any | undefined> =>{
  
}