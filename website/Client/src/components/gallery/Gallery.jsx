import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import './gallery.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Gallery = () =>{
  const [screenWdt,setScreenwdt] = useState(window.innerWidth)
  const handleResize = () => {
    setScreenwdt(window.innerWidth)
  }
  useEffect(() => {
    setScreenwdt(window.innerWidth);
    window.addEventListener('resize',handleResize)
  })
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
      pagination={{el:'.swiper-pagination', clickable:true}}
      navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable:true,
      }}
      modules = {[EffectCoverflow, Pagination, Navigation]}
      className='swiper_container'
    >
      <SwiperSlide><img src="\assets\Gallery\img1.webp" alt="img1"/></SwiperSlide>
      <SwiperSlide><img src="\assets\Gallery\img2.webp" alt="img2"/></SwiperSlide>
      <SwiperSlide><img src="\assets\Gallery\img3.webp" alt="img3"/></SwiperSlide>
      <SwiperSlide><img src="\assets\Gallery\img4.webp" alt="img4"/></SwiperSlide>
      <SwiperSlide><img src="\assets\Gallery\img5.webp" alt="img5"/></SwiperSlide>
      <SwiperSlide><img src="\assets\Gallery\img6.webp" alt="img6"/></SwiperSlide>
      <SwiperSlide><img src="\assets\Gallery\img7.webp" alt="img7"/></SwiperSlide>
      <SwiperSlide><img src="\assets\Gallery\img8.webp" alt="img8"/></SwiperSlide>
      <SwiperSlide><img src="\assets\Gallery\img9.webp" alt="img9"/></SwiperSlide>
      <SwiperSlide><img src="\assets\Gallery\img10.webp" alt="img10"/></SwiperSlide>
      {screenWdt>=800?<div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>:<div></div>}
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