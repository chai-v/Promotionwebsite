import './Epevents.css'
import Popup from '../popup/Popup'
import { useState, useEffect } from 'react'
const Pramana = ({data}) => {
  const [showModal, setshowModal] = useState(false)
  const [code, setcode] = useState(1)
  return (
    <div className="cards_container">
      {showModal && <Popup code={code} onClose={()=>setshowModal(false)}/>}
        {data.map((e,idx) => (
            <div style={{backgroundImage: `url('/assets/Events/${e.image}'`}} className='evecard rounded-lg' onClick={()=>{console.log(e.id),setshowModal(true),setcode(e.id - 1)}} key={idx} >
              <div className='evegradient'>
                <div className="evetitle">
                  <h1><b>{e.title}</b></h1>
                  {/* {screenWdt>=800?<h3>{e.description}</h3>:<div></div>} */}
                </div>
                <div className='time'>
                <h2><b>{e.time}</b></h2>
                </div>
              </div>
            </div>
        ))}
        
    </div>
  )
}

export default Pramana