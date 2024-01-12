import { useState } from 'react'
import './carousel.css'

import { eventlist } from '../../constants'

const Carousel = () => {
  const [active,setActive] = useState(1)
  const handleLeftClick = () => {
    setActive((prevActive) => prevActive - 1)
    console.log(active)
  }
  const handleRightClick = () => {
    setActive((prevActive) => prevActive + 1)
    console.log(active)
  }
  
  const list_len = eventlist.length
  console.log("length =",list_len)
  return (
    <div className='carousel_container ' >
      { active <= list_len-1 &&
        <div onClick={handleRightClick} className='nav left'><i className='bx bx-right-arrow' ></i></div>
      }
      
      <div className={`card_container`}>
      { eventlist.map((e) => (
        <div className={`text-black card bg-[url('./public/assets/satoru_gojo_4k_hd_jujutsu_kaisen.jpg')] ${active===e.id?'card_show':''}`}key={e.id} >{e.title}</div>
        
      ))

      }
      </div>
      { active>1&&
        <div onClick={handleLeftClick} className='nav right'><i className='bx bx-left-arrow'></i></div>
      }
    </div>
  )
}

export default Carousel