import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom"
import List from './Pages/List'
import View from './Pages/View'
import Edit from './Pages/Edit'
import Add from './Pages/Add'
import Error from './Pages/Error'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/view/:id' element={<View/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
