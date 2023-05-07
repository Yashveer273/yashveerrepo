import React from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Nav=()=>{  
    const auth= localStorage.getItem('user');
    const Navigate=useNavigate();
    const LogOut=()=>{
        localStorage.clear();
        Navigate('/LogIn')
    }
    return (
       <div>
        
        { auth ?
        <ul className="a">               
         <li><Link to="/Canteen" style={{color:"white"}}>Canteen</Link></li>

         <li><Link to ="/Status" style={{color:"white"}}></Link></li>
         <li><Link onClick={LogOut} to ="/SignUp" style={{color:"white"}}> LogOut
         &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;User({JSON.parse (auth).name})</Link></li>
        </ul>
        :
        <ul className="a">
            <li><Link to="/SignUp"style={{ color: "black", lineHeight: "3rem" }}>SignUp</Link></li>
            <li><Link to ="/LogIn" style={{ color: "black", lineHeight: "3rem" }}>LogIn</Link></li> 
            <li>
              <Link to="/" style={{ color: "black", lineHeight: "3rem" }}>
                Detox
              </Link>
            </li>
          
      
         
          
            {/* <li><Link to ="/array">Array</Link></li> */}
          

            
            
         </ul>
}
        </div>   
    )
}
export default Nav;