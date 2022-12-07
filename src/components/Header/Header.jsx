import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

function Header() {
  
  const [burger,setBurger] = useState("")
  const [isOpen, setOpen] = useState(false)

  function handleBurger(){
    if(burger === ""){
      setBurger("-active")
    }else{setBurger("")}
  }

  function handleScroll(){
    
  }

  return (
    <div className='contain-header' onScroll={handleScroll}>
      <div className='header-content'>

      <header className='header'>
          <div className='header-log'>CAMILA</div>
          <div className='header-links'>
                <p>link1</p>
                <p>link2</p>
                <p>link3</p>
          </div>
          <div className="header-menu" onClick={handleBurger}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
          </div>
        </header>

      </div>

      <div className='header-content2'>
          <div className='header-links2'>
                <p>link1</p>
                <p>link2</p>
                <p>link3</p>
          </div>
      </div>
        
    </div>
  )
}

export default Header