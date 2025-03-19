import { memo, useState } from "react"
import brandImage from "../assets/imgs/brand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer(){
    let[email,setemail]=useState("")
    return(
        <div className="footer">
         <div className="container">
            <div className="row">
                <div className="fheader  col-md-6 col-lg-3 c">
                  <div className="title mb-4">  <img loading="lazy"  src={brandImage} alt="" /></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officia blanditiis inventore atque. Quas repudiandae autem facilis eveniet quis recusandae, ullam vitae a ex obcaecati enim ipsa incidunt temporibus nam.</p>
                    <div className="text"><FontAwesomeIcon icon={faPhone} />  <p><span>Contact Us</span><span>+01 123 456 7890</span></p> </div>
                </div>
                <div className="quicklinks col-6 col-lg-3 c">
                    <h2 className="title">Quick Links</h2>
                    <Link to={"about-us"}>About Us</Link>
                    <Link to={"service"}>services</Link>
                    <Link to={"Booking"}>Booking</Link>
                    <Link to={"FaQ"}>Faq`s</Link>
                    <Link to={"Blogs"}>Blogs</Link>
                    <Link to={"OurTeam"}>Our Team</Link>
                </div>
                <div className="ourservice col-6 col-lg-3 c">
                    <h2 className="title">Our Service</h2>
                    <Link to={"servicedetails"}>Dental Care</Link>
                    <Link to={"servicedetails"}>Cardiac Clinic</Link>
                    <Link to={"servicedetails"}>Message Therapy</Link>
                    <Link to={"servicedetails"}>Cardiology</Link>
                    <Link to={"servicedetails"}>Precise Diagnosis</Link>
                    <Link to={"servicedetails"}>Ambulace Services</Link>
                </div>
                <div className="subscribe col-md-6 col-lg-3 c">
                <h2 className="title">Subcribe</h2>
                 <form onSubmit={(e)=>{
                    e.preventDefault()
                 }}>
                    <input type="email" className="email" name="email" id="email" placeholder={"Email Address"} required  value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <input type="submit" value={"Subscribe Now"} onClick={()=>{
                        if(email!=="")
                        {setemail("")
                            scrollTo({
                                top:0,
                                left:0
                            })
                        }
                        
                    }}/>
                 </form>
                </div>
            </div>
            <div className="last">
                <p>Copyright © 2023 Design & Developed by <span>ThemeTrades</span></p>
            </div>
         </div>
        </div>
    )
}
export default memo(Footer)