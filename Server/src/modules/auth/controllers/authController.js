import prisma from '../../../config/prisma.js'
import bcrypt from 'bcrypt'
import logger from '../../../utils/logger.js'

import {
  generateTokens,
  storeRefreshToken,
  removeRefreshToken,
  verifyRefreshToken,
} from '../services/tokenService.js'

import { generateOTP, storeOTP, verifyOTP, deleteOTP } from '../services/otp.js'

import { sendOTPEmail } from '../services/sendEmail.js'

// ======================= REGISTER =======================
export const register = async (req, res) => {
  try {
    let { email, password, name } = req.body

    if (!email || !password || !name) {
      return res.status(400).json({ message: 'Missing fields' })
    }

    email = email.trim().toLowerCase()

    const existing = await prisma.user.findUnique({
      where: { email },
    })

    if (existing) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashed = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        name,
        isVerified: false,
      },
    })

    const otp = generateOTP()

    await storeOTP(email, otp)
    await sendOTPEmail(email, otp)

    return res.status(201).json({
      message: 'User registered successfully. OTP sent to email.',
      userId: user.id,
    })
  } catch (err) {
    logger.error('REGISTER ERROR:', err)
    return res.status(500).json({ error: err.message })
  }
}

// ======================= VERIFY OTP =======================
export const verifyEmailOTP = async (req, res) => {
  try {
    let { email, otp } = req.body

    if (!email || !otp) {
      return res.status(400).json({ message: 'Missing fields' })
    }

    email = email.trim().toLowerCase()

    const valid = await verifyOTP(email, otp)

    if (!valid) {
      return res.status(400).json({ message: 'Invalid or expired OTP' })
    }

    await prisma.user.update({
      where: { email },
      data: { isVerified: true },
    })

    await deleteOTP(email)

    logger.info(`User verified: ${email}`)

    return res.json({ message: 'Email verified successfully' })
  } catch (err) {
    logger.error('VERIFY OTP ERROR:', err)
    return res.status(500).json({ error: err.message })
  }
}

// ======================= LOGIN =======================
export const login = async (req, res) => {
  try {
    let { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Missing fields' })
    }

    email = email.trim().toLowerCase()

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    if (!user.isVerified) {
      return res.status(403).json({
        message: 'Please verify your email first',
      })
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const { accessToken, refreshToken, refreshId } = generateTokens(user.id)

    await storeRefreshToken(user.id, refreshId)

    return res.json({
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })
  } catch (err) {
    logger.error('LOGIN ERROR:', err)
    return res.status(500).json({ error: err.message })
  }
}

// ======================= RESEND OTP =======================
export const resendOTP = async (req, res) => {
  try {
    let { email } = req.body

    if (!email) {
      return res.status(400).json({ message: 'Email is required' })
    }

    email = email.trim().toLowerCase()

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }

    if (user.isVerified) {
      return res.status(400).json({
        message: 'User already verified',
      })
    }

    const otp = generateOTP()

    await storeOTP(email, otp)
    await sendOTPEmail(email, otp)

    return res.json({ message: 'OTP resent successfully' })
  } catch (err) {
    logger.error('RESEND OTP ERROR:', err)
    return res.status(500).json({ error: err.message })
  }
}

// ======================= REFRESH TOKEN =======================
export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body

    if (!refreshToken) {
      return res.status(401).json({ message: 'Missing refresh token' })
    }

    const payload = await verifyRefreshToken(refreshToken)

    await removeRefreshToken(payload.tokenId)

    const { accessToken, refreshToken: newRefreshToken, refreshId } = generateTokens(payload.userId)

    await storeRefreshToken(payload.userId, refreshId)

    return res.json({
      accessToken,
      refreshToken: newRefreshToken,
    })
  } catch (err) {
    return res.status(403).json({ message: err.message })
  }
}

// ======================= LOGOUT =======================
export const logout = async (req, res) => {
  try {
    const { refreshToken } = req.body

    if (refreshToken) {
      try {
        const payload = await verifyRefreshToken(refreshToken)
        await removeRefreshToken(payload.tokenId)
      } catch (err) {
        // ignore invalid token
      }
    }

    return res.json({ message: 'Logged out successfully' })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
