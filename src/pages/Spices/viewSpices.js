import { Button, Card, Layout, Modal, Space, Table, Image, Row, Skeleton, message, Tag } from 'antd'
import { Content } from 'antd/es/layout/layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { purple } from '@ant-design/colors'
import config from '../../config/config'
import { DownloadOutlined, EnterOutlined } from '@ant-design/icons'
import AddSpices from './addSpices'
import { CSVLink } from 'react-csv'
export default function ViewSpices() {

  const [state, setState] = useState({ data: [], loading: true, id: "",remove:false })
  const [isModalOpen, setIsModalOpen] = useState(false);
  let { data } = state

  useEffect(() => {
    axios.get(config.public_url + 'Spices').then(res => {
      console.log(res.data)
      setState({ data: res.data, loading: false })
    })
  }, [isModalOpen,state.remove])

  let headers = [
    { label: "Spices Name", key: "name" },   
    { label: "Price", key: "price" },
    { label: "Status", key: "is_active" },
  ]

  const columns = [
    {
      title: 'S.No',
      dataIndex: 'key',
      width: 1,
      render: (text) => (data.findIndex(i => i.key === text) + 1),
      fixed: 'left',
    },
    {
      title: 'Cover Photo',
      dataIndex: 'file_path',
      key: 'file_path',
      render: (text, record) => (record.file_path === '' ? <Skeleton.Avatar size={"large"} shape={'circle'} /> : <Image src={config.public_image_url + record.file_path} width={"40%"} alt='' />),
      width: 1,
      fixed: 'left'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (record.name),
      width: 1,
      fixed: 'left'
    },
    
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text, record) => (record.price),
      width: 1,
      fixed: 'left'
    }, 
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (text, record) => (record.is_active?<Tag color={'green'} >Active</Tag>:<Tag color='error'>Disable</Tag>),
        width: 1,
        fixed: 'left'
      },


    {
      title: 'ACTION',
      render: (text, record) => (

        <Row  >
          <Space align='' direction='vertical'>
            <Button type="primary" icon={<EnterOutlined />} size="middle" onClick={() => {

              setState({ ...state, id: record._id })
              setIsModalOpen({ set: true })

            }}
            >EDIT</Button>
            <Button color='error' type='error' icon={<EnterOutlined />} size="middle" onClick={() => {
              axios.delete(config.public_url + 'spices/' + record._id).then(res => {
                setState({...state,remove:!state.remove})
                message.warning("Spices deleted Successfully!!")

              })
            }} id={record._id}    >DELETE</Button>
          </Space>
        </Row>
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
          <Card>
            <CSVLink data={data} headers={headers} filename={"Spices.csv"} >
              <Button size="middle" icon={<DownloadOutlined />}>Download EXCEL</Button>
            </CSVLink>
            <Table size='middle' sticky bordered pagination={{
              // position:["bottomCenter"], 
            }} columns={columns} dataSource={data} loading={state.loading} />

            <Space>
              <Modal width={"60%"} bodyStyle={{ color: "transparent", background: "black", padding: "-13px", width: "100%", backfaceVisibility: false, backgroundColor: "transparent" }} footer={false} style={{ backfaceVisibility: "hidden" }} open={isModalOpen} okButtonProps={false} onOk={handleOk} onCancel={handleCancel}>
                <div style={{ marginTop: "15px" }}> <AddSpices id={state.id} />

                </div></Modal>
            </Space>
          </Card>
        </Content>
      </Layout>
    </>
  )
}
