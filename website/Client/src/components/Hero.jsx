import Navbar from "./Navbar"
const Hero = () => {
  return (
    <div className="container">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero_container">
        <div className="hero_text">
            <h1>Pramana 24</h1>
            <span>The anual fest of GITAM Hyderabad</span>
        </div>
        <div className="sponsor">
            <span>Powered by</span>
            <img src="src\public\assets\image.png" alt="" />
        </div>
        </div>
        <div className="info_tab">
            <p>PRAMANA is the annual flagship event which serves as a celebration of GITAM’s vibrant and diverse community, offering enriching experience for all participants. We strive to inspire and empower our students while creating unforgettable memories.
            </p>
            <div className="venue">
                <div className="sub_venue">
                    <div className="icon_container"><i className='bx bx-calendar'></i></div>
                    <h4>February 8th, 9th, 10th</h4>
                </div>
                <div  className="sub_venue">
                    <div className="icon_container"><i className='bx bx-map'></i></div>
                    <h4>GITAM University, HYD</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero