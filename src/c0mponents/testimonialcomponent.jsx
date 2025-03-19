import { memo,useState } from "react";
import SectionHeader from "./sectionHeader";
import image from "../assets/imgs/testimonial-img.png";
import doctor1 from "../assets/imgs/doctor1.jpeg";
import doctor2 from "../assets/imgs/doctor2.jpeg";
import doctor3 from "../assets/imgs/doctor3.jpeg";
import doctor4 from "../assets/imgs/doctor4.jpeg";
import doctor5 from "../assets/imgs/doctor5.jpeg";
import doctor6 from "../assets/imgs/doctor6.jpeg";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
function Testimonialcomponent(){
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return(
        <div className="testimonial-section py-5">
       <div className="container">
       <div className="text text-center">
            <SectionHeader header={"Testimonial"}/>
            <h2 className="lh-base fw-bold">See What Are The Patients <br/>
            Saying About us</h2>
        </div>
        <div className="row ">
        <div className="image col-lg-6">
            <img loading="lazy"  src={image} alt="" className="main-img"/>
<img loading="lazy"  src={doctor1} alt="" className="doctor1 doctor"/>
<img loading="lazy"  src={doctor2} alt="" className="doctor2 doctor"/>
<img loading="lazy"  src={doctor3} alt="" className="doctor3 doctor"/>
<img loading="lazy"  src={doctor4} alt="" className="doctor4 doctor"/>
<img loading="lazy"  src={doctor5} alt="" className="doctor5 doctor"/>
<img loading="lazy"  src={doctor6} alt="" className="doctor6 doctor"/>
        </div>
        <div className="slider col-lg-6">
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="custom-slide">
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero enim, accusantium consequatur veritatis animi fugiat! Maiores impedit quaerat repudiandae suscipit in, deserunt fugit aut eum! Magnam illum eveniet obcaecati nesciunt.</p>
       <h3>john deo <span >patient</span></h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <div className="custom-slide">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero enim, accusantium consequatur veritatis animi fugiat! Maiores impedit quaerat repudiandae suscipit in, deserunt fugit aut eum! Magnam illum eveniet obcaecati nesciunt.</p>
        <h3>john deo <span >patient</span></h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <div className="custom-slide">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero enim, accusantium consequatur veritatis animi fugiat! Maiores impedit quaerat repudiandae suscipit in, deserunt fugit aut eum! Magnam illum eveniet obcaecati nesciunt.</p>
       <h3>john deo <span >patient</span></h3>
        </div>
      </Carousel.Item>
    </Carousel>
        
        </div>
        </div>
       </div>
         
        </div>
    )
}
export default memo(Testimonialcomponent)