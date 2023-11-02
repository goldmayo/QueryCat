import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/home/home'
import Collection from '@/pages/collection/collection'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
    </Routes>
  )
}

export default App
