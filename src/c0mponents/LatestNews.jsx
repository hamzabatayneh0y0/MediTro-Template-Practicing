import { memo } from "react"
import News from "./News"
import SectionHeader from "./sectionHeader"
import doctor1 from "../assets/imgs/doctor1.jpeg";
import doctor2 from "../assets/imgs/doctor2.jpeg";
import doctor3 from "../assets/imgs/doctor3.jpeg";
import doctor4 from "../assets/imgs/doctor4.jpeg";
import doctor5 from "../assets/imgs/doctor5.jpeg";
import doctor6 from "../assets/imgs/doctor6.jpeg";
import news1 from "../assets/imgs/news1.jpg"
import news2 from "../assets/imgs/news2.jpg"
import news3 from "../assets/imgs/news3.jpg"
import news4 from "../assets/imgs/news4.jpg"
import news5 from "../assets/imgs/news5.jpg"
import news6 from "../assets/imgs/news6.jpg"
import news7 from "../assets/imgs/news7.jpg"
import news8 from "../assets/imgs/news8.jpg"



function LatestNews(){
 
    return(
        <div className="latestnews-section py-5">
          <div className="container">
            <div className="text text-center">
                <SectionHeader header={"Latest News"}/>
                <h2  className="lh-base fw-bold">Our Latest News</h2>
            </div>
            <div className="slider-items">
              <div className="slider-hold" >
                
                <News image={news4} icon={doctor4} name={"Sonar Moyna"} date={"19 July 2021"} info={"In this hospital there are special surgeon"}/>
                <News image={news5} icon={doctor5} name={"John Deo"} date={"20 July 2021"} info={"Can you get a diflucan prescription online?"}/>
                <News image={news6} icon={doctor6} name={"Peter Packer"} date={"21 July 2021"} info={"In this hospital there are special surgeon"}/>
                <News image={news7} icon={doctor1} name={"Sonar Moyna"} date={"19 July 2021"} info={"In this hospital there are special surgeon"}/>
                <News image={news8} icon={doctor2} name={"Sonar Moyna"} date={"19 July 2021"} info={"In this hospital there are special surgeon"}/>
                <News image={news1} icon={doctor5} name={"Sonar Moyna"} date={"19 July 2021"} info={"In this hospital there are special surgeon"}/>
                <News image={news1} icon={doctor1} name={"John Deo"} date={"20 July 2021"} info={"Can you get a diflucan prescription online?"}/>
                <News image={news2} icon={doctor2} name={"Peter Packer"} date={"21 July 2021"} info={"In this hospital there are special surgeon"}/>
                <News image={news3} icon={doctor3} name={"Sonar Moyna"} date={"19 July 2021"} info={"In this hospital there are special surgeon"}/>
          
              </div>
            </div>
          </div>
        </div>
    )
}
export default memo(LatestNews)