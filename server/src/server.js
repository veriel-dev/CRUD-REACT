import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import cors from 'cors'

import { dbConnect } from './db/db.js'

import authRoutes from './routes/auth.routes.js'
import tastksRoutes from './routes/tasks.routes.js'
import seedRoutes from './routes/seed.routes.js'
import userRoutes from './routes/user.routes.js'
import statsRoutes from "./routes/stats.route.js"
import { apiMonitorMiddleware} from './libs/apiMonitor.js'

const allowedOrigins = {
  development: [
    process.env.URL_FRONTEND_DEV,
  ],
  production: [
    process.env.URL_FRONTEND,
    process.env.URL_FRONTEND_V2
  ]
};

const getOrigins = () => {
  const env = process.env.NODE_ENV || 'development';
  return allowedOrigins[env].filter(origin => origin);
};
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
        const origins = getOrigins();
        console.log({origins, origin})
        if (!origin) return callback(null, true);
        
        if (!origins.includes(origin)) {
          const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }))
    this.app.use(apiMonitorMiddleware)
  }
  
  routes() {
    this.app.use('/api/auth', authRoutes)
    this.app.use('/api/tasks', tastksRoutes)
    this.app.use('/api/seed', seedRoutes)
    this.app.use('/api/users', userRoutes)
    this.app.use('/api/stats', statsRoutes)
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