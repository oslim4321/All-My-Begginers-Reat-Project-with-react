import React, {useContext} from 'react'
import { useGlobalContext} from '../Modal/Context'


function Learn() {
    const { Data, logData } = useGlobalContext()
    // console.log(Data)
  return (
      <div>Learn
          <button onClick={logData}>submit</button>
          {
              Data.map(elem => {
                  let {Id,Title,Info}=elem
                return(
                    <div>
                        <h4>{Title}</h4>
                        <h6>{Info}</h6>
                        <button onClick={()=>logData(Title,Id)}>Do Something</button>
                    </div>
                )
              })
          }
      </div>
      
  )
}

export default Learn