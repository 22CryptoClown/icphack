import React from 'react';
import { Form, Input, InputNumber, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { icphack_backend } from 'declarations/icphack_backend';

const { TextArea } = Input;

const CreateProject = () => {
  const [form] = Form.useForm();

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject;
  });

  const handleFileUpload = async (info, fieldName) => {
    const { status } = info.file;
    if (status === 'done') {
      try {
        const base64 = await toBase64(info.file.originFileObj);
        form.setFieldsValue({
          [fieldName]: [base64]
        });
        message.success(`${info.file.name} file uploaded successfully.`);
      } catch (error) {
        console.error('Error converting file to base64:', error);
        message.error(`${info.file.name} file upload failed.`);
      }
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const onFinish = async (values) => {
    console.log('Form values:', values);
    try {
      const createProjectRes = await icphack_backend.createProject(values);
      console.log("Project creation response:", createProjectRes);
      message.success('Project created successfully');
      form.resetFields();
    } catch (error) {
      console.error('Failed to create project:', error);
      message.error('Failed to create project');
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: '0 auto' }}
    >
      <Form.Item name="workerID" label="Worker ID" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="requiredDocuments" label="Required Documents">
        <Upload
          customRequest={({ onSuccess }) => setTimeout(() => onSuccess('ok'), 0)}
          onChange={(info) => handleFileUpload(info, 'requiredDocuments')}
        >
          <Button icon={<UploadOutlined />}>Upload File</Button>
        </Upload>
      </Form.Item>
      <Form.Item name="agreedFee" label="Agreed Fee" rules={[{ required: true }]}>
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name="name" label="Project Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true }]}>
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item name="customerID" label="Customer ID" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ background: '#000000', color: '#39FF14' }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateProject;