import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import {faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Pageheader({name}){
    return(
        <div className="pageheader">
            <div className="container">
          <h1>{name}</h1>
          <Button className="py-2 px-4 fs-5 text-capitalize mt-5" ><Link to={"/about-us"} style={{color:"white",textDecoration:"none"}}><FontAwesomeIcon icon={faHome} className='me-1'/>Home</Link>\ {name}</Button>

            </div>
        </div>
    )
}
export default (Pageheader)