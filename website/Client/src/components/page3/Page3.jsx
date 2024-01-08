import Updates from "../updates/Updates"
import FAQs from "../faqs/FAQs"
import Contact from '../Contact'
import Footer from '../Footer'

const key = "IGQWRNR0N3ZAXgtLW1USE41bzR2eU1iTWhFd3ppQzBYaFdiV3N1bEc1Si1uMHpKeXROakd3Rk92b21yeE5HeFlIeVpJWXBneE50elpWNVN5WHV6dHJrUEdoNzUwQ0N1SEVIRDF5RlJ1b0dtRGUwOUp2V1UtN3BNWmsZD"
const Page3 = () => {
  return (
    <div className="box">
        <div className="subpage">
            <Updates Insta_key={key}/>
            <FAQs/>
            <Contact/>
            <Footer/>
        </div>

    </div>
  )
}

export default Page3