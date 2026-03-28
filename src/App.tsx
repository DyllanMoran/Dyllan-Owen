import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Colby from './pages/Colby'
import DarkMaterials from './pages/DarkMaterials'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colby" element={<Colby />} />
        <Route path="/dark-materials" element={<DarkMaterials />} />
      </Routes>
      <footer />
    </>
  )
}
