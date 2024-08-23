import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const SubmitTextToSign = ({ visible, onCancel, onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values.transactionId);
      form.resetFields();
      onCancel();
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  return (
    <Modal
      visible={visible}
      title="Submit Supporting Documents"
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
          name="transactionId" 
          label="Transaction ID"
          rules={[{ required: true, message: 'Please enter transaction ID' }]}
        >
          <Input.TextArea 
            rows={4}
            placeholder="Enter transaction ID information here"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SubmitTextToSign;