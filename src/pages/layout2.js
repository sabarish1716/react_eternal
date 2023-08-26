import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
// import App from './App'
import { Button, Menu,Layout, theme } from 'antd';
import logo from '../images/adminlogo.png';
const {Header , Sider , Content} = Layout


// const togglebutton={marginBottom: 16, background:"#D48836", marginLeft:18};

// const navbarbg={background:"#FFFAE6", color: "BLACK", fontWeight: 500,}

// const img={padding:10}

const items = [
 

  getItem('Dashboard ', '1', <PieChartOutlined />),
  getItem('Settings', '2', <DesktopOutlined />),
 
  getItem('Deals', 'sub1', <MailOutlined />, [
    getItem('Add product', '3'),
    getItem('Manage Product', '4'),
    getItem('Manage Deals', '5'),  
  ]),

getItem('Spices', '6', <ContainerOutlined />),
getItem('Manage Recipes', '7', <ContainerOutlined />),


  getItem('World Cusines', 'sub2', <AppstoreOutlined />, [
    getItem('Cusines', '8'),
    getItem('Add product', '9'),
    getItem('Manage Product', '10'),
  ]),

   getItem('Our Range', 'sub3', <MailOutlined />, [
    getItem('Add product', '11'),
    getItem('Manage Product', '12'),
  ]),

   getItem('Orders', '13', <ContainerOutlined />),
getItem('Sales', '14', <ContainerOutlined />),

getItem('Purchase', 'sub3', <MailOutlined />, [
    getItem('Add Purchase', '15'),
    getItem('Manage Purchase', '16'),
  ]),

  getItem('Expences', 'sub4', <MailOutlined />, [
    getItem('Add Expences', '17'),
    getItem('Manage Expences', '18'),
  ]),
   
getItem('Stock', '19', <ContainerOutlined />),
getItem('Stock report', '20', <ContainerOutlined />),
getItem('Profit & Loss', '21', <ContainerOutlined />),


];
export default function  LayoutFile (){

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
   <Layout>
    
      <Sider  collapsible collapsed={collapsed}>
        <div className='demo-logo-vertical' >
      <img className="demo-logo-vertical" src={logo}/>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"       
        inlineCollapsed={collapsed}
        items={items}

       
        className="hov"
      />
      
</Sider>
<Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
</Layout>
</>
  );
};