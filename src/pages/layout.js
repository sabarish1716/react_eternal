import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,

} from '@ant-design/icons';
import logo from '../images/adminlogo.png';

import menuColor from '../config/colorSettings.json'

import { Layout, ThemeConfig, ConfigProvider, Menu, Button, theme, Image } from 'antd';
import { items } from '../utils/layoutNavItems';
import Demo from './demo';
import Addproduct from './Deals/addProduct'
import GetProduct from './Deals/getProduct';

import {Outlet} from 'react-router-dom'
const { Header, Sider, Content } = Layout;
const { getDesignToken, useToken } = theme;

const { menu } = menuColor
const App = (Component) => {
    const [collapsed, setCollapsed] = useState(false);
    const [state, setState] = useState({ key: 1 })

    const onMenuClick = (e) => {
        setState({ key: e.key })

    }
    const theme2 = {
        token: {
            colorPrimary: "#3e73bd",
            colorInfo: "#3e73bd",
            colorPrimaryBg: "#325dc3",
            colorPrimaryBgHover: "#1b4a9a",
            colorPrimaryBorder: "#1865d2",
            colorPrimaryBorderHover: "#1d66ce",
            colorBgBase: "#321010",
            colorBorder: "#2f0404",
            colorBorderSecondary: "#0e0101",
            fontSize: 20
        },
        algorithm: "dark"
    }
    const {
        colorBgContainer
    } = theme.useToken(
        );




    // By static function
    // const globalToken = getDesignToken(config);



    return (
        <>
            <Layout>
                <ConfigProvider theme={{
                    token: {
                        colorPrimary: "#3e73bd",
                        colorInfo: "#3e73bd",
                        colorPrimaryBg: "#325dc3",
                        colorPrimaryBgHover: "#1b4a9a",
                        colorPrimaryBorder: "#1865d2",
                        colorPrimaryBorderHover: "#1d66ce",
                        colorBgBase: "#321010",
                        colorBorder: "#2f0404",
                        colorBorderSecondary: "#0e0101",
                        fontSize: 20
                    },
                }} >

                    <Sider trigger={null} collapsible collapsed={collapsed}>
                        <div className="demo-logo-vertical" ><Image src={logo}></Image></div>
                        <ConfigProvider theme={{
                            "token": {
                                "colorPrimaryBg": "#3c89e8",
                                "colorPrimaryBgHover": "#1554ad",
                                "colorBgBase": "#111a2c",
                                "colorTextBase": "#fffafa"
                            }
                        }} >
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                // theme={}
                                items={items}
                                onClick={onMenuClick}
                            />
                        </ConfigProvider>
                    </Sider>
                </ConfigProvider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,

                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined style={{ color: '#F5F5F5' }} /> : <MenuFoldOutlined style={{ color: '#F5F5F5' }} />}
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
                         {/* <Component /> */}
                        {state.key === '1' ? <Demo /> : state.key === '3' ? <Addproduct  /> : state.key === '4'?<GetProduct/>:""}
                    </Content>
                </Layout>
            </Layout>
        </>

    );
};
export default App;