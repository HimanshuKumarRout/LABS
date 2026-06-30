import nodemailer from 'nodemailer'
import { otpEmailTemplate } from '../../../templates/otpEmailTemplate.js'
import { resetPasswordOtpEmailTemplate } from '../../../templates/resetPassword.js'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendOTPEmail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'OTP Verification',
    html: otpEmailTemplate(otp),
  })
}
export const sendResetPasswoprdOTPEmail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Reset Password OTP Verification',
    html: resetPasswordOtpEmailTemplate(otp),
  })
}
