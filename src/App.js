import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Recipe from './components/Recipe'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/:id' element={<Recipe/>}></Route>
        </Routes> 
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App