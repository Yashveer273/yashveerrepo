import { Button} from 'antd';
import React, { useState } from 'react';
import Layout from '../../component/AntDesignLayout';
import { useNavigate } from 'react-router-dom';



const Contact=()=> {
    const[name,setname]=useState("");
    const[mobNo,setmobNo]=useState();
    const[comment,setcoment]=useState();
    const navigate=useNavigate();
    // const contectto=()=>{
    //     console.log(name,mobNo,cmt);
    // }


    const contectto =async()=>{
        console.warn(name,mobNo,comment);
        let result = await fetch('http://localhost:5000/contect',{
        method:'post',
        body:JSON.stringify({name,mobNo,comment}),
        headers:{'content-type':'application/json'}});
        result=await result.json()
        if(result.name){
        console.warn( result);
        localStorage.setItem("contect",JSON.stringify(result)); 
        navigate("/Canteen")
        }
        else{
          alert("error")
        }
        
    
}
        return (
                <Layout>
                <>
                <div className='contect2'>
                  <div className='contect1'>
                    <form>
                      <h1>Contact</h1><br></br><br></br>
                   <input className='inputbox' type ="text" placeholder="Name"value={name} onChange={(e)=>setname(e.target.value)} /><br></br><br></br>
                   <input className='inputbox' required type ="number" placeholder="mobNo"value={mobNo}onchange={(e)=>setmobNo(e.target.value)}/><br></br><br></br>
                   <textarea className='inputbox' type="text" placeholder="comment here"value={comment}onchange={(e)=>setcoment(e.taeget.value)}></textarea><br></br>
                   <br></br><br></br>
                   <Button className='contect'onClick={contectto} type="button">send</Button>
                   </form>
                   </div>
                   </div>
                </>
                </Layout>
            
    )
}
export default Contact;
