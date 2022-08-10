import React, { useState } from 'react'
import './Color.css'

function AppColor() {
  let colorarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f"]
  const [color, setcolor] = useState('yellow')
  const [text, settext] = useState()

  function chagecolor() {
    let rex = '#'
    for (let i = 0; i < 6; i++) {
      rex += colorarr[randoom()] 
      setcolor(rex)
      settext(rex)
      console.log(rex)
    }
    function randoom() {
      return Math.floor(Math.random()*colorarr.length)
    }
    
  }
  return (
    <div className='container align-item-center'>
     <div className='box' style={{background: color}}>
       
       </div>
      <button onClick={chagecolor}>Change Color</button>
      <p>{text}</p>
    </div>
  )
}

export default AppColor