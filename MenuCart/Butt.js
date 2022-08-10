import React from 'react'
import './Css.css'

function Butt({ filterClick, allcategory }) {
    // console.log(allcategory)
  return (
    <div>
          <ul>
              {
                  allcategory.map((elem, i)=>{
                    return(
                        <button onClick={()=>filterClick(elem)} key={i}>{elem}</button>
                    )
                  })
              }
              {/* <button>All</button>
              <button onClick={()=> filterClick('launch')}>BreakFast</button>
              <button>Launch</button>
              <button>Shakes</button> */}
          </ul>
    </div>
  )
}

export default Butt