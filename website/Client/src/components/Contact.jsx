import Footer from "./Footer"


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact_background">
        <div className="gallery_heading"><h1>Contact us</h1></div>
        <div className="vendor_message">
          <h4>Want to become a vendor?
          <a href="https://docs.google.com/forms/d/1jo9xCyWl6f8qgkRO2-pUJZlu5dZs-5s-O95XsZ3iNGw/edit">
            <button>Click Here to Apply!</button>
          </a>
          </h4>
        </div>
        <div className="contact_info">
          <div className="contact_1">
            <div><h4>Y HARSHITHANJALI</h4></div>
            <div><h4>7842330920</h4><br/></div>
            <div><h4>(Head of Marketing and PR)</h4></div>
          </div>
          <div className="contact_2">
            <div><h4>M SRINIVAS</h4></div>
            <div><h4>8501092092</h4></div>
            <div><h4> (Head of Finance)</h4></div>
          </div>
          <div className="vertical_line"></div>
          <div className="contact_id">
          <div className="email">
            <i className='bx bx-envelope' ></i>
            <h4>pramana.hyd@gitam.edu</h4>
          </div>
          <div className="insta">
            <i className='bx font-[100px] bxl-instagram'></i>
            <h4><a href="https://www.instagram.com/pramana_2024.gitam?igsh=MWJzNnhyemhpbnQ4MQ==">@pramana_2024.gitam</a></h4>
          </div>
        </div>
        </div>
        
      </div>
      <div className="subpage">
      <Footer/>
    </div>
    </div>
    
  )
}

export default Contact