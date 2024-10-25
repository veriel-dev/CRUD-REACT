import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import cors from 'cors'

import { dbConnect } from './db/db.js'

import authRoutes from './routes/auth.routes.js'
import tastksRoutes from './routes/tasks.routes.js'
import seedRoutes from './routes/seed.routes.js'
import userRoutes from './routes/user.routes.js'

const allowedOrigins = [
  'http://127.0.0.1:5173',
  'http://localhost:5173',
];

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
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(cors({
      origin: function(origin, callback) {
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) === -1) {
          const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }))
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