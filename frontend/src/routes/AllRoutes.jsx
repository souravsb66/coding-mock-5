import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
    </Routes>
  )
}

export default AllRoutes