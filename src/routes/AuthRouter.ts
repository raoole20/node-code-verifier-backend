import express, {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import { AuthController } from '../controllers/AuthController'
import { IUser } from '../domain/interfaces/IUser.interface'
import { verifyToken } from '../middleware/verifyToken'
import { IAuth } from '@/domain/interfaces/IAuth.interface'

const authRouter = express.Router()

authRouter.route('/register')
    .post( async (req: Request, res: Response) => {

        let { name, email, password, age } = req.body
        let hashedPassword: string
        let user: IUser

        if(req.body){
            // Obtain the password in request and cypher
            hashedPassword = bcrypt.hashSync(password, 10)

            user = {
                name, 
                email, 
                password: hashedPassword,
                age
            }
            
            const controller:AuthController = new AuthController()
            const response: any = await controller.registerUser(user)

            res.status(200).json({
                message: `Usuario registrado correctamente`,
                response
            })
        }else{
            return res.status(400).send({
                message: '[ERROR user data missing]: Data is Requered'
            })
        }
    })
authRouter.route('/login')
    .post( async (req: Request, res: Response) => {

        let { email, password } = req.body

        if( email && password ){
            // Obtain the password in request and cypher

            const authUser: IAuth = {
                email,
                password
            }
            
            const controller:AuthController = new AuthController()
            const response: any = await controller.loginUser(authUser)

            res.send({
                message: `Welcome ${response?.user?.name}`,
                token: response?.token
            })
        }else{
            return res.status(400).send({
                message: '[ERROR user data missing]: Data is Requered'
            })
        }
    })


// Prive Route
authRouter.route('/me')
    .get(verifyToken,async (req:Request, res:Response) => {
        
        // Obtain The id of user
        let id: any = req?.query?.id

        if(id){
            // Controller: Auth controller
            const controller: AuthController = new AuthController()

            const response: any = await controller.useData(id)
            
            return res.status(200).send({
                message: 'ok',
                response
            })
        }else{
            res.status(401).send({
                mesage: `You are not authorised to perform this action`
            })
        }
    })

export default authRouter