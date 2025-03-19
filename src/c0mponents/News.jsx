import { memo } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar} from "@fortawesome/free-solid-svg-icons";

function News({image,icon,name,date,info}){
    return(
        <div className="newscard">
          <Card >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> <span><img loading="lazy"  src={icon} alt="" /></span>
          <span>{name}</span>
         <span> <FontAwesomeIcon icon={faCalendar}/>{date}</span>
          </Card.Title>
          <Card.Text>
            {info}
          </Card.Text>
          <Button className="py-0 px-4 fs-5 text-capitalize" style={{backgroundColor:"white"}} ><Link to={"/Blogdetails"} style={{color:"var(--secondry-color)",textDecoration:"none"}}>Read More <span className="py-1 px-2 fw-bolder rounded-3 ms-2 my-2">&gt;</span></Link></Button>
        </Card.Body>
      </Card>
        </div>
    )
}
export default memo(News)