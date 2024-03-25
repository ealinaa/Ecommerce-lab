import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Home from './Pages/Home'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes