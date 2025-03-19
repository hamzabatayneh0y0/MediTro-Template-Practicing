import Button from "react-bootstrap/esm/Button";
import brandImage from "../assets/imgs/brand.png";
import { Link } from "react-router-dom";
import MetaTags from "../c0mponents/meta";

function Forgot(){


    return(
     <>
      <MetaTags title={"register"}/>

<div className="register">
       <div className="content py-5">
         <div className="container">
         <div className="row justify-content-center align-items-center">
           <div className="form col-lg-6">
              <form action="" onSubmit={()=>{console.log("submit")}}>
               <img loading="lazy"  src={brandImage} alt="" />
              
               <input type="password" name="password" placeholder="Password" id="password" required />
               <input type="password" name="NewPassword" placeholder="New Password" id="NewPassword" required/>

               <Button type="submit" className="py-2 px-4 fs-5 text-capitalize" style={{backgroundColor:"var(--secondry-color)"}}>submit</Button>
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
export default Forgot