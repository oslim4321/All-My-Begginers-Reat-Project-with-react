import { useContext } from 'react'
import React from 'react'
import './Modal.css'
import { useGlobalContext} from './Context'

function Modal() {
  const { isModalOpen,Closemodalset } = useGlobalContext()
  
  // console.log(opensidebar)
  return (
    <div className={isModalOpen ? 'boxAll' : 'disNone'}>
          <div className='box'>
              <button onClick={Closemodalset}>X</button>
            <div className="boxcenter">
            <h1>Modal content</h1>
            </div>
              
        </div>
    </div>
  )
}

export default Modal