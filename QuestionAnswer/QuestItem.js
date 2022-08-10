import React, { useState } from 'react'
import  './Ques.css'

function QuestItem({ Title,Info, Id }) {
    const [show, setshow] = useState(false)
  return (
      <>
         <div key={Id} className="card item"><h4>{Title} {show && <p>{Info}</p>} <span onClick={()=>setshow(!show)}>{show ? '-' : '+'} </span></h4></div>
      </>
               
  )
}

export default QuestItem