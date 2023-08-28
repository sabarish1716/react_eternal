

import React, { useEffect, useState } from 'react';
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
    message,
    Descriptions,
    Col,
    Image,
} from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DeleteOutlined, LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import config from '../../config/config';
import axios from 'axios';

export default function AddSpices(props) {

    const [state, setState] = useState({ name: "", quantity: "", price: "", image: "", is_active: "", key: true })

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('inline');
    let id = props.id
    let extraCard = <Space ><Badge color="red" /><Badge color="yellow" /><Badge color="green" /></Space>;
    useEffect(() => {
        if (props.id) {

            console.log(props)
            axios.get(config.public_url + 'Spices/' + props.id).then(res => {
                setState({ ...state, name: res.data.name, quantity: res.data.quantity, price: res.data.price,is_active:res.data.is_active, key: false, id: props.id })
            })
        }
        else {
            console.log("")
        }

    })

    const onTextChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })

    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(state)

        axios.post(config.public_url + "spices", state).then(res => {
            console.log(res.data)
            message.success("Spices added successfully !!")
            setState({ name: "", quantity: "", price: "", image: "", is_active: "", key: true })
        })

    }
    const onEditSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        console.log(state.id)
        axios.put(config.public_url + "spices/" + state.id, state).then(res => {
            console.log(res.data)
            message.success("Spices Edited Successfully !!!")
        })
    }
    const handleChange = (value) => {
        setState({ ...state, "is_active": value })
    };
   
    const uploadButton = (
        <div>
            {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Spices Image</div>
        </div>
    );

    const handleChangeRemoveBtn = () => {
        if (state.file) {
            let data = {

                filename: state.file1 + ".jpg",

            };
            axios.post(config.curriculaserver + '/curricula/studentcircle/file/delete', data)
                .then(res => {
                    if (res.data.Status === 1) {
                        setState({ file: '' });
                        message.info('Photo Removed');
                    }
                });
        }
    }
    const handleChangeFile = info => {
        console.log(info)
        setState({ ...state, file1: info.file, file: '', loading: true });
        console.log(state.file1)
    }

    const handleChangeUploadBtn = () => {
        console.log("enter")
        console.log(state)
        console.log(state.file1.name)
        if (state.file1) {
            let formData = new FormData();
            // formData.append('USER_ID', this.props.common.user.USER_ID);
            formData.append('path', "/personal/basic/profile/photo/");
            formData.append('filename', (state.file1.name));
            // formData.append('key', config.key);
            formData.append('file', state.file1);
            axios.post(config.public_url + `file`, formData)
                .then(async res => {

                    message.destroy();
                    console.log(res)
                    setState({ ...state, image: res.data.data.file_path + res.data.data.name, file_path: res.data.data.file_path + res.data.data.name, loading: false })
                    console.log(state)
                    await message.success("google");
                    // } else if (res.data.Status === 0) message.error(res.data.msg, 1);
                });
        }
    };
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 0.5;
        // if (!isLt2M) {
        //   message.error('File must smaller than 500KB!');
        // }
        return isJpgOrPng && isLt2M;
    }
    let { key } = state
    let title = key ? "Add Spices" : "Edit Spices"
    return (<>
        <Row justify={'end'}>
            {key ? <Button type='primary'>Bulk Upload</Button> : ""}
        </Row>
        <Card title={title} size='small' shadow={"large"} extra={extraCard} style={{ boxShadow: "1px 2px 10px #272829", marginTop: "5px" }}
            actions={[<></>, <></>,
            <Space align='start'>

                {key ? <Button type='primary' onClick={onFormSubmit}   >Add Spices</Button> : <Button type='primary' onClick={onEditSubmit}  >Edit Spices</Button>}

            </Space>]}
        >



            <Row gutter={[16, 16]} >

                <Col xs={24} style={{ textAlign: "center" }}>
                    <Descriptions bordered column={{ xxl: 2, xl: 1, sm: 1, xs: 1 }} >
                        <Descriptions.Item label="Spices Name">
                            <Input name="name" onChange={onTextChange} value={state.name} />


                        </Descriptions.Item>
                        <Descriptions.Item label="Spices Image" className="upload" >
                            <Row>
                                <Col xs={24}>
                                    <Upload
                                        style={{ width: "auto" }}
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        beforeUpload={beforeUpload}
                                        onChange={handleChangeFile}
                                    >
                                        {state.image ?
                                            <Image src={config.public_image_url + state.image} alt='' /> :
                                            uploadButton}
                                    </Upload>
                                </Col>
                                <Col xs={24} style={{ marginLeft: "-4px" }} className="mt-2">
                                    <Button className="ant-btn-blue" onClick={handleChangeUploadBtn}>
                                        <UploadOutlined />
                                    </Button>
                                    &nbsp; &nbsp;&nbsp; &nbsp;
                                    <Button danger onClick={handleChangeRemoveBtn}>
                                        <DeleteOutlined />
                                    </Button>
                                </Col>
                            </Row>
                        </Descriptions.Item>

                        <Descriptions.Item label="Status">
                            <Col xs={24} style={{ marginLeft: "-4px" }} className="mt-2">

                                <Select defaultValue={1} onChange={handleChange}>
                                    <option value={1}>choose</option>

                                    <option value={true} onChange={handleChange}>Active</option>
                                    <option value={false} onChange={handleChange}>Disable</option>
                                </Select>
                            </Col>
                        </Descriptions.Item>
                        <Descriptions.Item label="Price">
                            <Input name="price" onChange={onTextChange} value={state.price} />

                        </Descriptions.Item>
                        
                    </Descriptions>



                </Col>
            </Row>
        </Card >
    </>)
}
