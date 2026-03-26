import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Company'
import CareerPage from './pages/Company/Career'
import LoginPage from './pages/Auth/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App