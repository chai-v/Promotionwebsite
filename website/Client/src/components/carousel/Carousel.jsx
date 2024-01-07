import { useState } from 'react'

import { eventlist } from '../../constants'

const Carousel = () => {
  const [active,setActive] = useState(2)
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
      
      <div className={`card_container `}>
      { eventlist.map((e) => (
        <div className={`text-black card  ${active===e.id?'card_show':null}`}key={e.id} >{e.title}</div>
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