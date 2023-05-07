import React,{useState} from "react";
import { ReactDOM } from "react-dom";
import Nav3 from "../major_project/Nav3";
function Contact(){
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[mobil_no,setmobil_no]=useState("")
    const[message,setmessage]=useState("")
    const value={name,email,mobil_no,message};
    const submit =(e)=>{
        e.preventDefault()
        console.log("name- " + value.name + " Email- "+value.email+ " phone number- " + value.mobil_no + " query- " +value.message);
    }

    return(
        
     <>
     <Nav3/>
       <div className='contact2' >
                  <div className='contact1'>
     <form onSubmit={submit}>

         <label className="na" style={{marginLeft:'28px' }} for="">Name-</label>
         <input className='inputbox'  type="none" id="name" value={name} pattern="[A-Za-z]+" maxLength="32" onChange={(e)=>setname(e.target.value)}required></input><br></br><br></br>  
         
         <label className="em" style={{marginLeft:'38px'}} for="">Email-</label> 
         <input className='inputbox'  type="email" id="email" value={email}onChange={(e)=>setemail(e.target.value)}required></input><br></br><br></br>
         
         <label  className="mb" style={{marginLeft:'12px'}} for ="">MobilNo-</label>
         <input className='inputbox'  id="number" value={mobil_no} type ="tel"  pattern="[6-9]{1}[0-9]{3}[1-9]{3}[0-9]{2}[1-9]{1}" onChange={(e)=>setmobil_no(e.target.value)} required></input><br></br><br></br>
         

         <label className="mesg" for ="">massage-</label>
         <textarea className='inputbox'  type="text" pattern="[A-Za-z]+" maxLength={255} minLength={10} id ="massage" value={message}onChange={(e)=>setmessage(e.target.value)} required></textarea><br></br><br></br>
         
         <input className='contact' type= "submit"  value="Submit"/>
     </form>
     </div>
     </div>
     </>
     
    )


    
}
export default Contact;



