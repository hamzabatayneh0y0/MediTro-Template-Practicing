import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FeatureComponent({num,icon,type}){
return(
    <div className={"feature "+num+" d-flex align-items-center fs-5 fw-bold p-2"}>
      <span  className="fs-3 d-block me-4">  <FontAwesomeIcon icon={icon}/></span>
        <p>{type}</p>
    </div>
)
}
export default memo(FeatureComponent)