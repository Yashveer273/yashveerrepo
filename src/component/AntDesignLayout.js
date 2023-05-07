import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  HomeOutlined,
  ShoppingCartOutlined
  
} from '@ant-design/icons';
import Nav from './Nav';
import '../App.css';
import { Layout, Menu, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './AntDesignLayout.css'

import{useSelector} from 'react-redux';
import '../index.css'
const { Header, Sider, Content } = Layout;

const LayoutApp  = ({children}) => {
  const{Add_to_cart}=useSelector(state=>state.Reducer);
  const [collapsed, setCollapsed] = useState(false);
  const toggel=()=>{
    setCollapsed(!collapsed);
  };
  useEffect(()=>{
    localStorage.setItem('Add_to_cart',JSON.stringify(Add_to_cart))
  },[Add_to_cart]);

  const auth= localStorage.getItem('user');
  const Navigate=useNavigate();
  const LogOut=()=>{
      localStorage.clear();
      message.success("LogOut succress");
      Navigate('/SignUp')
  }
  
const navigate=useNavigate();
  return (
    <>

    <Layout>
      <Sider  trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h5 ClassName="logo-title"style={{color:'white',textAlign:'center'}}>Canteen</h5>
        </div>

       
        <Menu theme='dark' mode='inline'defaultSelectedKeys={['1']}>
          <Menu.Item key={1} icon={<HomeOutlined/>}>
            <Link className='PHome' to ="/">Home</Link>
          </Menu.Item>
          {/* <Menu.Item key={2} icon={<HomeOutlined/>}>
            <Link className='PHome' to ="/pizzaProduct">Product</Link>
          </Menu.Item> */}
          <Menu.Item key={2} icon={<HomeOutlined/>}>
            <Link className='PHome' to ="/Canteen"> Food services</Link>
          </Menu.Item>
         
          <Menu.Item key={3} icon={<HomeOutlined/>}>
            <Link className='PHome' to ="/Contact">Contact</Link>
          </Menu.Item>
          <Menu.Item key="Logout" icon={<LogoutOutlined/>}>
            <Link  className='logout' onClick={LogOut} to ="/SignUp"> LogOut
         &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;User()</Link>
          </Menu.Item>
        </Menu>
        <Menu
         
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggel,
          })}
          <div id="cart-items " onClick={()=> navigate('/cart')}>
          
            <ShoppingCartOutlined/>
            <span id='cart-badget'>{Add_to_cart.length}</span>
          </div>
        </Header>
        <div className='pp'>
        <Content
          className="site-layout-background2"
          style={{
            margin: '9px 11px',
            padding: 10,
            minHeight: 400,
            marginBottom: '10%' 
          }}
        >
          
         {children}
        </Content>
        </div>
      </Layout>
    </Layout>
    </>
  );
  
};

export default LayoutApp;