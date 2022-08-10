import React, { useState } from 'react'
import './Css.css'

function Items({ Menu }) {
    const [ReadMore, setReadMore] = useState(false)
  return (
      <div className='grid'>
          {
              Menu.map(elem => {
                  let { Id, Title, category, price, Image, Info } =elem
                  return (
                    <div key={Id} className="item">
                    <img src={Image} alt={Title} />
                    <div className="div">
                        <div className="underline">
                        <h5>{Title}</h5>
                       <span>{price}</span>
                       </div>
                        {<p>{ReadMore ? Info : Info.substring(0,150)}...</p>}
                              {/*  <p>{ReadMore ? elem.text : `${elem.text.substring(0, 70)}...`}</p> */}
                    </div>
                </div>
                  )
                
              })
          }
       
         
       
    </div>
  )
}

export default Items