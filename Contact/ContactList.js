import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import picture from './img/member-2.png'

function ContactList() {
    

    let Local_Storage = []
    let dataHold = JSON.parse(localStorage.getItem('Contact-Data'))
    // setcontact([...contact, { ...contact }])
    
    // function del(i) {
    //     // dataHold.slice(1)
    //     dataHold.splice(i, 1)
    //     localStorage.setItem('Contact-Data', JSON.stringify(dataHold))
    // }
  return (
    <>
       <table className="table table-striped ">
    <thead>
       <tr><td style={{color:'red', fontSize:'30px'}}>Contact List</td></tr>
            {
              dataHold.map((elem, i) => {
                // console.log(Local_Storage)
              return (
                <tr key={elem.id}>
                  <td>
                    <img src={picture} />
                    <div className="tdBody">
                      <div>{elem.name} </div>
                      <div style={{color:'green'}}>{elem.email}</div>
                          </div>
                          {/* onClick={()=>del(i)} */}
                          <Link to={{pathname: `/delete/${elem.id}`,state:{contact:elem} }}><button  className='btn trash'><p>trash</p></button></Link>
                          {/* <i className='trash'></i> */}
                      </td>
                     
               </tr>
               )
            
           })
       }
       <Link to='/'><button className='btn '>Go to Add contact</button></Link>
    </thead>
    </table> 
    </>
  )
}

export default ContactList