import React, { useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav2 from "./Nav2";
import container3 from "../imges/container3.webp";
import container4 from "../imges/container4.webp";
import img2 from "../imges/bite.jpg";
import { Button } from "antd";
import c1 from "../imges/c1.webp";
import c1_1 from "../imges/c1.1.webp";
import c2 from "../imges/c2.webp";
import c2_1 from "../imges/c.2.1.webp";
import c3 from "../imges/c3.webp";
import c3_1 from "../imges/c3.1.webp";
import c4 from "../imges/c4.webp";
import c4_1 from "../imges/c4.1.webp";
import c5 from "../imges/c5.webp";
import c5_1 from "../imges/c5.1.webp";


import pe1 from "../imges/bottel.webp";
import pe2 from "../imges/brush.webp";
import pe3 from "../imges/daily habits kit.webp";
import pe4 from "../imges/deodorant.webp";




// import c1_a from "../imges/.c1.webp";
// import c1_1_a from "../imges/.c1.1.webp";
// import c2_a from "../imges/.c2.webp";
// import c2_1_a from "../imges/.c.2.1.webp";
// import c3_a from "../imges/.c3.webp";
// import c3_1_a from "../imges/.c3.1.webp";
// import c4_a from "../imges/.c4.webp";
// import c4_1_a from "../imges/.c4.1.webp";
// import c5_a from "../imges/.c5.webp";
// import c5_1_a from "../imges/.c5.1.webp";

import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";
const Home = () => {
  const Navigate = useNavigate();
  const detail = () => {
    Navigate("/shop");
  };
  const Product = () => {
    Navigate("/BitProducts");
  };
  useState(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const handleHover1 = () => {
    setIsHovered1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovered1(false);
  };

  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovered3(false);
  };
  const handleHover4 = () => {
    setIsHovered4(true);
  };

  const handleMouseOut4 = () => {
    setIsHovered4(false);
  };

  const handleHover5 = () => {
    setIsHovered5(true);
  };

  const handleMouseOut5 = () => {
    setIsHovered5(false);
  };
  return (
    <>
  
     <Nav2/>
      
      <div className="H">
       
        
        
        <div className="Home">
          {/* <img src={img2} alt=""/> */}
          <div className=" text_block_1">
            <h1>
              <span
                className="b_1"
                style={{ color: "black", fontSize: "5rem" }}
              >
                Keeping it
              </span>
              <span
                className="b_1"
                style={{
                  color: "balck",
                  fontSize: "5rem",
                  fontStyle: "italic",
                }}
              >
                {" "}
                clean.
              </span>
            </h1>
            <span className="b_2">
              You daily routine, plastic-free and refillable forever.
            </span>

            <br></br>
            <br></br>
            <br></br>
            <button
              className="contect"
              style={{
                bottom: "343px",
                width: "177px",
                left: "317px",
                height: "52px",
                borderRight: "93px,0px,0px,-16pz",
                borderRadius: "12px",
                color: "white",
                backgroundColor: "black",
                fontSize: "25px",
              }}
              onClick={Product}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="Container" style={{widows:"91%",
        position: "relative",
        left: "131px",
        width: "85%",
        top: "200px"
    }}>
        <div className="baccha1">
          <img
            src={
              isHovered
                ? "/static/media/c1.1.451dcd1e.webp"
                : "/static/media/c1.b992e6c1.webp"
            }
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseOut}
            alt=""
            style={{ width: "237px" }}
            onClick={detail}
          />
     
        </div>

        <div className="baccha1">
          <img
            src={
              isHovered1
                ? "/static/media/c.2.1.be72b1b4.webp"
                : "/static/media/c2.d75f896c.webp"
            }
            onMouseEnter={handleHover1}
            onMouseLeave={handleMouseOut1}
            alt=""
            style={{ width: "237px" }}
          />
     
        </div>

        <div className="baccha1">
          <img
            src={
              isHovered3
                ? "/static/media/c3.1.6b3b04c6.webp"
                : "/static/media/c3.077ad1f6.webp"
            }
            onMouseEnter={handleHover3}
            onMouseLeave={handleMouseOut3}
            alt=""
            style={{ width: "237px" }}
          />
        </div>
        <div className="baccha1">
          <img
            src={
              isHovered4
                ? "/static/media/c4.1.b8b11f31.webp"
                : " /static/media/c4.90eea61a.webp"
            }
            onMouseEnter={handleHover4}
            onMouseLeave={handleMouseOut4}
            alt=""
            style={{ width: "237px" }}
          />
       
        </div>
        <div className="baccha1">
          <img
            src={
              isHovered5
                ? "/static/media/c5.1.5113f7c1.webp"
                : "/static/media/c5.81dfc8fb.webp"
                // "/static/media/c5.81dfc8fb.webp"
            }
            onMouseEnter={handleHover5}
            onMouseLeave={handleMouseOut5}
            alt=""
            style={{ width: "237px" }}
          />
     
        </div>
        <div></div>
      </div>

      <div className="small_line_div" data-aos="fade-up">
        <div className="right_line"></div>
        {/* <div className="small_line_div" ></div> */}
        <button className="shop_all_products" onClick={Product}>
          Shop All Products
        </button>
        <div
          className="small_line_div2"
          style={{ float: "right", position: "relative", left: "14px" }}
        ></div>
      </div>

      <div className="container2">
        <div className="container_x" style={{
            width: "103%",

            position: "absolute",
            top: "203px",
            borderRadius: "0",
            height: "643px",

            
            backgroundImage: "url(/images/banner2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            borderBottom: "1px solid",
          }}></div>
        <div className="container_y"></div>

        <div className="oral1">
          <span className="oral">
            <h2>Oral Care</h2>
          </span>
          <div className="oral2"></div>
          <div className="container3">
            <img src={container3}></img>
            <div
              className="oral2_1"
              style={{
                position: "absolute",
                bottom: "-217px",
                left: "-35px",
              }}
            >
              <span className="oral_1">
                <h2>Pesonal Care</h2>
              </span>
              <div
                className="oral2"
                style={{
                  left: "253px",
                  width: "149vh",
                }}
              ></div>
            </div>
          </div>
          <div className="container5">
        <img src={container4}></img>
            
          </div>
        </div>
      </div>

      <div className="container4"
      style={{border:"none"}}>
        <div className="container4_div1" style={{ marg: "15px" ,border:"none"}}>
          <img src= "/static/media/c1.b992e6c1.webp"></img>
        </div>
        <div className="container4_div1" style={{border:"none"}}>

        <img src="/static/media/c2.d75f896c.webp"></img>
        </div>
        <div className="container4_div2">

        </div>
        <div className="container4_div3"></div>
        <div className="container4_div4">
        <img src="/static/media/c3.077ad1f6.webp"></img>
        </div>
        <div className="container4_div4_1">
        <img src=" /static/media/c4.90eea61a.webp"></img>

        </div>
        <div className="container4_div5"></div>
        <div className="container4_div6"></div>
        <div className="container4_div7"></div>
        <div className="container4_div8"></div>
      </div>
      <div className="container6">
        <div className="container4_div1" style={{ marg: "15px" ,backgroundSize:"cover"}}>
        <img src={pe1}></img>

        </div>
        <div className="container4_div1">
        <img src={pe2}></img>
        </div>
        <div className="container4_div2"></div>
        <div className="container4_div3"></div>
        <div className="container4_div4">
        <img src={pe3}></img>

        </div>
        <div className="container4_div4_1">
        <img src={pe4}></img> 
        </div>
        <div className="container4_div5"></div>
        <div className="container4_div6"></div>
        <div className="container4_div7"></div>
        <div className="container4_div8"></div>
      </div>
    </>
  );
};
export default Home;
