import React, { useEffect } from 'react'
import {
  Terminal,
  Bell,
  PlayCircle,
  Bot,
  Zap,
  Layers,
  Sparkles,
  MessageSquare,
  Briefcase,
  ArrowRight,
  Star,
  User,
  Globe,
  Mail,
  GitFork,
  LayoutDashboard,
  BookOpen,
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Landing() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    }, observerOptions)

    const cards = document.querySelectorAll('.glass-card')
    cards.forEach((card) => {
      card.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out')
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] font-sans min-h-screen selection:bg-indigo-600 selection:text-white overflow-x-hidden">
      {/* TopAppBar */}
      <header className="bg-[#0b1326]/80 backdrop-blur-md border-b border-slate-700/30 shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-2 max-w-7xl mx-auto h-16">
          <div className="flex items-center gap-2">
            <Terminal className="text-[#c3c0ff] w-6 h-6" />
            <span className="text-2xl font-bold text-[#c3c0ff] tracking-tight">LABS</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              className="text-sm font-semibold text-[#c3c0ff] hover:bg-slate-700/50 transition-colors duration-200 px-3 py-1 rounded-lg"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-sm font-medium text-[#c7c4d8] hover:bg-slate-700/50 transition-colors duration-200 px-3 py-1 rounded-lg"
              href="#catalog"
            >
              Catalog
            </a>
            <a
              className="text-sm font-medium text-[#c7c4d8] hover:bg-slate-700/50 transition-colors duration-200 px-3 py-1 rounded-lg"
              href="#challenges"
            >
              Challenges
            </a>
            <a
              className="text-sm font-medium text-[#c7c4d8] hover:bg-slate-700/50 transition-colors duration-200 px-3 py-1 rounded-lg"
              href="#pricing"
            >
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-[#c7c4d8] hover:bg-slate-700/50 p-2 rounded-full transition-colors active:scale-95 duration-150">
              <Bell className="w-5 h-5" />
            </button>
            <Link to="/login">
              <button className="bg-[#4f46e5] text-white px-6 py-2 rounded-lg text-sm font-medium hover:scale-[0.98] transition-transform active:scale-95">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-10 pb-24 px-6 max-w-7xl mx-auto relative bg-[radial-gradient(circle_at_50%_-20%,rgba(79,70,229,0.15)_0%,rgba(11,19,38,0)_60%)]">
          <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#171f33] border border-slate-700/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
              <span className="text-sm font-medium text-[#4edea3]">New: AI Tutor v4.0 is live</span>
            </div>

            <h1 className="text-5xl font-bold text-[#dae2fd] tracking-tight leading-[1.1] mb-4">
              Master Coding with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c3c0ff] to-[#4edea3]">
                AI at Your Side.
              </span>
            </h1>

            <p className="text-lg text-[#c7c4d8] leading-relaxed mb-10 max-w-2xl mx-auto">
              The only platform that pairs interactive coding environments with a real-time AI
              debugging engine and personalized 24/7 tutoring.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#4f46e5] text-white px-10 py-4 rounded-lg text-2xl font-semibold hover:scale-[0.98] transition-transform shadow-xl shadow-indigo-600/20 active:scale-95">
                Start Learning for Free
              </button>
              <button className="flex items-center gap-2 px-10 py-4 rounded-lg border border-slate-600/50 text-2xl font-semibold hover:bg-slate-700/30 transition-colors active:scale-95">
                <PlayCircle className="w-6 h-6" />
                See Demo
              </button>
            </div>
          </div>

          {/* Interface Visualization (Bento Style) */}
          <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto relative">
            {/* Main Editor */}
            <div className="col-span-12 lg:col-span-8 bg-[#171f33]/70 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl glass-card">
              <div className="bg-[#2d3449] px-4 py-2 flex items-center justify-between border-b border-slate-700/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="font-mono text-xs text-[#c7c4d8] opacity-70">
                  main.py — CodeLearn IDE
                </div>
                <div className="w-8"></div>
              </div>
              <div className="p-4 font-mono text-sm bg-[#060e20] text-[#dae2fd] overflow-x-auto rounded-lg border border-[#1e293b]">
                {/* <pre> tag ke beech me koi extra line break ya newline space nahi hona chahiye */}
                <pre className="m-0 p-0 leading-6 block">
                  {/* Line 1 */}
                  <div className="flex min-w-full hover:bg-[#111b33] px-2 rounded">
                    <span className="w-8 text-slate-600 select-none text-right pr-4">1</span>
                    <span>
                      <span className="text-[#4edea3]">def</span>{' '}
                      <span className="text-[#c3c0ff]">analyze_data</span>(dataset):
                    </span>
                  </div>

                  {/* Line 2 */}
                  <div className="flex min-w-full hover:bg-[#111b33] px-2 rounded">
                    <span className="w-8 text-slate-600 select-none text-right pr-4">2</span>
                    <span className="text-[#d0bcff]">
                      {' '}
                      # AI Suggestion: Use vectorization for speed
                    </span>
                  </div>

                  {/* Line 3 */}
                  <div className="flex min-w-full hover:bg-[#111b33] px-2 rounded">
                    <span className="w-8 text-slate-600 select-none text-right pr-4">3</span>
                    <span> processed = []</span>
                  </div>

                  {/* Line 4 */}
                  <div className="flex min-w-full hover:bg-[#111b33] px-2 rounded">
                    <span className="w-8 text-slate-600 select-none text-right pr-4">4</span>
                    <span>
                      {'    '}
                      <span className="text-[#4edea3]">for</span> item{' '}
                      <span className="text-[#4edea3]">in</span> dataset:
                    </span>
                  </div>

                  {/* Line 5 */}
                  <div className="flex min-w-full hover:bg-[#111b33] px-2 rounded">
                    <span className="w-8 text-slate-600 select-none text-right pr-4">5</span>
                    <span>
                      {'        '}
                      <span className="text-[#4edea3]">if</span> item.valid:
                    </span>
                  </div>

                  {/* Line 6 */}
                  <div className="flex min-w-full hover:bg-[#111b33] px-2 rounded">
                    <span className="w-8 text-slate-600 select-none text-right pr-4">6</span>
                    <span>
                      {'            '}processed.append(item.value *{' '}
                      <span className="text-[#d0bcff]">2</span>)
                    </span>
                  </div>

                  {/* Line 7 */}
                  <div className="flex min-w-full hover:bg-[#111b33] px-2 rounded">
                    <span className="w-8 text-slate-600 select-none text-right pr-4">7</span>
                    <span>
                      {'    '}
                      <span className="text-[#4edea3]">return</span> processed
                    </span>
                  </div>
                </pre>
              </div>
              {/* --- CODE CONTROL ACTION PANEL (Balanced & Lifted Up) --- */}
              <div className="flex items-center justify-between mt-6 pt-4 pb-4 border-t border-[#1e293b] pr-4 md:pr-8">
                {/* Left side info (Environment tag) */}
                <span className="text-xs text-[#94a3b8] font-mono pl-2">
                  Environment: <span className="text-[#38bdf8]">Python 3.10</span>
                </span>

                {/* Action Buttons with bottom & top breathing space */}
                <div className="flex items-center gap-3 mr-2 md:mr-6 mb-2">
                  {/* Run Code Button */}
                  <button
                    type="button"
                    onClick={() => console.log('Running code...')}
                    className="bg-[#111b33] hover:bg-[#1b2b4f] border border-[#334155] hover:border-[#6366f1]/50 text-[#dae2fd] px-5 py-2 rounded-xl text-sm font-semibold tracking-wide flex items-center gap-2 transition-all duration-200 active:scale-95"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                    Run Code
                  </button>

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={() => console.log('Submitting code...')}
                    className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#4f46e5] hover:to-[#9333ea] text-white px-6 py-2 rounded-xl text-sm font-bold tracking-wide shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_24px_rgba(99,102,241,0.5)] transition-all duration-200 active:scale-95"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {/* AI Panel */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
              <div className="bg-[#171f33]/70 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-4 flex-1 glass-card">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="text-[#c3c0ff] w-5 h-5" />
                  <span className="text-sm font-semibold text-[#c3c0ff]">AI Debugger</span>
                </div>
                <p className="text-sm text-[#dae2fd] mb-2">
                  I've detected a potential logic error on line 4.
                </p>
                <div className="bg-[#222a3d] rounded-lg p-3 border border-slate-700/30">
                  <p className="font-mono text-xs text-[#c7c4d8] italic">
                    "You are checking for validity, but not handling empty datasets. Try adding a
                    guard clause."
                  </p>
                </div>
                <button className="mt-4 w-full bg-[#2d3449] text-[#c7c4d8] text-sm font-medium py-2 rounded-lg border border-slate-700/20 hover:text-[#c3c0ff] transition-colors active:scale-95">
                  Apply Fix
                </button>
              </div>

              <div className="bg-[#171f33]/70 backdrop-blur-xl border border-emerald-500/20 rounded-xl p-4 glass-card">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="text-[#4edea3] w-5 h-5 fill-[#4edea3]" />
                  <span className="text-sm font-semibold text-[#4edea3]">Performance</span>
                </div>
                <div className="h-2 w-full bg-[#222a3d] rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-[#4edea3] w-[85%]"></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] font-semibold text-[#c7c4d8]">
                    OPTIMIZATION SCORE
                  </span>
                  <span className="text-[10px] font-semibold text-[#4edea3]">85%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-[#060e20]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#dae2fd] mb-2">
                Everything You Need to Scale
              </h2>
              <p className="text-sm text-[#c7c4d8] max-w-xl mx-auto">
                Advanced tools integrated into a seamless learning experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div className="group bg-[#171f33]/70 backdrop-blur-xl p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)] transition-all duration-300 glass-card">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-[#c3c0ff] mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#dae2fd] mb-2">Interactive Lessons</h3>
                <p className="text-sm text-[#c7c4d8]">
                  Learn by doing with live code execution in every single module.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-[#171f33]/70 backdrop-blur-xl p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)] transition-all duration-300 glass-card">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-[#d0bcff] mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#dae2fd] mb-2">AI Debugging</h3>
                <p className="text-sm text-[#c7c4d8]">
                  Get instant explanations for errors and real-time optimization tips.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-[#171f33]/70 backdrop-blur-xl p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)] transition-all duration-300 glass-card">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[#4edea3] mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#dae2fd] mb-2">24/7 AI Tutor</h3>
                <p className="text-sm text-[#c7c4d8]">
                  Stuck? Our AI tutor knows your progress and can guide you anytime.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group bg-[#171f33]/70 backdrop-blur-xl p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)] transition-all duration-300 glass-card">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-[#c3c0ff] mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#dae2fd] mb-2">Real-world Projects</h3>
                <p className="text-sm text-[#c7c4d8]">
                  Build production-grade apps from day one to build your portfolio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-[#131b2e]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold tracking-tight text-[#dae2fd] mb-4">
                  Trusted by 50,000+ Future Developers
                </h2>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-[#4edea3] w-5 h-5 fill-[#4edea3]" />
                  ))}
                  <span className="text-sm font-semibold text-[#dae2fd] ml-2">4.9/5 Rating</span>
                </div>
                <button className="text-[#c3c0ff] text-sm font-semibold border-b-2 border-[#c3c0ff] pb-1 hover:text-indigo-400 transition-colors">
                  Read all success stories
                </button>
              </div>

              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="bg-[#171f33]/70 backdrop-blur-xl p-6 rounded-xl border-l-4 border-l-[#c3c0ff] border-y border-r border-slate-700/50 glass-card">
                  <p className="text-sm text-[#dae2fd] mb-6 italic leading-relaxed">
                    "The AI tutor is a game changer. I used to spend hours on StackOverflow for
                    simple syntax errors. Now, I understand *why* my code failed in seconds."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2d3449] flex items-center justify-center">
                      <User className="text-[#c7c4d8] w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#dae2fd]">Sarah J.</h4>
                      <p className="text-[12px] text-[#c7c4d8]">Frontend Developer at Vercel</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#171f33]/70 backdrop-blur-xl p-6 rounded-xl border-l-4 border-l-[#4edea3] border-y border-r border-slate-700/50 glass-card">
                  <p className="text-sm text-[#dae2fd] mb-6 italic leading-relaxed">
                    "Most bootcamps are too fast or too slow. CodeLearn's AI adaptive engine matched
                    my pace perfectly. I went from zero to my first junior role in 6 months."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2d3449] flex items-center justify-center">
                      <User className="text-[#c7c4d8] w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#dae2fd]">Marcus T.</h4>
                      <p className="text-[12px] text-[#c7c4d8]">Data Analyst at Databricks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 px-6 text-center relative overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.08)_0%,transparent_70%)]">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-5xl font-bold tracking-tight mb-4">
              Ready to start your coding journey?
            </h2>
            <p className="text-lg text-[#c7c4d8] mb-10">
              Join thousands of students and start building with the power of AI today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#4f46e5] text-white px-10 py-4 rounded-lg text-2xl font-semibold hover:scale-[0.98] transition-transform active:scale-95">
                Create Free Account
              </button>
              <button className="px-10 py-4 rounded-lg bg-[#171f33] border border-slate-700 text-2xl font-semibold hover:bg-[#2d3449] transition-colors active:scale-95">
                Contact Enterprise
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#060e20] border-t border-slate-800/50 pt-20 pb-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="text-[#c3c0ff] w-6 h-6" />
                <span className="text-2xl font-bold text-[#c3c0ff] tracking-tight">LABS</span>
              </div>
              <p className="text-sm text-[#c7c4d8] mb-6 max-w-xs leading-relaxed">
                Empowering the next generation of software engineers with AI-driven education.
              </p>
              <div className="flex gap-4">
                <a className="text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors" href="#globe">
                  <Globe className="w-5 h-5" />
                </a>
                <a className="text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors" href="#email">
                  <Mail className="w-5 h-5" />
                </a>
                <a className="text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors" href="#git">
                  <GitFork className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#dae2fd] mb-6 uppercase tracking-widest text-[12px]">
                Platform
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    className="text-sm text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors"
                    href="#courses"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors"
                    href="#roadmaps"
                  >
                    Roadmaps
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors"
                    href="#debugger"
                  >
                    AI Debugger
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors"
                    href="#pricing"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#dae2fd] mb-6 uppercase tracking-widest text-[12px]">
                Company
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    className="text-sm text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors"
                    href="#about"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors"
                    href="#careers"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors"
                    href="#blog"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors"
                    href="#privacy"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2">
              <h4 className="text-sm font-semibold text-[#dae2fd] mb-6 uppercase tracking-widest text-[12px]">
                Stay Updated
              </h4>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-800/50 gap-4">
            <p className="text-sm text-slate-500">© 2026 LABS. Built for the modern engineer.</p>
            <div className="flex gap-6">
              <a className="text-sm text-slate-500 hover:text-[#dae2fd]" href="#terms">
                Terms
              </a>
              <a className="text-sm text-slate-500 hover:text-[#dae2fd]" href="#cookies">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-[#171f33]/90 backdrop-blur-xl border-t border-slate-800/50 z-50">
        <a
          className="flex flex-col items-center justify-center bg-[#4f46e5] text-white rounded-full px-4 py-1 scale-[0.95]"
          href="#dashboard"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-[10px] font-medium">Dashboard</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-[#c7c4d8] hover:text-[#c3c0ff] transition-all"
          href="#catalog"
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] font-medium">Catalog</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-[#c7c4d8] hover:text-[#c3c0ff] transition-all"
          href="#challenges"
        >
          <Zap className="w-5 h-5" />
          <span className="text-[10px] font-medium">Challenges</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-[#c7c4d8] hover:text-[#c3c0ff] transition-all"
          href="#profile"
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium">Profile</span>
        </a>
      </nav>
    </div>
  )
}
