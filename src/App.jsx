import { Routes, Route ,Link, HashRouter} from "react-router-dom";
import BlogDetails from "./pages/BlogDetails"
import Blogs from "./pages/Blogs"
import Aboutus from "./pages/aboutus"
import Home from "./pages/Home"
import Error404 from "./pages/Erorr404"
import Ourteam from "./pages/OurTeam"
import FAQs from "./pages/FAQ"
import Booking from "./pages/Booking"
import Service from "./pages/service"
import Register from "./pages/register"
import Servicedetails from "./pages/Servicedetail"
import Contactus from "./pages/Contact Us";
import Forgot from "./pages/forgot";
import Newuser from "./pages/newuser";
import { useEffect, useState } from "react";
import Layout from "./pages/layout";
import { HelmetProvider } from "react-helmet-async";

function App() {
  let [d,setd]=useState(false)
useEffect(()=>{
 let handdleScroll=()=>{
  setd(window.scrollY >= document.body.scrollHeight * 0.5);
 }
 window.addEventListener("scroll",handdleScroll)
 return ()=>{
 window.removeEventListener("scroll",handdleScroll)
  
 }
},[])
  return (
    <>
    <HashRouter>
     <HelmetProvider>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
          <Route path="#/Blogs" element={<Blogs/>} />
          <Route path="#/Blogdetails" element={<BlogDetails/>} />
          <Route path="#/OurTeam" element={<Ourteam/>} />
          <Route path="#/FaQ" element={<FAQs/>} />
          <Route path="#/Booking" element={<Booking/>} />
          <Route path="#/about-us" element={<Aboutus />} />
          <Route path="#/service" element={<Service />} />
          <Route path="#/servicedetails" element={<Servicedetails />} />
          <Route path="#/contactus" element={<Contactus />} />


          <Route path="*" element={<Error404/>} />
          </Route>
          <Route path="#/register" element={<Register/>} />
          <Route path="#/forgot" element={<Forgot />} />
          <Route path="#/newuser" element={<Newuser />} />
        
      </Routes>
   <span className="gotoup" style={{display:d?"block":"none"}} onClick={()=>{ 
    
window.scrollTo({top:0})
}}></span>
</HelmetProvider>
</HashRouter>
      </>
  )
}

export default App