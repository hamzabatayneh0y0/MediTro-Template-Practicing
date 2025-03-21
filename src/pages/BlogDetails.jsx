import Details from "../c0mponents/details"
import DetailsMainContent from "../c0mponents/DetailsMainContent"
import DetailsSidebar from "../c0mponents/DetailsSidebar"
import News from "../c0mponents/News"
import Pageheader from "../c0mponents/Pageheader"
import news8 from "../assets/imgs/news8.jpg"
import doctor2 from "../assets/imgs/doctor2.jpeg";
import doctor1 from "../assets/imgs/doctor1.jpeg";
import doctor3 from "../assets/imgs/doctor3.jpeg";
import news4 from "../assets/imgs/news4.jpg"
import doctor4 from "../assets/imgs/doctor4.jpeg";
import news5 from "../assets/imgs/news5.jpg"
import news6 from "../assets/imgs/news6.jpg"
import doctor5 from "../assets/imgs/doctor5.jpeg";
import doctor6 from "../assets/imgs/doctor6.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import Links from "../c0mponents/links"
import DetailsCard from "../c0mponents/detailsCard"
import { useState } from "react"
import MetaTags from "../c0mponents/meta"

function Blogdetails(){
    let [author,setauthor]=useState("")
    let [email,setemail]=useState("")
    let [comment,setcomment]=useState("")
    let [search,setsearch]=useState("")



    return(
     <>
     <MetaTags title="Blogs Details" des={" Blogs Details"}/>
     <div className="blogs-details py-5">
          <Pageheader name={"Blog Details"}/>
          <Details>
            <DetailsMainContent>
       <News image={news8} icon={doctor2} name={"Sonar Moyna"} date={"19 July 2021"} info={"In this hospital there are special surgeon"}/>
       <div className="text my-4">
        <h2 className="title">Precious Tips To Help You Get Better.</h2>
        <p className="info">You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
    </div>
<div className="quote">
    <FontAwesomeIcon icon={faQuoteLeft}/>
    <p>Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.</p>
</div>
<p className="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           
<div className="images">
<div><img src={news4} loading="lazy" alt="doctor1" /></div>
<div><img src={news5} loading="lazy" alt="doctor3" /></div>
</div>
<p className="info mt-5">You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
            <p className="info">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            <div className="tags my-5">
                <p>Tags : <Link to={"#"}>Health</Link> <Link to={"#"}>Growth</Link> <Link to={"#"}>Life</Link></p>
                <Links/>
            </div>
           
            <div className="sonar d-flex p-4 gap-3 my-5">
                <img src={doctor1} loading="lazy" alt="doctor1" className="rounded-2" />
                <div className="text">
                    <h4 className="title">Sonar Z. Moyna</h4>
                    <p className="info">Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
              <Links/>
                </div>
            </div>
            <div className="comments my-5">
                <h4 className="title main">
                8 Comments
                </h4>
                <DetailsCard img={doctor3} header={"George"} date={"May 09, 2021 at 10:45 am"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}/>
                <DetailsCard img={doctor1} header={"Falikaz"} date={"May 09, 2021 at 10:45 am"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}/>
                <DetailsCard img={doctor3} header={"Sonar"} date={"May 09, 2021 at 10:45 am"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}/>
                <DetailsCard img={doctor1} header={"Michel"} date={"May 09, 2021 at 10:45 am"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}/>
            </div>
            <div className="reply p-4">
            <h4 className="title main">
            Leave a Reply
                </h4>
                
               <form action="" onSubmit={(e)=>{e.preventDefault(); }}>
               <input type="text" name="author"  className="p-3 rounded-2" placeholder="author" value={author} onChange={(e)=>{setauthor(e.target.value)}}/>
                <input type="email" name="author"  className="p-3 rounded-2" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                 <textarea name="comment" id="comment" placeholder="comment"  className="p-3 rounded-2" value={comment} onChange={(e)=>{setcomment(e.target.value)}} ></textarea>
                 <input type="submit" value={"submit"} className="fw-bold mt-4 py-2 px-3 rounded-3"/>
               </form>

            </div>

            </DetailsMainContent>
            <DetailsSidebar>
            <input type="text" name="search"  className="p-3 mb-4 mt-4 mt-lg-0" placeholder="Enter your key words" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
            <div className="posts p-4">
            <h4 className="title main">
            Recent Posts
                </h4>
                  <News image={news4} icon={doctor4} name={"Sonar Moyna"} date={"19 July 2021"} info={"In this hospital there are special surgeon"}/>
                  <News image={news5} icon={doctor5} name={"John Deo"} date={"20 July 2021"} info={"Can you get a diflucan prescription online?"}/>
                  <News image={news6} icon={doctor6} name={"Peter Packer"} date={"21 July 2021"} info={"In this hospital there are special surgeon"}/>
                                
            </div>
            <div className="gallery p-4 my-5">
            <h4 className="title main">
            Our Gallery
                </h4>
                    <div><img src={doctor1} alt="doctor1" loading="lazy"/></div>
                   <div> <img src={doctor2} alt="doctor2" loading="lazy"/></div>
                   <div><img src={doctor3} alt="doctor3" loading="lazy"/></div> 
                   <div><img src={doctor4} alt="doctor4" loading="lazy"/></div> 
                   <div><img src={doctor5} alt="doctor5" loading="lazy"/></div> 
                   <div><img src={doctor6} alt="doctor6" loading="lazy"/></div> 

            </div>

<div className="tags p-4">
<h4 className="title main">Tags</h4>
<div className="content  d-flex flex-wrap gap-1">
<Link to={"#"}>Health</Link> <Link to={"#"}>Growth</Link> <Link to={"#"}>Life</Link>
<Link to={"#"}>Improvement</Link> <Link to={"#"}>Covid</Link> <Link to={"#"}>Healthy</Link>
<Link to={"#"}>Manage</Link> <Link to={"#"}>Education</Link> <Link to={"#"}>General</Link>

</div>
</div>
            </DetailsSidebar>
          </Details>
      
      </div>
     </>
    )
}
export default Blogdetails