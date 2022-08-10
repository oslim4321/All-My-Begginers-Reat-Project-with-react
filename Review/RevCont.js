import React, { useState } from 'react'
import Rev_Data from './Rev_Data'

function RevCont() {
    const [index, setindex] = useState(0)
    // console.log(Rev_Data)
    let { About, Career, Id, Image, Name } = Rev_Data[index]
 
    let checkNum = (elem => {
        if (elem > Rev_Data.length - 1) {
            return 0 
        }
        else if(elem < 0){
            return Rev_Data.length-1
        }
        return elem
    })

    function increase() {
        setindex(index =>{
            let newIndex = index + 1
            return checkNum(newIndex)
        })
    }
    function prev() {
        setindex(index =>{
            let newIndex = index - 1
            return checkNum(newIndex)
        })
    }
    function random() {
        let randomming = Math.floor(Math.random() * Rev_Data.length)
        if (randomming === index) {
            randomming = index+1
        }
        setindex(checkNum(randomming))
    }
  return (
    <div>
        <div className="container">
          <h1>Our Reviews</h1>
          <div className="underline"></div>
          <div className="cont">
          <div className="card shadow-large">
              
              <img src={Image} alt={Name} />
              <h3>{Name}</h3>
              <p>{Career}</p>
              <p>{About}</p>
              <div className="but">
                 <p onClick={prev}>-</p>
                  <p onClick={increase}>+</p>
              </div>
              <button className='button' onClick={random}>Suprise Me</button>
              </div>
             
          </div>
    </div>
    </div>
  )
}

export default RevCont