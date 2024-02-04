import { useEffect, useState } from 'react'
import './Epevents.css'
import Pramana from './Pramana'
const Evecarousel = ({events}) => {
  const daysrep = events.map(event => event.day)
  const days = []
  daysrep.forEach(element => {
    
    if(!days.includes(element))
      {
        days.push(element)
      }
  });

  const [dayActive,setDayactive] = useState(0)
 
  const list_len = days.length
  
  const handleRightClick = () => {
    setDayactive((prev) => prev+1)
  }
  const handleLeftClick = () => {
    setDayactive((prev) => prev-1)
  }
  useEffect(() => {
    setDayactive(0)
  },[events])
  const dayEventlist = events.filter(e => e.day ===days[dayActive])
  return (
   
    <div className="evecarousel">
        <div style={{position:'relative'}}>
        { dayActive>0&&
          <div onClick={handleLeftClick} className='nav right' style={{top:'50',left:'-170%'}}><ion-icon name="arrow-back-outline"></ion-icon></div>
        }
          
         
        <div>
          {days.map((e,idx) => (
            <div key={idx}>
              <h1  className={`${dayActive===idx? 'block' : 'hidden'}`}><b>{e}</b></h1>
            </div>
            
          ))}
        </div>
        
        { dayActive <= list_len-2 &&
          <button onClick={handleRightClick} className='nav left' style={{top:'50%',right:'-170%'}} ><ion-icon name="arrow-forward-outline"></ion-icon></button>
        } 
        </div>
        <Pramana data={dayEventlist}/>
    </div>
  )
}

export default Evecarousel