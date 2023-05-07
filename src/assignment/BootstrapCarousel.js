import React, { useEffect } from "react";
import '../App.css';
import {Carousel} from 'react-bootstrap';

import img1 from '../imges/carousel1.png';
import img2 from '../imges/carousel2.png';
import img3 from '../imges/carousel4.jpeg';


function BootstrapCarousel() {
  
  useEffect(()=>{
      useEffect( async() => {
       let result = await fetch("http://localhost:5000/api/Products/getProducts")
       let data=await result.json();
       console.log( " ye le data",data);
      } )})
return(
  <>
  </>
)

























  // return (
  
  //   <div className="height ">
       
  //   <div className="first_div">
    
  //   <Carousel variant="dark "  >
  //     <Carousel.Item>
        
  //       <img
  //         className="d-block w-100%"
  //         src={img1}
  //         alt="First slide"
  //       />
  //       <Carousel.Caption>
  //         <h5>First slide label</h5>
  //         <p>Welcome To Our Jeweller website</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100% "
  //         src={img2}
  //         alt="Second slide"
  //       />
  //       <Carousel.Caption>
  //         <h5>Second slide label</h5>
  //         <p> We Have Gold And Silver Jewellers With Attractice Design.</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100% "
  //         src={img3}
  //         alt="Third slide"
  //       />
  //       <Carousel.Caption>
  //         <h5>Third slide label</h5>
  //         <p>
  //           Thanks you coming on our website 
  //         </p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //   </Carousel>
  //   </div>
  //   </div>
  
  // );
}


export default BootstrapCarousel;
