import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
// import './App.css'
const App = () => {
  return (
   <>
   <>
    <BrowserRouter>
      <Routes>
        <Route element = {<Signup/>} path = "/signup"/>
        <Route element = {<Signin/>} path = "/signin"/>
        <Route element = {<Blog/>} path = "/blog/:id"/>
      </Routes>
    </BrowserRouter>
    </>
   </>
  )
}

export default App

