import axios from 'axios'
import { useAuthStore } from '../store/authStore'
export const BASE_URL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: BASE_URL || 'http://localhost:5000/api',
  withCredentials: true,
})

// Request interceptor → attach access token
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor → handle expired token
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config

    // Skip refresh for auth endpoints to prevent loops
    const isAuthRequest = originalRequest.url?.includes('/auth/')
    if (error.response?.status === 401 && !originalRequest._retry && !isAuthRequest) {
      originalRequest._retry = true

      try {
        const res = await axios.get(`${BASE_URL}/auth/refresh`, { withCredentials: true })

        const newToken = res.data.accessToken
        useAuthStore.getState().setToken(newToken)
        originalRequest.headers.Authorization = `Bearer ${newToken}`
        return api(originalRequest)
      } catch (refreshError) {
        useAuthStore.getState().logout()
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)

export default api
