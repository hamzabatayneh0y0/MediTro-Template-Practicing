import Pageheader from "../c0mponents/Pageheader";
import News from "../c0mponents/News";
import doctor1 from "../assets/imgs/doctor1.jpeg";
import doctor2 from "../assets/imgs/doctor2.jpeg";
import doctor3 from "../assets/imgs/doctor3.jpeg";
import doctor4 from "../assets/imgs/doctor4.jpeg";
import doctor5 from "../assets/imgs/doctor5.jpeg";
import doctor6 from "../assets/imgs/doctor6.jpeg";
import news1 from "../assets/imgs/news1.jpg";
import news2 from "../assets/imgs/news2.jpg";
import news3 from "../assets/imgs/news3.jpg";
import news4 from "../assets/imgs/news4.jpg";
import news5 from "../assets/imgs/news5.jpg";
import news6 from "../assets/imgs/news6.jpg";
import news7 from "../assets/imgs/news7.jpg";
import news8 from "../assets/imgs/news8.jpg";
import { useEffect, useState } from "react";
import MetaTags from "../c0mponents/meta";

function Blogs() {
  let [index, setindex] = useState(1);
  let [two, settwo] = useState(false);
  let [three, setthree] = useState(false);
  let [one, setone] = useState(true);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    switch (index) {
      case 1:
        setone(true);
        settwo(false);
        setthree(false);
        handleClick(1)
        break;
      case 2:
        setone(false);
        settwo(true);
        setthree(false);
        handleClick(2)

        break;
      case 3:
        setone(false);
        settwo(false);
        setthree(true);
        handleClick(3)

        break;
      default:
        setone(false);
        settwo(false);
        setthree(false);
    }
  }, [index]);
  return (
    <>
    <MetaTags title={"Blogs"}/>
    <div className="blogs">
      <Pageheader name={"Blog Grid 3"} />
      <div className="container py-5">
        <div className="news py-5 gap-4 justify-content-center align-items-center d-flex flex-wrap">
          <div
            className="newscard1"
            style={{ display: one ? "block" : "none" }}
          >
            <News
              image={news4}
              icon={doctor4}
              name={"Sonar Moyna"}
              date={"19 July 2021"}
              info={"In this hospital there are special surgeon"}
            />
          </div>
          <div
            className="newscard1"
            style={{ display: two ? "block" : "none" }}
          >
            <News
              image={news5}
              icon={doctor5}
              name={"John Deo"}
              date={"20 July 2021"}
              info={"Can you get a diflucan prescription online?"}
            />
          </div>
          <div
            className="newscard1"
            style={{ display: three ? "block" : "none" }}
          >
            <News
              image={news6}
              icon={doctor6}
              name={"Peter Packer"}
              date={"21 July 2021"}
              info={"In this hospital there are special surgeon"}
            />
          </div>

          <div
            className="newscard1"
            style={{ display: one ? "block" : "none" }}
          >
            <News
              image={news7}
              icon={doctor1}
              name={"Sonar Moyna"}
              date={"19 July 2021"}
              info={"In this hospital there are special surgeon"}
            />
          </div>
          <div
            className="newscard1"
            style={{ display: two ? "block" : "none" }}
          >
            <News
              image={news8}
              icon={doctor2}
              name={"Sonar Moyna"}
              date={"19 July 2021"}
              info={"In this hospital there are special surgeon"}
            />
          </div>
          <div
            className="newscard1"
            style={{ display: three ? "block" : "none" }}
          >
            <News
              image={news1}
              icon={doctor5}
              name={"Sonar Moyna"}
              date={"19 July 2021"}
              info={"In this hospital there are special surgeon"}
            />
          </div>
          <div
            className="newscard1"
            style={{ display: one ? "block" : "none" }}
          >
            <News
              image={news2}
              icon={doctor1}
              name={"John Deo"}
              date={"20 July 2021"}
              info={"Can you get a diflucan prescription online?"}
            />
          </div>
          <div
            className="newscard1"
            style={{ display: two ? "block" : "none" }}
          >
            <News
              image={news1}
              icon={doctor1}
              name={"John Deo"}
              date={"20 July 2021"}
              info={"Can you get a diflucan prescription online?"}
            />
          </div>
          <div
            className="newscard1"
            style={{ display: three ? "block" : "none" }}
          >
            <News
              image={news3}
              icon={doctor3}
              name={"Sonar Moyna"}
              date={"19 July 2021"}
              info={"In this hospital there are special surgeon"}
            />
          </div>
        </div>
        <div className="links d-flex gap-3 text-center">
          <span
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => {
             
              setindex((prevIndex) => Math.max(prevIndex - 1, 1));
            }}
          >
            prev
          </span>
          <span
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => {
              setone(true);
              settwo(false);
              setthree(false);
              setindex(() => 1);
              handleClick(1);
            }}
          >
            1
          </span>
          <span
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => {
              handleClick(2);
              setone(false);
              settwo(true);
              setthree(false);
              setindex(() => 2);
            }}
          >
            2
          </span>
          <span
            className={activeIndex === 3 ? "active" : ""}
            onClick={() => {
              handleClick(3);
              setone(false);
              settwo(false);
              setthree(true);
              setindex(() => 3);
            }}
          >
            3
          </span>
          <span
            className={activeIndex === 4 ? "active" : ""}
            onClick={() => {
             
              setindex((prevIndex) => Math.min(prevIndex + 1, 3));
            }}
          >
            next
          </span>
        </div>
      </div>
    </div>
    </>
  );
}
export default Blogs;
