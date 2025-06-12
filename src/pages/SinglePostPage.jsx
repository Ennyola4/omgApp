import { useEffect, useState, useRef } from 'react';
import { RiAdminLine } from "react-icons/ri";
import imageEleven from "../images/imageEleven.jpg"
import imageTwelve from "../images/imageTwelve.jpg"
import imageThirteen from "../images/imageThirteen.jpg"
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import '../css/singlepage.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'


const SinglePostPage = () => {

  const [profileImage, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {

    aos.init({
      duration: 1000
    })
  }, [])

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);

      // Create preview URL
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


  return (
    <div className='overall-single-page-container'>

      <div className='single-post'>
        <div className="header-content">
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
            <p>Admin:  May 30, 2023 2min read</p>

          </div>



        </div> <br />
        <h1>
          Finding Ideas for Your Next Podcast
        </h1>
        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quia odio quidem perferendis magni </h5>
        <img src={imageEleven} alt="" />
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi reprehenderit aliquid nam aperiam totam sunt sed illum accusamus! Voluptate quaerat corrupti incidunt ad deserunt autem vero cum deleniti facere!</h5>
        <h4>Design with ease</h4>
        <h6>
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odio ipsam officiis minima vitae cumque labore eligendi repellat sint maxime placeat, assumenda quaerat atque, id error repudiandae doloremque ipsum porro!"
        </h6>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi aperiam quibusdam quasi quam tempore cum non accusantium animi eveniet, cumque magnam ex aspernatur. Officiis rem tempora nisi molestiae quidem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, soluta expedita beatae porro vero aliquam dolorum hic impedit mollitia assumenda odit in quidem itaque perspiciatis esse. Inventore error iusto sed?</h5>

        <h4>Create Relevant Content</h4>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, deserunt quisquam? Minus, impedit iusto. Quis provident quasi, perspiciatis tempora laborum quas accusantium veritatis assumenda doloremque voluptatibus harum vero repellat minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est doloribus deleniti fugit maiores omnis commodi culpa saepe perspiciatis magni ut aspernatur exercitationem, velit, architecto distinctio rem, voluptatum optio! Architecto.lo Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corrupti tempora doloremque repellat modi, magnam dolore et in dolores placeat sequi! Sit tempore, mollitia nulla dolore id corrupti vero illum.</h5>
        <h4>Stun Your Readers</h4>
        <h6>Lorem, ipsum dolor sit amet consecteturagni numquam, cum, adipisci molestiae fuga a asperiores?</h6>
        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quas velit, reiciendis exercitationem asperiores nesciunt vel, deserunt sequi illo laboriosam provident sit quibusdam soluta laborum possimus vitae dolorem veniam. Id. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quibusdam consequuntur ratione corrupti rerum consectetur dolores sed? Consectetur illum cupiditate iusto ratione cumque ab aperiam, deleniti aliquid debitis architecto quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique cum natus. Quas similique, praesentium dignissimos ipsum eius minima ratione necessitatibus accusantium assumenda delectus recusandae quam? Odit nemo aliquam aperiam.</h5>
        <h4>Get Inspired</h4>
        <h5> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia provident ullam quisquam est corporis ducimus nemo repellendus minus odio, odit beatae dicta expedita? Asperiores sit inventore doloribus, maxime mollitia tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit dolor quisquam ad, dolorem, iusto saepe explicabo voluptatibus quae eos rerum. Fuga, dolor iusto. Nam quae animi odit facere omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae nemo impedit, veniam hic porro dolorum sapiente veritatis! Quisquam dignissimos sunt est neque quasi, amet vero eos maiores incidunt nam.</h5>  <br />
        <div className='icons '>
          <FaFacebook size="25px" />
          <RiTwitterXLine size="25px" />
          <FaSquareInstagram size="25px" />
          <FaYoutubeSquare size="25px" />

        </div>
      </div>
      <div className='box-two-header-single' data-aos="fade-up" data-aos-duration="1000">
        <h5><a href="/Blog" style={{textDecoration : "none", color : "black"}}>All posts</a></h5>
        <a href="#" className='btnsix-two'>LOG OUT</a>

      </div>

      <h5 style={{ marginLeft: "11vw" }}>Recent posts</h5> <hr />

      <div className='recent-post-box-container'>
        <div className='recent-post-box'>
          <img src={imageTwelve} alt="" />
          <div className='recent-post-content'>
            <h5 >
              Read everything you know
            </h5> <hr />
            <div className='recent-post-icons'>
              <div>
                <IoMdEye size="20px" />
              </div>
              <div>
                <IoIosHeartEmpty size="20px" />
              </div>

            </div>
          </div>
        </div>

        <div className='recent-post-box'>
          <img src={imageEleven} alt="" />
          <div className='recent-post-content'>
            <h5 >
              Read everything you know
            </h5> <hr />
            <div className='recent-post-icons'>
              <div>
                <IoMdEye size="20px" />
              </div>
              <div>
                <IoIosHeartEmpty size="20px" />
              </div>

            </div>
          </div>
        </div>

        <div className='recent-post-box'>
          <img src={imageThirteen} alt="" />
          <div className='recent-post-content'>
            <h5 >
              Read everything you know
            </h5> <hr />
            <div className='recent-post-icons'>
              <div>
                <IoMdEye size="20px" />
              </div>
              <div>
                <IoIosHeartEmpty size="20px" />
              </div>

            </div>
          </div>
        </div>
      </div>

      <h5 style={{ marginLeft: "11vw" }}>Comments</h5> <hr /> <br />

      <div className='comment-section'>
        <div className="comment-container">
          <div className="comment-list">
            <div className="comment">
              <img src="https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png" alt="User" className="comment-avatar" />
              <div className="comment-content">
                <span className="comment-author">Current User</span>
                <p className="comment-text">This is a sample comment.</p>
              </div>
            </div>
          </div>

          <div className="comment-form">
            <textarea placeholder="Add a comment..." rows="3"></textarea>
            <button className="comment-submit">Publish</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default SinglePostPage
