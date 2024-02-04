import { useState,useEffect } from 'react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import '../gallery/gallery.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Updates = (props) => {
  const [posts, setPosts] = useState([]);
  const [screenWdt,setScreenwdt] = useState(window.innerWidth)
  const handleResize = () => {
    setScreenwdt(window.innerWidth)
  }
  const top_5 =[]
 
  useEffect(() => {
    setScreenwdt(window.innerWidth);
    window.addEventListener('resize',handleResize)
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
          `https://insta-post-fetcher.onrender.com/fetchInstagramData`
        );

        const data = response.data;
        console.log(data);
        if (data) {
          setPosts(data);
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
  }, [props.Insta_key]);

  return (
    <div className='updates' >
      <h2 className='update_heading '>Instagram Feed</h2>
      {posts.length>0 &&
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
      className='swiper_container  h-[100%] md:mt-[-5%] '
    >
      {posts.map((post) =>
            <div key={post.id}  >
              {post.media_type === 'IMAGE' ? (
                <SwiperSlide className='important-class' ><a href={post.permalink}><img src={post.media_url} /></a></SwiperSlide>
              ) : post.media_type === 'VIDEO' ? (
                <SwiperSlide className='important-class' ><a href={post.permalink}><img src={post.thumbnail_url} /></a></SwiperSlide>
              ) : post.media_type === "CAROUSEL_ALBUM" ? (
                <SwiperSlide className='important-class' ><a href={post.permalink}><img src={post.media_url} /></a></SwiperSlide>
              ):null}
            </div>
            )}
        {screenWdt>=800?<div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>:<div></div>}
    </Swiper>}
    </div>
  );
};

export default Updates;

/*const Updates = () => {
  return (
    <div className='updates'>
      
        <div className="update_background">
            <div className="gallery_heading"><h1>Latest updates</h1></div>
            <div className="item_box">
              <div className="update_item"></div>
              <div className="update_item"></div>
              <div className="update_item"></div>
            </div>
        </div>
    </div>
   
  )
}
<div className="item_box">
        <div className="gallery_carousel">
            {posts.map((post) =>
            <div className='gallery_item'>
              {post.media_type === 'IMAGE' ? (
                <a href={post.permalink}><img className="object-contain" src={post.media_url} /></a>
              ) : post.media_type === 'VIDEO' ? (
                <a href={post.permalink}><img className='object-contain' src={post.thumbnail_url} /></a>
              ) : post.media_type === "CAROUSEL_ALBUM" ? (
                <a href={post.permalink}><img className="object-contain" src={post.media_url} /></a>
              ):null}
            </div>
            )}
        </div>
        </div>

export default Updates*/