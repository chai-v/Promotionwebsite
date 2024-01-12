import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './gallery.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Gallery = () =>{
  return(
    <div className='gallery_parent'>
    <div className='gallery_background'>
    <div className="gallery_heading"><h1>Gallery</h1></div>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={
        {
          rotate:0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }
      }
      pagination={{el:'', clickable:true}}
      navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable:true,
      }}
      modules = {[EffectCoverflow, Pagination, Navigation]}
      className='swiper_container'
    >
      <SwiperSlide><img className='gallery_item' src="src\public\assets\img1.JPG" alt="img1"/></SwiperSlide>
      <SwiperSlide><img src="src\public\assets\img2.JPG" alt="img2"/></SwiperSlide>
      <SwiperSlide><img src="src\public\assets\img3.JPG" alt="img3"/></SwiperSlide>
      <SwiperSlide><img src="src\public\assets\img4.JPG" alt="img4"/></SwiperSlide>
      <div><SwiperSlide><img src="src\public\assets\img5.JPG" alt="img5"/></SwiperSlide></div>
    </Swiper>
    </div>
    </div>
  )
}

export default Gallery;
/*const Gallery = () => {
  return (
    <div className="gallery_parent">
        <div className="gallery_background">
            <div className="gallery_heading"><h1>Gallery</h1></div>
            <div className="item_box">
              <div className="gallery_carousel">
                <div className="gallery_item"></div>
                <div className="gallery_item"></div>
                <div className="gallery_item"></div>
                <div className="gallery_item"></div>
                <div className="gallery_item"></div>
                <div className="gallery_item"></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery*/