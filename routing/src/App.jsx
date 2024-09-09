import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import ErrorPage from './ErrorPage'
import Navbar from './Navbar'
import Login from './Login'
import Subscription from './Subscription'
import Blogs from './Blogs'
import Careers from './Careers'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}>
            <Route path="sub" element={<Subscription />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="career" element={<Careers />} />
          </Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App