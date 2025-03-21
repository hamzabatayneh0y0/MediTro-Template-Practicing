import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"
import triangular from "../assets/imgs/triangular-shape.png"
import square from "../assets/imgs/square.png"
import circle from "../assets/imgs/circle.png"
import plus from "../assets/imgs/plus.png"
import doctorImg from "../assets/imgs/doctor.7c2bc96d67d3eba1d64a.png"
import AboutusComponent from "../c0mponents/aboutusComponent"
import WorkingComponent from "../c0mponents/workingComponent"
import BookingForm from "../c0mponents/bookingFormComponent"
import mobile from "../assets/imgs/mobile.png"
import women from "../assets/imgs/women.png"
import location from "../assets/imgs/location.png"
import comment from "../assets/imgs/comment.png"
import setting from "../assets/imgs/setting.png"
import checked from "../assets/imgs/checked.png"
import blueline from "../assets/imgs/blueline.png"
import orangeline from "../assets/imgs/aboutlines.png"
import orangecircle from "../assets/imgs/orangecircle.png"
import SectionHeader from "../c0mponents/sectionHeader"
import ServicesCard from "../c0mponents/servicesCard"
import bluecircle from "../assets/imgs/bluecircle.png"
import bluesquare from "../assets/imgs/bluesquare.png"
import orangeSquare from "../assets/imgs/orange-square.png"

import { faTruckMedical,faBedPulse,faSyringe,faPlus,faStethoscope } from "@fortawesome/free-solid-svg-icons";
import Testimonialcomponent from "../c0mponents/testimonialcomponent"
import LatestNews from "../c0mponents/LatestNews"
import MetaTags from "../c0mponents/meta"

// import w from "../../public/vite.svg"

function Home(){
 

    return(
     <>
      <MetaTags title={"MediTro"} des={" MediTro"}/>

<div className="home">
    {/* landing-section */}
  <div className="landing-section">
  <div className="container relative">
       <div className="row justify-content-center align-items-center px-5">
       <div className="text col-sm-7">
            <h6>We Provide All Health Care Solution</h6>
            <h1 className="fw-bold lh-base">Protect Your Health And Take Care To Of Your Health</h1>
            <Button className="py-2 px-4 fs-5 text-capitalize" ><Link to={"/about-us"} style={{color:"white",textDecoration:"none"}}>read more</Link></Button>
        </div>
        <div className="image col-sm-4">
            <img loading="lazy"  src={doctorImg} alt="doctorImg"  style={{maxWidth:"100%"}} className="doctorImg"/>
        </div>
       </div>
       <div className="shapes">
        <img loading="lazy"  src={triangular} alt="triangular" className="triangular" />
        <img loading="lazy"  src={square} alt="square" className="square" />
        <img loading="lazy"  src={circle} alt="circle" className="circle" />
        <img loading="lazy"  src={plus} alt="plus" className="plus" />
       </div>
    </div>
  </div>
    {/* end landing-section */}
     {/* start about us-section */}
<AboutusComponent/>

{/* end about us-section */}
{/* start working porcess section  */}
<WorkingComponent/>
{/* end working porcess section  */}

{/* // start booking section */}

<div className="booking-section py-5 ">
<div className="container rounded-5">
<div className="row justify-content-center align-items-center content p-5">

<BookingForm/>

<div className="images col-md-6 ">
<div className="row justify-content-center align-items-end position-relative mt-5 mt-md-0">
<img src={mobile} loading="lazy"  alt="mobile" className="col-9 mobile" />
<img src={women} alt="women" loading="lazy"  className="col-3 women"/>

<div className="pic">
<img src={checked} alt="checked"loading="lazy"  style={{position:"absolute",top:"80%",left:"10%",width:"40px"}} />
<img src={setting} alt="setting" loading="lazy"  style={{position:"absolute",top:"90%",left:"40%",width:"60px"}}/>
<img src={location} alt="location" loading="lazy"  style={{position:"absolute",top:"20%",left:"10%",width:"60px"}} />
<img src={comment} alt="comment" loading="lazy"  style={{position:"absolute",top:"10%",left:"70%",width:"60px"}}/>


</div>
</div>

</div>
</div>
<div className="shape">
<img src={blueline} alt="" loading="lazy" className="blueline"/>
<img src={orangecircle} alt="" loading="lazy"  className="orangecircle"/>
<img src={triangular} alt="" loading="lazy"  className="triangular"/>
<img src={orangeline} alt="" loading="lazy"  className="orangeline"/>
</div>
</div>
</div>

{/* // end booking section */}


{/* start services section  */}

<div className="services-section  py-5 ">
<div className="container position-relative">
<div className="row justify-content-center align-items-center">
<div className="text col-lg-5 " >
  <SectionHeader header={"Services"}/>
  <h2 className="lh-base fw-bold">We Cover A Big Variety Of Medical Services</h2>
  <p className="lh-base">We provide the special tips and advice’s of heath care treatment and high level of best.</p>
  <Button className="py-2 px-4 fs-5 text-capitalize" style={{backgroundColor:"var(--hover-color)",border:"none"}} ><Link to={"/service"} style={{color:"white",textDecoration:"none"}}>All Services</Link></Button>
</div>
<div className="slider col-lg-7 mt-5 mt-lg-0">
  <div className="slider-container">
    <div className="slider-items   d-flex align-items-center">
      <ServicesCard icon={faTruckMedical} header={"Emergency"}/>
      <ServicesCard icon={faSyringe} header={"Vaccine"}/>
      <ServicesCard icon={faBedPulse} header={"Treatment"}/>
      <ServicesCard icon={faPlus} header={"Surgery"}/>
      <ServicesCard icon={faStethoscope} header={"Diagnostic"}/>
    </div>
  </div>
</div>
</div>
<div className="shapes">
<img loading="lazy"  src={bluecircle} alt="" className="bluecircle"/>
<img loading="lazy"  src={bluesquare} alt="" className="bluesquare"/>
<img loading="lazy"  src={blueline} alt="" className="blueline"/>
<img loading="lazy"  src={orangeSquare} alt="" className="orangeSquare"/>
</div>
</div>
</div>
{/* end services section */}

{/* // start Testimonial-section */}

<Testimonialcomponent/>


{/* // end Testimonial-section */}



{/* // start latestnews-section */}
<LatestNews/>


{/* // end latestnews-section */}






</div>

     </>
            

    )
}
export default Home