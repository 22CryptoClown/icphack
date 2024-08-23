import React from 'react';
import { Modal, Form, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const SubmitSupportDocs = ({ visible, onCancel, onSubmit }) => {
  const [form] = Form.useForm();

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const handleFileUpload = async (info) => {
    const { status } = info.file;
    if (status === 'done') {
      try {
        const base64 = await toBase64(info.file.originFileObj);
        form.setFieldsValue({
          supportingDocuments: [base64]
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

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values.supportingDocuments);
      form.resetFields();
      onCancel();
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  return (
    <Modal
      visible={visible}
      title="Upload Supporting Documents"
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item 
          name="supportingDocuments" 
          label="Supporting Documents"
          rules={[{ required: true, message: 'Please upload supporting documents' }]}
        >
          <Upload
            customRequest={({ onSuccess }) => setTimeout(() => onSuccess('ok'), 0)}
            onChange={handleFileUpload}
          >
            <Button icon={<UploadOutlined />}>Upload File</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SubmitSupportDocs;