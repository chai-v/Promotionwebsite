import { useState, useEffect } from 'react'
import './carousel.css'

import { homeeventlist } from '../../constants'

const Carousel = () => {
  const [active,setActive] = useState(1)
  const [screenWdt,setScreenwdt] = useState(window.innerWidth)
  const handleResize = () => {
    setScreenwdt(window.innerWidth)
  }
  useEffect(() => {
    setScreenwdt(window.innerWidth);
    window.addEventListener('resize',handleResize)
  })
  useEffect(() => {
    const autoChangeSlide = () => {
      setActive((prevActive) => (prevActive % homeeventlist.length) + 1);
    };
    const intervalId = setInterval(autoChangeSlide, 3000); 
    return () => {
      clearInterval(intervalId);
    };
  }, [active]);
  const handleLeftClick = () => {
    setActive((prevActive) => prevActive - 1)
    console.log(active)
  }
  const handleRightClick = () => {
    setActive((prevActive) => prevActive + 1)
    console.log(active)
  }
  
  const list_len = homeeventlist.length
  console.log("length =",list_len)
  return (
    <div className='carousel_container ' >
      { active <= list_len-1 &&
        <div onClick={handleRightClick} className='nav left'><ion-icon name="arrow-forward-outline"></ion-icon></div>
      }
      
      <div className={`card_container`}>
      { homeeventlist.map((e,idx) => (
        <div style={{backgroundImage: `url('/assets/Events/${e.image}'`}} className={`card  brightness-50')] ${active===e.id?'card_show':''}`} key={idx} >
          <div class='gradient'>
            <h1>Event Schedule</h1>
            <h2><b>{e.day}</b></h2>
          </div>
          <div className='absolute font-bold text-white'></div>
          <div class='gradient2'>
            <div class="title">
              <h1><b>{e.title}</b></h1>
              {screenWdt>=800?<h3>{e.description}</h3>:<div></div>}
              </div>
            <h2><b>{e.time}</b></h2>
          </div>
        </div>
        
      ))

      }
      </div>
      { active>1&&
        <div onClick={handleLeftClick} className='nav right'><ion-icon name="arrow-back-outline"></ion-icon></div>
      }
    </div>
  )
}

export default Carousel