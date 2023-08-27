import { Button, Layout, Space, Table } from 'antd'
import { Content } from 'antd/es/layout/layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import config from '../../config/config'
import { EnterOutlined } from '@ant-design/icons'
export default function GetProduct() {
    const [state, setState] = useState({ data: [], loading: true })
    useEffect(() => {
        axios.get(config.public_url + 'product').then(res => {
            console.log(res.data)
            setState({ data: res.data, loading: false })
        })
    }, {})
    let { data } = state
    const columns = [
        {
            title: 'S.No',
            dataIndex: 'key',
            width: 1,
            render: (text) => (data.findIndex(i => i.key === text) + 1),
            fixed: 'left',
        },
        {
            title: 'Register No',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (record.name),
            width: 1,
            fixed: 'left'
        },
        {
            title: 'ACTION',
            render: (text, record) => (
                <Space>
                    <Button type="primary" icon={<EnterOutlined />} size="middle" onClick={() => {

                    }} id={record._id} 
                    >EDIT</Button>
                    <Button type="primary" icon={<EnterOutlined />} size="middle" onClick={() => {

                    }} id={record._id}    >DELETE</Button>
                </Space>
            ),
            fixed: 'right',
            width: 1,
        },]
    return (
        <>
            <Layout>

                <Content>
                    <Table columns={columns} dataSource={data} loading={state.loading} />
                </Content>
            </Layout>
        </>
    )
}
