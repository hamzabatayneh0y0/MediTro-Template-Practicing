import LatestNews from "../c0mponents/LatestNews"
import MetaTags from "../c0mponents/meta"
import Pageheader from "../c0mponents/Pageheader"
import Question from "../c0mponents/question"

function FAQs(){
    return(
     <>
      <MetaTags title={"Faq"} des={" Faq"}/>
       <div className="faqs">
        <Pageheader name={"Faq's"}/>
        <div className="questions py-5">
            <div className="container">
                <div className="row justify-content-center align-items-start">
                  <div className=" col-lg-6">
                    <Question a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} q={"How Doctor Can Ease Your Pain?"}/>
                    <Question a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} q={"How do I withdraw from a subject?"}/>
                    <Question a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} q={"Understand Doctor Before You Regret?"}/>
                    <Question a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} q={"What types of systems do you support?"}/>
                    <Question a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} q={"We Teach You How To Feel Better?"}/>
                    <Question a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} q={"How Can I Contact You?"}/>
                   </div>
                   <div className=" col-lg-6">
                   <Question a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} q={"How do I withdraw from a subject?"}/>
                    <Question a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} q={"What’s a payment statement?"}/>
                    <Question a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} q={"How Can I Contact You?"}/>
                    <Question a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} q={"How do I withdraw from a subject?"}/>
                    <Question a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} q={"Understand Doctor Before You Regret?"}/>
                    <Question a={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} q={"How Doctor Can Ease Your Pain ?"}/>

                   </div>
                </div>
            </div>
        </div>
      <LatestNews/>
       </div>
     </>
    )
}
export default  FAQs