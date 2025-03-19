import { memo } from "react";
import SectionHeader from "./sectionHeader";
import WorkingCard from "./WorkingCard";
import aboutCircle from "../assets/imgs/about-circle.png"
import square from "../assets/imgs/square.png"
import orangeSquare from "../assets/imgs/orange-square.png"
import line from "../assets/imgs/aboutlines.png"
function WorkingComponent() {
  return (
    <div className="working-section py-5">
      <div className="container position-relative">
        <div className="headers text-center ">
          <SectionHeader header={"Working Process"} />
          <h2 className="fs-1 mb-5 fw-bold">How we works?</h2>
        </div>
        <div className="content">
          <WorkingCard
            num={"01"}
            title={"Make Appointmnet"}
            text={
              "It is a long established fact that a reader will be distracted by the readable content of."
            }
          />
          <WorkingCard
            num={"02"}
            title={"Take Treatment"}
            text={
              "It is a long established fact that a reader will be distracted by the readable content of."
            }
          />
          <WorkingCard
            num={"03"}
            title={"Registration"}
            text={
              "It is a long established fact that a reader will be distracted by the readable content of."
            }
          />
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
export default memo(WorkingComponent);
