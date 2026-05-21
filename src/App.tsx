import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import HomePage from './pages/HomePage'

function App() {
  const isFilePreview = window.location.protocol === 'file:'
  const githubPagesBase = window.location.hostname.endsWith('github.io')
    ? '/portfolio-website'
    : undefined

  const routes = (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )

  if (isFilePreview) {
    return <MemoryRouter>{routes}</MemoryRouter>
  }

  return (
    <BrowserRouter basename={githubPagesBase}>
      {routes}
    </BrowserRouter>
  )
}

export default App
