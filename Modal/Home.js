import React from 'react'
import './Modal.css'
import {useGlobalContext} from './Context'

function Home() {
  const { opensidebar,Openmodalset } = useGlobalContext()

  return (
      <div className='body'>
     <div className='bar' onClick={opensidebar}>
          <span></span>
          <span></span>
          <span></span>
          {/* <button>ok</button> */}
    </div>
          
          <div className="center" onClick={Openmodalset}>
              <button className='modalShow'>Show Modal</button>
          </div>
    </div>
  )
}

export default Home