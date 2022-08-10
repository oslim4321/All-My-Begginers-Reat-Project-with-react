import React, { useState } from 'react'
import Butt from './Butt'
import Items from './Items'
import DataMenu from './DataMenu'

let allcategory=['All', ...new Set(DataMenu.map(elem=>  elem.category))] 
    // console.log(allcategory)

function Menu() {
    const [Menu, setMenu] = useState(DataMenu)

    function filterClick(category) {
        console.log(category)
        if (category === 'All') {
            setMenu(DataMenu);
            return
        }
        let netItem= DataMenu.filter(elem=>
            elem.category === category)
            setMenu(netItem)
        
    }
    
  return (
      <div className='container text-center mt-4'>
        {/* <div className="underline"></div> */}
          <h1>Our Menu</h1>
          <div className="underline"></div>
          <Butt allcategory={allcategory} filterClick={filterClick} />
          <Items Menu={Menu} />
    </div>
  )
}

export default Menu