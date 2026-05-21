import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import HomePage from './pages/HomePage'

function App() {
  const Router = window.location.protocol === 'file:' ? MemoryRouter : BrowserRouter

  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
