import React, { useEffect, useState } from 'react'
import './App.css'
import {useNavigate, Link} from 'react-router-dom'


function Contact({ AddContact }) {
  let navigate=useNavigate()

  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [useData, setuseData] = useState()
  let randomming = Math.floor(Math.random() * 2000)
  let data = { name, email, id:randomming }


  return (
    <>
<div className="container">
 <h1>Add Contact</h1>
  <form className="row g-3">
      <div className="col-md-4">
        <label htmlFor="validationDefault01" className="form-label">Name</label>
        <input type="text" className="form-control" id="validationDefault01" onChange={(e)=> setname(e.target.value)}/>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">Email</label>
        <input type="email" className="form-control" id="validationDefault02" onChange={(e)=> setemail(e.target.value)}/>
      </div>
      <button onClick={(e)=>AddContact(data,e.preventDefault(), navigate('/list'))} className='btn btn-success'>Add Contact</button>
        </form>
        <Link to='/list'><button>Go to List</button></Link>
</div>
    </>
  )
}

export default Contact