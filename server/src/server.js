import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { dbConnect } from './db/db.js'

import authRoutes from './routes/auth.routes.js'
import tastksRoutes from './routes/tasks.routes.js'
import seedRoutes from './routes/seed.routes.js'
import userRoutes from './routes/user.routes.js'

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.app.use(express.static('dist'))
    this.middlewares()
    this.routes()
    this.dbConnection()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(cookieParser())
    this.app.use(morgan('dev'))
  }
  routes() {
    this.app.use('/api/auth', authRoutes)
    this.app.use('/api/tasks', tastksRoutes)
    this.app.use('/api/seed', seedRoutes)
    this.app.use('/api/users', userRoutes)
  }

  async dbConnection() {
    await dbConnect()
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on: http://localhost:${this.port} or http://172.17.0.1:${this.port}`);
    })
  }
}

export default Server