import Button from "react-bootstrap/esm/Button";
import brandImage from "../assets/imgs/brand.png";
import { Link } from "react-router-dom";
import MetaTags from "../c0mponents/meta";

function Newuser(){


    return(
        <>
        <MetaTags title={"Register"} des={" Register"}/>
         <div className="register">
                <div className="content py-5">
                  <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="form col-lg-6">
                       <form action="" onSubmit={()=>{console.log("submit")}}>
                        <img src={brandImage} alt="" loading="lazy"/>
                        <input type="text" name="name" placeholder="Name" id="name" required />
                        <input type="email" name="email" placeholder="Email" id="remail"  required  /> 

                        <input type="text" name="name" placeholder="Username" id="username" required/>
                        <input type="password" name="password" placeholder="Password" id="password" />

                        <Button type="submit" className="py-2 px-4 fs-5 text-capitalize" style={{backgroundColor:"var(--secondry-color)"}}>Register Now</Button>
                         <span className="forgot" ><Link to="/forgot">Forgot Password</Link></span>
                         <span>Already have an account?</span>
                         <Button  className="py-2 px-4 fs-5 text-capitalize" ><Link to="/register" style={{color:"white"}}>login</Link></Button>

                       </form>
                        
                    </div>
                  </div>
                  </div>
                </div>
               </div>
        </>
    )
}
export default Newuser