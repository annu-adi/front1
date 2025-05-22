import { useState } from 'react'
import Registration from './Components/Registration'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Nav from './Components/Nav'
import './App.css'
//import CreateRecipe from './Components/CreateRecipe'
//import SavedRecipe from './Components/SavedRecipe'
//import ReadRecipe from './Components/ReadRecipe'

function App() {
  

  return (
    
    <BrowserRouter>
   
    <Routes>
        <Route path='/' element={<Home />}></Route>
      
        <Route path='/auth/register' element={<Registration />}></Route> 
        <Route path='/auth/login' element={<Login />}></Route> 
        
         
         



        </Routes>
        </BrowserRouter>   
    
  )
}

export default App

