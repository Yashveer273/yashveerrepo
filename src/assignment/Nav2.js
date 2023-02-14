import React from "react";
import {Link} from 'react-router-dom';
const Nav2=()=>{  
return (
    <div style={{backgroundColor:"black"}}>
     <ul className="a">
            <li > <Link to="/" style={{color:'white'}}>JewelleryShop</Link></li>   
            <li><Link to="/Contact" style={{color:'white',    lineHeight: '3rem'}}>Contact</Link></li>
    </ul>
        </div>   
    )
}
export default Nav2;