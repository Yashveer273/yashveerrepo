
import React,{useState,useEffect} from 'react'
import { Col, Row } from 'antd';
// import axios from 'axios';
import LayoutApp from './AntDesignLayout';
import Product from './Product';
import img1 from '../imges/cutlery.png';
import img2 from '../imges/Pizz.png';
import img3 from '../imges/juice.png';
import img4 from '../imges/coffee.png';
import img5 from '../imges/sundae.png';

import img6 from '../imges/penne.png';
import img7 from '../imges/noodles.png';
import Nav from './Nav';

const PizzaHome= ()=>{
    const [ProductData,setProduct]=useState([]);
    const [selectCategory,setSelectCeteagory]=useState("all")
    const categories =[
        {
            name:"all",
            image2:img1,
        },
        {
            name:"Pizza",
            image2:img2,

        },
        {
            name:"Juice",
            image2:img3,
        } ,
        {
            name:"Coffee",
            image2:img4,
        },
        {
            name:"Ice Cream",
            image2:img5
        },
        {
            name:"Pasta",
            image2:img6
        },
        {
            name:"Chaumeen",
            image2:img7
        }

    ]


    useEffect(()=>{
        fetch("http://localhost:5000/api/Products/getProducts").then((Result)=>{
            Result.json().then((resp)=>{
                setProduct(resp)
            })
        })
    },[])  
    console.log(ProductData)    
    return(
        <>
        <Nav/>
        <LayoutApp>
            <div className='category'>
                {categories.map((common)=>(
                <div 
                key={common.name} className={`categoryFlex ${selectCategory===common.name && 'category-active'}`}
                onClick={()=>setSelectCeteagory(common.name)}
                >  
                </div>
                ))}
                </div>

                
            <div className='category'>  
                {categories.map((category)=>(
                <div 
                key={category.name} className={`categoryFlex ${selectCategory===category.name && 'category-active'}`}
                onClick={()=>setSelectCeteagory(category.name)}
                >
                    <div className='categoryName'><h6 >{category.name }</h6></div>
                    <img className='searchimage'  style={{height:"59px"}} src={ category.image2} alt ={category.name} height={70} width={70}/></div>
                ))}
            </div>
                
            <Row>
                {ProductData.filter((i)=>i.common===selectCategory).map ((prod)=> (
                    <Col xs={24} sm={6} md={12}lg={6}>
                    <Product product={prod}/>
                    </Col>
                ))}

                  {ProductData.filter((i)=>i.category===selectCategory).map ((prod)=> (
                    <Col xs={24} sm={6} md={12}lg={6}>
                    <Product product={prod}/>
                    </Col>
                ))}
            </Row>  
        </LayoutApp> 
        </>   
    )
}
export default PizzaHome;