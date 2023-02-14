
import React, { useState }  from 'react';
import { Button, Form, Input,  Modal, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';



function PayBill (){
    const [billpopup,setbiilpopup]=useState(false);
    return(
        <Modal visible ={billpopup} onCancel={()=>setbiilpopup(false)} footer={false}>
        <Form layout='vertical' >
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
          
            <div className='Pay'>
                <Button htmlType='submit'>Pay</Button> 
                 </div>

        
        </Form>
        </Modal>
    )
}
export default PayBill ;