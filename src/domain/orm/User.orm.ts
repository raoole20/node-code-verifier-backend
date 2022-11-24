import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "../../utils/logger";
import { IUser } from "../interfaces/IUser.interface";


/**
 * Method to obtain all users from collection "User" in mongo server
 */
export const getAllUser = async (): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity()

        // Search all users 
        return await userModel.find({})
    } catch (error) {
        LogError('[ORM Error] Getting all users ' + error)
    }
}

export const getUserById = async (id: String): Promise<any> => {
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
        return await userModel.deleteOne({ _id: id })
    } catch (error) {
        LogError(`[ORM ERROR] Delete user by ID ${error}`)
    }
}

// create user
export const createNewUser = async (user: any): Promise<any | undefined> => {
    try {
        const userModel = userEntity()
        return await userModel.create(user)
    } catch (error) {
        LogError(`[ORM ERROR]: Create User: ${error}`)
    }
}

// update user by id
export const updateUserById = async (id: string, userData: any): Promise<any> => {
    try {
        const userModel = userEntity()
        return await userModel.updateOne({ _id: id }, userData)
    } catch (error) {
        LogError(`[ORM ERROR]: Update User: ${error}`)
    }
}


// Login user 
export const registerUser = async (user: IUser): Promise<any | undefined> => {
    try {
        const userModel = userEntity()
        return await userModel.create(user)
    } catch (error) {
        LogError(`[ORM ERROR]: Create User: ${error}`)
    }
}


// Register User
export const LoginUser = async (email: string, password: string): Promise<any | undefined> => {
    try {
        let user = userEntity()
        let userFound: IUser | undefined
        let token: string

        //Find user by email
        await user.findOne({ email }).then((user: IUser) => {
            userFound = user
        }).catch(err => {
            console.error(`[ERROR Authentication in ORM]: User Not Found`)
            throw new Error(`[ERROR Authentication in ORM]: User not fount ${err}`)
        })

        let validPassword = bcrypt.compareSync(password, userFound!.password)

        if (!validPassword) {
            console.error(`[ERROR Authentication in ORM]: Password no valid`)
            throw new Error(`[ERROR Authentication in ORM]: Password not valid`)
        }

        let apiKEY: string | undefined = process.env.API_KEY 

        token = jwt.sign({
            email,
            name
        }, String(apiKEY), {
            expiresIn: '2d'
        })

        return {
            user: userFound,
            token: token
        }
    } catch (error) {
        LogError(`[ORM ERROR]: Creatin user: ${error}`)
    }
}


// Register User
export const Logiauth = async (): Promise<any | undefined> => {

}