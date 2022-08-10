import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
      <div className='errorPage'>
          <h1 style={{color: 'red'}}>404</h1>
        <h1>OOps</h1>
          <h2>You just Enter a wrong address</h2>
          <Link to='/'>GO back To HomePage </Link>
      </div>
  )
}

export default ErrorPage