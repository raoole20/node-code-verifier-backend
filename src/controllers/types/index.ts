/**
 * Basic JSON response for controllers
 */
export type BasicResponse = {
    message: string
}

/**
 * Basic Json error response for controllers
 */
export type ErrorResponse = {
    error: string, 
    message: string
}


/**
 * Basic login response
 */

export type AuthResponse = {
    status: number,
    message: string,
    token?: string
}