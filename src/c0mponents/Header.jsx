import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import brandImage from "../assets/imgs/brand.png";
import brandImageSmall from "../assets/imgs/brand-small.png";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Searchmodal from "./searchmodal";
import { faGoogle, faFacebook, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function Header() {
  let [ismoved, setismoved] = useState(false);
  let [isresized, setisresized] = useState(window.innerWidth >= 992);
  let[open,setopen]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setismoved(true);
      } else {
        setismoved(false);
      }
    };

    const handleresize = () => {
      if (window.innerWidth > 991) {
        setisresized(true);
      } else {
        setisresized(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleresize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleresize);
    };
  }, []);
  return (
    <Navbar
      expanded={false}
      expand="lg"
      className={`bg-body-tertiary p-4 header fixed ${
        ismoved ? "bg-white " : "transparent"
      }`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img loading="lazy"  src={brandImage} alt="img" style={{ maxWidth: "100%" }} />
        </Navbar.Brand>
        <div className="d-flex align-items-center gap-3">
          <Searchmodal display={false} />
          <Navbar.Toggle 
            aria-controls={`basic-navbar-nav`}
            onClick={() => {
              setopen((cur)=>{return !cur})
            }}
          />
         
        </div>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${!isresized ? "trans" : ""} ${open?"show":""}`}
        >
          <Nav className="me-auto">
            <div
              className="pop pt-3 d-lg-none"
              style={{ color: "white", textAlign: "center" }}
            >
              <img
              loading="lazy" 
                src={brandImageSmall}
                alt="img"
                style={{ maxWidth: "100%" }}
              />
              <Button
                className="X fw-bold position-absolute top-0 end-0 rounded-0"
                onClick={() => {
                  setopen(()=>false)
                }}
              >
                X
              </Button>
            </div>
            <Nav.Link as={Link} to="/"  onClick={() => {
              setopen(()=>false)
            }}>
              Home
            </Nav.Link>
            {/* pages */}
            <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              show={isresized?isresized:undefined}
            >
              <NavDropdown.Item as={Link} to="about-us"  onClick={() => {
              document
          setopen(()=>false)
            }}>
                About us
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="OurTeam" onClick={() => {
               setopen(()=>false)
            }}>
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="FaQ" onClick={() => {
               setopen(()=>false)
            }}>
                FAQ`s
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="Booking" onClick={() => {
               setopen(()=>false)
            }}>
                Booking
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="Erorr404" onClick={() => {
               setopen(()=>false)
            }}>
                Erorr 404
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="register" onClick={() => {
              setopen(()=>false)
            }}>
                login/register
              </NavDropdown.Item>
            </NavDropdown>
            {/* services */}
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              show={isresized?isresized:undefined}
             
            >
              <NavDropdown.Item as={Link} to="service" onClick={() => {
              setopen(()=>false)
            }}>
                service
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="servicedetails" onClick={() => {
             setopen(()=>false)
            }}>
                service detail
              </NavDropdown.Item>
            </NavDropdown>
            {/* blog */}
            <NavDropdown
              title="Blog"
              id="basic-nav-dropdown"
              show={isresized?isresized:undefined}
            
            >
              <NavDropdown.Item as={Link} to="Blogs" onClick={() => {
               setopen(()=>false)
            }}>
                Blogs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="Blogdetails" onClick={() => {
              setopen(()=>false)
            }}>
                Blog details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="contactus" onClick={() => {
              setopen(()=>false)
            }}>
              Contact Us
            </Nav.Link>
            <Searchmodal display={true} />
            
            <div className="num d-none d-xl-block ms-2 me-2 " >
              <a href="tel:(+01) 999 888 777" style={{color:"var(--secondry-color)"}}>
               <FontAwesomeIcon icon={faPhone} className="me-1"/>
               <span>(+01) 999 888 777</span>
              </a>
            </div>
            <Nav.Link as={Link} to={"contactus"} onClick={() => {
             setopen(()=>false)
            }}>

             
              <div className="contactButton d-none d-lg-block">
                Contact Us <span className="g">&gt;</span>{" "}
              
              </div>
            </Nav.Link>
            <div className="text-center d-block d-lg-none contact mt-lg-0">
              <a href="https://www.google.com/" target="_blank" className="FontAwesomeIcon"><FontAwesomeIcon icon={faGoogle} size="2x" /></a>
              <a href="https://www.google.com/" target="_blank" className="FontAwesomeIcon"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
              <a href="https://www.google.com/" target="_blank" className="FontAwesomeIcon"> <FontAwesomeIcon icon={faXTwitter} size="2x" /></a>
              <a href="https://www.google.com/" target="_blank" className="FontAwesomeIcon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
              </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
