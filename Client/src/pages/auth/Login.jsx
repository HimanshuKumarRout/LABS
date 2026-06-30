import React, { useState } from 'react'
import { Mail, Lock, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login, loading, error } = useAuthStore()

  const handleLogin = async (e) => {
    e.preventDefault()

    const res = await login({ email, password })

    if (res) {
      navigate('/dashboard')
    }
  }

  return (
    // Global Screen Wrapper (Dark background, Centered layout)
    <div className="bg-[#060913] min-h-screen w-screen flex items-center justify-center relative overflow-y-auto px-4 py-6 antialiased select-none font-sans">
      {/* Decorative Background Neon Ambient Orbs */}
      <div className="absolute w-[350px] height-[350px] rounded-full blur-[100px] opacity-15 pointer-events-none z-1 top-[-50px] left-[-50px] bg-[#6366f1]"></div>
      <div className="absolute w-[350px] height-[350px] rounded-full blur-[100px] opacity-15 pointer-events-none z-1 bottom-[-50px] right-[-50px] bg-[#a855f7]"></div>

      {/* --- AUTH CARD --- */}
      <div className="bg-[#0b1324] border border-[#1e293b] rounded-[20px] px-7 py-8 w-full max-w-[400px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] z-10 relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#6366f1]/30 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_30px_rgba(99,102,241,0.1)]">
        {/* Branding Section */}
        <div className="text-center mb-6">
          <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
            <span className="font-mono text-base font-bold text-[#818cf8]">{'< />'}</span>
          </div>
          <h1 className="text-[28px] font-extrabold text-white m-0 tracking-[2px]">LABS</h1>
          <p className="text-sm text-[#94a3b8] mt-1 m-0 font-medium">
            Learn • Adapt • Build • Solve
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Email input field wrapper */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold text-[#94a3b8] tracking-[0.5px] uppercase">
              Email Address
            </label>
            <div className="relative flex items-center group">
              <Mail
                className="absolute left-[14px] text-[#94a3b8] transition-colors duration-300 group-focus-within:text-[#6366f1]"
                size={18}
              />
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#060913] border border-[#1e293b] rounded-v10 pl-[42px] pr-4 py-3 text-sm text-white outline-none box-border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-xl focus:border-[#6366f1] focus:bg-[#090e1e] focus:shadow-[0_0_15px_rgba(99,102,241,0.25)]"
              />
            </div>
          </div>

          {/* Password input field wrapper */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold text-[#94a3b8] tracking-[0.5px] uppercase">
              Password
            </label>
            <div className="relative flex items-center group">
              <Lock
                className="absolute left-[14px] text-[#94a3b8] transition-colors duration-300 group-focus-within:text-[#6366f1]"
                size={18}
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#060913] border border-[#1e293b] rounded-v10 pl-[42px] pr-4 py-3 text-sm text-white outline-none box-border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-xl focus:border-[#6366f1] focus:bg-[#090e1e] focus:shadow-[0_0_15px_rgba(99,102,241,0.25)]"
              />
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a
              href="#forgot"
              className="text-[12.5px] text-[#94a3b8] no-underline hover:text-[#6366f1] transition-colors"
            >
              Forgot Password?
            </a>
          </div>

          {/* Premium Glowing Login Trigger */}
          <button
            type="submit"
            className="group/btn bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white border-none py-3 px-4 rounded-xl text-[14.5px] font-bold cursor-pointer flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(99,102,241,0.55)]"
          >
            <span>Login</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/btn:translate-x-[3px]"
            />
          </button>
        </form>

        {/* Card Footer Links */}
        <div className="mt-6 pt-5 border-t border-[#1e293b] text-center">
          <p className="text-sm text-[#94a3b8]">
            Don’t have an account?{' '}
            <Link
              to="/register"
              className="inline-flex items-center font-semibold text-[#818cf8] hover:text-[#a5b4fc] transition-all duration-300 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
