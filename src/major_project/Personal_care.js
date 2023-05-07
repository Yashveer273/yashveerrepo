import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav2 from "./Nav2";
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";
function personal_care() {
  let b;
  const proAuth1 = localStorage.getItem("E_Comm_Data");
  const [total, setTotal] = useState(0);
  b = JSON.parse(proAuth1);
  const [P1, setProduct1] = useState([]);
  const [cart1, setcart] = useState([...b]);
  const [cardName, setcardName] = useState("india");
  const [pincode, setpincode] = useState();
  const [address, setaddress] = useState("");
  const [username, setuserName] = useState("");

  const [selects, setselects] = useState("india");
  const [pay, setpay] = useState();
  const [cardDate, setDate] = useState();
  const [email, setemail] = useState("");
  const [mobil_no, setmobil_no] = useState();
  const [card_no, setcard_no] = useState();
  const [show, hide] = useState(false);
  const [show1, hide1] = useState(true);
  const [v1, v] = useState([]);
  const [orderTime, setOrderTime] = useState(new Date());

  console.log(cart1);
  let mydate = new Date();

  const value = [
    {
      email,
      mobil_no,
      card_no,
      cardDate,
      ...pay,
      selects,
      orderTime,
      pincode,
      address,
      username,
    },
    ...cart1,
  ];

  const submit = (e) => {
    e.preventDefault();
    // localStorage.setItem("a",JSON.stringify(cart1))
    setOrderTime(
      +"orderDate-" +
        mydate.getFullYear() +
        "/" +
        (mydate.getMonth() + 1) +
        "/" +
        mydate.getDate() +
        ":  Order Time-" +
        mydate.getHours() +
        "-" +
        mydate.getMinutes()
    );
    payment();

    console.log(value);
  };

  const payment = () => {
    hide(!show);
    hide1(!show1);
  };

  const minusfun = (cart_id) => {
    console.log(cart_id);

    setcart((cart1) =>
      cart1.map((item) =>
        cart_id === item._id && item.quantity !== 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const removeitem = (id) => {
    const updateitem = cart1.filter((item) => item._id !== id);
    setcart(updateitem);
  };
  const plus = (cart_id) => {
    setcart((cart1) =>
      cart1.map((item) =>
        cart_id === item._id && item.quantity !== 9
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  useEffect(() => {
    fetch("http://localhost:5000/abc1").then((Result) => {
      Result.json().then((resp) => {
        setProduct1(resp);
        console.log(resp);
      });
    });
  }, []);
  useEffect(() => {
    let temp = 0;
    cart1.forEach(
      (Product) => (temp = temp + Product.price * Product.quantity)
    );
    setTotal(temp);
  }, [cart1]);

  const add_to_cart = (item) => {
    setcart([...cart1, { ...item }]);
  };
  // cart1.map(x=>console.log(x))

  return (
    <>
      <Nav2 />
      <div>
        <div className="s" style={{ position: "absolute", top: "52%" }}>
          {P1.map((item) => (
            <div key={item._id} className="sq1" style={{ float: "left" }}>
              <img className="api1" src={item.imgName} alt={item.name}></img>
              <span className="description" style={{ marginLeft: "-29.5px" }}>
                {" "}
                {item.name}
                {item.price}
                {item.star}
                {item.Reviews}
                <button onClick={() => add_to_cart(item)}>Shop Now</button>{" "}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------------------------- */}

      <div className="product1">
        <span className="product2">
          <b>
            <b>All Products</b>
          </b>
        </span>
        <br></br>
        <br></br>
        <span className="product3">Build your own plastic-free routine</span>
      </div>

      <div>
        <span
          style={{
            position: "absolute",
            left: "28.3%",
            top: "41.9%",
            fontSize: "2.2rem",
            fontWeight: "510",
            fontFamily: "sans-serif",
          }}
        >
          Personal Care{" "}
        </span>

        <div
          style={{
            width: "51%",
            position: "absolute",
            background: "aquamarine",
            borderTop: "2px solid #cad3ef",
            top: "46%",
            left: "46%",
          }}
        />

        <span
          style={{
            position: "absolute",
            left: "7.3%",
            top: "42.4%",
            fontSize: "2rem",
            fontWeight: "510",
            fontFamily: "initial",
          }}
        >
          <b>Collections </b>
          <br></br>
          <ul style={{ flexDirection: "column" }} className="AllProduct">
            <li
              style={{
                textDecoration: "none",
                display: "flex",
                fontSize: "1rem",
                fontFamily: "sans-serif",
                flexDirection: "column",
              }}
            >
              <Link
                to="/BitProducts"
                style={{ color: "black", lineHeight: "3rem" }}
              >
                <div> All Products</div>
              </Link>
              <Link
                to="/Personal_care"
                style={{ color: "black", lineHeight: "3rem" }}
              >
                <div> Personal Care</div>
              </Link>
              <Link
                to="/Bundles"
                style={{ color: "black", lineHeight: "3rem" }}
              >
                <div> Bundles</div>
              </Link>
            </li>
          </ul>
        </span>

        <div className="cart" style={{ maxWidth: "27%" }}>
          {cart1.map((item) => (
            <div
              key={item._id}
              className="sq4 "
              style={{ width: "20%", display: "inlineBlock" }}
            >
              <span>
                <img
                  className="ap"
                  src={item.imgName}
                  alt={item.name}
                  style={{
                    borderRadius: "0",
                    width: "auto",
                    height: "0%",
                    maxWidth: "200%",
                  }}
                ></img>{" "}
              </span>
              <span
                className="description"
                style={{
                  border: "none",
                    width: "164px",
                    position: "relative",
                    height: "57px",
                }}
              >
                {" "}
                {item.name}&nbsp;&nbsp;&nbsp; ₹{item.price}&nbsp;
                <span style={{ direction: "inline-block", height: 0 }}>
                    <hr
                      style={{
                        position: "relative",
                        left: "220px",
                        top: "-173px",
                        width: "100px",
                      }}
                    />
                    <CloseOutlined
                      className="price2"
                      style={{
                        left: "125px",
                        opacity: "0.4",
                        top: "-288px",
                        fontSize: "27px",
                      }}
                      onClick={() => removeitem(item._id)}
                    />
                    <span className="price2">
                      ₹{item.price * item.quantity}
                    </span>
                  </span>
              </span>
              <span
                  className="quan"
                  style={{ position: "relative", top: "-215px", left: "230px" }}
                >
                  <MinusCircleOutlined
                    className="minus1"
                    style={{ verticalAlign: "1px" }}
                    onClick={() => minusfun(item._id)}
                  />{" "}
                  {item.quantity} {/*..........................*/}
                  <PlusCircleOutlined
                    className="minus1"
                    style={{ verticalAlign: "1px" }}
                    onClick={() => plus(item._id)}
                  />{" "}
                </span>
                <hr
                  style={{
                    color: "#212529",
                    opacity: "0.1",
                    maxWidth: "10.37cm",
                    minWidth: "10.3cm",
                    width: "Audio",
                    position: "relative",
                    top: "0px",
                    borderTop: "2px solid",
                  }}
                />
            </div>
          ))}
        </div>
        <div
          className="cart"
          style={{
            minHeight: "5%",
            top: "643px",
            fontFamily: "garamond-premier-pro, Georgia, serif",
            alignItems: "center",
            display: "flex",
          }}
        >
          <strong>&nbsp; Total: ₹{total}&nbsp;</strong>
        </div>
        <button
          className="cart"
          onClick={() => payment()}
          style={{
            minHeight: "5%",
            top: "643px",
            fontFamily: "garamond-premier-pro, Georgia, serif",
            left: "129px",
            width: "64px",
          }}
        >
          Pay
        </button>
        {show && (
          <div
            className="cart"
            style={{
              top: "192px",
              minHeight: "63%",
              width: "27%",
              backgroundColor: "rgba(144, 137, 137, 0.8)",
            }}
          >
            <form onSubmit={submit}>
              &nbsp;<h4 className="payfield">Pay with card </h4>
              <br></br>
              <h6 className="payfield">Contact Information </h6>
              <input
                className="payfield"
                style={{ width: "91.2%" }}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="email@example.com"
                required
              ></input>
              <br></br>
              
              <input
                className="payfield"
                style={{ width: "91.2%" }}
                id="number"
                value={mobil_no}
                type="tel"
                pattern="[6-9]{1}[0-9]{3}[1-9]{3}[0-9]{2}[1-9]{1}"
                maxLength={10}
                onChange={(e) => setmobil_no(e.target.value)}
                placeholder="+91..."
                required
              ></input>
              <br></br>
              <br></br>
              <input className="payfield"  onChange={(e) => setpincode(e.target.value)} placeholder="PIN Code" ></input><br></br>
              <input className="payfield"  onChange={(e) => setaddress(e.target.value)} placeholder="ADDRESS"></input>
              <input className="payfield"  onChange={(e) => setuserName(e.target.value)} placeholder="Use Name"></input>
            <br></br>
              <br></br>
              <h6 className="payfield"> Card information </h6>
              <input
                className="payfield"
                style={{ width: "91.2%" }}
                id="number"
                value={card_no}
                type="tel"
                maxLength={19}
                minLength={19}
                onChange={(e) => setcard_no(e.target.value)}
                placeholder="1234 1234 1234 1234"
                // required
              ></input>
              <br></br>
          
              <input
                style={{ marginLeft: "35px",border:"none",width: "151px" }}
                type="date"
                onChange={(e) => setDate(e.target.value)}
                placeholder="MM/YY"
                // required
              ></input>
              <input
                style={{ width: "204px",border:"none" }}
                placeholder="CVC"
                type="password"
                minLength={4}
                maxLength={4}
                // required
              ></input>
              <br></br>
              <br></br>
              <h6 className="payfield">Name of card</h6>
              <input className="payfield"  onChange={(e) => setcardName(e.target.value)} ></input>
               

              <br></br>
              <br></br>
              <h6 className="payfield">Country or region </h6>
              <select className="payfield"  onChange={(e)=>setselects(e.target.value)} >
                <option value="india">India</option>
              </select>
              <button
                className="cart"
                type="submit"
                value="Submit"
                style={{
                  left: "284px",
                  minHeight: "5%",
                  top: "81%",
                  width: "88px",
                  boxShadow: "none",
                }}
                onClick={(e)=>setpay({total})}
                // onClick={()=>Complete()}
              >
                Pay: {total}
              </button>
            </form>
          </div>
        )}


      </div>
    </>
  );
}
export default personal_care;
