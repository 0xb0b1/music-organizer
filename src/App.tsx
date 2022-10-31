import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Categories } from './pages/categories'
import { Playlists } from './pages/playlists'
import { Header } from './components/header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/playlists' element={<Playlists />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
