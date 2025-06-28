import { useEffect, useState, useRef } from 'react';
import { RiAdminLine } from "react-icons/ri";
import imageEleven from "../images/imageEleven.jpg";
import imageTwelve from "../images/imageTwelve.jpg";
import imageThirteen from "../images/imageThirteen.jpg";
import { FaFacebook, FaYoutubeSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import '../css/singlepage.css';
import aos from 'aos';
import 'aos/dist/aos.css';

const SinglePostPage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Jane Doe",
      text: "This podcast idea is brilliant! I've been struggling with content ideas lately.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      time: "2 hours ago"
    },
    {
      id: 2,
      author: "John Smith",
      text: "Great tips! Especially the part about relevant content creation.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      time: "1 day ago"
    }
  ]);
  const [views, setViews] = useState(1245);
  const [likes, setLikes] = useState(328);
  
  const fileInputRef = useRef(null);

  useEffect(() => {
    aos.init({
      duration: 800,
      once: true
    });
    
    // Simulate view count increment
    const timer = setTimeout(() => {
      setViews(prev => prev + 1);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "Current User",
        text: comment,
        avatar: "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
        time: "Just now"
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  return (
    <div className='overall-single-page-container'>
      <div className='single-post'>
        <div className="header-content" data-aos="fade-down">
          <div className="profile-picture-container">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Profile preview"
                className="profile-preview"
                onClick={handleImageClick}
              />
            ) : (
              <div className="profile-placeholder" onClick={handleImageClick}>
                <RiAdminLine size="40px" />
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            <div className="author-info">
              <p className="author-name">Admin</p>
              <p className="post-date">May 30, 2023 · 2 min read</p>
            </div>
          </div>
          
          <div className="post-actions">
            <button 
              className={`action-btn ${liked ? 'liked' : ''}`} 
              onClick={handleLike}
              aria-label={liked ? 'Unlike post' : 'Like post'}
            >
              {liked ? <IoIosHeart size="24px" /> : <IoIosHeartEmpty size="24px" />}
              <span>{likes}</span>
            </button>
            <button 
              className={`action-btn ${bookmarked ? 'bookmarked' : ''}`}
              onClick={handleBookmark}
              aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark post'}
            >
              {bookmarked ? <BiSolidBookmark size="24px" /> : <BiBookmark size="24px" />}
            </button>
            <button className="action-btn" aria-label="Share post">
              <FiShare2 size="20px" />
            </button>
          </div>
        </div>

        <h1 data-aos="fade-up" data-aos-delay="100">
          Finding Ideas for Your Next Podcast
        </h1>
        
        <h5 className="post-excerpt" data-aos="fade-up" data-aos-delay="150">
          Discover proven strategies to generate engaging podcast topics that will captivate your audience and grow your listener base.
        </h5>
        
        <div className="post-stats" data-aos="fade-up" data-aos-delay="200">
          <span><IoMdEye size="18px" /> {views.toLocaleString()} views</span>
          <span>·</span>
          <span>{likes.toLocaleString()} likes</span>
          <span>·</span>
          <span>{comments.length} comments</span>
        </div>
        
        <img 
          src={imageEleven} 
          alt="Podcast recording session" 
          className="featured-image"
          data-aos="zoom-in"
          data-aos-delay="250"
        />
        
        <div className="post-content">
          <h5 data-aos="fade-up">
            Creating compelling podcast content starts with finding the right topics. Whether you're just starting out or looking to refresh your existing podcast, the challenge of consistently coming up with fresh ideas can be daunting. The key is to develop a system that makes topic generation easier over time.
          </h5>
          
          <h4 data-aos="fade-up">Design with Ease</h4>
          
          <blockquote data-aos="fade-up" data-aos-delay="50">
            "The best podcast topics often come from your own experiences and expertise. Don't overcomplicate it - start with what you know and build from there. Authenticity resonates more with audiences than perfection."
          </blockquote>
          
          <h5 data-aos="fade-up">
            Consider creating an "idea bank" where you store potential topics as they come to you. This could be a simple note on your phone or a more organized spreadsheet. When you're feeling stuck, you'll have a repository of ideas to draw from. Some podcasters find it helpful to categorize their ideas by theme, difficulty level, or required research time.
          </h5>

          <h4 data-aos="fade-up">Create Relevant Content</h4>
          
          <h5 data-aos="fade-up">
            Stay attuned to trends in your niche by following industry news, joining relevant online communities, and monitoring social media discussions. Tools like Google Trends can help you identify what people are searching for in your field. Remember that evergreen content (topics that remain relevant over time) is valuable, but timely content can help you ride waves of interest.
          </h5>
          
          <div className="image-gallery" data-aos="fade-up">
            <img src={imageTwelve} alt="Podcast equipment" className="gallery-image" />
            <img src={imageThirteen} alt="Recording studio" className="gallery-image" />
          </div>
          
          <h4 data-aos="fade-up">Stun Your Listeners</h4>
          
          <h6 data-aos="fade-up">
            The most successful podcasts often find unique angles on common topics or explore underserved areas of their niche.
          </h6>
          
          <h5 data-aos="fade-up">
            Consider conducting listener surveys to understand what your audience wants to hear. Interview experts in your field for fresh perspectives. Repurpose content from other formats (like blog posts or videos) into podcast episodes. And don't be afraid to experiment - some of the best podcast ideas come from trying something new and seeing how your audience responds.
          </h5>
          
          <h4 data-aos="fade-up">Get Inspired</h4>
          
          <h5 data-aos="fade-up">
            Inspiration can come from anywhere - books you're reading, conversations with friends, problems you've solved, or even other podcasts (though you should always put your own spin on things). Keep a running list of potential guests who could bring interesting perspectives to your show. And remember that some of the best podcast episodes come from simply answering the questions your listeners are already asking.
          </h5>
          
          <div className="tags-container" data-aos="fade-up">
            <span className="tag">#Podcasting</span>
            <span className="tag">#ContentCreation</span>
            <span className="tag">#AudioProduction</span>
            <span className="tag">#DigitalMedia</span>
          </div>
          
          <div className="social-share" data-aos="fade-up">
            <p>Share this post:</p>
            <div className="social-icons">
              <a href="#" aria-label="Share on Facebook"><FaFacebook size="25px" /></a>
              <a href="#" aria-label="Share on Twitter"><RiTwitterXLine size="25px" /></a>
              {/* <a href="#" aria-label="Share on Instagram"><FaSquareInstagram size="25px" /></a> */}
              <a href="#" aria-label="Share on YouTube"><FaYoutubeSquare size="25px" /></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className='box-two-header-single' data-aos="fade-up">
        <h5><a href="/Blog" className="all-posts-link">All posts</a></h5>
        <a href="#" className='logout-btn'>LOG OUT</a>
      </div>

      <h3 className="section-title" data-aos="fade-up">Recent posts</h3>
      <hr className="section-divider" data-aos="fade-up" />

      <div className='recent-post-box-container'>
        {[
          { id: 1, image: imageTwelve, title: "Read Everything You Know" },
          { id: 2, image: imageEleven, title: "Finding Your Creative Voice" },
          { id: 3, image: imageThirteen, title: "Audio Production Mastery" }
        ].map((post, index) => (
          <div 
            className='recent-post-box' 
            key={post.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={post.image} alt={post.title} />
            <div className='recent-post-content'>
              <h5>{post.title}</h5>
              <hr />
              <div className='recent-post-icons'>
                <div>
                  <IoMdEye size="20px" /> 1.2k
                </div>
                <div>
                  <IoIosHeartEmpty size="20px" /> 356
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="section-title" data-aos="fade-up">Discussion ({comments.length})</h3>
      <hr className="section-divider" data-aos="fade-up" />

      <div className='comment-section' data-aos="fade-up">
        <div className="comment-container">
          <div className="comment-list">
            {comments.map(comment => (
              <div className="comment" key={comment.id} data-aos="fade-up">
                <img src={comment.avatar} alt={comment.author} className="comment-avatar" />
                <div className="comment-content">
                  <div className="comment-header">
                    <span className="comment-author">{comment.author}</span>
                    <span className="comment-time">{comment.time}</span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <textarea 
              placeholder="Share your thoughts..." 
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              data-aos="fade-up"
            ></textarea>
            <button 
              type="submit" 
              className="comment-submit"
              disabled={!comment.trim()}
              data-aos="fade-up"
            >
              Publish
            </button>
          </form>
        </div>
      </div>

      <div className="newsletter-signup" data-aos="fade-up">
        <h3>Want more content like this?</h3>
        <p>Subscribe to our newsletter for weekly podcasting tips and resources</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default SinglePostPage;