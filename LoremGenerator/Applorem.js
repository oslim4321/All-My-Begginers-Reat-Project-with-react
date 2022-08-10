import React, { useState } from 'react'
import LeremData from './LeremData'
import './Lorem.css'

function Applorem() {
    const [count, setcount] = useState('')
    const [text, settext] = useState([])
    // console.log(count)
    function handlesub(e) {
        e.preventDefault()
        let amount = Number(count)
        if (amount <= 0) {
            amount =1
        }
        settext(LeremData.slice(0,amount))
    }
    // console.log(LeremData)
  return (
    <div className='container text-center mt-5'>
          <h3>Tired Of boring lorem?</h3>
          <form className='d-flex align-item-center justify-content-center' onSubmit={handlesub}>
              <p>paragraph:</p>
              <input className='input' type='number' name='number' placeholder='0' value={count} onChange={(e)=> setcount(e.target.value)} />
              <button type='submit'>Generate</button>
          </form >
          <div className="center">
            {
                text.map((elem,i)=>{
                    return (
                        <p key={i}>{elem}</p>
                    )
                })
            }
          </div>
    </div>
  )
}

export default Applorem