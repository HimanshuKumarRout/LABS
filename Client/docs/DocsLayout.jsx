import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useRef,
  Suspense,
  lazy,
} from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { Sandpack } from '@codesandbox/sandpack-react'
import sidebar from './sidebar.json'
import './docs.css'

/* ─── Theme ─── */
const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }
    const stored = localStorage.getItem('theme')
    if (stored) {
      return stored
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext)
}

function DarkModeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <button
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle dark mode"
      className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer text-lg leading-none"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

/* ─── Sidebar ─── */
function Sidebar() {
  const linkBase = 'block px-3 py-1.5 rounded-md text-sm transition-colors'
  const linkActive =
    'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold'
  const linkInactive =
    'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'

  return (
    <nav className="flex flex-col gap-0.5 px-3">
      {Object.entries(sidebar).map(([key, value]) => {
        if (typeof value === 'string') {
          return (
            <NavLink
              key={key}
              to={value}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
            >
              {key}
            </NavLink>
          )
        }
        return (
          <div key={key} className="mb-2">
            <span className="block px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              {key}
            </span>
            {Object.entries(value).map(([subKey, subValue]) => (
              <NavLink
                key={subKey}
                to={subValue}
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
              >
                {subKey}
              </NavLink>
            ))}
          </div>
        )
      })}
    </nav>
  )
}

/* ─── Search ─── */
function flattenSidebar(sb) {
  const pages = []
  for (const [key, value] of Object.entries(sb)) {
    if (typeof value === 'string') {
      pages.push({ title: key, path: value })
    } else {
      for (const [subKey, subValue] of Object.entries(value)) {
        pages.push({ title: subKey, path: subValue })
      }
    }
  }
  return pages
}

function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const ref = useRef(null)
  const pages = useMemo(() => flattenSidebar(sidebar), [])

  useEffect(() => {
    const handle = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  const handleSearch = (value) => {
    setQuery(value)
    if (!value.trim()) {
      setResults([])
      setOpen(false)
      return
    }
    const q = value.toLowerCase()
    const found = pages.filter(
      (p) => p.title.toLowerCase().includes(q) || p.path.toLowerCase().includes(q),
    )
    setResults(found)
    setOpen(found.length > 0)
  }

  const goTo = (path) => {
    setOpen(false)
    setQuery('')
    navigate(path)
  }

  return (
    <div className="relative flex-1 max-w-sm" ref={ref}>
      <input
        type="text"
        placeholder="Search docs..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => query.trim() && setOpen(true)}
        className="w-full px-3 py-1.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors"
      />
      {open && results.length > 0 && (
        <ul className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 py-1 max-h-72 overflow-y-auto">
          {results.map((r) => (
            <li
              key={r.path}
              onClick={() => goTo(r.path)}
              className="px-3 py-2 text-sm cursor-pointer flex justify-between items-center hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors"
            >
              <span className="text-gray-900 dark:text-gray-100">{r.title}</span>
              <span className="text-[11px] font-mono text-gray-400 dark:text-gray-500">
                {r.path}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/* ─── Sandpack ─── */
function SandpackBlock({ code }) {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
      <Sandpack
        template="react"
        files={{ '/App.js': code }}
        theme={theme === 'dark' ? 'dark' : 'light'}
        options={{
          showNavigator: false,
          showTabs: false,
          editorHeight: 300,
          showLineNumbers: true,
        }}
      />
    </div>
  )
}

/* ─── MDX components ─── */
const mdxComponents = {
  h1: (props) => <h1 className="mdx-h1" {...props} />,
  h2: (props) => <h2 className="mdx-h2" {...props} />,
  h3: (props) => <h3 className="mdx-h3" {...props} />,
  p: (props) => <p className="mdx-p" {...props} />,
  ul: (props) => <ul className="mdx-ul" {...props} />,
  ol: (props) => <ol className="mdx-ol" {...props} />,
  code: (props) => <code className="mdx-code" {...props} />,
  pre: (props) => {
    const child = props.children
    if (
      child?.props?.className === 'language-jsx' ||
      child?.props?.className === 'language-react'
    ) {
      return <SandpackBlock code={child.props.children} />
    }
    return <pre className="mdx-pre" {...props} />
  },
  a: (props) => (
    <a
      className="mdx-a"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      {...props}
    />
  ),
}

/* ─── Prev / Next nav ─── */
function buildGroupedPages(sb) {
  const result = []
  for (const [, value] of Object.entries(sb)) {
    if (typeof value === 'string') {
      continue
    }
    const pages = Object.entries(value).map(([k, v]) => ({ title: k, path: v }))
    result.push(pages)
  }
  return result
}

const groupedPages = buildGroupedPages(sidebar)

function DocPageNav({ currentPath }) {
  let prev = null,
    next = null
  for (const group of groupedPages) {
    const idx = group.findIndex((p) => p.path === currentPath)
    if (idx !== -1) {
      if (idx > 0) {
        prev = group[idx - 1]
      }
      if (idx < group.length - 1) {
        next = group[idx + 1]
      }
      break
    }
  }
  return (
    <div className="flex justify-between gap-4 mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
      {prev ? (
        <NavLink
          to={prev.path}
          className="flex flex-col gap-0.5 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 max-w-[50%] transition-all no-underline group"
        >
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            Previous
          </span>
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {prev.title}
          </span>
        </NavLink>
      ) : (
        <div />
      )}
      {next ? (
        <NavLink
          to={next.path}
          className="flex flex-col gap-0.5 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 max-w-[50%] transition-all no-underline text-right items-end group"
        >
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            Next
          </span>
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {next.title}
          </span>
        </NavLink>
      ) : (
        <div />
      )}
    </div>
  )
}

/* ─── Doc page ─── */
const modules = import.meta.glob('/docs/docs/**/*.mdx')

const pathToComponent = {}
for (const [p, loader] of Object.entries(modules)) {
  pathToComponent[p] = lazy(loader)
}

function slugToPath(slug) {
  let p = slug.replace(/\/$/, '')
  if (!p.startsWith('/')) {
    p = '/' + p
  }
  const candidates = [`/docs/docs${p}.mdx`, `/docs/docs${p}/index.mdx`]
  for (const c of candidates) {
    if (c in pathToComponent) {
      return c
    }
  }
  return null
}

export function DocPage() {
  const { '*': slug } = useParams()
  const path = slugToPath(slug || 'getting-started')
  if (!path) {
    return (
      <div className="py-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Page not found</h1>
        <p className="text-gray-500 dark:text-gray-400">
          The doc{' '}
          <code className="font-mono text-sm px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">
            /{slug}
          </code>{' '}
          does not exist.
        </p>
      </div>
    )
  }
  const Component = pathToComponent[path]
  const currentSlug = slug || 'getting-started'
  const currentPath = '/docs/' + currentSlug.replace(/\/$/, '')
  return (
    <>
      <Suspense
        fallback={<div className="py-8 text-gray-400 dark:text-gray-500 text-sm">Loading...</div>}
      >
        <Component />
      </Suspense>
      <DocPageNav currentPath={currentPath} />
    </>
  )
}

/* ─── Main Layout ─── */
export default function DocsLayout({ children }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300">
        <header className="sticky top-0 z-50 flex items-center gap-4 h-14 px-6 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
          <a
            href="/"
            className="font-bold text-xl tracking-tight text-gray-900 dark:text-white no-underline hover:no-underline"
          >
            LABS
          </a>
          <SearchBar />
          <DarkModeToggle />
        </header>
        <div className="flex flex-1">
          <aside className="w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 py-4 overflow-y-auto sticky top-14 h-[calc(100vh-3.5rem)] hidden md:block">
            <Sidebar />
          </aside>
          <main className="flex-1 px-8 md:px-12 py-8 max-w-[860px] min-w-0 mx-auto md:mx-0">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}
