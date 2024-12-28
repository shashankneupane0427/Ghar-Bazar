import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route  path="/" element={<Home />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
