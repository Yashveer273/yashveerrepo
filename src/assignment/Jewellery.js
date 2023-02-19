import React from "react";
import BootstrapCarousel from "./BootstrapCarousel";

//////////// this web site is responsive on only contact component

function Jeweller() {
  return (
    <>
      <header>
        <BootstrapCarousel />

        <div>
          <spam className="welcome">
            <p>
              <h1 style={{ color: "1c1c1c", fontSize: "3rem" }}>
                Welcome to our website{" "}
              </h1>
            </p>
          </spam>

          <div className="container">
            <div className="child1">
              <circle className="circle"></circle>

              <spam id="c1" style={{ textAlign: "center" }}>
                <h4 className="pg"> 10% OFF</h4>
              </spam>
              <spam id="c1.1" style={{ textAlign: "center" }}>
                <p>
                  metal- Gold<br></br>
                  Quality- 22c
                  <br></br>
                  Price-100$
                  <br></br>
                  weight-10gm
                </p>
              </spam>
            </div>
            <div id="child2">
              <circle className="circle"></circle>
              <span id="c2" style={{ textAlign: "center" }}>
                <h4>Quality Products</h4>
              </span>
              <spam id="c2.1" style={{ textAlign: "center" }}>
                <p>
                  100+ GOld Jewellers<br></br>
                  100% Quality Guarantee
                  <br></br>
                  24*7 Customer Servic
                </p>
              </spam>
            </div>
            <div id="child3">
              <circle className="circle"></circle>
              <spam id="c3" style={{ textAlign: "center" }}>
                <h4>EMI servic is available</h4>
              </spam>
              <spam id="c.1" style={{ textAlign: "center" }}>
                <p>
                  You can pay in 4 step with 10% GST<br></br>
                  cash rewards & evern iPhones
                </p>
              </spam>
            </div>

            <div id="child4">
              <circle className="circle"></circle>
              <spam id="c4" style={{ textAlign: "center" }}>
                <h4>Our Centers </h4>
              </spam>
              <spam id="c4.1" style={{ textAlign: "center" }}>
                <p>
                  you can return ur gold on our centers <br></br>
                  you can sale your gold and silver on our centers<br></br>10+
                  centers
                </p>
              </spam>
            </div>
            <div id="child5">
              <circle className="circle"></circle>
              <spam id="c5" style={{ textAlign: "center" }}>
                <h4>50% OFF</h4>
              </spam>
              <spam id="c5.1" style={{ textAlign: "center" }}>
                <p>Silver Jewellers</p>
                <br></br>
                <p>
                  metal- Silver<br></br>
                  Quality-80% Return
                </p>
              </spam>
            </div>
            <div id="child6">
              <circle className="circle"></circle>
              <spam id="c6" style={{ textAlign: "center" }}>
                <h4>Order From Whatsapp</h4>
              </spam>
              <spam id="c6.1" style={{ textAlign: "center" }}>
                <p>
                  Sing up and palce your order from Whatsapp<br></br>
                  Certified Right Inside Your Whatsapp
                </p>
              </spam>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <ul className="footer">
          <li> Terms and Condition .</li>
          <li>Privacy Polivy .</li>
          <li> About Us</li>
        </ul>
      </footer>
    </>
  );
}
export default Jeweller;
