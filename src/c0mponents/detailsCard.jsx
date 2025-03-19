import { Link } from "react-router-dom";

export default function DetailsCard({img,header,date,info}){
    return(
        <div className="details-card p-4 my-5">
        <div className="d-flex gap-3 mb-4 flex-wrap">
        <img src={img} loading="lazy" alt="img" className="rounded-2"  />
        <div className="text">
           <h4 className="title"> {header}</h4>
          <p className="date">{date}</p>
            
        </div>
        </div>
        <p className="info">{info}</p>
        <Link to={"#"} className="fw-bold mt-4 py-2 px-3 rounded-3">Reply</Link>
        </div>
    )
}