import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import Nav2 from './major_project/Nav2';
import Nav3 from './major_project/Nav3';

import Shop from './major_project/shopbutton';
import Home from './major_project/Home';
import Contact from './assignment/contact';
import Products from './major_project/E_Comm_Product';
import Personal_care from './major_project/Personal_care';
import Bundles1 from './major_project/Bundles1';
import Add_to_cart from './major_project/Cart_item';
import Amazon from './major_project/Amazon';
import Nav from './component/Nav';
import SignUp from './component/SignUp';
import Status from './component/Status';
import PrivateComponent from './component/PrivateComponent';
import LogIn from './component/LogIn';
import PizzaHurt from './component/PizzaHurt';
import PizzaHome from './component/PizzaHome';
import Cart from './Pages/Cart/Cart';
import PayBill from './Pages/PayBill';
import Contact1 from './Pages/Cart/Contact';




function App() {
  return (  
    <div className="App">
       <BrowserRouter>
       {/* <Nav/> */}
       {/* --
       ----------------------------------------- */}

       {/* <Nav2/> */}
 
        

       <Routes>
       <Route path ="/"element={<Home/>}></Route>
       <Route path="/contact"element={<Contact/>}></Route>
       <Route path="/shop" element={<Shop/>}></Route>
       <Route path="/BitProducts" element={<Products/>}></Route>
      
       <Route path="/cart"element={<Add_to_cart/>}></Route>
       <Route path='/Personal_care'element={<Personal_care/>}></Route>
       <Route path='/Bundles'element={<Bundles1/>}></Route>
       <Route path='/yash'element={<Amazon/>}></Route>

       </Routes>

      


      <Routes>
        
        <Route>
        
        <Route path="/Status" element={<Status/>}></Route>
        
        <Route path="/Logout" ></Route>
        </Route> 
        {/* ---PrivateComponent */}
        <Route path="/SignUp" element={<SignUp/>}></Route>  
        
        <Route path="/logIn" element={<LogIn/>}></Route>  
        <Route path="/PizzaHurt" element={<PizzaHurt/>}></Route>
        <Route path="/Canteen" element={<PizzaHome/>}></Route>
        {/* <Route path ="/Jewellery"element={<Jewellery/>}></Route> */}
        <Route path="/PayBill" element={<PayBill/>}></Route>
        <Route path ="/cart" element ={<Cart />}></Route>
        {/* <Route path="/contact1" element={<Contact1/>}></Route>  */}
        <Route path="/contact1" element={<Nav3/>}></Route> 
        {/* <Route path ="/array" element={<Array />}></Route> */}
      </Routes>   
         
      </BrowserRouter>
    </div>
  );
}
export default App;
