import Updates from "../updates/Updates"
import FAQs from "../faqs/FAQs"
import Contact from '../contactandfooter/Contact'
import Footer from '../contactandfooter/Footer'
import './page3.css'

//Replace key below with the valid instagram token
const key = import.meta.env.VITE_INSTA_TOKEN
const Page3 = () => {
  return (
    <div className="subpage" id="updates">
      <div className="update_section">
        <Updates Insta_key={key} />
      </div>
      <div className="faq_section" id="faqs">
        <FAQs/>
      </div>
      <div className="contact_us" id="contact">
        <Contact/>
      </div>
      <div className="footer_container">
        <Footer/>
      </div>
    </div>

   
  )
}

export default Page3