import dotenv from 'dotenv'
import server from './src/server'
import { LogError, LogSuccess } from './src/utils/logger'

dotenv.config()

const port = process.env.PORT || 8000

server.listen(port, ()=> {
    LogSuccess(`[Server ON]: Running in http://localhost:${port}/api`)

})

// Control server error
server.on('error', (error) => {
    LogError(`[Server ERROR]: ${error}`)
})