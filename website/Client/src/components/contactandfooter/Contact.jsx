
import './component.css'

const Contact = () => {
  return (
    <div className='contact sm:height[100%]'  >
      
        <div className="contact_heading"><h1>Contact us</h1></div>
        <div className="vendor_message sm:text-start">
          <br></br><b><span>Want to become a vendor?&nbsp;
          <a href="https://forms.gle/Yhoi6whqnKW6gW4b7">
            Click Here to Apply!
          </a>
          </span></b>
        </div>
        <div className="contact_info  sm:flex-row">
          <div className="poc_container">
            <div className="contact_person">
              <p>
                Y HARSHITHANJALI
                7842330920<br/>
                (Head of Marketing and PR)
              </p>
            </div>
            <div className="contact_person">
              <p>
                SRINIVAS<br/>
                8501092092<br/>
                (Head of Finance)
              </p>
            </div>
          </div>
          <div className="vertical_line md:flex"></div>
          <div className="contact_id">
          <div className="subdiv">
            <i className='bx bx-envelope' ></i>
            <h4>pramana.hyd@gitam.edu</h4>
          </div>
          <br/>
          <div className="subdiv">
            <i className='bx font-[100px] bxl-instagram'></i>
            <h4><a href="https://www.instagram.com/pramana_2024.gitam?igsh=MWJzNnhyemhpbnQ4MQ==">@pramana_2024.gitam</a></h4>
          </div>
        </div>
        </div>
        
      
      
      

    </div>
    
  )
}

export default Contact