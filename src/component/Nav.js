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
         <li><Link to="/Canteen">Canteen</Link></li>
         <li> <Link to="/Jewellery">JewelleryShop</Link></li>
         <li><Link to ="/Status"></Link></li>
         <li><Link onClick={LogOut} to ="/SignUp"> LogOut
         &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;User({JSON.parse (auth).name})</Link></li>
        </ul>
        :
        <ul className="a">
            <li><Link to="/SignUp">SignUp</Link></li>
            <li><Link to ="/">LogIn</Link></li> 
            <li><Link to ="/array">Array</Link></li>
            <li> <Link to="/Jewellery">JewelleryShop</Link></li>

            
            
         </ul>
}
        </div>   
    )
}
export default Nav;