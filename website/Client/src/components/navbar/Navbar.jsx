import { useState } from "react"
import './navbar.css'
import '../App.css'

const Navbar = () => {
  const [menu,setMenu] = useState(false)
  const handleClick = () => {
    setMenu((prev) => !prev)
  }
  return (
    <div className="nav_container">
       
        <div onClick={handleClick} className="burgur_menu mt-[17px]">
            {menu?<i className='bx bx-arrow-back'></i>:<i className='bx bx-menu'></i>}
        </div>
        <div className={`nav_links ${menu?'nav_bar_slide':''}`}>
          <a href="#events">Events</a>
          <a href="/events">Gallery</a>
          <a href="#updates">FAQs</a>
          <a href="">Contact us</a>
        </div>
    </div>
    
  )
}

export default Navbar