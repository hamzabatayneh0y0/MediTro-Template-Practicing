import Pageheader from "../c0mponents/Pageheader"
import sad from "../assets/imgs/error.gif"
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"
import MetaTags from "../c0mponents/meta";
function Erorr404(){
   function handlescroll(){
        scrollTo({
            top:0,
            left:0,
        });
    }
    return(
      <>
      <MetaTags title={"Error404"} des={" Error404"} />
        <div className="erorr">
               <Pageheader name={"Page Not Found"}/>
               <div className="content py-5">
                 <div className="container">
                 <div className="row justify-content-center align-items-center">
                   <div className="">
                <h2>4<img loading="lazy"  src={sad} alt="" />4</h2>
                <h3>The Page you were looking for,<br/> couldn't be found.</h3>
                <p>The page you are looking for might have been removed,<br/> had its name changed, or is temporarily unavailable.</p>
                <div className="links">
                <Button className="py-2 px-4 fs-5 text-capitalize" style={{backgroundColor:"var(--secondry-color)"}} onClick={()=>{
                    window.history.back()
                }}><Link to={""} style={{color:"white",textDecoration:"none"}}>Back</Link></Button>
                <Button onClick={handlescroll} className="py-2 px-4 fs-5 text-capitalize" style={{backgroundColor:"var(--secondry-color)"}}><Link to={"/"} style={{color:"white",textDecoration:"none"}}>Back To Home</Link></Button>

                </div>
                   </div>
                 </div>
                 </div>
               </div>
              </div>
      </>
    )
}
export default Erorr404