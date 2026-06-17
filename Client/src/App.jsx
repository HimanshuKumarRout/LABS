import { Routes, Route } from 'react-router-dom'
import DocsLayout, { DocPage } from '../docs/DocsLayout.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={null} />
      <Route
        path="/docs/*"
        element={
          <DocsLayout>
            <DocPage />
          </DocsLayout>
        }
      />
    </Routes>
  )
}
