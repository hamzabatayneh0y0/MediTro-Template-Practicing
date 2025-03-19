import Details from "../c0mponents/details"
import Pageheader from "../c0mponents/Pageheader"
import DetailsSidebar from "../c0mponents/DetailsSidebar"
import { faCheck, faGreaterThan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import pdf from "../assets/imgs/pdf.png"
import doc from "../assets/imgs/doc.png"
import DetailsMainContent from "../c0mponents/DetailsMainContent"
import news1 from "../assets/imgs/news1.jpg"
import Question from "../c0mponents/question"
import MetaTags from "../c0mponents/meta"
function Servicedetails(){
    return(
<>
<MetaTags title={"Services Details"}/>
<div className="service-details">
    <Pageheader name={"Service Details"}/>
    <Details>
    <DetailsMainContent>
    <img  src={news1} alt="news1" loading="lazy" />
    <div className="text my-4">
        <h2 className="title">Why Medical Had Been So Popular Till</h2>
        <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur temporibus itaque odit nobis consectetur blanditiis, corporis nostrum molestiae aliquid voluptatem aliquam deserunt quo illum quos dolores natus vitae ducimus.</p>
    </div>
    <div className="row my-4">
        <ul className="col-md-6 check-list">
            <li><FontAwesomeIcon icon={faCheck}/>Then along come two they</li>
            <li><FontAwesomeIcon icon={faCheck}/>That’s just a little bit more than</li>
            <li><FontAwesomeIcon icon={faCheck}/>Standard dummy text ever since</li>
            <li><FontAwesomeIcon icon={faCheck}/>Simply dummy text of the printing</li>
            <li><FontAwesomeIcon icon={faCheck}/>Make a type specimen book</li>
        </ul>
        <div className="skills col-md-6">
            <div className="mb-5"><h6 className="title">Advanced Technology</h6><span className="skillbar"></span></div>
            <div className="mb-5"><h6 className="title">Certified Engineers</h6><span className="skillbar"></span></div>
            <div className="mb-5"><h6 className="title">6 years Experience</h6><span className="skillbar"></span></div>
        </div>
    </div>
    <div className="questions my-4">
        <div className="text">
            <h4 className="title">Popular Questions</h4>
            <p className="info">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <Question q={"How Doctor Can Ease Your Pain?"} a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            <Question q={"How do I withdraw from a subject?"} a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            <Question q={"We Teach You How To Feel Better?"} a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            <Question q={"Understand Doctor Before You Regret?"} a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            <Question q={"What types of systems do you support?"} a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            <Question q={"How Can I Contact You?"} a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>

        </div>
    </div>
</DetailsMainContent>
        <DetailsSidebar>
        <ul className="services">
        <li><Link to={"/servicedetails"}><span>Engine Diagnostics</span><FontAwesomeIcon icon={faGreaterThan}/></Link></li>
        <li><Link to={"/servicedetails"}><span>Lube Oil and Filters</span><FontAwesomeIcon icon={faGreaterThan}/></Link></li>
        <li><Link to={"/servicedetails"}><span>Belts and Hoses</span><FontAwesomeIcon icon={faGreaterThan}/></Link></li>
        <li><Link to={"/servicedetails"}><span>Air Conditioning</span><FontAwesomeIcon icon={faGreaterThan}/></Link></li>
        <li><Link to={"/servicedetails"}><span>Brake Repair</span><FontAwesomeIcon icon={faGreaterThan}/></Link></li>
        <li><Link to={"/servicedetails"}><span>Tire and Wheel Services</span><FontAwesomeIcon icon={faGreaterThan}/></Link></li>
      </ul>
      <div className="files">
        <a href="#" download={"file"}>
            <img src={pdf} alt="pdf" loading="lazy"/>
            <div>
            <h5>Download our Brochures</h5>
            <span>Download</span>
            </div>
            </a>
        <a href="#" download={"file"}>
            <img src={doc} alt="doc" loading="lazy"/>
            <div>
            <h5>Our Company Details</h5>
            <span>Download</span>
            </div>
            </a>
      </div>
        </DetailsSidebar>
    </Details>

</div>
</>
    )
}
export default  Servicedetails