import DoctorCard from "../c0mponents/doctorCard"
import Pageheader from "../c0mponents/Pageheader"
import doctor1 from "../assets/imgs/doctor1.jpeg";
import doctor2 from "../assets/imgs/doctor2.jpeg";
import doctor3 from "../assets/imgs/doctor3.jpeg";
import doctor4 from "../assets/imgs/doctor4.jpeg";
import doctor5 from "../assets/imgs/doctor5.jpeg";
import doctor6 from "../assets/imgs/doctor6.jpeg";
import MetaTags from "../c0mponents/meta";
function Ourteam(){
    return(
      <>
        <MetaTags title={"Our Team"} des={" Our Team"}/>
        
        <div className="ourteam">
                    <Pageheader name={"Our Team"}/>
            <div className="container py-5">
            <div className="team py-5 gap-4 justify-content-center align-items-center d-flex flex-wrap">
               
               <DoctorCard image={doctor1} name={"Dr. Addition Smith"} info={"Dentist"} />
                <DoctorCard image={doctor2} name={"Dr. Mahfuz Riad"} info={"Chiropractor"} />
                <DoctorCard image={doctor3} name={"Dr. David Benjamin"} info={"Cardiologist"} />
                <DoctorCard image={doctor4} name={"Dr. David Benjamin"} info={"Cardiologist"} />
                <DoctorCard image={doctor5} name={"Dr. Mahfuz Riad"} info={"Chiropractor"} />
                <DoctorCard image={doctor6} name={"Dr. Addition Smith"} info={"Dentist"} />
            </div>


            </div>
        </div>
      </>
    )
}
export default  Ourteam