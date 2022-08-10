// import React from 'react'
import { useState } from 'react'
import './Ques.css'
import QuestData from './QuestData'
import QuestItem from './QuestItem'

function QuestAppi() {

    const [Question, setQuestion] = useState(QuestData)
 
  return (
    <div className='bod'>
     
        <div className="container d-flex justify-content-center align-items-center">
              <div className="card head">
                  <div className="row">
                  <div className="col-sm-4 offset-1">
                      <h1 className='h1'>Question And Answer About Login</h1>
                  </div>
            <div className="col-sm-4 ">
              {
                Question.map(elem => {
                 return <QuestItem key={elem.Id} {...elem} />
                })
              }
            </div>
              </div>    
            </div>
        </div>
        
    </div>
  )
}

export default QuestAppi