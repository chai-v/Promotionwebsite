import Carousel from "../carousel/Carousel"
import Gallery from "../gallery/Gallery"
import './events.css'
import {Link} from "react-router-dom"
const Events = () => {
  return (
  <div className="events" id="events">
    <div className="event_heading_container">
      <h1>Events</h1>
    </div>
    <div className="road_map_container"></div>
    <Link to='/events'><div className="coming_soon"></div></Link>
    <div className="carousel_box">
      <Carousel/>
    </div>
    <div className="gallery_box">
      <Gallery/>
    </div>
    
  </div>
  )
}

export default Events