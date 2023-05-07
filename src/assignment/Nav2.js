import React from "react";
import { Link } from "react-router-dom";
const Nav2 = () => {
  return (
    <nav className="nav2">
      <div>
        <div>
          <ul className="a">
            {/* link actualy me a hi hota he so that in css we represent link as a- .a li a  */}

            {/* <li > <Link to="/" style={{color:'white',lineHeight: '3rem'}}>JewelleryShop</Link></li>    */}

            <li>
              <Link to="/home" style={{ color: "black", lineHeight: "3rem" }}>
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
            <h1 className="NavTEXT1">
              {" "}
              <span style={{ padding: " 423px", fontFamily: "emoji" }}>
                Bite
              </span>
            </h1>
            <li className="NavTEXT1">
              <Link to="/home" style={{ color: "black", lineHeight: "3rem" }}>
                Cart
              </Link>
            </li>
            <li className="NavTEXT1">
              <Link to="/home" style={{ color: "black", lineHeight: "3rem" }}>
                My Account
              </Link>
              <Link to="/shop" style={{ color: "black", lineHeight: "3rem" }}>shop</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav2;
