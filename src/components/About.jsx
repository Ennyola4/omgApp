import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/about.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'


const About = () => {

  const navigate = useNavigate();

  const handleSignUpPageClick = () => {
    setIsLoading(true); // Show loader

    setTimeout(() => {
      navigate('/AboutUs'); // Navigate after 3 seconds
    }, 3000);
  };

  const [isLoading, setIsLoading] = useState(false);

 

  return (
    <div className='about-overall-container text-white'> 
      <br />
      <div className='d-flex p-5 ' >
        <div style={{ marginLeft: "4vw" }} data-aos="zoom-out" data-aos-duration="3000" >
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsulMUyi3YwMS0mYGVenUJCdnsxF0gVynV26CYOcija4vwfGdI2rq0Xe13w3jqis529S8&usqp=CAU" className="d-block  " style={{ height: "40vw" }} alt="..." />
              </div>

              <div className="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3EHouKzitLdXkotf1jeEpGH0lYw4j7lA7ir9oGCrGy56Hu1skHSqe6_8SXmzFEztCh0&usqp=CAU" className="d-block  " style={{ height: "40vw" }} alt="..." />
              </div>

              <div className="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKVnFmDki9BGzcS-GAisswGX4NVs_-_bmL2x7G8diEcEw_0iPnLs_uQlj-SWiYJcSTVo&usqp=CAU" className="d-block  0" style={{ height: "40vw" }} alt="..." />
              </div>

              <div className="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3EHouKzitLdXkotf1jeEpGH0lYw4j7lA7ir9oGCrGy56Hu1skHSqe6_8SXmzFEztCh0&usqp=CAU" className="d-block  " style={{ height: "40vw" }} alt="..." />
              </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
              {/* <span className="visually-hidden">Previous</span> */}
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
              {/* <span classN="visually-hidden"></span> */}
            </button>
          </div>
        </div>

        <div style={{ marginLeft: "6vw" }} data-aos="fade-right" data-aos-duration="3000"> <br />
          <h4 style={{ marginBottom: "2vw" }}>Innovating media to standard</h4>
          <b><h1 style={{ fontSize: "5vw", }}>About us</h1></b>
          <p className='text-white'>Loremuga perspiciatis error, nesciunt quaerat dolor? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sit asperiores earum
            dolores reprehenderit optio excepturi beatae tenetur repellendus dolorum eius eveniet, aperiam magnam ut deserrem ipsum dolor sit amet consectetur adipisicing elit. Maiores praesentium ipsum excepturi officiis recusandae se veritatis placeat? Nesciunt, sapiente obcaecati. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum commodi, eaque laborum accusantium enim pariatur. Quasi magni officiis quidem labore quae facere, reiciendis, quibusdam velit autem sequi facilis aliquid voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora asperiores ab in, molestias dolorum dolor error quaerat, minus ipsam, cupiditate adipisci magnam quas architecto inventore! Atque explicabo esse tempore et.</p> <br />
           
            <a href="/About" className='btn btn-danger' style={{ width : "20rem"}}>MORE</a>
        </div>
      </div>
    </div>
  )
}

export default About

