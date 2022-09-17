import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Fav } from '../pages/Fav'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favs' element={<Fav />} />

    </Routes>
  )
}