import {useState, useEffect} from 'react'
import BlogList from './BlogList';
import useFetch from "./useFetch";

function Object() {
  let { Data: blogs, loading, ErrorMess } = useFetch('http://localhost:8000/blog')
  return (
    <>
      {ErrorMess && <h1>{ErrorMess}</h1>}
      {loading && <p>Loading...</p>}
      {blogs && <BlogList  element={blogs} />}
    </>
  )
}
export default Object