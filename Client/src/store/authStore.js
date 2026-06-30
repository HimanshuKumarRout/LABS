// src/store/authStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  loginAPI,
  registerAPI,
  logoutAPI,
  verifyOtpAPI,
  resendOtpAPI,
} from '../services/authService'
export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,
      loading: false,
      error: null,
      otpVerified: false,

      setToken: (token) => set({ token }),

      // LOGIN
      login: async (data) => {
        set({ loading: true, error: null })
        try {
          const res = await loginAPI(data)

          set({
            user: res.user,
            token: res.accessToken,
            refreshToken: res.refreshToken,
            loading: false,
          })
          return res
        } catch (err) {
          set({
            error: err.response?.data?.message || 'Login failed',
            loading: false,
          })
          return null
        }
      },

      // REGISTER
      register: async (data) => {
        set({ loading: true, error: null })
        try {
          await registerAPI(data)
          sessionStorage.setItem('pendingEmail', data.email)
          set({ loading: false })
          return true
        } catch (err) {
          set({
            error: err.response?.data?.message || 'Register failed',
            loading: false,
          })
          return false
        }
      },

      // VERIFY OTP
      verifyOtp: async (data) => {
        set({ loading: true, error: null })
        try {
          const res = await verifyOtpAPI(data)

          set({
            otpVerified: true,
            loading: false,
          })
          sessionStorage.removeItem('pendingEmail')

          return res
        } catch (err) {
          set({
            error: err.response?.data?.message || 'OTP verification failed',
            loading: false,
          })
          throw err
        }
      },

      // RESEND OTP
      resendOtp: async (data) => {
        set({ loading: true, error: null })
        try {
          const res = await resendOtpAPI(data)

          set({ loading: false })
          return res
        } catch (err) {
          set({
            error: err.response?.data?.message || 'Resend OTP failed',
            loading: false,
          })
          throw err
        }
      },

      // LOGOUT
      logout: async () => {
        const { refreshToken } = useAuthStore.getState()
        try {
          await logoutAPI({ refreshToken })
        } catch (err) {
          // continue cleanup even if API fails
        }
        sessionStorage.removeItem('pendingEmail')
        localStorage.removeItem('access-token')
        set({ user: null, token: null, refreshToken: null })
      },
    }),
    {
      name: 'access-token',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        refreshToken: state.refreshToken,
      }),
    },
  ),
)
