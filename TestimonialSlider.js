import React, { useState } from "react";
import './TestimonialSlider.css';


const testimonial = [
{
    name:"Nishant Nirala",
    text:"The food was great! Deal for the price! Employees were very nice and came around and checked to see how food was! Impressive for a fast food place!",
    image: "/image(!!).jpeg",
    designation:"magna aliqua"

},
{
    name:"Nishant",
    text:"The food was great! Deal for the price! Employees were very nice and came around and checked to see how food was! Impressive for a fast food place!",
    image:"/images (!).jpeg",
    designation:"magna aliqua"

}


];
const TestimonialSlider = () =>{
    const[currentIndex, setcurrentIndex] = useState(0);

    const handlepreclick = () =>{
        setcurrentIndex((preindex) =>(preindex -1 + testimonial.length)% testimonial.length);
    };
    const handleNextclick = () =>{
        setcurrentIndex((preindex) =>(preindex + 1 ) % testimonial.length);
    };
    return(

        <div className="testimonial-slider">
            <h2>What says Our Customers</h2>
            <div className="testimaol-container">
                {testimonial.map((testimonial,index)=>(


<div key={index} className={`testimonial ${index === currentIndex ? 'active': ''}`}>
    <p>{testimonial.text}</p>
    <h4>{testimonial.name}</h4>
    <h5>{testimonial.designation}</h5>
</div>

  ))};
            </div>
            <div className="testimonial-navigation">
                {testimonial.map((testimonial, index) =>(
                    <img key={index}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`testimonial-image ${index === currentIndex ? 'active': ''}`}
                    />

                ))};
            </div>
            <div className="slider-control">
                <button onClick={handlepreclick}>&lt;</button>
                <button onClick={handleNextclick}>&gt;</button>
            </div>
        </div>
    );
};
export default TestimonialSlider;

