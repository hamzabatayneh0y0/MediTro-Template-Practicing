import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BookingFormComponent from "../c0mponents/bookingFormComponent"
import Pageheader from "../c0mponents/Pageheader"
import { faEarth, faIdCard, faMapLocation } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import phone from "../assets/imgs/phone.png"
import message from "../assets/imgs/messege.png"
import place from "../assets/imgs/place.png"
import MetaTags from "../c0mponents/meta"

function Contactus(){
    return(
      <>
      <MetaTags title={"ContactUs"} des={" ContactUs"}/>
       <div className="contactus">
        <Pageheader name={"Contact Us"}/>
        <div className="contact-form py-5">
          <div className="container">
          <div className="row gap-5  justify-content-center py-5">
            <div className="col-md-5">
            <BookingFormComponent/>
            </div>
            <div className="text col-md-5">
              <div className="position-relative">
              <h3>Contact Us For Any Informations</h3>
                <div className="box">
                <h6><FontAwesomeIcon icon={faMapLocation}/> Location</h6>
                <p className="mt-3">2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                </div>
                <div className="box">
                <h6><FontAwesomeIcon icon={faIdCard}/> Email & Phone</h6>
                <a href="mailtto:" className="mt-3">info@yourdomain.com </a>
                <p>(+68) 120034509</p>
                </div>
                <div className="box">
                    <h6><FontAwesomeIcon icon={faEarth}/>Follow Us</h6>
                 <div className="links d-flex gap-3">
                        <a href="https://linkedin.com" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="https://instagram.com" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://twitter.com" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faTwitter}/></a>
                          </div>
                </div>
              </div>
            </div>
           </div>
          </div>


        </div>
      
      <div className="ways py-5">
        <div className="container">
        <div className="row gap-5  justify-content-center">
            <div className="box col-md-5 col-lg-3">
               <div className="icon">
               <img src={phone} alt="" loading="lazy"/>
               </div>
                <h5>Contact Number</h5>
                <p>+001 123 456 790 <br/>+002 3424 44 00</p>
            </div>
            <div className="box col-md-5 col-lg-3">
               <div className="icon">
               <img src={message} loading="lazy" alt="" />
               </div>
                <h5>Adress</h5>
                <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
            </div>
            <div className="box col-md-5 col-lg-3">
              <div className="icon">
             <img  src={place} loading="lazy" alt="" />
              </div>
                <h5>Email Address</h5>
                <p>info@yourdomain.com<br/>example@support.com</p>
            </div>
        </div>
        </div>
      </div>

       </div>
      </>
    )
}
export default Contactus