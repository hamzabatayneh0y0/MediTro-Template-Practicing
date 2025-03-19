import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Links(){
return(
    <div className="links d-flex gap-3">
    <a href="https://linkedin.com" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faLinkedin}/></a>
    <a href="https://instagram.com" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faInstagram}/></a>
    <a href="https://twitter.com" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faTwitter}/></a>
    <a href="https://www.facebook.com/" style={{textDecoration:"none",display:"none"}} className="facebook"><FontAwesomeIcon icon={faFacebook}/></a>
      </div>
)
}