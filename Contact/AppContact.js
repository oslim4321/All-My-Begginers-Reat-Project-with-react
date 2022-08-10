import React, { useEffect } from 'react'
// import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes, Link, useParams, } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Contact from './Contact'
import ContactList from './ContactList'
import ContactNav from './ContactNav'
import DeleConDele from './DeleConDele'

function AppContact() {
  // let navigate=useNavigate()

  let Local_Storage = []
  // useEffect(() => {
    let dataHold =(localStorage.getItem('Contact-Data'))
    if (dataHold) {
      Local_Storage =JSON.parse(dataHold)
  }
  

  //  }, [])
  
  function AddContact(data) {
    // e.preventDefault()    
    Local_Storage.push(data)
    localStorage.setItem('Contact-Data', JSON.stringify(Local_Storage))
    // navigate('/')
   
   

  }
  // console.log(Local_Storage)
  useEffect(() => {
   
  }, [AddContact])
  return (
   
  <>
       <Router>
        <ContactNav path='nav' element={<ContactNav/>} />
        <Routes>
              {/* <Routes path='/o' element={<AppContact/>}></Routes> */}
          <Route path='/' element={<Contact AddContact={AddContact} />}></Route>
          <Route path='/delete/:id' element={<DeleConDele />}></Route>
          <Route path='/list' element={<ContactList />}></Route>
          </Routes>

       </Router>
  </>
  )
}

export default AppContact