import { useEffect, useState, useRef } from 'react';
import '../css/blog.css'
import imageEleven from "../images/imageEleven.jpg"
import imageTwelve from "../images/imageTwelve.jpg"
import imageThirteen from "../images/imageThirteen.jpg"
import imageFourteen from "../images/imageFourteen.jpg"
import imageSix from "../images/imageSix.jpg"
import { RiAdminLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import Navbar from '../components/Navbar';





const Blog = () => {

  // const [profileImage, setProfileImage] = useState(null);
  // const [previewUrl, setPreviewUrl] = useState('');
  // const fileInputRef = useRef(null);

  useEffect(() => {

    aos.init({
      duration: 1000
    })
  }, [])

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setProfileImage(file);

  //     // Create preview URL
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreviewUrl(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleImageClick = () => {
  //   fileInputRef.current.click();
  // };

  return (
    <div className='overall-container '>
      <div className="header-content"  data-aos="fade-in" data-aos-duration="3000">
        <h1 className='text'>Smart insights on media & culture.</h1>
        <a href="/write">Creat new post</a>
      </div>
      {/* <div className='blog-header' data-aos="fade-up" data-aos-duration="3000">
       
      </div> */}

      <div className='topPost' >
        <div className="frame">
          <div className="circle"></div>
          <div className="line left"></div>
          <div className="line right"></div>
          <div className="bracket left"></div>
          <div className="bracket right"></div>
          <div className="small top">Read</div>
          <div className="big">All the stories</div>
          <div className="small bottom">In one place</div>
          <div className="hide top"></div>
          <div className="hide bottom"></div>
        </div>


        <div className='box' data-aos="fade-in" data-aos-duration="3000" >
          <img src={imageEleven} alt="" />
          {/* <div className="centered-text">Welcome to our Blog</div> */}
          <div className='content'>
            <div className='icons'>
              <p> <RiAdminLine size="25px" color='red' />
                By Hush : 2days ago</p>
              <p> May 30, 2023
              </p>
            </div>
            <h2> Lorem ipsum dolor sit amet cons </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam dignissimos ratione odit quis cumque esse animi debitis voluptatibus, eos suscipit iste recusandae distinctio et perferendis consequatur eius fuga fugit?</p> <br /><br />

            <div className='icons'>
              <a href="/SinglePostPage" className='btnsix'>Read Full Article</a>
              <IoIosHeartEmpty size="30px" className='m-2' />
            </div>
          </div>
          <div>

          </div>

        </div>
        <div className='sidePost' >
          <div className='box-three'  data-aos="fade-up" data-aos-duration="2000">
            <img src={imageSix} alt="" />
            <div className='content-three'>
            <div className='icons'>
              <p> <RiAdminLine size="20px" color='red' />
                By Admin : 2min Read</p>
              
            </div>
              <h5><a href="/singlepostpage" className='text-white'> Lorem ipsum dolor sit amet consectetur a</a></h5>
              <div className='icons-two'>
                <IoMdEye size="20px" />
                <IoIosHeartEmpty size="20px" className='m-2' />
              </div>

            </div>
          </div>

          <div className='box-three'  data-aos="fade-up" data-aos-duration="3000">
            <img src={imageTwelve} alt="" />
            <div className='content-three'>
              <div className='icons'>
              <div className='icons'>
              <p> <RiAdminLine size="20px" color='red' />
                By Admin : 2min Read</p>
              
            </div>
                <h5><a href="/singlepostpage"> Lorem ipsum dolor sit amet consectetur a</a></h5>
              </div>

              <div className='icons-two'>
                <IoMdEye size="20px" />
                <IoIosHeartEmpty size="20px" className='m-2' />
              </div>

            </div>
          </div>


          <div className='box-three'  >
            <img src={imageThirteen} alt="" />
            <div className='content-three'>
            <div className='icons'>
              <p> <RiAdminLine size="20px" color='red' />
                By Admin : 2min Read</p>
              
            </div>
              <div className='icons'>
                <h5><a href="/singlepostpage"> Lorem ipsum dolor sit amet consectetur a</a></h5>
              </div>

              <div className='icons-two'>
                <IoMdEye size="20px" />
                <IoIosHeartEmpty size="20px" className='m-2' />
              </div>

            </div>
          </div>
          <div className='box-three'  >
            <img src={imageFourteen} alt="" />
            <div className='content-three'>
            <div className='icons'>
              <p> <RiAdminLine size="20px" color='red' />
                By Admin : 2min Read</p>
              
            </div>
              <h5><a href="/singlepostpage"> Lorem ipsum dolor sit amet consectetur a</a></h5>

              <div className='icons-two'>
                <IoMdEye size="20px" />
                <IoIosHeartEmpty size="20px" className='m-2' />
              </div>

            </div>
          </div>


        </div>

      </div>

      <div className='box-two-header' data-aos="fade-up" data-aos-duration="1000">
        <a href="/blog" className='allPost'>All posts</a>
        <a href="#"> Politics</a>
        <a href="#" >Entertainment</a>
        <a href="#">Sport</a>
        <a href="#">News</a>
        <a href="#">Big Brother </a>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search a post..." />
        </div>
      </div>

      <div className='box-container'>
        <div className='box-two'>
          <img src={imageFourteen} alt="" />
          <div className='content-two'>
            <div className='icons'>
              <p> <RiAdminLine size="25px" color='red' />
                By Admin : 2min Read</p>
              <p> May 30, 2023
              </p>
            </div>
            <h3><a href="/singlepostpage"> Lorem ipsum dolor sit amet consectetur a</a></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam dignissimos ratione odit quis cumque esse animi</p> <br /> <hr /> <br /><br />

            <div className='icons-two'>
              <IoMdEye size="20px" />
              <IoIosHeartEmpty size="20px" className='m-2' />
            </div>

          </div>
        </div>







        <div className='box-two'>
          <img src={imageThirteen} alt="" />
          <div className='content-two'>
            <div className='icons'>
              <p> <RiAdminLine size="20px" color='red' />
                By Admin : 2min Read</p>
              <p> May 30, 2023
              </p>
            </div>
            <h3><a href="/singlepostpage"> Lorem ipsum dolor sit amet consectetur a</a></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam dignissimos ratione odit quis cumque esse animi</p> <br /> <hr /> <br /><br />

            <div className='icons-two'>
              <IoMdEye size="20px" />
              <IoIosHeartEmpty size="20px" className='m-2' />
            </div>

          </div>
        </div>

        <div className='box-two'>
          <img src={imageTwelve} alt="" />
          <div className='content-two'>
            <div className='icons'>
              <p> <RiAdminLine size="20px" color='red' />
                By Admin : 2min Read</p>
              <p> May 30, 2023
              </p>
            </div>
            <h3><a href="/singlepostpage"> Lorem ipsum dolor sit amet consectetur a</a></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam dignissimos ratione odit quis cumque esse animi</p> <br /> <hr /> <br /><br />

            <div className='icons-two'>
              <IoMdEye size="20px" />
              <IoIosHeartEmpty size="20px" className='m-2' />
            </div>

          </div>
        </div>

        <div className='box-two'>
          <img src={imageThirteen} alt="" />
          <div className='content-two'>
            <div className='icons'>
              <p> <RiAdminLine size="20px" color='red' />
                By Admin : 2min Read</p>
              <p> May 30, 2023
              </p>
            </div>
            <h3><a href="/singlepostpage"> Lorem ipsum dolor sit amet consectetur a</a></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam dignissimos ratione odit quis cumque esse animi</p> <br /> <hr /> <br /><br />

            <div className='icons-two'>
              <IoMdEye size="20px" />
              <IoIosHeartEmpty size="20px" className='m-2' />
            </div>

          </div>
        </div>

        <div className='box-two'>
          <img src={imageThirteen} alt="" />
          <div className='content-two'>
            <div className='icons'>
              <p> <RiAdminLine size="20px" color='red' />
                By Admin : 2min Read</p>
              <p> May 30, 2023
              </p>
            </div>
            <h3><a href="/singlepostpage"> Lorem ipsum dolor sit amet consectetur a</a></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam dignissimos ratione odit quis cumque esse animi</p> <br /> <hr /> <br /><br />

            <div className='icons-two'>
              <IoMdEye size="20px" />
              <IoIosHeartEmpty size="20px" className='m-2' />
            </div>

          </div>
        </div>

        <div className='box-two'>
          <img src={imageTwelve} alt="" />
          <div className='content-two'>
            <div className='icons'>
              <p> <RiAdminLine size="20px" color='red' />
                By Admin : 2min Read</p>
              <p> May 30, 2023
              </p>
            </div>
            <h3><a href="/singlepostpage"> Lorem ipsum dolor sit amet consectetur a</a></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam dignissimos ratione odit quis cumque esse animi</p> <br /> <hr /> <br /><br />

            <div className='icons-two'>
              <IoMdEye size="20px" />
              <IoIosHeartEmpty size="20px" className='m-2' />
            </div>

          </div>
        </div>
  





  
      </div>

    </div>
  )
}

export default Blog
