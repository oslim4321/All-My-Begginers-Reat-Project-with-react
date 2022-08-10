import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom'
import Ninja from './Ninja'
import Object from './Object'
import BlogDetails from './BlogDetails'
import Create from './Create'
import ErrorPage from './ErrorPage'


function Show() {
  return (
      <Router>
          <Ninja/>
         <Routes>
            <Route path='/' element={<Object/>}></Route>
           <Route path='latest' element={<Create />}></Route>
           <Route path='blog/:id' element={<BlogDetails />}></Route>
            <Route path='*' element={<ErrorPage />}></Route>
        
          </Routes>
    </Router>
  )
}

export default Show

