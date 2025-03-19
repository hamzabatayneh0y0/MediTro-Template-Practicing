import { memo } from "react"
import DoctorCard from "./doctorCard"
import doctor1 from "../assets/imgs/doctor1.jpeg";
import doctor2 from "../assets/imgs/doctor2.jpeg";
import doctor3 from "../assets/imgs/doctor3.jpeg";
import SectionHeader from "./sectionHeader";


function OurDoctors(){
 
    return(
        <div className="ourdoctors py-5">
          <div className="container text-center" >
            <SectionHeader header={"Our Doctor"}/>
            <h2 style={{color:"var(--main-color)"}} className="fs-1 mb-5">Meet Best Doctors</h2>
         <div className="content d-flex justify-content-center align-items-center gap-4 flex-wrap">
         <DoctorCard image={doctor1} name={"Dr. Addition Smith"} info={"Dentist"}/>
          <DoctorCard image={doctor2} name={"Dr. Mahfuz Riad"} info={"Chiropractor"}/>
          <DoctorCard image={doctor3} name={"Dr. David Benjamin"} info={"Cardiologist"}/>
         </div>

          </div>
        </div>
    )
}
export default memo(OurDoctors)