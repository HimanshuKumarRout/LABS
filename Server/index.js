import express from 'express'
import cors from 'cors'
import { PrismaClient } from './generated/prisma/index.js'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 5000
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

app.get('/api/health', async (_req, res) => {
  try {
    await prisma.$connect()
    res.json({ status: 'ok' })
  } catch {
    res.status(503).json({ status: 'error', message: 'Database unavailable' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
