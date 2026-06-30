import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
dotenv.config()

import { morganMiddleware } from './middleware/morgan.js'

import authRoutes from './modules/auth/routes/authRoutes.js'

const app = express()

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }))

app.use(express.json())
app.use(morganMiddleware)

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('Backend running 🚀')
})

export default app
