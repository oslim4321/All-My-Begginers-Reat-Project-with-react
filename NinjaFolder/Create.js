import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Ninja.css'

function Create() {
  let history=useNavigate()
  let [pending, setpending] = useState(false)
  let [Name, setName] = useState('')
  let [title, setTitle] = useState('')
  let [Author, SetAuthor] = useState('Oslim')

  function habdleSubmit(e) {
    e.preventDefault()
    let postBlog = { Name, title, Author }
    setpending(true)
    
    fetch('http://localhost:8000/blog',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postBlog)
    }).then(() => {
      console.log('Blog update successfully')
      setpending(false)
      history('/')
    })
    
  }

  return (
        <div className='Create'>
      <h1 className='create'>Write Your Blog </h1>
      <form onSubmit={habdleSubmit}>
        <p>{pending && <div>Loading...</div> }</p>
          <label>Blog title:</label>
           <input type="text" value={Name}  required onChange={(e)=>setName(e.target.value) } />

           <label>Blog Body:</label>
            <textarea name="" id="" cols="30" rows="10" value={title} onChange={(e)=> setTitle(e.target.value)}></textarea>
        
        <label>Blog Author:</label>
        
           <select value={Author} onChange={(e)=>{SetAuthor(e.target.value)}} >
            <option value="Oslim">Oslim</option>
            <option value="MArio">MArio</option>
        </select>
       {!pending && <button>Submit</button>}
       {pending && <button>Submiting Blog...</button>}
       
          </form>
    </div>
  )
}

export default Create