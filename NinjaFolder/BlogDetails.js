// import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from './useFetch';
// import BlogList from './BlogList';
import './Ninja.css'

function BlogDetails() {
  let del=useNavigate()
  let { id } = useParams();
  let { Data: blogs, loading, ErrorMess } = useFetch('http://localhost:8000/blog/' + id)

  function deleHand() {
    fetch('http://localhost:8000/blog/' + id,{
      method: "DELETE"
    })
    .then(() => {
      del('/')
    })
  }
  return (
    < div className='bodTitle'>
      <p>{id}</p>
      {loading && <div>loading...</div>}
      {ErrorMess && <div>{ErrorMess}</div>}
      {blogs && (
        <article>
          <h2>{blogs.Name}</h2>
          <p>Written By {blogs.Author}</p>
          <div>{blogs.title}</div>
          <button onClick={deleHand}>Delete</button>
          <button>Edit</button>
     
        </article>
       
      )}
    </div>
  );
}

export default BlogDetails