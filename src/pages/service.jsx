import Pageheader from "../c0mponents/Pageheader"
import { faTruckMedical,faBedPulse,faSyringe,faPlus,faStethoscope,faPrescriptionBottleMedical } from "@fortawesome/free-solid-svg-icons";
import ServicesCard from "../c0mponents/servicesCard";
import AboutusCards from "../c0mponents/aboutusCards";
import OurDoctor from "../c0mponents/ourDoctor";
import LatestNews from "../c0mponents/LatestNews";
import MetaTags from "../c0mponents/meta";

function Service(){
    return(
      <>
      <MetaTags title={"Services"} des={" Services"}/>
        <div className="service">
            <Pageheader name={"Services"}/>
            <div className="content py-5">
                <div className="container">
                    <div className="features gap-4 justify-content-center align-items-center d-flex flex-wrap">
                       <ServicesCard icon={faTruckMedical} header={"Emergency"}/>
                       <ServicesCard icon={faSyringe} header={"Vaccine"}/>
                       <ServicesCard icon={faPrescriptionBottleMedical} header={"Treatment"}/>
                       <ServicesCard icon={faPlus} header={"Surgery"}/>
                       <ServicesCard icon={faStethoscope} header={"Diagnostic"}/>
                       <ServicesCard icon={faBedPulse} header={"Qualified Doctors"}/>

                    </div>

                 
                </div>
            </div>
            <AboutusCards/>
            <OurDoctor/>
            <LatestNews/>
        </div>
      </>
    )
}
export default  Service