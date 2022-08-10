import React from 'react'
import { Link } from 'react-router-dom'
import BlogDetails from './BlogDetails'
import './Ninja.css'

function BlogList({element}) {
  return (
    <div>
        <h1 style={{fontWeight: 100}}>All Blogs!</h1>
             {
              element.map((blogs) => (
                <div className='all' key={blogs.id}>
                
                  <div className='link'>
                    <Link to={`/blog/${blogs.id}`}>
                      <p></p>
                      <h1> <span className='numlist'>({blogs.id})</span> {blogs.Name}</h1>
                      <p>WRITTEN BY{blogs.Author}</p>
                    </Link>
                    
                  </div>
                  {/* <button onClick={() => Handledelete(blogs.id)}>Delete</button> */}

                  </div>
              ))
        }
    </div>
  )
}

export default BlogList