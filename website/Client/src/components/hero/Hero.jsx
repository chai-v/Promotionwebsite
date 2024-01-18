import './hero.css'
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero_container">
            <div className="logo mt-[12%] ml-[-7%]">
                <img  src="/assets/new logo.png" alt="" />
            </div>
            
            <div className="hero_background"><div id="blur"></div></div>
            <div className="hero_text">
                <div>
                    <h1>Pramana 24</h1>
                    <span>THE ANNUAL FEST OF GITAM HYDERABAD</span>
                </div>
                {/* <div className="sponsor">
                    <span>sponsored by</span>
                    <img src="src\public\assets\Phone\Sponsor logo.svg" alt="" />
                </div> */}
            </div>
        </div>
        <div className="info_tab">
            <div className="info_container">
            <div className="p_container">
                <p>
                PRAMANA is the annual flagship event which serves as a celebration of GITAM’s vibrant and diverse community, offering enriching experience for all participants. We strive to inspire and empower our students while creating unforgettable memories.      
                </p>
            </div>
            <div className="venue">
                <div className="sub_venue">
                    <div className="icon_container">
                        <i className='bx bx-calendar' ></i>
                    </div>
                    <h4>February 8th, 9th, 10th</h4>
                </div>
                <div className="sub_venue">
                    <div className="icon_container">
                    <i className='bx bx-map'></i>
                    </div>
                    <h4>GITAM University, HYD</h4>
                </div>

            </div>
            </div>
        </div>

    </div>
  )
}

export default Hero