import express, {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import { AuthController } from '../controllers/AuthController'
import { IUser } from '../domain/interfaces/IUser.interface'


const usersRouter = express.Router()

usersRouter.route('/auth/register')
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
                password,
                age
            }
            
            const controller:AuthController = new AuthController()
            const response: any = await controller.registerUser(user)

            res.send(response)
        }
    })
usersRouter.route('/auth/login')
    .post( async (req: Request, res: Response) => {

        let {  email, password} = req.body

        if( email && password ){
            // Obtain the password in request and cypher

            // TODO use IAuth 
            
            const controller:AuthController = new AuthController()
            const response: any = await controller.loginUser(email, password)

            res.send(response)
        }
    })


export default usersRouter