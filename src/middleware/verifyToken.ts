import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";



/**
 * Middleware to verification user
 * @param { Request } req Original request previus middlewate of verification JWT
 * @param { Response }res Response to verification of JWT
 * @param { NextFunction }next next function to be executed
 * @returns Errors of verification or next execution
 */
export const verifyToken = (req: Request, res: Response , next: NextFunction) => {

    // Check Header from Request fro 'x-access-token'
    let jwtToken = req?.headers['x-access-token']
    let apiKey: string  = process.env.API_KEY || '123'
    // Verify if jwt is persent
    if(!jwtToken){
        return res.status(403).send({
            authentication: 'faild',
            message: 'Not authorised to consume this endpoint'
        })
    }


    // Verify the token obtaned
    jwt.verify(String(jwtToken), apiKey, (err, decoded) => {
        if(err){
            return res.status(500).send({
                authentication: 'JWT verification failed',
                message: 'Error al verificar token'
            })
        }

        next()
    })
}