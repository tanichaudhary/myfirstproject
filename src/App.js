import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './Navbar'
import About from './components/About'
import Services from './components/Services'
const App = () => {
  return (
  
    < >
    <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/services' element = {<Services/>}/>

    </Routes>
    </BrowserRouter>
       
     </>
  )
}

export default App