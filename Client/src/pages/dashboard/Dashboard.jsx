import React from 'react'
import { useAuthStore } from '../../store/authStore'
import { LogOut } from 'lucide-react'

export default function Dashboard() {
  const { user, logout } = useAuthStore()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div className="bg-[#060913] min-h-screen w-screen text-white">
      {/* Navbar */}
      <nav className="border-b border-[#1e293b] px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-extrabold tracking-[2px] m-0">LABS</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-[#94a3b8]">{user?.name || user?.email}</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 bg-[#1e293b] border-none text-[#94a3b8] text-sm font-medium cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#2d3a50] hover:text-white"
          >
            <LogOut size={14} />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="flex items-center justify-center h-[calc(100vh-65px)]">
        <div className="text-center">
          <h2 className="text-3xl font-bold m-0">Welcome, {user?.name || 'User'} 🎉</h2>
          <p className="text-[#94a3b8] mt-3 text-sm m-0">You are logged in.</p>
        </div>
      </div>
    </div>
  )
}
