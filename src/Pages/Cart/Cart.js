import React, { useState,useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../component/AntDesignLayout';
import {DeleteOutlined, PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons';
import { Button, Form, Input, message, Modal, Select, Table } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import {  useNavigate } from 'react-router-dom';

function Cart ( ) {
    const [SubTotal,setSubTotal]=useState(0);
    const [billpopup,setbiilpopup]=useState(false);
    const Dispatch=useDispatch();
    const Navigate=useNavigate();
    const {Add_to_cart}=useSelector(state=>state.Reducer);
    const handlerIncrement=(record)=>{
        Dispatch({
            type:"UPDATE_CART",
            payload:{...record,quantity:record.quantity+1}  
        });
     };
     const handlerDecrement=(record)=>{
        if (record.quantity !==0){
            Dispatch({
                type:"UPDATE_CART",
                payload:{...record,quantity:record.quantity-1}  
            }); 
        }
       
     }; 
     const hendelerDelete =(record)=>{
        Dispatch({
            type:"DELETE_CART",
            payload:record
        });
    }


     const columns=[
        {
            title:"Name",
            dataIndex:"name"
        },
        
        {
            title:"image",
            dataIndex:"img",
            render:(img,record)=><img src ={img} alt={record.name} height={60} width={60}/>
        },
        {
            title:"price",
            dataIndex:"price",
            
        },
         
        {
            title:"Quantity",
            dataIndex:"_id",
            render:(id,record)=><span className='del'> <PlusCircleOutlined className='plus' onClick={()=>handlerIncrement(record)} /> 
            <strong>{record.quantity}</strong><MinusCircleOutlined className='minus'onClick={()=>handlerDecrement(record)} /> </span> 
        },
        {
            title:"Action",
            dataIndex:"_id",
            render:(id,record)=><span className='del'> <DeleteOutlined onClick={()=>hendelerDelete(record)}/></span>
        },
     ]
     useEffect(()=>{
        let temp =0;
        Add_to_cart.forEach((Product)=>(temp=temp+Product.price*Product.quantity));
        setSubTotal(temp);
    
     },[Add_to_cart]);
     const hendlerSubmit=async(value)=>{
        const newobject={
        ...value,
        
        SubTotal,
        
        totalAmount:Number((SubTotal.toFixed(2))),
        userId:JSON.parse(localStorage.getItem("user"))._id
        }
        await fetch("http://localhost:5000/api/bills/addbills",newobject);
        message.success("Bill Generated");
        Navigate("/Canteen")

        console.log(newobject);
     }
     return (
        <Layout>
             <h1>Cart</h1>
            < Table dataSource={Add_to_cart}columns={columns} bordered/>      
            <div className='Pay'>
                <h4 >Total: <span>₹{(SubTotal).toFixed(2)}</span></h4>
                <Button onClick={()=>setbiilpopup(true)}>Pay</Button>
                </div>   
                <Modal visible ={billpopup} onCancel={()=>setbiilpopup(false)} footer={false}>
                <Form layout='vertical' onFinish={hendlerSubmit}>
                    <FormItem name="Costumer Name" label="CostumerName">
                        <Input/>
                    </FormItem>
                    <FormItem name="Phone Number" label="Phone No">
                        <Input/>
                        </FormItem>
                    <FormItem name="Address" label="Address">
                        <Input/>
                        </FormItem>
                    <FormItem name="Payment Type" label="Payment Type">
                        <Select>
                            <Select.Option value="cash">Cash</Select.Option>
                            <Select.Option value="paytm">Paytm</Select.Option>
                            <Select.Option value="UPI">UPI</Select.Option>
                            <Select.Option value="Card">Card</Select.Option>
                        </Select>
    
                    </FormItem>
                    <div>
                        <span>Totel:₹{(SubTotal.toFixed(2))}</span>
                        
                    </div>
                    <div className='Pay'>
                        <Button htmlType='submit'>Pay</Button> 
                         </div>

                
                </Form>
                </Modal>
        </Layout>
     )
}
 export default Cart