import axios from 'axios';

const Updates = ({ accessToken }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
          'https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}'
        );

        const data = response.data;

        if (data && data.data) {
          setPosts(data.data);
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
  }, [accessToken]);

  return (
    <div>
      <h2>Instagram Feed</h2>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <img src={post.media_url} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
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