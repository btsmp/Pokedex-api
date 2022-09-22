import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Fav } from '../pages/Fav'
import { Details } from '../pages/Details'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favs' element={<Fav />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  )
}