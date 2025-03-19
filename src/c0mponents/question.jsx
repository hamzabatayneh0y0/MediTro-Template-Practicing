import { useState } from "react"


function Question({q,a}){
    let [open,setopen]=useState(false)
    return(
       <div className="question my-3">
      
       <div onClick={(e)=>{
        e.target.classList.toggle("open");
        setopen(!open)
       }} className="fs-3 p-3 fw-bold q">{q}</div>
       <div className={`fs-5 answ`} style={{maxHeight:open?"300px":"0",visibility:open?"visible":"hidden"}}><p className="p-3">{a}</p></div>
  
       </div>
    )
}
export default  Question