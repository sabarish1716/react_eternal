

import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Card,
  Typography, Select,
  Switch,
  Title,
  Upload,
  TreeSelect,
  Badge,
  Row,
  Space,
} from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UploadOutlined } from '@ant-design/icons';
import config from '../../config/config';
import axios from 'axios';

export default function AddProduct() {

  const [state, setState] = useState({ name: "", quantity: "", price: "", image: "", option: "" })

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('inline');

  let extraCard = <Space><Badge color="red" /><Badge color="yellow" /><Badge color="green" /></Space>;


  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })

  }
  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(state)

    axios.post(config.public_url + "product", state).then(res => {
      console.log(res.data)
    })

  }
  const handleChange = (value) => {
    setState({ ...state, "option": value })
  };
  const optionData = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true },
  ]
  const handleChangeFile = info => {
    console.log(info)
   
    //     .then(async res => {
    //       if (res.data.Status === 1) {
    //         message.destroy();
    //         await message.success(res.data.msg, 1);
    //       } else if (res.data.Status === 0) message.error(res.data.msg, 1);
    //     });
    // }
  }


  // const beforeUpload = (file) => {
  //   const isJpgOrPng = file.type === 'image/jpeg';
  //   if (!isJpgOrPng) {
  //     message.error('You can only upload JPG file!');
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 0.5;
  //   if (!isLt2M) {
  //     message.error('File must smaller than 500KB!');
  //   }
  //   return isJpgOrPng && isLt2M;
  // }
  return (<>
    <Row justify={'end'}>
      <Button type='primary'>Bulk Upload</Button>
    </Row>

    <Card title="Add Product" size='small' shadow={"large"} extra={extraCard} style={{ boxShadow: "1px 2px 10px #272829", marginTop: "5px" }}
      actions={[
        <Space align='start'>
          <Button type='primary' onClick={onFormSubmit}  >Add Product</Button>

        </Space>]}
    >

      <Form
        layout={'inline'}
        form={form}

        style={{
          maxWidth: formLayout === 'inline' ? 'none' : 600,
        }}
      >

        <Form.Item label="Product Name">
          <Input name="name" onChange={onTextChange} value={state.name} />
        </Form.Item>
        <Form.Item label="quantity">
          <Input name="quantity" onChange={onTextChange} value={state.quantity} />
        </Form.Item>
        <Form.Item label="Price">
          <Input name="price" onChange={onTextChange} value={state.price} />
        </Form.Item>


      </Form>
      <Row style={{ marginTop: "19px" }}></Row>
      <Form layout='inline'>
        <Form.Item label="Product Image">
          <Upload
           onChange={(info)=>{
            // preventDefault()
            let formData = new FormData();
            //   formData.append('USER_ID', );
        
            //   formData.append('path', "/personal/basic/profile/photo/");
            formData.append('filename', info.file.name);
            //   formData.append('key', config.key);
            formData.append('file', info.file.originFileObj);
            console.log("asdfa",info.file.originFileObj)
            // formData({file:info.file.originFileObj,filename:info.file.name})
            console.log(formData)
        
        
              axios.post(config.public_url+'file', formData).then(res=>{
                console.log(res.data)
                console.log(res.data.data.file_path)
                setState({...state,file_path:res.data.data.file_path,})
              })

           }}



          >
            <Button icon={<UploadOutlined />}>click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Select">
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={optionData}
          />
        </Form.Item>


      </Form>
      <p style={{ fontSize: 18, fontStyle: 'normal' }}>Product Ingredients :</p>
      <CKEditor
        editor={ClassicEditor}
        data="<p>type your incredients</p>"
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setState({ ...state, description: data })

          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />

    </Card>
  </>)
}
