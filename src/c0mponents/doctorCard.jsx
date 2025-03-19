import { memo } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import Links from "./links";

function Doctorcard({image,name,info}){
    return(
       <div className="doctorcard">
         <Card className="text-center" >
       <div className="img"> <Card.Img variant="top" src={image} className="m-auto"/></div>
        <Card.Body>
          <Card.Title className="my-4">
         {name}
          </Card.Title>
          <Card.Text>
            {info}
          </Card.Text>
         <Links/>
        </Card.Body>
      </Card>
       </div>
    )
}
export default memo(Doctorcard)