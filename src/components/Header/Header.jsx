import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

function Header() {
  
  const [content,setContent] = useState("")
  const [isOpen, setOpen] = useState(false)

  function handleContetn2(){
    if(content === ""){
      setContent("-active")
    }else{setContent("")}
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
          <div className="header-menu" onClick={handleContetn2}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
          </div>
        </header>

      </div>

      <div className={`header-content2${content}`}>
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