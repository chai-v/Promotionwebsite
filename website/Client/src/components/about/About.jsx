import { Abnavbar,Abpage,Abteam, Footer } from './components'
import "./about.css"

const About = () => {
  return (
    <div style={{height:'auto',width:'100%',display:'flex',flexDirection:'column'}}>
        <Abnavbar/>
        <Abpage/>
        <Abteam/>
        <Footer/>
        
    </div>
  )
}

export default About