import { useState } from "react"


const Navbar = () => {
  const [menu,setMenu] = useState(false)
  const handleClick = () => {
    
  }
  return (
    <div className="nav_container">
        <div className="logo">
            <img src="src\public\assets\image.png" alt="" />
         </div>
        <div onClick={handleClick} className="burgur_menu">
            <i className='bx bx-menu'></i>
        </div>
    </div>
    
  )
}

export default Navbar