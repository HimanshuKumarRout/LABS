import api from '../utils/api'

export const loginAPI = async (data) => {
  const res = await api.post('/auth/login', data)
  return res.data
}

export const registerAPI = async (data) => {
  const res = await api.post('/auth/register', data)
  return res.data
}

export const logoutAPI = async (data) => {
  await api.post('/auth/logout', data)
}

export const verifyOtpAPI = async (data) => {
  const res = await api.post('/auth/verify-otp', data)
  return res.data
}

export const resendOtpAPI = async (data) => {
  const res = await api.post('/auth/resend-otp', data)
  return res.data
}
