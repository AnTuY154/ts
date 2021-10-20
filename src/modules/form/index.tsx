import React, { useState, useEffect } from 'react';

import { Form, Input, Button, Checkbox, Select, TreeSelect, DatePicker, Upload } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';


import { debounce } from 'ts-debounce';
import { useDispatch, useSelector } from 'react-redux';
// import { getUser, login } from './loginSlice';
// import { useHistory } from 'react-router';
// import { userState } from './type'
import { useHistory } from 'react-router';
// import { login } from './action';

export function DemoForm() {
    const { Option } = Select;
    const [form] = Form.useForm();
    const history = useHistory();
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user.isLogin) {
            history.push('/home');
        } else if (user.error) {
            console.log(user.error);
        }
    }, [user]);


    const onFinish = debounce((values: any) => {
        console.log(values);
    }, 500);

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const normFile = (e: any) => {

        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        console.log(e);
        return e && e.fileList;
    };


    return (
        <div>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {/* text */}
                <Form.Item
                    label="Text"
                    name="text"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                {/* number */}
                <Form.Item
                    label="Number"
                    name="number"
                    // validate here
                    rules={[
                        {
                            required: true, message: 'Please input number!'
                        },
                        {
                            validator: (rule: any, value: string) => {
                                if (typeof value !== 'undefined' && /^\d+$/.test(value) === false) {
                                    return Promise.reject("PLease input number only")
                                }
                                return Promise.resolve();
                            }
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* checkbox */}
                <Form.Item name="checkbox" valuePropName="checked" wrapperCol={{ offset: 0, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                {/* select */}
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        // onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>

                {/* tree select */}
                <Form.Item label="TreeSelect">
                    <TreeSelect
                        treeData={[
                            {
                                title: 'Light', value: 'light', children:
                                    [
                                        { title: 'Bamboo', value: 'bamboo' }

                                    ]
                            },
                        ]}
                    />
                </Form.Item>

                {/* date time */}
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>

                {/* url */}
                <Form.Item
                    name="url"
                    label="URL"
                    rules={[
                        { required: true },
                        { type: 'url' },
                        { type: 'string', min: 6 },
                    ]}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>

                {/* email */}
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true },
                        { type: 'email' },
                    ]}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>


                <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="longgggggggggggggggggggggggggggggggggg"
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item label="Dragger">
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
