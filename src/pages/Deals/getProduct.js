import { Button, Layout, Modal, Space, Table, } from 'antd'
import { Content } from 'antd/es/layout/layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import config from '../../config/config'
import { EnterOutlined } from '@ant-design/icons'
import AddProduct from './addProduct'
export default function GetProduct() {

  const [state, setState] = useState({ data: [], loading: true, id: "" })
  const [isModalOpen, setIsModalOpen] = useState(false);
  let { data } = state

  useEffect(() => {
    axios.get(config.public_url + 'product').then(res => {
      console.log(res.data)
      setState({ data: res.data, loading: false })
    })
  }, { isModalOpen })


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

            setState({ ...state, id: record._id })
            setIsModalOpen(true)

          }}
          >EDIT</Button>
          <Button type="primary" icon={<EnterOutlined />} size="middle" onClick={() => {

          }} id={record._id}    >DELETE</Button>
        </Space>
      ),
      fixed: 'right',
      width: 1,
    },]


  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Layout>

        <Content>
          <Table columns={columns} dataSource={data} loading={state.loading} />
          
          <Space>
            <Modal bodyStyle={{ color: "transparent", background: "black", padding: "-13px", height: "0px", backfaceVisibility: false, backgroundColor: "transparent" }} footer={false} style={{ backfaceVisibility: "hidden" }} open={isModalOpen} okButtonProps={false} onOk={handleOk} onCancel={handleCancel}>
              <AddProduct id={state.id} />
            </Modal>
          </Space>
        </Content>
      </Layout>
    </>
  )
}
