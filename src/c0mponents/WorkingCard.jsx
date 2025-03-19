import { memo } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
function WorkingCard({num,title,text}){
    return(
        <Card style={{ width: '18rem' }} className="pt-4 px-3 my-4">
        <Card.Body>
          <Card.Title className="">{num}</Card.Title>
          <h4 className="fw-bold">{title}</h4>
          <Card.Text >
           
            {text}
          </Card.Text>
          <Button className="px-4 py-3 my-4"><Link to={"/service"} >View More <span className="py-2 px-3 fw-bolder rounded-3 ms-2">&gt;</span></Link></Button>
        </Card.Body>
      </Card>
    )
}
export default memo(WorkingCard)