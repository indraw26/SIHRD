import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Company'
import CareerPage from './pages/Company/Career'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App