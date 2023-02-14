import { message } from 'antd';
import '../App.css';
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button} from 'antd';
const LogIn=()=>{
    const [name,setname]=React.useState('');
    const [password,setpassword]=React.useState('');
    const navigate=useNavigate();
    const auth =localStorage.getItem('user');
   
    useEffect(()=>{
    if(auth){
        navigate("/Canteen")
    
    }
})
    const handlelogin=async()=>{
        console.warn("name,password",name,password)
        let result=await fetch('http://localhost:5000/Login',{
            method:'post',
            body:JSON.stringify({name,password}),
            headers:{
                'Content-Type': 'application/json'
            }

        });
        result=await result.json();
        console.warn(result)
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/Canteen")
            message.success("Login Successful");
  
        }else{
            alert("please enter correct detsail")
        }
    }
    return(
        <div className='loginprofile2'>
        <div className="loginprofile">
            <h1 className='register'>LogIn</h1><br></br>
            <input className='inputbox' type="text" placeholder='Name' 
            onChange={(e)=>setname(e.target.value)} value={name}/><br></br><br></br>
            <input className='inputbox' type="password" placeholder="Password" 
            onChange={(e)=>setpassword(e.target.value)} value={password}/>
            <br></br><br></br>
            <Button className="contect" onClick={handlelogin} type="button">LogIn</Button><br></br>
        </div>
        </div>
    )

}
export default LogIn;