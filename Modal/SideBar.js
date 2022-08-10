import React, { useState } from 'react'
import MdalData from './MdalData'
import './Modal.css'
import { Link } from './MdalData'
import {useGlobalContext} from './Context'



function SideBar() {
  const { isSidebaropen, closesidebar } = useGlobalContext()

  return (
    // <div className={`block `}>
    <div className={isSidebaropen ?`sideBar` :'none' }>
        <div className="head">
              <h3>Codding Oslim</h3>
              <button onClick={closesidebar}>X</button>
          </div>
         
              {
              Link.map(elem => {
                      let {id,url,text}=elem
                    return(
                        <ul key={id}>  
                            <li>{text}</li>
                        </ul>
                    )
                  })
              }  
      {/* </div> */}
      </div>
  )
}

export default SideBar