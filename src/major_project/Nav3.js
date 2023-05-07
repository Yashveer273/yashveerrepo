import React from "react";
import  {useNavigate}  from "react-router-dom";
import { Link } from "react-router-dom";
const Nav3 = () => {
  const auth= localStorage.getItem('user');
  const Navigate=useNavigate();
  const LogOut=()=>{
      localStorage.clear();
      Navigate('/')
}
  return (
    <>

    <nav className="nav2">
     <header style={{ width:"100%"}}> 
  
          <ul className="a">
            <li>
              <Link to="/" style={{ color: "black", lineHeight: "3rem" }}>
                Home
              </Link>
            </li>       
            <li>    
              <Link
                to="/Contact"
                style={{ color: "black", lineHeight: "3rem" }}
              >
                Contact
              </Link>
            </li>
        
            <h1 className="NavTEXT2">
              <span style={{ marginLeft:"auto",marginRight:"auto",position:"relative",left
          :"74vh"}}>
               
              </span>
            </h1>
            <li className="NavTEXT1">
              <Link to="/cart" style={{ color: "black", lineHeight: "3rem" }}>
                
              </Link>
            </li>
            <li className="NavTEXT1">
             
              <Link to="/shop" style={{ color: "black", lineHeight: "3rem" }}></Link>
              
              <Link to ="/BitProducts"style={{ color: "black", lineHeight: "3rem" }}></Link>
              <li><Link onClick={LogOut} to ="/" style={{color: "black"}}>User(Mr-X) </Link></li>
              
              
              <li><Link onClick={LogOut} to ="/SignUp" style={{color: "black"}}>SignUp(Mr-X) </Link></li>

              
              

            </li>

          </ul>

          </header>
    </nav>

    </>
  );
};
export default Nav3;
