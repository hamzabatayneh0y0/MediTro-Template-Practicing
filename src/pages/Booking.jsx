import BookingFormComponent from "../c0mponents/bookingFormComponent"
import MetaTags from "../c0mponents/meta"
import Pageheader from "../c0mponents/Pageheader"

function Booking(){
    return(
    <>
    <MetaTags title={"Booking"}des={" Booking"}/>

<div className="booking">
 <Pageheader name={"Booking"}/>
 <div className="content py-5">
   <div className="container">
   <div className="row justify-content-center align-items-center">
     <div className="form col-lg-6">
     <BookingFormComponent/>
     </div>
   </div>
   </div>
 </div>
</div>
    </>
    )
}
export default Booking