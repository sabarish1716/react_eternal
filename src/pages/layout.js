import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,

} from '@ant-design/icons';
import logo from '../images/adminlogo.png';

import  menuColor from '../config/colorSettings.json'

import { Layout, ConfigProvider, Menu, Button, theme, Image } from 'antd';
import { items } from '../utils/layoutNavItems';
import Demo from './demo';
import Addproduct from './Deals/addProduct'
const { Header, Sider, Content } = Layout;

const {menu} = menuColor
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [state,setState] = useState({key:1})

    const onMenuClick = (e) =>{
        setState({key:e.key})
    }
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
        <ConfigProvider
    theme={{
      token: {
        // Seed Token
        // colorPrimary: '#D5FFE4',
        borderRadius: 2,color:"$040D12",


        // Alias Token
        colorBgContainer: '#6F61C0',
      },
    }}>
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" ><Image src={logo}></Image></div>
                <Menu
                    theme={menu.theme}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                    onClick={onMenuClick}
                />
            </Sider>
            <Layout>
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
              {state.key === '1'?<Demo/>:state.key === '3' ?<Addproduct/>:""}
                </Content>
            </Layout>
            </Layout>
  </ConfigProvider>
  </>

    );
};
export default App;