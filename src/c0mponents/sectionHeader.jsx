import { memo } from "react"
import h6bgorange from "../assets/imgs/h6-bg-orange.png";

function SectionHeader({header}){
    return(
        <h5 className="fw-bold p-2 mb-4 sectionheader" style={{backgroundImage:`url(${h6bgorange})`}}>{header}</h5>
    )
}

export default memo(SectionHeader)