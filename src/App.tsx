import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ComparePage } from './pages/ComparePage'
import { HomePage } from './pages/HomePage'
import { MethodologyPage } from './pages/MethodologyPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="compare" element={<ComparePage />} />
          <Route path="methodology" element={<MethodologyPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
