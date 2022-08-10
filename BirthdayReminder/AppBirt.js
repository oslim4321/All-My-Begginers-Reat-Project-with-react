import React, { useState } from 'react'
import Data from './Data'
import './Birt.css'


export default function AppBirt() {
  const [people, setpeople] = useState(Data)
  const [ReadMore, setReadMore] = useState(false)
  return (
    
        <div>
        <div className="container">
        <div className="card d-flex justify-content-center" style={{ width: '400px' }}>
        <div className='text-center'>
         <p>{people.length} Birthday today</p>
          <h3>List Component</h3>
        </div>
          {
            people.map(elem => {
              return (
                <div key={elem.Id} className='d-flex align-item-center justify-content-center'>
                 <img src={elem.Image} />
                 <div className="card-body">
                   <div className="card-title">
                     {elem.Name}
                      <p className="card-text"> {elem.Age}</p>
                      <p>{ReadMore ? elem.text : `${elem.text.substring(0, 70)}...`}</p>
                      <button onClick={() => setReadMore(!ReadMore)}>{ReadMore ?'See less' : 'See More'}</button>
                   </div>
                </div>
                </div>
                
              )
            })
          }
           <button onClick={()=> setpeople([])} className='btn btn-primary'>Clear All</button>
          </div>
      </div>
      
      </div >
      //  )
   
      // })
    
  )
}
