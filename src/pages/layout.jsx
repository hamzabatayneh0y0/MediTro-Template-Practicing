import { Outlet, Link } from "react-router-dom";
import Header from "../c0mponents/Header";
import Footer from "../c0mponents/Footer";

const Layout = () => {
  return (
    <>
    <Header/>

      <Outlet />
      <Footer/>
    </>
  )
};

export default Layout;