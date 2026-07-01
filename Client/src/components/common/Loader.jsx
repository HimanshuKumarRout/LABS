import React from 'react'

export default function Loader() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.24),_transparent_45%),linear-gradient(135deg,#060b16_0%,#0b1326_45%,#111827_100%)] text-[#e5ecff] overflow-hidden">
      <div className="relative flex flex-col items-center justify-center px-6 py-10">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl absolute top-10 left-10" />
        </div>

        <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
          <div className="absolute h-24 w-24 rounded-full border border-white/10" />
          <div className="absolute h-20 w-20 rounded-full border-2 border-transparent border-t-[#8b5cf6] border-r-[#38bdf8] animate-spin" />
          <div className="absolute h-14 w-14 rounded-full border-2 border-transparent border-b-[#4ade80] border-l-[#8b5cf6] animate-[spin_1.2s_linear_infinite_reverse]" />
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#6366f1] to-[#38bdf8] shadow-[0_0_30px_rgba(99,102,241,0.7)]" />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-[0.2em] text-white/90 uppercase">
            Initializing LABS
          </h2>
          <p className="mt-3 text-sm text-slate-300/80">
            Preparing your futuristic learning experience...
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#38bdf8] animate-pulse"
              style={{ animationDelay: `${dot * 160}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
