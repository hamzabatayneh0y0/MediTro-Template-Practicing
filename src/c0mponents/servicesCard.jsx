import { memo } from "react"
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServicesCard({icon,header}){
return(
    <div className="serviceCard p-4">
    <div className="icon ms-3 p-4">
    <FontAwesomeIcon icon={icon} className=""/>
    </div>
        <h3 className="mt-4">{header}</h3>
        <p className="lh-base">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <Button className="py-2 px-4 fs-5 text-capitalize" style={{border:"none"}} ><Link to={"/service"} style={{color:"var(--main-color)",textDecoration:"none"}}>View More</Link></Button>

    </div>
)
}export default memo(ServicesCard)