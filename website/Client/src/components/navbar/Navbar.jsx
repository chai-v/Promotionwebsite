import { useState } from "react"


const Navbar = () => {
  const [menu,setMenu] = useState(false)
  const handleClick = () => {
    setMenu((prev) => !prev)
  }
  return (
    <div className="nav_container">
        <div className="logo mt-[20px] ml-[15px]">
            <img  src="src\public\assets\Pramana logo.svg" alt="" />
         </div>
        <div onClick={handleClick} className="burgur_menu mt-[17px]">
            {menu?<i className='bx bx-arrow-back'></i>:<i className='bx bx-menu'></i>}
        </div>
        <div className={`nav_links ${menu?'nav_bar_slide':''}`}>
          <a href="">Events</a>
          <a href="">Gallery</a>
          <a href="">FAQs</a>
          <a href="">Contact us</a>
        </div>
    </div>
    
  )
}

export default Navbar