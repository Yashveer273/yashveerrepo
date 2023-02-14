import React from 'react'
import { Button,Card } from 'antd';
import { useDispatch } from 'react-redux';
function Product ({product}) {
    const dispatch=useDispatch();
    const CartHandler=()=>{
        dispatch({
            type:"ADD_TO_CART",
            payload:{...product,quantity:1}
        })
    }
    const {Meta}=Card;
    return (
        <Card
                hoverable
                style={{ width: 240 ,marginBottom:30}}
                cover={<img alt={product.name} src={product.img } style={{height:200}}/>}  
        >
                <Meta title={product.name} description={product.category} Description={`₹${product.price}`} />
                <div onClick={()=>CartHandler()} className='Add_cart_button'>
                    <Button> Add to Cart</Button>
                </div>
        </Card>
    )
}
export default Product;