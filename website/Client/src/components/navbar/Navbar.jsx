import { useEffect, useState } from "react"
import '../events/events.css'


const Navbar = () => {
  const [screenWdt,setScreenwdt] = useState(window.innerWidth)
  const handleResize = () => {
    setScreenwdt(window.innerWidth)
  }
  
  useEffect(() => {
    setScreenwdt(window.innerWidth);
    window.addEventListener('resize',handleResize)
    const nav = document.querySelector('mobile')
    const navlinks = document.querySelectorAll('.nav_link')
    navlinks.forEach(function(link){
      link.addEventListener('click',function(){
        nav.classList.remove('.nav_bar_slide')
      })
    })

    return () => {
      window.removeEventListener('resize',handleResize)
    }
  },[]);
  const [menu,setMenu] = useState(false)
  const handleClick = () => {
    setMenu((prev) => !prev)
  }
  const handleMenu = () => {
    setMenu((prev) =>!prev)
  }
  return (
    <div className="flex  w-[100vw]">
      {screenWdt<=800?<div className="nav_container">
      <div onClick={handleClick} className="burgur_menu mt-[17px]">
            {menu?<i className='bx bx-arrow-back'></i>:<i className='bx bx-menu'></i>}
        </div>
        <div id="mobile" className={`nav_links hover:text-purple-500 ${menu?'nav_bar_slide':''}`}>
          <a className="hover:text-purple-500 " onClick={handleMenu} href="#events">Events</a><br/>
          <a className="hover:text-purple-500 " onClick={handleMenu} href="#faqs">FAQs</a><br/>
          <a className="hover:text-purple-500 " onClick={handleMenu} href="#contact">Contact Us</a><br/>
          <a className="hover:text-purple-500 " onClick={handleMenu} href="https://linktr.ee/pramanahyd">Buy Passes</a><br/>
        </div>
      </div>:<div className="navbar_desktop font-bold ">
        <div className="navlinks_desktop hover:text-purple-500">
          <a className="hover:text-purple-500 nav_link" href="#events">Events</a>
          <a className="hover:text-purple-500 nav_link" href="#faqs">FAQs</a>
          <a className="hover:text-purple-500 nav_link" href="#contact">Contact us</a>
          <a className="hover:text-purple-500 nav_link" href="https://linktr.ee/pramanahyd">Buy Passes</a>
        </div>  
      </div>}
    </div>
  )
}

export default Navbar