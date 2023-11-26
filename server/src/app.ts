import ('dotenv/config')
import cors from 'cors'
import express, { Express } from 'express'
import http from 'node:http'
import { router } from './routes'
import dbConnect from './config/mongo'

interface IServer {
    app: Express
    port: number
    configureMiddlewares: () => void
    configureRoutes: () => void
    initializeDatabase: () => Promise<void>
    listen: () => http.Server
}

class Server implements IServer {
    app: Express
    port: number

    constructor(app: Express, port: number) {
        this.app = app
        this.port = port

        this.initializeDatabase()
        this.configureMiddlewares()
        this.configureRoutes()
    }

    configureMiddlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    configureRoutes() {
        this.app.use(router)
    }

    async initializeDatabase(): Promise<void> {
        console.group('Connecting to database...')
        try {
            await dbConnect()
            console.log('Database connected')
        } catch (error) {
            console.error('Error while connection to database: ' + error)
            console.groupEnd()
        }
    }

    listen(): http.Server {
        return this.app.listen(this.port, () => console.log(`Server running at port ${this.port}`))
    }
}

const app = express()
const PORT = process.env.PORT || 8080
const server = new Server(app, PORT as number)
server.listen()

