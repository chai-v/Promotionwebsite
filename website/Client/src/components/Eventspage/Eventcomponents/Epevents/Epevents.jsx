import './Epevents.css'
import Evecarousel from './Evecarousel'
import { roadToPramana,eventlist } from '../../../../constants'
import { useEffect, useState } from 'react'
import Evedesktop from './Evedesktop'


const Epevents = ({flag}) => {
  const [screenWdt,setScreenwdt] = useState(window.innerWidth)
  const handleResize = () => {
    setScreenwdt(window.innerWidth)
  }

  useEffect(() => {
    setScreenwdt(window.innerWidth)
    window.addEventListener('resize',handleResize)
    return() => {
      window.removeEventListener('resize',handleResize)
    }
  },[])
  return (
    <div className='eventpage_container'>
        <div className='eventpage'>
          <div className="evecarousel_box">
            {screenWdt<=800?(
              flag?(<Evecarousel events={eventlist}/>)
              :(<Evecarousel events={roadToPramana}/>)
              ):(
              flag?(<Evedesktop events={eventlist}/>)
              :(<Evedesktop events={roadToPramana}/>)
              )}
          </div>
          
        </div>
    </div>
  )
}

export default Epevents