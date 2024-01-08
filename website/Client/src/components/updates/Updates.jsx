import { useState,useEffect } from 'react';
import axios from 'axios';

const Updates = (props) => {
  const [posts, setPosts] = useState([]);
  const top_5 =[]
 
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${props.Insta_key}`
        );

        const data = response.data;
        console.log(data.data);
        if (data && data.data) {
          
          for(var i=0;i<=4;i++)
          {
            top_5.push(data.data[i])
          }
          setPosts(top_5)
        }
        console.log(top_5)
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
  }, [props.Insta_key]);

  return (
    <div className='updates'>
      <h2>Instagram Feed</h2>
      <div>
        {posts.map((post) => 
          <div  key={post.id}>
          <img className='h-[48px]' src={post.media_url}  />
          <p>{post.caption}</p>
        </div>
        )}
      </div>
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

export default Updates*/