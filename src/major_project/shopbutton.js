import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import proimg1 from "../imges/c1.webp";
import Nav2 from "./Nav2";
const shop = () => {
  const [data,setdata]=useState("Max");
  const [Flavor,setflavor]=useState("Banana");

  const[imge,setimge]=useState("div1");
  const [proImage,setproImage]=useState({_id: 2,imgName:"/images/c1.png",price:70,name:"Mouthwash Bits",quantity:1});
  const [a,b]=useState();
  const[imge1,setimge1]=useState("F2");
  const Navigate = useNavigate();
var small="Min";
var big="Max";

var f1="Apple";
var f2="Banana";
var f3="Blueberry";
var f4="Stawberry";
useEffect(()=>{
  b([{data,Flavor,...proImage}])
  // console.log(a,"sds")
  // console.log(data,"jnn");
  if(data===big && Flavor===f1){
    setimge("div1_1")
    setproImage({_id: 2,imgName:"/images/apple.webp",price:70,name:"Mouthwash Bits",quantity:1})
  }else if ( data===big && Flavor===f2){
  setimge("div1")
  setproImage({_id: 2,imgName:"/images/c1.png",price:70,name:"Mouthwash Bits",quantity:1})
}else if ( data===big && Flavor===f3){
  setimge("div1_2")
  setproImage({_id: 2,imgName:"/images/Blueberry.webp",price:70,name:"Mouthwash Bits",quantity:1})
}else if ( data===big && Flavor===f4){
  setimge("div1_3")
  setproImage({_id: 2,imgName:"/images/Stawberry.webp",price:70,name:"Mouthwash Bits",quantity:1})
}


else if( Flavor===f1 && data==small){
  setimge("div1_4")
}else if ( Flavor===f4 && data ==small){
  setimge("div1_6")
}else if ( Flavor===f3 && data ==small){
  setimge("div1_5")
}
}

,[data,Flavor,proImage]);


const bb1=()=>{
b([{...data,...Flavor,...proImage}])

  localStorage.setItem("E_Comm_Data",JSON.stringify(a));
  Navigate("/BitProducts");
  // console.log("",data);
}
const bb2=()=>{
  localStorage.removeItem("E_Comm_Data");
}




  return (
    <> 
    <Nav2/>
      <div className="div0">
        <div className={imge}></div>
        {/* <div className="cart6">Detox</div> */}

        
        <div className="div2">
          <h2>
            <span> Fresh Mint </span>
          </h2>
          <h3>
            <span>Toothpaste Bits</span>
          </h3>
          <h5>
            FLUORIDE-FREE<h5> Made with nHap</h5>
          </h5>
          <div className="div4">
            <h5>
              <span>SELECT FLAVOR:</span>
            </h5>
            <h4>
              <span>SELECT SIZE:</span>
            </h4>
          </div>
          <spam className="free">
            Free Shipping & Save 33% —
            <p className="free1">
              Kick the tube for good with a subscription to our reinvented
              toothpaste bits with Fresh Mint. Cancel anytime.
            </p>
            <p
              className="free"
              style={{ top: "62px", left: "0%", fontFamily: "monospace" }}
            >
              INCLUDES:
              <ul
                className="free"
                style={{
                  top: "37px",
                  width: "325%",
                  left: "-14px",
                  fontFamily: "emoji",
                }}
              >
                <li>
                  Four month supply<spam style={{color: "gray"}}>— 248 bits</spam>
                </li>
                <li>Refillable glass jar</li>
              </ul>
            </p>
          </spam>
         
        </div>
        <circle id="F1" onClick={()=>(setflavor("Apple"))} ></circle>
        <circle id={imge1} onClick={()=>setflavor("Banana")}></circle>
        <circle id="F3" onClick={()=>setflavor("Blueberry")}></circle>
        <circle id="F4" onClick={()=>setflavor("Stawberry")}></circle>
        <button id="s1" onClick={()=>(setdata("Min"))}> 1 Month</button>
        <button id="s2" onClick={()=>setdata("Max")}> 4 Month</button>
        <div className="line"></div>
        <div className="div3">
          <h3>
            <span>✦✦✦✦✦ </span>
          </h3>
        </div>
        <div className="div5">
          <div className="div5c1"><span className="ds1">🏆</span><div className="ds"><span className="ds2">Ships Free + Saves</span><span className="ds3">Subscribing saves you 33%</span></div></div>
          <div className="div5c2"><span className="ds1">🌎</span><div className="ds"><span  className="ds2" style={{left: "378px"}}>100% Plastic free</span><span className="ds3" style={{left: "348px"}}>Refillable glass jar</span></div></div>
          <div className="div5c3"><span className="ds1">💪</span><span style={{position: "absolute",left: "46px",top: "67px"}}>Tackles sensitivity </span></div>
          <div className="div5c4"><span className="ds1">🌿</span> <span style={{position: "absolute",left: "348px",top: "67px"}}> Clean ingredients </span></div>
          <div className="div5c6"><span className="ds1">🐭</span><div className="ds"><span className="ds2" style={{top:"156px"}}> Cruelty–Free</span><span className="ds3" style={{top: "145px"}}>100% Vegan</span></div></div>
          <div className="div5c5"><span className="ds1">😄</span><span style={{position: "absolute",left: "348px",    top: "122px"}}>Naturally whitening  </span></div>
        </div>
        

        
        <button className="add_to_cart" onClick={()=>bb1() }>Add To Cart -</button> 

   
        <div className="div6">
          <h6  className='cleare' onClick={()=>bb2()}>Cleare The Stack To add new Product In Cart</h6></div> 
        <span></span>
        {/* <div className="div7" ></div> */}
      </div>
    </>
  );
};
export default shop;
