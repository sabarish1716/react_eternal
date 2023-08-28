import { Button, Card, Layout, Modal, Space, Table, Image, Row, Skeleton, message } from 'antd'
import { Content } from 'antd/es/layout/layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { purple } from '@ant-design/colors'
import config from '../../config/config'
import { DownloadOutlined, EnterOutlined } from '@ant-design/icons'
import AddRecipe from './addRecipe'
import { CSVLink } from 'react-csv'
import { CKEditor } from '@ckeditor/ckeditor5-react'
export default function ViewRecipe() {

  const [state, setState] = useState({ data: [], loading: true, id: "",remove:false })
  const [isModalOpen, setIsModalOpen] = useState(false);
  let { data } = state

  useEffect(() => {
    axios.get(config.public_url + 'recipe').then(res => {
      console.log(res.data)
      setState({ data: res.data, loading: false })
    })
  }, [isModalOpen,state.remove])
  console.log(Object.keys(state.data).includes("file_path"))

  const stringToHtml =(data)=>{
   const parser  = new DOMParser()
      const html = parser.parseFromString(data, 'text/html');
  
      return html.body;  } 
  let headers = [
    { label: "Recipe Name", key: "name" },
   
    { label: "Incredients", key: "description" },
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
      render: (text, record) => (Object.keys(record).includes("file_path") && record.file_path   ?   <Image src={config.public_image_url + record.file_path} width={"40%"} alt='' />:<Skeleton.Avatar size={"large"} shape={'circle'} />),
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
      title: 'Recipe',
      dataIndex: 'recipe',
      key: 'recipe',
      render: (text, record) => ( <div dangerouslySetInnerHTML={{__html: record.description}}></div>),
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
            <Button type={"purple"} icon={<EnterOutlined />} size="middle" onClick={() => {
              axios.delete(config.public_url + 'Recipe/' + record._id).then(res => {
                setState({...state,remove:!state.remove})
                message.warning("Recipe deleted Successfully!!")

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
            <CSVLink data={data} headers={headers} filename={"Recipes.csv"} >
              <Button size="middle" icon={<DownloadOutlined />}>Download EXCEL</Button>
            </CSVLink>
            <Table size='middle' sticky bordered pagination={{
              // position:["bottomCenter"], 
            }} columns={columns} dataSource={data} loading={state.loading} />

            <Space>
              <Modal width={"60%"} bodyStyle={{ color: "transparent", background: "black", padding: "-13px", width: "100%", backfaceVisibility: false, backgroundColor: "transparent" }} footer={false} style={{ backfaceVisibility: "hidden" }} open={isModalOpen} okButtonProps={false} onOk={handleOk} onCancel={handleCancel}>
                <div style={{ marginTop: "15px" }}> <AddRecipe id={state.id} />

                </div></Modal>
            </Space>
          </Card>
        </Content>
      </Layout>
    </>
  )
}
