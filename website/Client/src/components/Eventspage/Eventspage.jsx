import { useState } from 'react'
import  Footer from '../contactandfooter/Footer'
import { Epevents,Page,Eventnavbar} from "./Eventcomponents"
const Eventspage = () => {
  const [pramana,notPramana] = useState(true)
  const handleToggle = (flag) => {
    notPramana(flag)
    
  }
  return (
    <div style={{height:'auto',width:'100%',display:'flex',flexDirection:'column'}}>
        <Eventnavbar/>
        <Page flag={handleToggle}/>
        <Epevents flag={pramana}/>
        <Footer/>
        
    </div>
  )
}

export default Eventspage