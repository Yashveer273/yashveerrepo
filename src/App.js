import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import Nav2 from './assignment/Nav2';
import Jewellery from './assignment/Jewellery';
import Contact from './assignment/contact';

// import Nav from './component/Nav';
// import SignUp from './component/SignUp';
// import Status from './component/Status';
// import PrivateComponent from './component/PrivateComponent';
// import LogIn from './component/LogIn';
// import PizzaHurt from './component/PizzaHurt';
// import PizzaHome from './component/PizzaHome';
// import Cart from './Pages/Cart/Cart';
// import PayBill from './Pages/PayBill';
// import Contact from './Pages/Cart/Contact';
// import Array from './interview/array';



function App() {
  return (  
    <div className="App">
       <BrowserRouter>
       {/* <Nav/> */}
       {/* ------------------------------------------- */}
       <Nav2/>

       <Routes>

       <Route path ="/"element={<Jewellery/>}></Route>
       <Route path="/contact"element={<Contact/>}></Route>

       </Routes>

         {/* ----------------------------------------- */}


      {/* <Routes> */}
        
        {/* <Route element={<PrivateComponent/>}> */}
        
        {/* <Route path="/Status" element={<Status/>}></Route>
        
        <Route path="/Logout" ></Route>
        </Route> ---PrivateComponent
        <Route path="/SignUp" element={<SignUp/>}></Route>  
        
        <Route path="/" element={<LogIn/>}></Route>  
        <Route path="/PizzaHurt" element={<PizzaHurt/>}></Route>
        <Route path="/Canteen" element={<PizzaHome/>}></Route> */}
        {/* <Route path ="/Jewellery"element={<Jewellery/>}></Route> */}
        {/* <Route path="/PayBill" element={<PayBill/>}></Route>
        <Route path ="/cart" element ={<Cart />}></Route> */}
        {/* <Route path="/contact" element={<Contact/>}></Route>  */}
        {/* <Route path ="/array" element={<Array />}></Route>
      </Routes>   
          */}
      </BrowserRouter>
    </div>
  );
}
export default App;
