import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='productdetail' element={<ProductDetails/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes