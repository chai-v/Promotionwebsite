import './abpage.css'
import { useState, useEffect } from 'react'
const Abpage = ({flag}) => {
    const [screenWdt,setScreenwdt] = useState(window.innerWidth)
    const handleResize = () => {
        setScreenwdt(window.innerWidth)
    }
    const handleTogglePramana =()=> {
        flag(true)
    }
    const handleToggle =()=> {
        flag(false)
    }

    useEffect(() => {
        setScreenwdt(window.innerWidth);
        window.addEventListener('resize',handleResize)
    })

  return (
    <div className="abhero_container">
        <div className='logo_events hidden  ml-[-7%] md:block '>
            <img src="assets/new logo.png" alt="" />
        </div>
        {screenWdt>800 && 
        <div className='abhero_text'>
            <h1 className='text-white'>Meet Team Pramana!</h1>
        </div>}
        <div className='abgradient'>a</div>
        </div>
  )
}

export default Abpage