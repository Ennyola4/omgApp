import { useEffect } from 'react';
import '../css/blog.css';
import imageEleven from "../images/imageEleven.jpg";
import imageTwelve from "../images/imageTwelve.jpg";
import imageThirteen from "../images/imageThirteen.jpg";
import imageFourteen from "../images/imageFourteen.jpg";
import imageSix from "../images/imageSix.jpg";
import { RiAdminLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import aos from 'aos';
import 'aos/dist/aos.css';
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const Blog = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  const categories = ["All posts", "Politics", "Entertainment", "Sport", "News", "Big Brother"];
  const featuredPosts = [
    { id: 1, image: imageEleven, author: "Hush", date: "2 days ago", title: "Lorem ipsum dolor sit amet cons", excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam dignissimos ratione odit quis cumque esse animi debitis voluptatibus..." },
    { id: 2, image: imageTwelve, author: "Admin", date: "1 day ago", title: "Exploring the depths of media culture", excerpt: "Discover how modern media shapes our cultural understanding and personal perspectives in today's interconnected world..." },
    { id: 3, image: imageThirteen, author: "Editor", date: "3 hours ago", title: "The future of digital storytelling", excerpt: "How emerging technologies are transforming the way we create and consume stories in the digital age..." }
  ];

  const sidePosts = [
    { id: 1, image: imageSix, author: "Admin", date: "2min Read", title: "Media trends in 2023" },
    { id: 2, image: imageTwelve, author: "Reporter", date: "5min Read", title: "Cultural shifts post-pandemic" },
    { id: 3, image: imageThirteen, author: "Journalist", date: "7min Read", title: "Sports media evolution" },
    
  ];

  const allPosts = [
    { id: 1, image: imageFourteen, author: "Admin", date: "May 30, 2023", title: "Understanding media literacy", excerpt: "Why media literacy is more important than ever in our digital world..." },
    { id: 2, image: imageThirteen, author: "Writer", date: "May 28, 2023", title: "The art of visual storytelling", excerpt: "How images and videos are dominating content consumption..." },
    { id: 3, image: imageTwelve, author: "Analyst", date: "May 25, 2023", title: "Social media algorithms explained", excerpt: "What you need to know about how platforms decide what you see..." },
    { id: 4, image: imageThirteen, author: "Critic", date: "May 22, 2023", title: "Reality TV and modern culture", excerpt: "The impact of reality television on societal norms and values..." },
    { id: 5, image: imageThirteen, author: "Reviewer", date: "May 20, 2023", title: "Cinematic techniques in 2023", excerpt: "Breaking down the most innovative film techniques this year..." },
    { id: 6, image: imageTwelve, author: "Blogger", date: "May 18, 2023", title: "Podcast revolution", excerpt: "How audio content is capturing audience attention globally..." }
  ];

  return (
    <div className='blog-container'>
      {/* Hero Section */}
      <section className="hero-section" data-aos="fade">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Smart insights on media & culture.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Discover thought-provoking articles on modern media trends and cultural shifts
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/write" className="create-post-btn">
              Create new post
            </a>
          </motion.div>
        </div>
        <div className="hero-scroll-indicator">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span>Scroll</span>
          </motion.div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="featured-section">
        <div className="section-header" data-aos="fade-up">
          <div className="section-title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
          </div>
          <h2 className="section-title">Featured Story</h2>
          <div className="section-title-decoration">
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="featured-post-container">
          <div className="featured-post" data-aos="fade-up">
            <div className="featured-image-container">
              <img src={featuredPosts[0].image} alt="Featured post" className="featured-image" />
              <div className="image-overlay"></div>
            </div>
            <div className="featured-content">
              <div className="post-meta" data-aos="fade-up" data-aos-delay="100">
                <span className="author"><RiAdminLine className="meta-icon" /> By {featuredPosts[0].author}</span>
                <span className="date">{featuredPosts[0].date}</span>
              </div>
              <h3 className="post-title" data-aos="fade-up" data-aos-delay="150">{featuredPosts[0].title}</h3>
              <p className="post-excerpt" data-aos="fade-up" data-aos-delay="200">{featuredPosts[0].excerpt}</p>
              <div className="post-actions" data-aos="fade-up" data-aos-delay="250">
                <a href="/SinglePostPage" className="read-more-btn">Read Full Article</a>
                <div className="action-icons">
                  <IoIosHeartEmpty className="action-icon" />
                  <span className="like-count">24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side Posts Section */}
      <section className="side-posts-section">
        <div className="section-header" data-aos="fade-up">
          <div className="section-title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
          </div>
          <h2 className="section-title">Trending Now</h2>
          <div className="section-title-decoration">
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="side-posts-grid">
          {sidePosts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="side-post-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className="side-post-image-container">
                <img src={post.image} alt={post.title} className="side-post-image" />
                <div className="image-overlay"></div>
              </div>
              <div className="side-post-content">
                <div className="post-meta">
                  <span className="author"><RiAdminLine className="meta-icon" /> By {post.author}</span>
                  <span className="date">{post.date}</span>
                </div>
                <h4 className="post-title">{post.title}</h4>
                <div className="post-actions">
                  <a href="/SinglePostPage" className="read-more-link">Read more</a>
                  <div className="action-icons">
                    <IoMdEye className="action-icon" />
                    <IoIosHeartEmpty className="action-icon" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Posts Section */}
      <section className="all-posts-section">
        <div className="section-header" data-aos="fade-up">
          <div className="section-title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
          </div>
          <h2 className="section-title">Explore All Stories</h2>
          <div className="section-title-decoration">
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="category-filter" data-aos="fade-up">
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search posts..." className="search-input" />
          </div>
          <div className="category-tags">
            {categories.map((category, index) => (
              <motion.a 
                key={index}
                href="#"
                className={`category-tag ${index === 0 ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="all-posts-grid">
          {allPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="post-card"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              whileHover={{ y: -5 }}
            >
              <div className="post-image-container">
                <img src={post.image} alt={post.title} className="post-image" />
                <div className="image-overlay"></div>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="author"><RiAdminLine className="meta-icon" /> By {post.author}</span>
                  <span className="date">{post.date}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-actions">
                  <a href="/SinglePostPage" className="read-more-link">Continue reading</a>
                  <div className="action-icons">
                    <IoMdEye className="action-icon" />
                    <span className="view-count">1.2k</span>
                    <IoIosHeartEmpty className="action-icon" />
                    <span className="like-count">42</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pagination" data-aos="fade-up">
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn next">Next →</button>
        </div>
      </section>
    </div>
  );
};

export default Blog;