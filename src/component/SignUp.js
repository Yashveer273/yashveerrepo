import { message } from 'antd';
import Nav from "./Nav";
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button} from 'antd';
const SignUp=()=>{
    const [name,setname]=useState("");
    const [password,setpassword]=useState("");
   
    const Navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {   
            
            Navigate('/Detox')
            

        }
    })

    const collectdata=async()=>{
        console.warn(name,password);
        let result = await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify({name,password}),
        headers:{'content-type':'application/json'}});
        result=await result.json()

        
        console.warn( result);
        if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        message.success("Singup Successful");
        if(result)
        {
            Navigate("/Detox")
        }
        }
        else{
        alert("please enter correct detail")
        }
      

}
return(
    <>
    <Nav/>
    <div className='loginprofile2'>
    <div className='loginprofile' >
       <h1 className="register"> Register</h1><br></br>
        <input className='inputbox' type ="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)}/><br></br><br></br>
    
        <input className='inputbox' type ="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} /><br></br>
        <br></br>
       <Button className='login' onClick={collectdata}type="button"> SignUp</Button>
    </div>
    </div>
    </>
    )

} 
export default SignUp;