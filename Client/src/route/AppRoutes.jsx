import { Routes, Route } from 'react-router-dom'
import DocsLayout, { DocPage } from '../../docs/DocsLayout.jsx'
import { lazy, Suspense } from 'react'
import ProtectedRoute from './ProtectedRoute.jsx'
import Loader from '../components/common/Loader.jsx'

const Landing = lazy(() => import('../pages/Landing.jsx'))
const Login = lazy(() => import('../pages/auth/Login.jsx'))
const Register = lazy(() => import('../pages/auth/Register.jsx'))
const Verify = lazy(() => import('../pages/auth/Verify.jsx'))
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard.jsx'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/docs/*"
          element={
            <DocsLayout>
              <DocPage />
            </DocsLayout>
          }
        />
      </Routes>
    </Suspense>
  )
}
