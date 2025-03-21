import AboutusCards from "../c0mponents/aboutusCards"
import AboutusComponent from "../c0mponents/aboutusComponent"
import LatestNews from "../c0mponents/LatestNews"
import MetaTags from "../c0mponents/meta"
import OurDoctors from "../c0mponents/ourDoctor"
import Pageheader from "../c0mponents/Pageheader"
import Testimonialcomponent from "../c0mponents/testimonialcomponent"

function Aboutus(){
    return(
       <>
        <MetaTags title="AboutUs" des={" AboutUs"}/>
       <div className="aboutus">
        <Pageheader name={"About US"}/>
       <AboutusComponent/>
       <AboutusCards/>
       <OurDoctors/>
       <Testimonialcomponent/>
       <LatestNews/>
       </div>
       </>

        
    )
}
export default Aboutus