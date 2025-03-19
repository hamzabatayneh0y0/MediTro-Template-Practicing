import { memo } from "react";
import aboutImg1 from "../assets/imgs/about-img1.ad1ed7ee8284087fe9ee.jpg";
import aboutImg2 from "../assets/imgs/about-img2.0593bc2fd8a13cf8c19f.jpg";
import aboutImg3 from "../assets/imgs/about-img3.fa689b1037dbf69567a3.jpg";
import FeatureComponent from "./FeatureComponent";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { faTruckMedical,faBedPulse,faSyringe,faPlus } from "@fortawesome/free-solid-svg-icons";
import aboutCircle from "../assets/imgs/about-circle.png"
import square from "../assets/imgs/square.png"
import orangeSquare from "../assets/imgs/orange-square.png"
import SectionHeader from "./sectionHeader";
import line from "../assets/imgs/aboutlines.png"
function AboutusComponent() {
  return (
    <div className="aboutus-section py-5">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="about-shape col-lg-6">
            <div className="row align-items-center relative">
              <div className="aboutImg1 col-5 mt-5">
                <img loading="lazy"  src={aboutImg1} alt="aboutImg1" />
              </div>
              <div className="aboutImg2 col-6 mb-3">
                <img loading="lazy"  src={aboutImg2} alt="aboutImg2" />
              </div>
              <div className="aboutImg3 col-5 mb-3 ms-3">
                <img loading="lazy"  src={aboutImg3} alt="aboutImg3" />
              </div>
              <div className="aboutImg4 col-6 fw-bold mb-5">
                <div className="exp mt-3 p-5">
                  20 <p className="d-block fs-4">Year Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-info col-lg-6">
            {/* <h5 className="fw-bold p-2 mb-4">About Us</h5> */}
            <SectionHeader header={"About Us"}/>
            <div className="text">
                <h2 className="fw-bold fs-1 lh-base">The Great Place Of Medical Hospital Center
                </h2>
                <p className="lh-base">We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
            </div>
            <div className="features d-flex align-items-center gap-4 flex-wrap my-4">
            <FeatureComponent num={"one"} icon={faTruckMedical} type={"Emergency Help"}/>
      
            <FeatureComponent num={"two"} icon={faBedPulse} type={"Qualified Doctors"}/>
      
            <FeatureComponent num={"three"} icon={faPlus} type={"Best Professionals"}/>
      
            <FeatureComponent num={"four"} icon={faSyringe} type={"Medical Treatment"}/>

            </div>
          <Button className="py-2 px-4 fs-5 text-capitalize mt-3" ><Link to={"/about-us"}>read more</Link></Button>
          </div>
        </div>
        <div className="shapes">
        <img loading="lazy"  src={square} alt="square" className="square" />
        <img loading="lazy"  src={square} alt="square2" className="square2" />
        <img loading="lazy"  src={line} alt="line" className="line" />
        <img loading="lazy"  src={orangeSquare} alt="orangeSquare"  className="orangeSquare"/>
        <img loading="lazy"  src={aboutCircle} alt="aboutCircle" className="aboutCircle" />

        </div>
      </div>
    </div>
  );
}
export default memo(AboutusComponent);
