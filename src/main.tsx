import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Template from './layouts/Template'
import Home from './pages/home/Home'
import Servicios from './pages/services/pages/Servicios'
import Bookyng from './pages/bookyng/pages/Bookyng'
import Contact from './pages/contact/pages/Contact'
import Servicio from './pages/services/pages/Servicio'
import { CartProvider } from './pages/shop/context/CartContext'
import Login from './pages/auth/pages/Login'
import ProtectedRoute from './pages/auth/components/ProtectedRoute'
import MyBookyng from './pages/bookyng/pages/MyBookyng'
import Cut from './pages/haircut/pages/Cut'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Template />}>
            <Route path='/auth' element={<Login />} />
            <Route index element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/servicios' element={<Servicios />} />
              <Route path='/servicios/:id' element={<Servicio />} />
              <Route path='/reservar' element={<Bookyng />} />
              <Route path='/mis-reservas' element={<MyBookyng />} />
              <Route path='/contacto' element={<Contact />} />
              <Route path='/cortes' element={<Cut />} />
            </Route>
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
